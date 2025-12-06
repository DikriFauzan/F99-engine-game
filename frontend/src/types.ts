export enum AgentType {
  ORCHESTRATOR = 'ORCHESTRATOR',
  VISUAL = 'VISUAL',
  PHYSICS = 'PHYSICS',
  LOGIC = 'LOGIC',
  ASSET = 'ASSET',
  MONETIZATION = 'MONETIZATION',
  DEPLOYMENT = 'DEPLOYMENT',
  EVENT = 'EVENT',
  SUPPORT = 'SUPPORT',
  WEB = 'WEB',
  SOCIAL = 'SOCIAL'
}

export interface LogEntry {
  id: string;
  timestamp: string;
  agent: AgentType;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export interface GeneratedAsset {
  id: string;
  type: 'image' | 'code' | 'model' | 'sound' | 'video' | 'website';
  name: string;
  content: string; 
  agent: AgentType;
  tags?: string[];
  versions?: AssetVersion[];
}

export interface AssetVersion {
  id: string;
  content: string;
  timestamp: number;
}

export interface AgentStatus {
  type: AgentType;
  name: string;
  status: 'idle' | 'thinking' | 'working' | 'completed' | 'error';
  currentTask?: string;
}

export interface ProjectMetadata {
  name: string;
  genre: string;
  engineVersion: string;
  targetPlatform: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: number;
}

export interface CloudSyncStatus {
  connected: boolean;
  account: string;
  lastSync: string;
  status: 'idle' | 'syncing' | 'error' | 'up-to-date';
  storageUsed: number;
}

export interface SupportTicket {
    id: string;
    user: string;
    issue: string;
    status: 'open' | 'pending' | 'resolved';
    priority: 'low' | 'medium' | 'high' | 'critical';
}
