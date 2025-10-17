
import type { MenuItem as MenuItemType } from '../types/menu';
import { ChevronRight } from 'lucide-react';

interface MenuItemProps {
  item: MenuItemType;
  onClick: (item: MenuItemType) => void;
}

export function MenuItem({ item, onClick }: MenuItemProps) {
  const hasChildren = item.children && item.children.length > 0;
  const IconComponent = item.icon;

  return (
    <button
      onClick={() => onClick(item)}
      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left group"
      aria-label={item.label}
      aria-haspopup={hasChildren}
    >
      
      <div className="flex-shrink-0 text-gray-700">
        {IconComponent && <IconComponent className="w-5 h-5" />}
      </div>

      
      <div className="flex-1 min-w-0">
        <div className="font-medium text-gray-900 text-sm">
          {item.label}
        </div>
        {item.description && (
          <div className="text-xs text-gray-500 mt-0.5">
            {item.description}
          </div>
        )}
      </div>

      
      {hasChildren && (
        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
      )}
    </button>
  );
}
