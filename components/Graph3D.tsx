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

  // Generate Glow Texture
  const glowTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 128; 
      canvas.height = 128;
      const context = canvas.getContext('2d');
      if (context) {
        const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, 128, 128);
      }
      return new THREE.CanvasTexture(canvas);
    } catch (e) {
      return null;
    }
  }, []);

  const getNodeStyle = useCallback((val: number) => {
    if (val > 10) {
        return { color: '#FFFAF0', glowColor: '#F59E0B', radius: 18, scale: 100 };
    } else if (val > 5) {
        return { color: '#E0F2FE', glowColor: '#38BDF8', radius: 12, scale: 60 };
    } else if (val > 2) {
        return { color: '#94A3B8', glowColor: '#6366F1', radius: 6, scale: 35 };
    } else {
        return { color: '#475569', glowColor: '#334155', radius: 4, scale: 20 };
    }
  }, []);

  const nodeObject = useCallback((node: any) => {
    if (!node) return new THREE.Mesh(); 
    
    const group = new THREE.Group();
    // Default val to 0 if undefined to prevent NaN issues
    const influence = typeof node.val === 'number' ? node.val : 1;
    const style = getNodeStyle(influence);
    
    const isSelected = selectedNode?.id === node.id;
    const isNeighbor = neighborIds.has(node.id);

    // Highlight selected node heavily, neighbors moderately, others fade slightly
    let baseColor = style.color;
    let glowColor = style.glowColor;
    let opacity = 0.4;
    let scale = style.scale;

    if (isSelected) {
        baseColor = '#ffffff';
        glowColor = '#ff00ff'; // Bright magenta/pink for selection
        opacity = 1;
        scale = style.scale * 1.2;
    } else if (isNeighbor) {
        baseColor = '#E0E7FF'; // Light indigo
        glowColor = '#818CF8'; // Indigo glow
        opacity = 0.8;
    } else if (selectedNode) {
        // Dim non-connected nodes if something is selected
        opacity = 0.1; 
    }

    // 1. Solid Core Sphere
    const geometry = new THREE.SphereGeometry(style.radius, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: baseColor });
    const sphere = new THREE.Mesh(geometry, material);
    group.add(sphere);

    // 2. Glow Sprite
    if (glowTexture) {
        const spriteMaterial = new THREE.SpriteMaterial({ 
            map: glowTexture, 
            color: glowColor, 
            transparent: true,
            opacity: opacity,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(scale, scale, 1);
        group.add(sprite);
    }

    return group;
  }, [glowTexture, getNodeStyle, selectedNode, neighborIds]);

  // Helper to safely get node ID from link end
  const getLinkId = (nodeOrId: any): string | null => {
      if (!nodeOrId) return null;
      if (typeof nodeOrId === 'string') return nodeOrId;
      if (typeof nodeOrId === 'object' && 'id' in nodeOrId) return String(nodeOrId.id);
      return null;
  };

  const getLinkColor = useCallback((link: any) => {
     if (!link) return "rgba(148, 163, 184, 0.1)";

     if (link === hoveredLink) return "#F59E0B"; 
     
     const sId = getLinkId(link.source);
     const tId = getLinkId(link.target);
     const selId = selectedNode?.id;

     if (selId && (sId === selId || tId === selId)) {
         return "#A855F7"; // Purple for active connections
     }

     // If a node is selected, dim unrelated links significantly
     if (selId) {
         return "rgba(148, 163, 184, 0.05)";
     }

     // Use objects if available (d3 resolved), else fallback to 0
     const sourceVal = (link.source && typeof link.source === 'object' ? link.source.val : 0) || 0;
     const targetVal = (link.target && typeof link.target === 'object' ? link.target.val : 0) || 0;

     if (sourceVal > 10 && targetVal > 10) return "rgba(245, 158, 11, 0.6)"; 
     if (sourceVal > 8 || targetVal > 8) return "rgba(56, 189, 248, 0.4)";
     return "rgba(148, 163, 184, 0.2)";
  }, [hoveredLink, selectedNode]);

  const getLinkWidth = useCallback((link: any) => {
      if (link === hoveredLink) return 3;
      
      const sId = getLinkId(link.source);
      const tId = getLinkId(link.target);
      const selId = selectedNode?.id;

      if (selId && (sId === selId || tId === selId)) return 2.5;
      
      return 1;
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