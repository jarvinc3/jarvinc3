import { useRef, useState } from "react";
import { AboutMe } from "./AboutMe";
import { Resume } from "./Resume";
import { Works } from "./Works";
import { Contact } from "./Contact";

const slides = [
   { component: <AboutMe /> },
   { component: <Resume /> },
   { component: <Works /> },
   { component: <Contact /> }
];

export const DashboardMobile = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const isScrolling = useRef(false);
   const startY = useRef<number>(0);

   const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      const delta = event.deltaY > 0 ? 1 : -1;
      const newIndex = Math.max(0, Math.min(activeIndex + delta, slides.length - 1));

      setActiveIndex(newIndex);

      setTimeout(() => {
         isScrolling.current = false;
      }, 350);
   };

   const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
      startY.current = event.touches[0].clientY;
   };

   const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
      if (isScrolling.current) return;

      const currentY = event.touches[0].clientY;
      const delta = startY.current - currentY;

      if (Math.abs(delta) > 50) {
         isScrolling.current = true;

         const newIndex = delta > 0 ? activeIndex + 1 : activeIndex - 1;
         setActiveIndex(Math.max(0, Math.min(newIndex, slides.length - 1)));

         setTimeout(() => {
            isScrolling.current = false;
         }, 300);
      }
   };

   return (
      <div
         className="w-screen h-screen overflow-hidden"
         onWheel={handleScroll}
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
      >
         <div
            className="flex flex-col transition-all duration-500 ease-out"
            style={{ transform: `translateY(-${activeIndex * 25}%)`, transition: 'transform 0.4s ease' }}
         >
            {slides.map((slide, index) => (
               <div
                  className="flex items-center justify-center w-screen h-screen"
                  key={index}
               >
                  {slide.component}
               </div>
            ))}
         </div>
      </div>
   );
};
