export interface IWork {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}

export interface IExperience {
  role: string;
  company: string;
  location: string;
  yearStart: string;
  yearEnd: string;
  description: string;
}

export interface ISidebarMainItem {
  label: string;
  active: boolean;
}

export interface ISidebarExternalLink {
  label: string;
  href: string;
}