import React, { useState, useMemo, useRef, useEffect } from 'react';
import Graph3D from './components/Graph3D';
import { INITIAL_DATA, LAST_UPDATED } from './constants';
import { GraphData, GraphNode } from './types';
import { X as XIcon, ExternalLink, Building2, Link2, ChevronLeft, ChevronRight, Menu, Calendar, BadgeCheck, MapPin, Search, HelpCircle } from 'lucide-react';

// Creator profile
const CREATOR_PROFILE: GraphNode = {
  id: 'jenny_the_bunny',
  name: 'Jenny',
  handle: 'Jenny_the_Bunny',
  group: 'founder',
  role: 'Creator of this page',
  bio: 'Building cool things with AI. Creator of this AI influencer page. Let\'s be friends on X!',
  joinedDate: 'Mar 2015 but never used until Feb 2026',
  verified: 'blue',
};

export default function App() {
  const [data] = useState<GraphData>(INITIAL_DATA);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [isLegendOpen, setIsLegendOpen] = useState(true);
  const [showMethodology, setShowMethodology] = useState(false);

  // Selection State
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [showCreatorCard, setShowCreatorCard] = useState(false);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Refs for scrolling
  const listContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Auto-close sidebar on mobile, auto-open on desktop
      if (mobile && isSidebarOpen && window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Create a map of node ID to original rank (1-based)
  const nodeRankMap = useMemo(() => {
    const map = new Map<string, number>();
    sortedNodes.forEach((node, idx) => {
      map.set(node.id, idx + 1);
    });
    return map;
  }, [sortedNodes]);

  // Filter nodes based on search query and selected category
  const filteredNodes = useMemo(() => {
    let nodes = sortedNodes;

    if (selectedCategory) {
      nodes = nodes.filter(node => node.group === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      nodes = nodes.filter(node => {
        const name = (node.name || '').toLowerCase();
        const handle = (node.handle || '').toLowerCase();
        const role = (node.role || '').toLowerCase();
        const associated = (node.associated || '').toLowerCase();
        const bio = (node.bio || '').toLowerCase();
        const bioTags = ((node as any).bioTags || []).join(' ').toLowerCase();

        return name.includes(query) ||
               handle.includes(query) ||
               role.includes(query) ||
               associated.includes(query) ||
               bio.includes(query) ||
               bioTags.includes(query);
      });
    }

    return nodes;
  }, [sortedNodes, searchQuery, selectedCategory]);

  // Build filtered graph data for the 3D view when a category is selected
  const filteredGraphData = useMemo(() => {
    if (!selectedCategory) return data;

    const filteredNodeIds = new Set(
      data.nodes.filter(n => n.group === selectedCategory).map(n => n.id)
    );

    return {
      nodes: data.nodes.filter(n => filteredNodeIds.has(n.id)),
      links: data.links.filter(link => {
        const sId = typeof link.source === 'object' ? (link.source as any).id : link.source;
        const tId = typeof link.target === 'object' ? (link.target as any).id : link.target;
        return filteredNodeIds.has(sId) && filteredNodeIds.has(tId);
      }),
    };
  }, [data, selectedCategory]);

  // Scroll to selected node in the sidebar
  useEffect(() => {
    if (selectedNode && itemRefs.current.has(selectedNode.id)) {
      const element = itemRefs.current.get(selectedNode.id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedNode]);

  const nodeCount = data?.nodes?.length || 0;
  const linkCount = data?.links?.length || 0;

  const handleNodeClick = (node: GraphNode) => {
    setShowCreatorCard(false);
    if (selectedNode?.id === node.id) {
      setSelectedNode(null);
      return;
    }
    setSelectedNode(node);
    // Auto-close sidebar on mobile when selecting a node
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };


  const closeSelection = () => {
    setSelectedNode(null);
    setShowCreatorCard(false);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(prev => prev === category ? null : category);
    setSelectedNode(null);
    setShowCreatorCard(false);
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
        data={filteredGraphData}
        onNodeClick={handleNodeClick}
        onClearSelection={closeSelection}
        selectedNode={selectedNode}
        keepOrphans={!!selectedCategory}
      />

      {/* LEFT SIDEBAR - RANKED LIST */}
      <div
        className={`absolute top-0 left-0 h-full bg-[#05060A]/80 backdrop-blur-xl border-r border-white/10 z-30 transition-all duration-300 ease-in-out flex flex-col ${isMobile ? (isSidebarOpen ? 'w-72 translate-x-0' : 'w-72 -translate-x-72') : (isSidebarOpen ? 'w-80 translate-x-0' : 'w-80 -translate-x-80')}`}
      >
        <div className="px-4 py-3 border-b border-white/10 bg-[#05060A]/50">
            <h1 className="text-xl font-display font-bold text-white tracking-tight">Top AI Influencers on X</h1>
            <p className="text-xs text-slate-400 mt-0.5">Data last updated: {LAST_UPDATED}</p>
        </div>

        {/* Search Bar */}
        <div className="p-3 border-b border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, handle, or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <XIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 custom-scrollbar">
            {filteredNodes.map((node, idx) => {
                const isSelected = selectedNode?.id === node.id;
                return (
                    <button
                        key={node.id}
                        ref={(el) => {
                            if (el) itemRefs.current.set(node.id, el);
                            else itemRefs.current.delete(node.id);
                        }}
                        onClick={() => handleNodeClick(node)}
                        className={`w-full text-left p-3 rounded-xl mb-1 flex items-center gap-3 transition-all duration-200 border ${isSelected ? 'bg-indigo-600/20 border-indigo-500/50 shadow-lg shadow-indigo-900/20' : 'hover:bg-white/5 border-transparent'}`}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                           {nodeRankMap.get(node.id)}
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex items-baseline gap-1.5 truncate">
                                <span className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                                    {node.name}
                                </span>
                                {node.handle && (
                                    <span className="text-xs text-slate-500 font-mono truncate">
                                        @{node.handle}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center justify-between gap-2 mt-0.5">
                                <span className="text-xs text-slate-500 truncate flex-1">
                                    {node.role
                                      ? `${node.role}${node.associated && node.associated !== node.name ? ` @ ${node.associated}` : ''}`
                                      : '\u00A0'}
                                </span>
                                <span className="text-[10px] text-slate-600 whitespace-nowrap shrink-0">
                                    {node.followers
                                      ? node.followers >= 1000000
                                        ? `${(node.followers / 1000000).toFixed(1)}M`
                                        : `${Math.round(node.followers / 1000)}K`
                                      : `${node.val} conn.`}
                                </span>
                            </div>
                        </div>
                    </button>
                )
            })}
        </div>

        {/* Creator Profile */}
        <div className="border-t border-white/10 bg-[#05060A]/50 p-2">
          <button
            onClick={() => {
              setSelectedNode(null);
              setShowCreatorCard(true);
            }}
            className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 border ${showCreatorCard ? 'bg-indigo-600/20 border-indigo-500/50' : 'hover:bg-white/5 border-transparent'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${showCreatorCard ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
              x
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-1.5 truncate">
                <span className={`text-sm font-semibold ${showCreatorCard ? 'text-white' : 'text-slate-200'}`}>
                  Jenny
                </span>
                <span className="text-xs text-slate-500 font-mono truncate">
                  @Jenny_the_Bunny
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-slate-500 truncate">
                  Creator of this page
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`absolute top-6 z-40 p-2 bg-slate-800/80 text-white border border-white/10 rounded-r-lg hover:bg-slate-700 transition-all duration-300 ${isMobile ? (isSidebarOpen ? 'left-72' : 'left-0') : (isSidebarOpen ? 'left-80' : 'left-0')}`}
      >
        {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>


      {/* FLOATING DETAILS CARD (Replacing Right Sidebar) */}
      {(selectedNode || showCreatorCard) && (
        <div className={`fixed z-50 animate-in fade-in duration-300 pointer-events-none flex flex-col gap-4 ${isMobile ? 'bottom-20 left-4 right-4 w-auto' : 'top-6 right-6 w-[400px] max-w-[calc(100vw-48px)] slide-in-from-right-10'}`}>

            {/* Creator Card */}
            {showCreatorCard && (
                <div className="bg-[#090A10]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl pointer-events-auto relative overflow-hidden group">

                    {/* Header Banner */}
                    <div className="h-24 bg-gradient-to-br from-pink-900/50 via-slate-800/50 to-indigo-900/30 relative">
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
                                    src={getProfileImage(CREATOR_PROFILE)}
                                    alt={CREATOR_PROFILE.name}
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(CREATOR_PROFILE.name)}&background=1e293b&color=cbd5e1&size=128`;
                                    }}
                                    className="w-20 h-20 rounded-full border-4 border-[#090A10] object-cover bg-slate-800 shadow-lg"
                                />
                            </div>

                            {/* Follow Button */}
                            <a
                                href={`https://x.com/${CREATOR_PROFILE.handle}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 px-5 py-2 bg-white hover:bg-white/90 text-black font-bold text-sm rounded-full transition-all"
                            >
                                Follow
                            </a>
                        </div>

                        {/* Name & Handle */}
                        <div className="mb-3">
                            <h2 className="text-xl font-bold text-white flex items-center gap-1.5">
                                {CREATOR_PROFILE.name}
                                <BadgeCheck className="w-5 h-5 text-blue-400 fill-blue-400/20" />
                            </h2>
                            <div className="text-slate-500 text-sm">@{CREATOR_PROFILE.handle}</div>
                        </div>

                        {/* Bio */}
                        <p className="text-sm text-slate-200 leading-relaxed mb-3">
                            {CREATOR_PROFILE.bio}
                        </p>

                        {/* Meta Info Row */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 mb-4">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>Joined {CREATOR_PROFILE.joinedDate}</span>
                            </div>
                        </div>

                    </div>
                </div>
            )}

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

        </div>
      )}

      {/* Legend */}
      <div className={`absolute z-20 bg-[#0B0C15]/80 backdrop-blur-md border border-white/10 rounded-xl transition-all duration-300 ease-in-out ${isMobile ? 'top-4 right-4' : 'bottom-6 right-6'} ${isLegendOpen ? 'p-4' : 'p-2'}`}>
        <button
          onClick={() => setIsLegendOpen(!isLegendOpen)}
          className="flex items-center gap-2 w-full text-left"
        >
          <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Legend</div>
          <ChevronRight className={`w-3 h-3 text-slate-400 transition-transform duration-300 ${isLegendOpen ? 'rotate-90' : ''}`} />
        </button>
        <div className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out ${isLegendOpen ? 'mt-3 max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
          {[
            { key: 'company', color: '#FFD4A3', label: 'Company / Organization' },
            { key: 'founder', color: '#A3D4FF', label: 'Founder / Builder' },
            { key: 'researcher', color: '#E0B3FF', label: 'Researcher / Academia' },
            { key: 'investor', color: '#B3FFB3', label: 'Investor' },
            { key: 'media', color: '#FFB3D9', label: 'Media' },
          ].map(cat => (
            <button
              key={cat.key}
              onClick={() => handleCategoryClick(cat.key)}
              className={`flex items-center gap-2 px-2 py-1 rounded-md transition-all duration-200 text-left ${selectedCategory === cat.key ? 'bg-white/10 ring-1 ring-white/20' : 'hover:bg-white/5'} ${selectedCategory && selectedCategory !== cat.key ? 'opacity-40' : 'opacity-100'}`}
            >
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
              <span className="text-xs text-slate-300">{cat.label}</span>
            </button>
          ))}
          {selectedCategory && (
            <button
              onClick={() => { setSelectedCategory(null); setSelectedNode(null); }}
              className="text-[10px] text-indigo-400 hover:text-indigo-300 transition-colors mt-1 px-2"
            >
              Clear filter
            </button>
          )}
          <div className="border-t border-white/10 my-2" />
          <button
            onClick={() => setShowMethodology(true)}
            className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </button>
        </div>
      </div>

      {/* Methodology Modal */}
      {showMethodology && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowMethodology(false)}
          />

          {/* Modal */}
          <div className="relative bg-[#0B0C15] border border-white/10 rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto custom-scrollbar">
            {/* Header */}
            <div className="sticky top-0 bg-[#0B0C15] border-b border-white/10 px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Methodology</h2>
              <button
                onClick={() => setShowMethodology(false)}
                className="p-1.5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="px-5 py-3 space-y-2.5">
              <div>
                <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">Discovery & Selection</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Starting from <span className="text-white font-medium">seed accounts</span> (OpenAI, Anthropic, DeepMind, top researchers), we crawl who they follow to find AI voices. If multiple trusted sources follow someone, they matter. The top 300 are selected using:
                </p>
                <div className="bg-slate-800/50 border border-white/10 rounded-md px-2.5 py-1.5 font-mono text-xs text-white mt-1.5 mb-1">
                  Score = log<sub>10</sub>(followers) x seed_connections
                </div>
                <p className="text-xs text-slate-400">
                  Log scale prevents mega-accounts from dominating. Minimum 1K followers, AI keywords in bio, blocklist for general media.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">Graph & Connections</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The default view shows all connections. <span className="text-white font-medium">Click a node</span> to see who they follow. Node sizes reflect followers. Filter by category using the legend.
                </p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <p className="text-xs text-slate-400">
                  This methodology may not be perfect. Have ideas?{' '}
                  <a
                    href="https://x.com/Jenny_the_Bunny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Hit me up on X
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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
        @keyframes moveRight {
          0% { left: -6px; }
          100% { left: calc(100% + 6px); }
        }
      `}</style>
    </div>
  );
}