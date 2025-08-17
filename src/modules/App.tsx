import NotFound404 from "@/components/ui/404";
import { type CardProps } from "@/components/ui/card";
import { NavbarActions } from "@/components/ui/navbar-actions";
import { ScrollToTop } from "@/components/ui/scroll-top";
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes } from "react-router-dom";

import { Section, SLIDES } from "@/components/types/section.types";
import Example from "@/Example";
import { useScrollNavigation, useSectionClick } from "@/hooks";
import About from "@/modules/about/About";
import Contact from "@/modules/contact/Contact";
import Home from "@/modules/home/Home";
import Projects from "@/modules/projects/Projects";
import Services from "@/modules/services/Services";
import Skills from "@/modules/skills/Skills";
import { useRef } from "react";
import ProjectCarousel from "./projects/ProjectCarrousel";

export type SectionProps = Omit<CardProps, 'children'>;

export const App = () => {
   const { clickedSection, setClickedSection } = useSectionClick();

   const index = SLIDES.findIndex(s => s.section === clickedSection);
   const containerRef = useRef<HTMLDivElement>(null);

   const { isScrolling } = useScrollNavigation({
      containerRef,
      items: SLIDES,
      activeIndex: index,
      disableOnResponsive: true,
      enabled: clickedSection !== Section.PROJECT,
      onNavigate: (newIndex) => setClickedSection(SLIDES[newIndex].section),
   });

   const sectionsMap = {
      [Section.HOME]: <Home />,
      [Section.ABOUT]: <About />,
      [Section.SKILLS]: <Skills />,
      [Section.SERVICES]: <Services />,
      [Section.PROJECTS]: <Projects />,
      [Section.PROJECT]: <ProjectCarousel />,
      [Section.CONTACT]: <Contact />,
      [Section.EXAMPLE]: <Example />,
   };

   return (
      <>
         <NavbarActions isScrolling={isScrolling} />
         <ScrollToTop />
         <Routes>
            <Route path="/" element={
               <div ref={containerRef} className="w-full h-full">
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={clickedSection}
                        exit={{ opacity: 0 }}
                     >
                        {sectionsMap[clickedSection as keyof typeof sectionsMap]}
                     </motion.div>
                  </AnimatePresence>
               </div>
            } />
            <Route path="*" element={<NotFound404 />} />
         </Routes>
      </>
   );
};
