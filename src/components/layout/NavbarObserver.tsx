// NavbarObserver.tsx
import { useEffect, useRef } from 'react';
import { useNavbar } from './NavbarContext';

interface NavbarObserverProps {
  theme: 'dark' | 'light';
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export function NavbarObserver({ 
  theme, 
  children, 
  className = '',
  threshold = 0.1 
}: NavbarObserverProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setTheme } = useNavbar();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(`📊 Section intersecting: ${entry.isIntersecting}, Theme: ${theme}`);
          if (entry.isIntersecting) {
            console.log(`🎨 Setting theme to: ${theme}`);
            setTheme(theme);
          }
        });
      },
      {
        rootMargin: '-80px 0px 0px 0px', // Adjusted
        threshold
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [theme, setTheme, threshold]);

  return (
    <div 
      ref={sectionRef} 
      className={className}
      style={{ minHeight: '100vh' }} // Force minimum height for testing
    >
      {children}
    </div>
  );
}