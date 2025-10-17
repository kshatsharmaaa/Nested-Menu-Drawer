import type { LucideIcon } from "lucide-react";


export interface MenuItem {
  id: string;
  label: string;
  description?: string;
  icon?: LucideIcon; 
  children?: MenuItem[];
  onClick?: () => void;
}
