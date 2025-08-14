import NotFound404 from "@/components/ui/404";
import { type CardProps } from "@/components/ui/card";
import { NavbarActions } from "@/components/ui/navbar-actions";
import { ScrollToTop } from "@/components/ui/scroll-top";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import Example from "@/Example";
import About from "@/modules/about/About";
import Contact from "@/modules/contact/Contact";
import Home from "@/modules/home/Home";
import ProjectCarousel from "@/modules/projects/ProjectCarrousel";
import Projects from "@/modules/projects/Projects";
import Services from "@/modules/services/Services";
import Skills from "@/modules/skills/Skills";

export type SectionProps = Omit<CardProps, 'children'>;

export const App = () => {
   const location = useLocation();

   return (
      <>
         <NavbarActions />
         <ScrollToTop />
         <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/skills" element={<Skills />} />
               <Route path="/services" element={<Services />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/project/:id" element={<ProjectCarousel />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/example" element={<Example />} />
               <Route path="*" element={<NotFound404 />} />
            </Routes>
         </AnimatePresence>
      </>
   );
};
