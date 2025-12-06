import { AgentType } from './types';

export const AGENT_DEFINITIONS = [
  { type: AgentType.ORCHESTRATOR, name: 'Orchestrator Core', description: 'Project Manager', color: 'text-white' },
  { type: AgentType.VISUAL, name: 'Visual Engine', description: 'Rendering & Shaders', color: 'text-pink-400' },
  { type: AgentType.LOGIC, name: 'Logic Brain', description: 'Scripting & AI', color: 'text-blue-400' },
  { type: AgentType.ASSET, name: 'Asset Forge', description: 'Models & Audio', color: 'text-purple-400' },
  { type: AgentType.MONETIZATION, name: 'BizOps Agent', description: 'Revenue & IAP', color: 'text-green-400' },
  { type: AgentType.DEPLOYMENT, name: 'Deploy Bot', description: 'Build & Publish', color: 'text-gray-400' },
  { type: AgentType.EVENT, name: 'Event Director', description: 'LiveOps & Seasons', color: 'text-orange-400' },
  { type: AgentType.SUPPORT, name: 'Support AI', description: 'Player Care', color: 'text-teal-400' },
  { type: AgentType.SOCIAL, name: 'Social Creator', description: 'TikTok & YouTube', color: 'text-red-400' }
];
