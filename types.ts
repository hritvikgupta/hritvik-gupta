export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string; // Optional poster for video
}

export interface Project {
  id: string;
  title: string;
  description: string[];
  technologies: string[];
  link?: string;
  github?: string;
  media?: ProjectMedia[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string; // Optional icon name if we were using an icon library
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Publication {
  citation: string;
  link?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  about: string;
  location: string;
  email: string;
  socials: SocialLink[];
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  awards: string[];
  publications: Publication[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}