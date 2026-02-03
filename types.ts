export interface GraphNode {
  id: string;
  name: string;
  group: 'company' | 'founder' | 'researcher' | 'investor' | 'media' | 'engineer';
  role?: string; // Job title or description
  handle?: string; // X (Twitter) username without @
  associated?: string; // Associated company or lab
  val?: number; // Influence score (calculated runtime)
  color?: string; // Visual color
  x?: number;
  y?: number;
  z?: number;
  // New fields
  imageUrl?: string;
  bioTags?: string[];
  joinedDate?: string;
  verified?: 'blue' | 'gold' | 'gray';
  bio?: string; // Short bio from X profile
  followers?: number; // Follower count
  following?: number; // Following count
  location?: string; // Location from X profile
  website?: string; // Website URL from X profile
}

export interface GraphLink {
  source: string | GraphNode;
  target: string | GraphNode;
  value?: number;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

export interface InfluencerResponse {
  newNodes: Array<{ 
    name: string; 
    group: 'company' | 'founder' | 'researcher' | 'investor' | 'media' | 'engineer';
    role: string;
    handle: string;
    associated: string;
    bioTags: string[];
    joinedDate: string;
    bio: string;
  }>;
  newLinks: Array<{ source: string; target: string }>;
}