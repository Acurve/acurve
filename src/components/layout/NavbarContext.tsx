// NavbarContext.tsx
import { createContext, useContext, useState,type ReactNode } from 'react';

type NavbarTheme = 'dark' | 'light';

interface NavbarContextType {
  theme: NavbarTheme;
  setTheme: (theme: NavbarTheme) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<NavbarTheme>('dark');

  return (
    <NavbarContext.Provider value={{ theme, setTheme }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within NavbarProvider');
  }
  return context;
}