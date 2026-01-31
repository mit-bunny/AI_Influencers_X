import React, { useState, useMemo } from 'react';
import Graph3D from './components/Graph3D';
import { INITIAL_DATA } from './constants';
import { GraphData, GraphNode, GraphLink } from './types';
import { expandNetwork } from './services/geminiService';
import { Sparkles, Loader2, X as XIcon, ExternalLink, User, Building2, Link2, ChevronLeft, ChevronRight, Menu, Calendar, BadgeCheck, MapPin } from 'lucide-react';

export default function App() {
  const [data, setData] = useState<GraphData>(INITIAL_DATA);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Selection State
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [selectedLink, setSelectedLink] = useState<GraphLink | null>(null);

  // 1. Calculate Statistics & Sort Nodes by Followers (or connections as fallback)
  const sortedNodes = useMemo(() => {
    const counts = new Map<string, number>();

    // Count connections for each node ID
    data.links.forEach(link => {
        const s = typeof link.source === 'object' ? (link.source as any).id : link.source;
        const t = typeof link.target === 'object' ? (link.target as any).id : link.target;
        counts.set(s, (counts.get(s) || 0) + 1);
        counts.set(t, (counts.get(t) || 0) + 1);
    });

    // Attach count to node copy and sort by followers (or connections as fallback)
    return [...data.nodes].map(node => ({
        ...node,
        val: counts.get(node.id) || 0
    })).sort((a, b) => (b.followers || b.val || 0) - (a.followers || a.val || 0));

  }, [data]);

  const nodeCount = data?.nodes?.length || 0;
  const linkCount = data?.links?.length || 0;

  // Helper to safely resolve a link's source/target to a Node object or ID
  const resolveNode = (nodeRef: string | GraphNode | undefined): GraphNode | undefined => {
    if (!nodeRef) return undefined;
    if (typeof nodeRef === 'object' && 'id' in nodeRef) return nodeRef as GraphNode;
    return data.nodes.find(n => n.id === nodeRef);
  };

  const handleExpandNetwork = async () => {
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const response = await expandNetwork(data);
      const newNodes = response.newNodes || [];
      const newLinks = response.newLinks || [];

      if (newNodes.length === 0) {
        setError("AI couldn't find new connections. Try again.");
        setLoading(false);
        return;
      }

      setData(prev => {
        const existingIds = new Set((prev.nodes || []).map(n => n.id));
        const uniqueNewNodes = newNodes
          .map(n => ({ 
             ...n, 
             id: n.name.replace(/\s+/g, ''),
             // Default fallbacks for new nodes if LLM misses something
             verified: (n.group === 'company' ? 'gold' : 'blue') as 'blue' | 'gold' | 'gray',
             bioTags: n.bioTags || ['AI', 'Tech']
          }))
          .filter(n => !existingIds.has(n.id));

        const newLinksFormatted = newLinks.map(l => ({
           source: (l.source || "").replace(/\s+/g, ''),
           target: (l.target || "").replace(/\s+/g, '')
        })).filter(l => l.source && l.target); 

        return {
          nodes: [...(prev.nodes || []), ...uniqueNewNodes],
          links: [...(prev.links || []), ...newLinksFormatted]
        };
      });

    } catch (e) {
      console.error(e);
      setError("Failed to expand network.");
    } finally {
      setLoading(false);
    }
  };

  const handleNodeClick = (node: GraphNode) => {
    setSelectedLink(null);
    setSelectedNode(node);
  };

  const handleLinkClick = (link: GraphLink) => {
    setSelectedNode(null);
    setSelectedLink(link);
  };

  const closeSelection = () => {
    setSelectedNode(null);
    setSelectedLink(null);
  };

  const getProfileImage = (node: GraphNode) => {
    if (node.imageUrl) return node.imageUrl;
    // Use Unavatar to get the Twitter/X profile picture
    if (node.handle) return `https://unavatar.io/twitter/${node.handle}`;
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(node.name)}&background=random&color=fff&size=128`;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; // Prevent infinite loop
    if (selectedNode) {
        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedNode.name)}&background=1e293b&color=cbd5e1&size=128`;
    }
  };

  const formatNumber = (num: number | undefined): string => {
    if (!num) return '0';
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-[#0B0C15] text-white font-sans">
      
      {/* 3D Graph Layer */}
      <Graph3D 
        data={data} 
        onNodeClick={handleNodeClick} 
        onLinkClick={handleLinkClick} 
        selectedNode={selectedNode}
      />

      {/* LEFT SIDEBAR - RANKED LIST */}
      <div 
        className={`absolute top-0 left-0 h-full bg-[#05060A]/80 backdrop-blur-xl border-r border-white/10 z-30 transition-all duration-300 ease-in-out flex flex-col ${isSidebarOpen ? 'w-80 translate-x-0' : 'w-80 -translate-x-80'}`}
      >
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#05060A]/50">
            <div>
                <h1 className="text-xl font-display font-bold text-white tracking-tight">Top AI Influencers on X</h1>
                <p className="text-xs text-slate-400 mt-1">Ranked by number of followers</p>
            </div>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 custom-scrollbar">
            {sortedNodes.map((node, idx) => {
                const isSelected = selectedNode?.id === node.id;
                return (
                    <button
                        key={node.id}
                        onClick={() => handleNodeClick(node)}
                        className={`w-full text-left p-3 rounded-xl mb-1 flex items-center gap-3 transition-all duration-200 border ${isSelected ? 'bg-indigo-600/20 border-indigo-500/50 shadow-lg shadow-indigo-900/20' : 'hover:bg-white/5 border-transparent'}`}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                           {idx + 1}
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className={`text-sm font-semibold truncate ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                                {node.name}
                            </div>
                            {node.handle && (
                                <div className="text-xs text-slate-400 font-mono truncate">
                                    @{node.handle}
                                </div>
                            )}
                            {node.role && (
                                <div className="text-xs text-slate-500 truncate mt-0.5">
                                    {node.role}{node.associated && node.associated !== node.name ? ` @ ${node.associated}` : ''}
                                </div>
                            )}
                            <div className="text-[10px] text-slate-600 mt-1">
                                {node.followers ? `${(node.followers / 1000000).toFixed(1)}M followers` : `${node.val} connections`}
                            </div>
                        </div>
                        {isSelected && <ChevronRight className="w-4 h-4 text-indigo-400" />}
                    </button>
                )
            })}
        </div>

        {/* Sidebar Footer Stats */}
        <div className="p-4 border-t border-white/10 bg-[#05060A]/50 text-xs text-slate-500 font-mono flex justify-between">
            <span>{nodeCount} Nodes</span>
            <span>{linkCount} Edges</span>
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`absolute top-6 z-40 p-2 bg-slate-800/80 text-white border border-white/10 rounded-r-lg hover:bg-slate-700 transition-all duration-300 ${isSidebarOpen ? 'left-80' : 'left-0'}`}
      >
        {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>


      {/* FLOATING DETAILS CARD (Replacing Right Sidebar) */}
      {(selectedNode || selectedLink) && (
        <div className="fixed top-6 right-6 w-[400px] max-w-[calc(100vw-48px)] z-50 animate-in slide-in-from-right-10 fade-in duration-300 pointer-events-none flex flex-col gap-4">
            
            {/* Content Cards */}
            {selectedNode && (
                <>
                {/* Main Profile Card - X Style */}
                <div className="bg-[#090A10]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl pointer-events-auto relative overflow-hidden group">

                    {/* Header Banner */}
                    <div className="h-24 bg-gradient-to-br from-indigo-900/50 via-slate-800/50 to-purple-900/30 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090A10]/80 to-transparent" />
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={closeSelection}
                        className="absolute top-3 right-3 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white/80 hover:text-white transition-colors z-20 backdrop-blur-sm"
                    >
                        <XIcon className="w-4 h-4" />
                    </button>

                    {/* Profile Section */}
                    <div className="px-4 pb-4 relative">
                        {/* Avatar - Overlapping Header */}
                        <div className="flex justify-between items-start">
                            <div className="relative -mt-12 mb-3">
                                <img
                                    src={getProfileImage(selectedNode)}
                                    alt={selectedNode.name}
                                    onError={handleImageError}
                                    className="w-20 h-20 rounded-full border-4 border-[#090A10] object-cover bg-slate-800 shadow-lg"
                                />
                                {selectedNode.group === 'company' && (
                                    <div className="absolute -bottom-1 -right-1 bg-[#090A10] rounded-full p-1">
                                        <Building2 className="w-4 h-4 text-amber-400" />
                                    </div>
                                )}
                            </div>

                            {/* Follow Button */}
                            {selectedNode.handle && (
                                <a
                                    href={`https://x.com/${selectedNode.handle}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 px-5 py-2 bg-white hover:bg-white/90 text-black font-bold text-sm rounded-full transition-all"
                                >
                                    Follow
                                </a>
                            )}
                        </div>

                        {/* Name & Handle */}
                        <div className="mb-3">
                            <h2 className="text-xl font-bold text-white flex items-center gap-1.5">
                                {selectedNode.name}
                                {selectedNode.verified === 'gold' && <BadgeCheck className="w-5 h-5 text-amber-400 fill-amber-400/20" />}
                                {selectedNode.verified === 'blue' && <BadgeCheck className="w-5 h-5 text-blue-400 fill-blue-400/20" />}
                            </h2>
                            <div className="text-slate-500 text-sm">@{selectedNode.handle}</div>
                        </div>

                        {/* Bio */}
                        {(selectedNode.bio || selectedNode.role) && (
                            <p className="text-sm text-slate-200 leading-relaxed mb-3">
                                {selectedNode.bio || `${selectedNode.role}${selectedNode.associated ? ` @ ${selectedNode.associated}` : ''}`}
                            </p>
                        )}

                        {/* Meta Info Row: Location, Website, Joined */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 mb-4">
                            {selectedNode.location && (
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>{selectedNode.location}</span>
                                </div>
                            )}
                            {selectedNode.website && (
                                <a
                                    href={`https://${selectedNode.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-indigo-400 hover:underline"
                                >
                                    <Link2 className="w-4 h-4" />
                                    <span>{selectedNode.website}</span>
                                </a>
                            )}
                            {selectedNode.joinedDate && (
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>Joined {selectedNode.joinedDate}</span>
                                </div>
                            )}
                        </div>

                        {/* Following / Followers */}
                        {(selectedNode.followers || selectedNode.following) && (
                            <div className="flex gap-4 text-sm">
                                {selectedNode.following !== undefined && (
                                    <div>
                                        <span className="font-bold text-white">{formatNumber(selectedNode.following)}</span>
                                        <span className="text-slate-500 ml-1">Following</span>
                                    </div>
                                )}
                                {selectedNode.followers !== undefined && (
                                    <div>
                                        <span className="font-bold text-white">{formatNumber(selectedNode.followers)}</span>
                                        <span className="text-slate-500 ml-1">Followers</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                </>
            )}

            {selectedLink && (() => {
                const sourceNode = resolveNode(selectedLink.source as string | GraphNode);
                const targetNode = resolveNode(selectedLink.target as string | GraphNode);

                const renderNodeCard = (node: GraphNode | undefined, label: string) => {
                    if (!node) return null;
                    return (
                        <div className="bg-[#090A10]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl pointer-events-auto relative overflow-hidden group">

                            {/* Header Banner */}
                            <div className="h-20 bg-gradient-to-br from-indigo-900/50 via-slate-800/50 to-purple-900/30 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#090A10]/80 to-transparent" />
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={closeSelection}
                                className="absolute top-3 right-3 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white/80 hover:text-white transition-colors z-20 backdrop-blur-sm"
                            >
                                <XIcon className="w-4 h-4" />
                            </button>

                            {/* Profile Section */}
                            <div className="px-4 pb-4 relative">
                                {/* Avatar - Overlapping Header */}
                                <div className="flex justify-between items-start">
                                    <div className="relative -mt-10 mb-2">
                                        <img
                                            src={getProfileImage(node)}
                                            alt={node.name}
                                            onError={(e) => {
                                                e.currentTarget.onerror = null;
                                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(node.name)}&background=1e293b&color=cbd5e1&size=128`;
                                            }}
                                            className="w-16 h-16 rounded-full border-4 border-[#090A10] object-cover bg-slate-800 shadow-lg"
                                        />
                                        {node.group === 'company' && (
                                            <div className="absolute -bottom-1 -right-1 bg-[#090A10] rounded-full p-1">
                                                <Building2 className="w-3 h-3 text-amber-400" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Follow Button */}
                                    {node.handle && (
                                        <a
                                            href={`https://x.com/${node.handle}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 px-4 py-1.5 bg-white hover:bg-white/90 text-black font-bold text-sm rounded-full transition-all"
                                        >
                                            Follow
                                        </a>
                                    )}
                                </div>

                                {/* Name & Handle */}
                                <div className="mb-2">
                                    <h2 className="text-lg font-bold text-white flex items-center gap-1.5">
                                        {node.name}
                                        {node.verified === 'gold' && <BadgeCheck className="w-4 h-4 text-amber-400 fill-amber-400/20" />}
                                        {node.verified === 'blue' && <BadgeCheck className="w-4 h-4 text-blue-400 fill-blue-400/20" />}
                                    </h2>
                                    <div className="text-slate-500 text-sm">@{node.handle}</div>
                                </div>

                                {/* Bio */}
                                {(node.bio || node.role) && (
                                    <p className="text-sm text-slate-200 leading-relaxed mb-2">
                                        {node.bio || `${node.role}${node.associated ? ` @ ${node.associated}` : ''}`}
                                    </p>
                                )}

                                {/* Meta Info Row */}
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 mb-3">
                                    {node.location && (
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            <span>{node.location}</span>
                                        </div>
                                    )}
                                    {node.website && (
                                        <a
                                            href={`https://${node.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-indigo-400 hover:underline"
                                        >
                                            <Link2 className="w-3 h-3" />
                                            <span>{node.website}</span>
                                        </a>
                                    )}
                                    {node.joinedDate && (
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>Joined {node.joinedDate}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Following / Followers */}
                                {(node.followers || node.following) && (
                                    <div className="flex gap-4 text-sm">
                                        {node.following !== undefined && (
                                            <div>
                                                <span className="font-bold text-white">{formatNumber(node.following)}</span>
                                                <span className="text-slate-500 ml-1">Following</span>
                                            </div>
                                        )}
                                        {node.followers !== undefined && (
                                            <div>
                                                <span className="font-bold text-white">{formatNumber(node.followers)}</span>
                                                <span className="text-slate-500 ml-1">Followers</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                };

                return (
                    <>
                        {renderNodeCard(sourceNode, "Source")}
                        {renderNodeCard(targetNode, "Target")}
                    </>
                );
            })()}

        </div>
      )}

      {/* Controls Overlay (Bottom Center) */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center gap-4 transition-all duration-300 ${isSidebarOpen ? 'pl-40' : 'pl-0'}`}>
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-2 rounded-lg text-sm mb-2 backdrop-blur-md">
            {error}
          </div>
        )}
        
        <button
          onClick={handleExpandNetwork}
          disabled={loading}
          className="group relative px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.7)] transition-all duration-300 flex items-center gap-3 overflow-hidden border border-indigo-400/30"
        >
          {loading ? (
             <Loader2 className="w-5 h-5 animate-spin text-white/80" />
          ) : (
             <Sparkles className="w-5 h-5 text-amber-200" />
          )}
          <span className="font-semibold tracking-wide text-sm">
            {loading ? "Discovering..." : "Expand Universe"}
          </span>
        </button>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}