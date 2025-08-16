import { useEffect, useState } from 'react';

type Direction = 'up' | 'down';

interface UseScrollNavigationOptions<T> {
   items: T[];
   activeIndex: number;
   onNavigate: (newIndex: number) => void;
   scrollDelay?: number;
   disableOnMobile?: boolean;
}

const isMobileView = () => window.innerWidth < 768;

export const useScrollNavigation = <T>({
   items,
   activeIndex,
   onNavigate,
   scrollDelay = 800,
   disableOnMobile = false,
}: UseScrollNavigationOptions<T>) => {
   const [isScrolling, setIsScrolling] = useState(false);

   useEffect(() => {
      if (disableOnMobile && isMobileView()) return;

      const handleScroll = (direction: Direction) => {
         if (isScrolling) return;
         setIsScrolling(true);
         setTimeout(() => setIsScrolling(false), scrollDelay);

         if (direction === 'down' && activeIndex < items.length - 1) {
            onNavigate(activeIndex + 1);
         } else if (direction === 'up' && activeIndex > 0) {
            onNavigate(activeIndex - 1);
         }
      };

      const handleWheel = (e: WheelEvent) => {
         e.preventDefault();
         if (e.deltaY > 0) handleScroll('down');
         else if (e.deltaY < 0) handleScroll('up');
      };

      window.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
         window.removeEventListener('wheel', handleWheel);
      };
   }, [activeIndex, items.length, isScrolling, onNavigate, scrollDelay, disableOnMobile]);

   return { isScrolling };
};
