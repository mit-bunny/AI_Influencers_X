import React, { useState, useMemo } from 'react';
import Graph3D from './components/Graph3D';
import { INITIAL_DATA } from './constants';
import { GraphData, GraphNode, GraphLink } from './types';
import { expandNetwork } from './services/geminiService';
import { Sparkles, Loader2, X as XIcon, ExternalLink, User, Building2, Link2, ChevronLeft, ChevronRight, Menu, Calendar, BadgeCheck } from 'lucide-react';

export default function App() {
  const [data, setData] = useState<GraphData>(INITIAL_DATA);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Selection State
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [selectedLink, setSelectedLink] = useState<GraphLink | null>(null);

  // 1. Calculate Statistics & Sort Nodes by Influence (Degree)
  const sortedNodes = useMemo(() => {
    const counts = new Map<string, number>();
    
    // Count connections for each node ID
    data.links.forEach(link => {
        const s = typeof link.source === 'object' ? (link.source as any).id : link.source;
        const t = typeof link.target === 'object' ? (link.target as any).id : link.target;
        counts.set(s, (counts.get(s) || 0) + 1);
        counts.set(t, (counts.get(t) || 0) + 1);
    });

    // Attach count to node copy and sort
    return [...data.nodes].map(node => ({
        ...node,
        val: counts.get(node.id) || 0
    })).sort((a, b) => (b.val || 0) - (a.val || 0));

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
                            <div className="text-[10px] text-slate-500 uppercase tracking-wider truncate">
                                {node.val} Connections
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
                {/* Main Profile Card */}
                <div className="bg-[#090A10]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl pointer-events-auto relative overflow-hidden group">
                     {/* Gradient Glow */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-500 pointer-events-none" />
                    
                    {/* Internal Close Button */}
                    <button 
                        onClick={closeSelection}
                        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors z-20 backdrop-blur-md"
                    >
                        <XIcon className="w-4 h-4" />
                    </button>

                    <div className="relative z-10">
                        {/* Avatar & Ident Header */}
                        <div className="flex items-start gap-4 mb-5 pr-8">
                            <div className="relative shrink-0">
                                <img 
                                    src={getProfileImage(selectedNode)} 
                                    alt={selectedNode.name}
                                    onError={handleImageError}
                                    className="w-16 h-16 rounded-full border-2 border-white/10 object-cover bg-slate-800 shadow-lg"
                                />
                                {selectedNode.group === 'company' && (
                                    <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5">
                                        <Building2 className="w-4 h-4 text-amber-400" />
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex-1 min-w-0 pt-1">
                                <h2 className="text-xl font-display font-bold text-white tracking-tight flex items-center gap-1.5 truncate">
                                    {selectedNode.name}
                                    {selectedNode.verified === 'gold' && <BadgeCheck className="w-4 h-4 text-amber-400 fill-amber-400/10" />}
                                    {selectedNode.verified === 'blue' && <BadgeCheck className="w-4 h-4 text-blue-400 fill-blue-400/10" />}
                                </h2>
                                <div className="text-sm text-slate-400 font-mono">@{selectedNode.handle}</div>
                                
                                {selectedNode.joinedDate && (
                                    <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-slate-500 uppercase tracking-wide">
                                        <Calendar className="w-3 h-3" />
                                        <span>Joined {selectedNode.joinedDate}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bio / Role */}
                        <div className="mb-6">
                            <div className="text-sm font-medium text-white mb-2">
                                {selectedNode.role}
                                {selectedNode.associated && <span className="text-indigo-300"> @ {selectedNode.associated}</span>}
                            </div>
                            {selectedNode.bio && (
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {selectedNode.bio}
                                </p>
                            )}
                        </div>

                        {/* Actions */}
                        {selectedNode.handle && (
                            <a 
                                href={`https://x.com/${selectedNode.handle}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 hover:bg-white/10 hover:border-white/20 border border-white/10 text-white font-medium text-sm rounded-xl transition-all group/btn"
                            >
                                <span>View X Profile</span>
                                <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform text-slate-400 group-hover/btn:text-white" />
                            </a>
                        )}
                    </div>
                </div>
                </>
            )}

            {selectedLink && (
                <div className="bg-[#090A10]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl pointer-events-auto relative">
                     {/* Internal Close Button for Link Card */}
                     <button 
                        onClick={closeSelection}
                        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors z-20 backdrop-blur-md"
                    >
                        <XIcon className="w-4 h-4" />
                    </button>

                     <div className="flex items-center gap-2 mb-6 text-amber-400">
                        <Link2 className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Active Connection</span>
                     </div>
                     
                     <div className="space-y-4 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[19px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

                        {/* Source */}
                        <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 z-10">
                                <span className="text-xs font-bold text-slate-400">A</span>
                             </div>
                             <div className="flex-1 min-w-0">
                                <span className="text-[10px] text-slate-500 uppercase block mb-0.5">Source</span>
                                <div className="font-bold text-white truncate">{typeof selectedLink.source === 'object' ? (selectedLink.source as any).name : selectedLink.source}</div>
                             </div>
                        </div>

                        {/* Target */}
                        <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center shrink-0 z-10">
                                <span className="text-xs font-bold text-indigo-300">B</span>
                             </div>
                             <div className="flex-1 min-w-0">
                                <span className="text-[10px] text-slate-500 uppercase block mb-0.5">Target</span>
                                <div className="font-bold text-white truncate">{typeof selectedLink.target === 'object' ? (selectedLink.target as any).name : selectedLink.target}</div>
                             </div>
                        </div>
                     </div>
                </div>
            )}

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