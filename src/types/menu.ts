
export interface MenuItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  onClick?: () => void;
}
