
import { useState } from 'react';
import { OpenMenuButton } from './components/OpenMenuButton';
import { MenuDrawer } from './components/MenuDrawer';
import { useMenuNavigation } from './hooks/useMenuNavigation';
import { rootMenuData } from './data/menuData';

export default function App() {
  const [open, setOpen] = useState(false);
  const navigation = useMenuNavigation(rootMenuData);

  const handleClose = () => {
    setOpen(false);
    navigation.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <OpenMenuButton onClick={() => setOpen(true)} />
      <MenuDrawer
        open={open}
        onClose={handleClose}
        items={navigation.currentMenu}
        goForward={navigation.goForward}
        goBack={navigation.goBack}
        canGoBack={navigation.canGoBack}
      />
    </div>
  );
}
