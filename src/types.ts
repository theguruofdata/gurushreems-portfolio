export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  year: string;
  role?: string;
  client?: string;
  liveUrl?: string;
  // Dynamic fields for custom interactive elements inside the modal
  interactiveType?: 'dashboard' | 'canvas' | 'spatial' | 'minimalist';
}

export interface JourneyMilestone {
  id: string;
  period: string;
  title: string;
  description: string;
  image: string;
  align: 'left' | 'right';
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}
