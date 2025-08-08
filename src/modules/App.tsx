import { cn } from "@/components/lib/utils";
import { Section } from "@/components/types/section.types";
import NotFound404 from "@/components/ui/404";
import { Card, type CardProps } from "@/components/ui/card";
import { NavbarActions } from "@/components/ui/navbar-actions";
import { ScrollToTop } from "@/components/ui/scroll-top";
import { About } from "@/modules/about/About";
import { Credentials } from "@/modules/credentials/Credentials";
import { Home } from "@/modules/home/Home";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Contact } from "./contact/Contact";
import { ProjectCarousel } from "./projects/ProjectCarrousel";
import { Projects } from "./projects/Projects";
import { Services } from "./services/Services";

export type SectionProps = Omit<CardProps, 'children'>;

export const App = () => {
   const location = useLocation();
   const [flipped, setFlipped] = useState(false);

   return (
      <>
         <NavbarActions />
         <ScrollToTop />
         <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/credentials" element={<Credentials />} />
               <Route path="/services" element={<Services />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/project/:id" element={<ProjectCarousel />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/example" element={
                  <Card type="custom"
                     animate="right"
                     className="w-[300px] h-[200px] flex flex-col items-center justify-center gap-4 [perspective:1000px]"
                     section={Section.EXAMPLE}
                  >
                     <div className={cn("relative w-full h-full transition-transform duration-[999ms] [transform-style:preserve-3d] rotate-y-0", !flipped && "rotate-y-180")}>
                        <div className="card-base absolute w-full h-full flex items-center justify-center text-2xl [backface-visibility:hidden] rotate-y-0">
                           <p>Front Side</p>
                        </div>
                        <div className="card-secondary absolute w-full h-full flex items-center justify-center text-2xl [backface-visibility:hidden] rotate-y-180">
                           <p>Back Side</p>
                        </div>
                     </div>
                     <button onClick={() => setFlipped(!flipped)} className="neu-button p-3 text-xl text-primary-foreground font-semibold">
                        Flip
                     </button>
                  </Card>
               } />
               <Route path="*" element={<NotFound404 />} />
            </Routes>
         </AnimatePresence>
      </>
   );
};
