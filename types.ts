import { LucideIcon } from 'lucide-react';

export interface Challenge {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface VisionPoint {
  id: number;
  text: string;
  size: number; // For visualization scaling
}

export interface JourneyStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

export interface Offering {
  title: string;
  summary: string;
  details: string[];
  icon: LucideIcon;
}

export interface StatData {
  name: string;
  value: number;
  fill: string;
}