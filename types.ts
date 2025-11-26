import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}