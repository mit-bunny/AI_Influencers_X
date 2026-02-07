import React, { useRef, useMemo, useCallback, useState, useEffect } from 'react';
import ForceGraph3D, { ForceGraphMethods } from 'react-force-graph-3d';
import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
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
  const labelsRef = useRef<Map<string, { element: HTMLDivElement; object: THREE.Object3D }>>(new Map());
  const materialsRef = useRef<Map<string, THREE.MeshLambertMaterial>>(new Map());

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

        if (sourceId && targetId && nodeIds.has(sourceId) && nodeIds.has(targetId)) {
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
        degrees.set(link.source, (degrees.get(link.source) || 0) + 1);
        degrees.set(link.target, (degrees.get(link.target) || 0) + 1);
    });

    // 4. Filter Orphaned Nodes
    const connectedNodes = Array.from(uniqueNodesMap.values())
        .filter(n => {
            const degree = degrees.get(n.id) || 0;
            return degree > 0;
        });

    // 5. Update values (degree) on the node objects
    connectedNodes.forEach(n => {
       n.val = degrees.get(n.id) || 0;
    });

    // 6. Ensure returned links strictly reference returned nodes
    const finalNodeIds = new Set(connectedNodes.map(n => n.id));
    const finalLinks = validLinks.filter(l => finalNodeIds.has(l.source) && finalNodeIds.has(l.target));

    return { nodes: connectedNodes, links: finalLinks };
  }, [data]);

  // Identify connected neighbors for the selected node
  const neighborIds = useMemo(() => {
    const ids = new Set<string>();
    if (!selectedNode) return ids;

    processedData.links.forEach((link: any) => {
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
      const node = processedData.nodes.find((n: any) => n.id === selectedNode.id) as any;
      if (node && typeof node.x === 'number' && typeof node.y === 'number' && typeof node.z === 'number') {
        const distance = 700;
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
        fg.cameraPosition(
          { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
          { x: node.x, y: node.y, z: node.z },
          1000
        );
      }
    }
  }, [selectedNode, processedData.nodes]);

  // Color scheme by category - pastel/light tinted colors
  const getCategoryColor = useCallback((group: string) => {
    switch (group) {
      case 'company':
        return '#FFD4A3'; // Light peach/orange
      case 'founder':
        return '#A3D4FF'; // Light sky blue
      case 'researcher':
        return '#E0B3FF'; // Light lavender
      case 'investor':
        return '#B3FFB3'; // Light mint green
      case 'media':
        return '#FFB3D9'; // Light pink
      default:
        return '#D0D4DC'; // Light slate
    }
  }, []);

  // Node color based on category and selection state
  const getNodeColor = useCallback((node: any) => {
    const baseColor = getCategoryColor(node.group || 'company');

    if (selectedNode) {
      if (node.id === selectedNode.id) {
        return baseColor; // Selected node keeps full color
      } else if (neighborIds.has(node.id)) {
        return baseColor; // Neighbors keep full color
      } else {
        return '#333333'; // Dim other nodes
      }
    }

    return baseColor;
  }, [selectedNode, neighborIds, getCategoryColor]);

  // Node size based on connections
  const getNodeSize = useCallback((node: any) => {
    const val = node.val || 1;
    if (val > 10) return 12;
    if (val > 5) return 9;
    if (val > 2) return 6;
    return 4;
  }, []);

  // Create node with sphere and HTML text label
  const nodeThreeObject = useCallback((node: any) => {
    const group = new THREE.Group();

    // Create sphere
    const nodeSize = getNodeSize(node);
    const baseColor = getCategoryColor(node.group || 'company');
    const geometry = new THREE.SphereGeometry(nodeSize, 16, 16);
    const material = new THREE.MeshLambertMaterial({
      color: baseColor,
      transparent: true,
      opacity: 0.9
    });
    const sphere = new THREE.Mesh(geometry, material);
    group.add(sphere);

    // Store material reference for dynamic color updates
    materialsRef.current.set(node.id, material);

    // Create HTML text label
    const labelDiv = document.createElement('div');
    labelDiv.className = 'node-label';
    labelDiv.textContent = node.name || node.id;
    labelDiv.style.color = 'white';
    labelDiv.style.fontSize = '9px';
    labelDiv.style.fontFamily = 'Arial, sans-serif';
    labelDiv.style.fontWeight = 'bold';
    labelDiv.style.textShadow = '0 0 2px black, 0 0 2px black';
    labelDiv.style.pointerEvents = 'none';
    labelDiv.style.whiteSpace = 'nowrap';
    labelDiv.style.opacity = '0';
    labelDiv.style.transition = 'opacity 0.2s';

    const label = new CSS2DObject(labelDiv);
    label.position.set(0, -nodeSize - 10, 0);
    group.add(label);

    // Store reference for distance-based visibility
    labelsRef.current.set(node.id, { element: labelDiv, object: group });

    return group;
  }, [getNodeSize, getCategoryColor]);

  // Set up CSS2DRenderer for HTML labels
  const extraRenderers = useMemo(() => [new CSS2DRenderer()], []);

  // Update label visibility based on camera distance and selection
  useEffect(() => {
    const VISIBILITY_DISTANCE = 800; // Labels visible within this distance

    const updateLabelVisibility = () => {
      const fg = graphRef.current;
      if (!fg) return;

      const camera = fg.camera();
      if (!camera) return;

      const cameraPos = camera.position;

      labelsRef.current.forEach(({ element, object }, nodeId) => {
        // Always show selected node and its neighbors
        const isSelected = selectedNode?.id === nodeId;
        const isNeighbor = neighborIds.has(nodeId);

        if (isSelected || isNeighbor) {
          element.style.opacity = '1';
          return;
        }

        // Get world position of the node
        const worldPos = new THREE.Vector3();
        object.getWorldPosition(worldPos);

        // Calculate distance from camera
        const distance = cameraPos.distanceTo(worldPos);

        // Show label if close enough
        if (distance < VISIBILITY_DISTANCE) {
          const opacity = Math.max(0, 1 - (distance / VISIBILITY_DISTANCE) * 0.5);
          element.style.opacity = String(opacity);
        } else {
          element.style.opacity = '0';
        }
      });
    };

    // Update visibility on animation frame
    let animationId: number;
    const animate = () => {
      updateLabelVisibility();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [selectedNode, neighborIds]);

  // Update node colors when selection changes
  useEffect(() => {
    materialsRef.current.forEach((material, nodeId) => {
      // Find the node to get its group/category
      const node = processedData.nodes.find(n => n.id === nodeId);
      if (!node) return;

      const baseColor = getCategoryColor(node.group || 'company');

      if (selectedNode) {
        if (nodeId === selectedNode.id || neighborIds.has(nodeId)) {
          // Selected or neighbor: full color
          material.color.set(baseColor);
          material.opacity = 0.9;
        } else {
          // Not connected: dim gray
          material.color.set('#333333');
          material.opacity = 0.5;
        }
      } else {
        // No selection: show category color
        material.color.set(baseColor);
        material.opacity = 0.9;
      }
    });
  }, [selectedNode, neighborIds, processedData.nodes, getCategoryColor]);

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

     if (link === hoveredLink) return "rgba(150, 200, 255, 0.8)";

     if (selId && (sId === selId || tId === selId)) {
         return "rgba(130, 180, 255, 0.6)";
     }

     if (selId) {
         return "rgba(150, 150, 160, 0.08)";
     }

     return "rgba(180, 180, 190, 0.25)";
  }, [hoveredLink, selectedNode]);

  const getLinkWidth = useCallback((link: any) => {
      if (link === hoveredLink) return 1.5;

      const sId = getLinkId(link.source);
      const tId = getLinkId(link.target);
      const selId = selectedNode?.id;

      if (selId && (sId === selId || tId === selId)) return 1;

      return 0.4;
  }, [hoveredLink, selectedNode]);

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    const fg = graphRef.current;
    if (fg) {
      const camera = fg.camera();
      const controls = fg.controls();
      if (camera && controls) {
        const distance = camera.position.length();
        const newDistance = distance * 0.7; // Zoom in by 30%
        const direction = camera.position.clone().normalize();
        camera.position.copy(direction.multiplyScalar(newDistance));
        controls.update();
      }
    }
  }, []);

  const handleZoomOut = useCallback(() => {
    const fg = graphRef.current;
    if (fg) {
      const camera = fg.camera();
      const controls = fg.controls();
      if (camera && controls) {
        const distance = camera.position.length();
        const newDistance = distance * 1.4; // Zoom out by 40%
        const direction = camera.position.clone().normalize();
        camera.position.copy(direction.multiplyScalar(newDistance));
        controls.update();
      }
    }
  }, []);

  const handleResetView = useCallback(() => {
    const fg = graphRef.current;
    if (fg) {
      fg.zoomToFit(500, 5); // 500ms animation, 5px padding
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-[#0B0C15]">
      {/* Zoom Controls - bottom center, horizontal */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-row bg-black/40 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden">
        <button
          onClick={handleZoomOut}
          className="px-4 py-2 text-white hover:bg-white/10 transition-colors border-r border-white/10"
          title="Zoom Out"
        >
          <span className="text-lg font-light">−</span>
        </button>
        <button
          onClick={handleResetView}
          className="px-4 py-2 text-white hover:bg-white/10 transition-colors border-r border-white/10"
          title="Reset View"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
        </button>
        <button
          onClick={handleZoomIn}
          className="px-4 py-2 text-white hover:bg-white/10 transition-colors"
          title="Zoom In"
        >
          <span className="text-lg font-light">+</span>
        </button>
      </div>

      <ForceGraph3D
        ref={graphRef}
        graphData={processedData}
        nodeId="id"
        nodeLabel=""
        backgroundColor="#0B0C15"
        extraRenderers={extraRenderers}

        // Custom node with sphere and label
        nodeThreeObject={nodeThreeObject}

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

        onNodeDragEnd={(node: any) => {
          if (node && typeof node === 'object') {
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
