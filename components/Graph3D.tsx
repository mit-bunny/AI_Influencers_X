import React, { useRef, useMemo, useCallback, useState, useEffect } from 'react';
import ForceGraph3D, { ForceGraphMethods } from 'react-force-graph-3d';
import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { GraphData, GraphNode } from '../types';

interface Graph3DProps {
  data: GraphData;
  onNodeClick: (node: GraphNode) => void;
  onClearSelection: () => void;
  selectedNode?: GraphNode | null;
  keepOrphans?: boolean;
}

const Graph3D: React.FC<Graph3DProps> = ({ data, onNodeClick, onClearSelection, selectedNode, keepOrphans = false }) => {
  const graphRef = useRef<ForceGraphMethods>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<Map<string, { element: HTMLDivElement; object: THREE.Object3D }>>(new Map());
  const materialsRef = useRef<Map<string, THREE.MeshBasicMaterial[]>>(new Map());

  // Track container dimensions for responsive sizing
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      } else {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };

    // Initial size
    handleResize();

    // Listen for resize
    window.addEventListener('resize', handleResize);

    // Also use ResizeObserver for more accurate container tracking
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

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

    // 4. Filter Orphaned Nodes (skip when keepOrphans is true, e.g. category filter)
    const filteredNodes = keepOrphans
        ? Array.from(uniqueNodesMap.values())
        : Array.from(uniqueNodesMap.values()).filter(n => (degrees.get(n.id) || 0) > 0);

    // 5. Update values (degree) on the node objects
    filteredNodes.forEach(n => {
       n.val = degrees.get(n.id) || 0;
    });

    // 6. Ensure returned links strictly reference returned nodes
    const finalNodeIds = new Set(filteredNodes.map(n => n.id));
    const finalLinks = validLinks.filter(l => finalNodeIds.has(l.source) && finalNodeIds.has(l.target));

    return { nodes: filteredNodes, links: finalLinks };
  }, [data, keepOrphans]);



  // Identify connected neighbors for the selected node
  const neighborIds = useMemo(() => {
    const ids = new Set<string>();
    if (!selectedNode) return ids;

    processedData.links.forEach((link: any) => {
       const sId = typeof link.source === 'object' ? link.source.id : link.source;
       const tId = typeof link.target === 'object' ? link.target.id : link.target;

       // Only highlight nodes that the selected node follows
       if (sId === selectedNode.id) ids.add(String(tId));
    });
    return ids;
  }, [selectedNode, processedData]);


  // Adjust Physics Forces with max-distance constraint
  useEffect(() => {
    const fg = graphRef.current;
    if (fg) {
      fg.d3Force('charge')?.strength(-800);
      fg.d3Force('link')?.distance(50);
      fg.d3Force('center')?.strength(1.2);

      // Custom force to constrain max distance from center
      const MAX_DISTANCE = 600;
      fg.d3Force('boundingSphere', () => {
        processedData.nodes.forEach((node: any) => {
          const dist = Math.sqrt((node.x || 0) ** 2 + (node.y || 0) ** 2 + (node.z || 0) ** 2);
          if (dist > MAX_DISTANCE) {
            const scale = MAX_DISTANCE / dist;
            node.x = (node.x || 0) * scale;
            node.y = (node.y || 0) * scale;
            node.z = (node.z || 0) * scale;
          }
        });
      });
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

  // Node size based on follower count
  const getNodeSize = useCallback((node: any) => {
    const followers = node.followers || 0;
    if (followers >= 1000000) return 8;   // 1M+
    if (followers >= 500000) return 6.5;  // 500K+
    if (followers >= 100000) return 5;    // 100K+
    if (followers >= 50000) return 4;     // 50K+
    if (followers >= 10000) return 3.5;   // 10K+
    return 3;
  }, []);

  // Create node with glowing sphere (multiple layers) and HTML text label
  const nodeThreeObject = useCallback((node: any) => {
    const group = new THREE.Group();

    const nodeSize = getNodeSize(node);
    const baseColor = getCategoryColor(node.group || 'company');

    // Create glow using many layered transparent spheres
    const glowMaterials: THREE.MeshBasicMaterial[] = [];
    const numLayers = 20;

    for (let i = numLayers - 1; i >= 0; i--) {
      const t = i / numLayers; // 1 to 0 (outside to inside)
      const scale = 1.0 + (t * 1.2); // 1.0 to 2.2 (smaller glow)
      // Smooth cubic falloff for opacity
      const opacity = 0.05 + (Math.pow(1 - t, 3) * 0.4);

      const layerGeometry = new THREE.SphereGeometry(nodeSize * scale, 24, 24);
      const layerMaterial = new THREE.MeshBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: opacity,
        depthWrite: false,
      });
      const layerMesh = new THREE.Mesh(layerGeometry, layerMaterial);
      group.add(layerMesh);
      glowMaterials.push(layerMaterial);
    }

    // Bigger bright core
    const coreGeometry = new THREE.SphereGeometry(nodeSize * 0.85, 20, 20);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: baseColor,
      transparent: true,
      opacity: 0.95
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);
    glowMaterials.push(coreMaterial);

    // Store all materials for dynamic color updates
    (materialsRef.current as any).set(node.id, glowMaterials);

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
    materialsRef.current.forEach((materials: any, nodeId) => {
      const node = processedData.nodes.find(n => n.id === nodeId);
      if (!node) return;

      const baseColor = getCategoryColor(node.group || 'company');
      const materialsArray = Array.isArray(materials) ? materials : [materials];
      const isHighlighted = !selectedNode || nodeId === selectedNode.id || neighborIds.has(nodeId);

      materialsArray.forEach((mat: THREE.MeshBasicMaterial, index: number) => {
        if (isHighlighted) {
          mat.color.set(baseColor);
        } else {
          mat.color.set('#222222');
        }
      });
    });
  }, [selectedNode, neighborIds, processedData.nodes, getCategoryColor]);

  // Link visibility - show all when nothing selected, only outgoing when a node is selected
  const getLinkVisibility = useCallback((link: any) => {
    if (!selectedNode) return true;

    const sId = typeof link.source === 'object' ? link.source.id : link.source;

    return sId === selectedNode.id;
  }, [selectedNode]);

  // Link color - dimmer when showing all, brighter for selected node's links
  const getLinkColor = useCallback((link: any) => {
    if (!selectedNode) return 'rgba(255, 255, 255, 0.07)';
    return 'rgba(255, 255, 255, 0.4)';
  }, [selectedNode]);

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
      fg.zoomToFit(500, 100); // 500ms animation, positive padding = more zoomed out
    }
    onClearSelection(); // Clear any selected node
  }, [onClearSelection]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 bg-[#0B0C15]">
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
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="#0B0C15"
        extraRenderers={extraRenderers}

        // Custom node with sphere and label
        nodeThreeObject={nodeThreeObject}

        // Link Styling - Simple white lines with visibility control
        linkVisibility={getLinkVisibility}
        linkColor={getLinkColor}
        linkWidth={1}
        linkOpacity={1}
        linkDirectionalParticles={0}

        // Interaction
        enableNodeDrag={true}
        onNodeClick={(node) => node && onNodeClick(node)}
        enablePointerInteraction={true}
        linkHoverPrecision={0}

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
