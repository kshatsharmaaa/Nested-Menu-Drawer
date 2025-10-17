
import { useState } from 'react';
import type { MenuItem } from '../types/menu';

export function useMenuNavigation(rootMenu: MenuItem[]) {
  const [stack, setStack] = useState<MenuItem[][]>([rootMenu]);
  const currentMenu = stack[stack.length - 1];

  const goForward = (item: MenuItem) => {
    if (item.children?.length) {
      setStack([...stack, item.children]);
    } else if (item.onClick) {
      item.onClick();
    }
  };

  const goBack = () => {
    if (stack.length > 1) {
      setStack(stack.slice(0, -1));
    }
  };

  const reset = () => setStack([rootMenu]);

  return { 
    currentMenu, 
    goForward, 
    goBack, 
    canGoBack: stack.length > 1, 
    reset 
  };
}
