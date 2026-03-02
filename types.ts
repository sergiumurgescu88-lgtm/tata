
export enum Page {
  HOME = 'HOME',
  DASHBOARD = 'DASHBOARD',
  CAMPAIGN_GEN = 'CAMPAIGN_GEN',
  BRAND_SETUP = 'BRAND_SETUP',
  HISTORY = 'HISTORY',
  CONTACT = 'CONTACT',
  SERVICES = 'SERVICES',
  PROJECTS = 'PROJECTS',
  ABOUT = 'ABOUT',
  RESEARCH = 'RESEARCH',
  WHY_TRUST = 'WHY_TRUST'
}

export interface BrandProfile {
  name: string;
  tone: string;
  targetAudience: string;
  values: string[];
}

// Added to fix error in data/content.ts where ServiceDetail was missing
export interface ServiceDetail {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  standards: string[];
}

// Added to fix error in data/content.ts where Project was missing
export interface Project {
  id: string;
  title: string;
  category: string;
  capacity: string;
  client: string;
  description: string;
}

export interface CampaignAsset {
  type: 'META' | 'GOOGLE' | 'EMAIL' | 'SOCIAL' | 'LANDING';
  title: string;
  content: string;
  variants?: string[];
}

export interface Campaign {
  id: string;
  projectName: string;
  timestamp: number;
  assets: CampaignAsset[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
