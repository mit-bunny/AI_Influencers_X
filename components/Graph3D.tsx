import React, { useRef, useMemo, useCallback, useState, useEffect } from 'react';
import ForceGraph3D, { ForceGraphMethods } from 'react-force-graph-3d';
import * as THREE from 'three';
import { GraphData, GraphNode, GraphLink } from '../types';

interface Graph3DProps {
  data: GraphData;
  onNodeClick: (node: GraphNode) => void;
  onLinkClick: (link: GraphLink) => void;
  selectedNode?: GraphNode | null;
}

const Graph3D: React.FC<Graph3DProps> = ({ data, onNodeClick, onLinkClick, selectedNode }) => {
  const graphRef = useRef<ForceGraphMethods>(null);
  const [hoveredLink, setHoveredLink] = useState<GraphLink | null>(null);

  // Process data: Clean links, calculate degrees, and filter disconnected nodes
  const processedData = useMemo(() => {
    // Basic defensive check
    if (!data || !data.nodes || !Array.isArray(data.nodes)) {
      return { nodes: [], links: [] };
    }

    // 1. Node Deduplication & Sanitization
    const uniqueNodesMap = new Map<string, GraphNode>();
    
    data.nodes.forEach(n => {
      if (n && n.id) {
        const id = String(n.id).trim();
        if (id) {
            // Create a clean copy to avoid mutation issues/stale references
            // Initialize val to 0 to ensure numeric operations don't fail later
            uniqueNodesMap.set(id, { ...n, id, val: 0 });
        }
      }
    });

    const nodeIds = new Set(uniqueNodesMap.keys());
    const validLinks: any[] = [];

    // 2. Build & Validate Links
    (data.links || []).forEach(link => {
        if (!link) return;

        let sourceId: string | null = null;
        let targetId: string | null = null;

        // Extract IDs safely from either Object or String
        if (typeof link.source === 'object' && link.source !== null && 'id' in link.source) {
             sourceId = String((link.source as any).id).trim();
        } else if (typeof link.source === 'string' || typeof link.source === 'number') {
             sourceId = String(link.source).trim();
        }

        if (typeof link.target === 'object' && link.target !== null && 'id' in link.target) {
             targetId = String((link.target as any).id).trim();
        } else if (typeof link.target === 'string' || typeof link.target === 'number') {
             targetId = String(link.target).trim();
        }

        // Strict Check: Only add link if BOTH ends exist in our node map
        if (sourceId && targetId && nodeIds.has(sourceId) && nodeIds.has(targetId)) {
            // We push plain objects with string IDs. 
            // react-force-graph will mutate these to reference node objects.
            validLinks.push({
                source: sourceId, 
                target: targetId, 
                value: link.value || 1
            });
        }
    });

    // 3. Calculate Degrees based on VALID links only
    const degrees = new Map<string, number>();
    validLinks.forEach(link => {
        // At this stage, source/target are guaranteed to be strings from the push above
        degrees.set(link.source, (degrees.get(link.source) || 0) + 1);
        degrees.set(link.target, (degrees.get(link.target) || 0) + 1);
    });

    // 4. Filter Orphaned Nodes (Keep only nodes with degree > 0)
    // We also make sure the node object is valid
    const connectedNodes = Array.from(uniqueNodesMap.values())
        .filter(n => {
            const degree = degrees.get(n.id) || 0;
            return degree > 0;
        });

    // 5. Update values (degree) on the node objects
    connectedNodes.forEach(n => {
       n.val = degrees.get(n.id) || 0;
    });

    // 6. Paranoid Check: Ensure returned links strictly reference returned nodes
    const finalNodeIds = new Set(connectedNodes.map(n => n.id));
    const finalLinks = validLinks.filter(l => finalNodeIds.has(l.source) && finalNodeIds.has(l.target));

    return { nodes: connectedNodes, links: finalLinks };
  }, [data]);

  // Identify connected neighbors for the selected node
  const neighborIds = useMemo(() => {
    const ids = new Set<string>();
    if (!selectedNode) return ids;

    processedData.links.forEach((link: any) => {
       // ForceGraph eventually replaces IDs with objects, so we handle both
       const sId = typeof link.source === 'object' ? link.source.id : link.source;
       const tId = typeof link.target === 'object' ? link.target.id : link.target;

       if (sId === selectedNode.id) ids.add(String(tId));
       if (tId === selectedNode.id) ids.add(String(sId));
    });
    return ids;
  }, [selectedNode, processedData]);


  // Adjust Physics Forces
  useEffect(() => {
    const fg = graphRef.current;
    if (fg) {
      fg.d3Force('charge')?.strength(-1000);
      fg.d3Force('link')?.distance(35);
      fg.d3Force('center')?.strength(1.2);
    }
  }, [processedData]);

  // Center camera on selected node
  useEffect(() => {
    const fg = graphRef.current;
    if (fg && selectedNode) {
      // Find the node in processed data to get its current position
      const node = processedData.nodes.find((n: any) => n.id === selectedNode.id) as any;
      if (node && typeof node.x === 'number' && typeof node.y === 'number' && typeof node.z === 'number') {
        const distance = 700;
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
        fg.cameraPosition(
          { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
          { x: node.x, y: node.y, z: node.z },
          1000 // transition duration in ms
        );
      }
    }
  }, [selectedNode, processedData.nodes]);

  // Generate Glow Texture - soft diffuse for cosmic look
  const glowTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext('2d');
      if (context) {
        const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.05, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.4)');
        gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.1)');
        gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.02)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, 256, 256);
      }
      return new THREE.CanvasTexture(canvas);
    } catch (e) {
      return null;
    }
  }, []);

  // Color scheme by category - vibrant colors
  const getCategoryColor = useCallback((group: string) => {
    switch (group) {
      case 'company':
        return { color: '#FFD700', glowColor: '#FF8C00' }; // Gold/Orange
      case 'founder':
        return { color: '#00BFFF', glowColor: '#00BFFF' }; // Cyan-Blue
      case 'researcher':
        return { color: '#DA70D6', glowColor: '#BA55D3' }; // Purple
      case 'investor':
        return { color: '#00FF7F', glowColor: '#32CD32' }; // Green
      case 'media':
        return { color: '#FF69B4', glowColor: '#FF69B4' }; // Pink
      case 'engineer':
        return { color: '#00FFFF', glowColor: '#00FFFF' }; // Cyan
      default:
        return { color: '#E2E8F0', glowColor: '#64748B' }; // Slate
    }
  }, []);

  const getNodeStyle = useCallback((val: number, group: string) => {
    const categoryColors = getCategoryColor(group);
    if (val > 10) {
        return { ...categoryColors, radius: 30, scale: 160 };
    } else if (val > 5) {
        return { ...categoryColors, radius: 22, scale: 110 };
    } else if (val > 2) {
        return { ...categoryColors, radius: 14, scale: 70 };
    } else {
        return { ...categoryColors, radius: 10, scale: 45 };
    }
  }, [getCategoryColor]);

  const nodeObject = useCallback((node: any) => {
    if (!node) return new THREE.Mesh();

    const threeGroup = new THREE.Group();
    // Default val to 0 if undefined to prevent NaN issues
    const influence = typeof node.val === 'number' ? node.val : 1;
    const nodeGroup = node.group || 'company';
    const style = getNodeStyle(influence, nodeGroup);
    
    const isSelected = selectedNode?.id === node.id;
    const isNeighbor = neighborIds.has(node.id);

    // Always use category color for the glow
    let coreColor = '#FFFFFF';
    let glowColor = style.glowColor;
    let opacity = 0.85;
    let scale = style.scale;
    let coreScale = 1;

    if (isSelected) {
        opacity = 1;
        scale = style.scale * 1.6;
        coreScale = 1.4;
    } else if (isNeighbor) {
        opacity = 0.95;
        scale = style.scale * 1.3;
    } else if (selectedNode) {
        // Dim non-connected nodes but keep category color
        opacity = 0.25;
        coreColor = '#888888';
    }

    // 1. Large colored glow (outer halo)
    if (glowTexture) {
        const outerGlowMaterial = new THREE.SpriteMaterial({
            map: glowTexture,
            color: new THREE.Color(glowColor),
            transparent: true,
            opacity: opacity,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const outerGlow = new THREE.Sprite(outerGlowMaterial);
        outerGlow.scale.set(scale * 3.5, scale * 3.5, 1);
        threeGroup.add(outerGlow);
    }

    // 2. Inner bright core glow (white)
    if (glowTexture) {
        const coreGlowMaterial = new THREE.SpriteMaterial({
            map: glowTexture,
            color: new THREE.Color('#FFFFFF'),
            transparent: true,
            opacity: opacity * 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const coreGlow = new THREE.Sprite(coreGlowMaterial);
        coreGlow.scale.set(scale * 0.5, scale * 0.5, 1);
        threeGroup.add(coreGlow);
    }

    // 3. Tiny bright core point
    const coreRadius = style.radius * 0.2 * coreScale;
    const coreGeometry = new THREE.SphereGeometry(coreRadius, 16, 16);
    const coreMaterial = new THREE.MeshBasicMaterial({ color: coreColor });
    const coreSphere = new THREE.Mesh(coreGeometry, coreMaterial);
    threeGroup.add(coreSphere);

    return threeGroup;
  }, [glowTexture, getNodeStyle, selectedNode, neighborIds]);

  // Helper to safely get node ID from link end
  const getLinkId = (nodeOrId: any): string | null => {
      if (!nodeOrId) return null;
      if (typeof nodeOrId === 'string') return nodeOrId;
      if (typeof nodeOrId === 'object' && 'id' in nodeOrId) return String(nodeOrId.id);
      return null;
  };

  const getLinkColor = useCallback((link: any) => {
     if (!link) return "rgba(180, 180, 190, 0.2)";

     const sId = getLinkId(link.source);
     const tId = getLinkId(link.target);
     const selId = selectedNode?.id;

     // Hovered link
     if (link === hoveredLink) return "rgba(150, 200, 255, 0.8)";

     // Connected to selected node - subtle light blue glow
     if (selId && (sId === selId || tId === selId)) {
         return "rgba(130, 180, 255, 0.6)";
     }

     // If a node is selected, dim unrelated links
     if (selId) {
         return "rgba(150, 150, 160, 0.08)";
     }

     // Default - subtle light grey
     return "rgba(180, 180, 190, 0.25)";
  }, [hoveredLink, selectedNode]);

  const getLinkWidth = useCallback((link: any) => {
      if (link === hoveredLink) return 1.5;

      const sId = getLinkId(link.source);
      const tId = getLinkId(link.target);
      const selId = selectedNode?.id;

      if (selId && (sId === selId || tId === selId)) return 1;

      return 0.4; // Thin subtle lines
  }, [hoveredLink, selectedNode]);

  return (
    <div className="absolute inset-0 z-0 bg-[#0B0C15]">
      <ForceGraph3D
        ref={graphRef}
        graphData={processedData}
        nodeId="id"
        nodeLabel="name"
        backgroundColor="#0B0C15"
        nodeThreeObject={nodeObject}
        
        // Link Styling
        linkColor={getLinkColor}
        linkWidth={getLinkWidth}
        linkOpacity={1}
        linkDirectionalParticles={0}
        
        // Interaction
        enableNodeDrag={true}
        onNodeClick={(node) => node && onNodeClick(node)}
        onLinkClick={(link) => link && onLinkClick(link as GraphLink)}
        onLinkHover={(link) => setHoveredLink(link as GraphLink | null)}
        
        // Physics
        d3VelocityDecay={0.4}
        d3AlphaDecay={0.02}
        
        // Safety: check node existence before accessing coordinates
        onNodeDragEnd={(node: any) => {
          if (node && typeof node === 'object') {
             // Only set fixed position if coordinates exist and are numbers
             if ('x' in node && typeof node.x === 'number') node.fx = node.x;
             if ('y' in node && typeof node.y === 'number') node.fy = node.y;
             if ('z' in node && typeof node.z === 'number') node.fz = node.z;
          }
        }}
        
        controlType="orbit"
      />
    </div>
  );
};

export default Graph3D;