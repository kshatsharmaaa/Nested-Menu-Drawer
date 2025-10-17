import type { MenuItem as MenuItemType } from '../types/menu';
import { motion, AnimatePresence } from 'framer-motion';
import type { PanInfo } from 'framer-motion';  
import { MenuItem } from './MenuItem';
import { ChevronLeft } from 'lucide-react';

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
  items: MenuItemType[];
  goForward: (item: MenuItemType) => void;
  goBack: () => void;
  canGoBack: boolean;
}

export function MenuDrawer({
  open,
  onClose,
  items,
  goForward,
  goBack,
  canGoBack,
}: MenuDrawerProps) {
  
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    
    if (info.offset.y > 150) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={handleDragEnd}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Drag Handle */}
            <div className="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing">
              <div className="w-12 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Back Button */}
            {canGoBack && (
              <div className="px-4 pt-2 pb-2">
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Go back"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              </div>
            )}

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto">
              <div className="divide-y divide-gray-100">
                {items.map((item) => (
                  <MenuItem key={item.id} item={item} onClick={goForward} />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
