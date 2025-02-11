export interface Work {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  yearStart: string;
  yearEnd: string;
  description: string;
}

export interface SidebarMainItem {
  label: string;
  active: boolean;
}

export interface SidebarExternalLink {
  label: string;
  href: string;
}