import { useEffect, useState, type RefObject } from 'react';

type Direction = 'up' | 'down';

interface UseScrollNavigationOptions<T> {
   items: T[];
   enabled?: boolean;
   activeIndex: number;
   scrollDelay?: number;
   disableOnResponsive?: boolean;
   onNavigate: (newIndex: number) => void;
   containerRef?: RefObject<HTMLElement | null>;
}

const isMobileView = () => window.innerWidth < 1280;

export const useScrollNavigation = <T>({
   items,
   enabled = true,
   activeIndex,
   onNavigate,
   scrollDelay = 800,
   disableOnResponsive = false,
   containerRef,
}: UseScrollNavigationOptions<T>) => {
   const [isScrolling, setIsScrolling] = useState(false);

   useEffect(() => {
      if (!enabled) return;
      if (disableOnResponsive && isMobileView()) return;

      const el = containerRef?.current || window;

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

      const handleWheel: EventListener = (event) => {
         const e = event as WheelEvent;
         const target = (event.target as HTMLElement).closest('[data-scrollable="true"]') as HTMLElement | null;

         // Si el evento ocurre dentro de un scrollable real
         if (target) {
            const canScrollDown = target.scrollTop + target.clientHeight < target.scrollHeight;
            const canScrollUp = target.scrollTop > 0;

            // Si aún puede scrollear normalmente, dejamos que lo haga
            if ((e.deltaY > 0 && canScrollDown) || (e.deltaY < 0 && canScrollUp)) {
               return;
            }
         }

         event.preventDefault();
         if (e.deltaY > 0) handleScroll("down");
         else if (e.deltaY < 0) handleScroll("up");
      };

      el.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
         el.removeEventListener('wheel', handleWheel);
      };
   }, [enabled, activeIndex, items.length, isScrolling, onNavigate, scrollDelay, disableOnResponsive, containerRef]);

   return { isScrolling };
};
