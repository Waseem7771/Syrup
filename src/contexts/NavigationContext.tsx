import React, { createContext, useState, useContext } from 'react';

interface NavigationContextType {
  activeMainMenu: string | null;
  setActiveMainMenu: (key: string | null) => void;
  activeSubMenu: string | null;
  setActiveSubMenu: (key: string | null) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeMainMenu, setActiveMainMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  return (
    <NavigationContext.Provider 
      value={{ 
        activeMainMenu, 
        setActiveMainMenu, 
        activeSubMenu, 
        setActiveSubMenu 
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};