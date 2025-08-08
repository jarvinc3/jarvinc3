import { cn } from "@/components/lib/utils";
import type { ProjectSectionValue, SectionValue } from "@/components/types/section.types";
import { useSectionClick } from "@/hooks/use-section";
import { motion } from "framer-motion";

export interface CardProps {
   children: React.ReactNode;
   className?: string;
   section?: SectionValue;
   projectSection?: ProjectSectionValue;
   type: 'primary' | 'secondary' | 'base' | 'custom';
   animate?: 'static' | 'up' | 'bottom' | 'left' | 'right' | 'static2' | 'up2' | 'bottom2' | 'left2' | 'right2';
   onClick?: () => void;
}


export const Card = ({ children, className, section, projectSection, animate, type, onClick }: CardProps) => {
   const { clickedSection, clickedProjectSection } = useSectionClick();

   const cardTypes = {
      primary: 'card-primary',
      secondary: 'card-secondary',
      base: 'card-base',
      custom: ''
   };

   const directions = {
      static: { opacity: 0, delay: 1.5 },
      static2: { opacity: 0, delay: 0.5 },
      up: { y: '-100vh' },
      up2: { y: '-100vh' },
      bottom: { y: '100vh' },
      bottom2: { y: '100vh' },
      left: { x: '-100vw' },
      left2: { x: '-100vw' },
      right: { x: '100vw' },
      right2: { x: '100vw' }
   };

   const sectionsAnimateDirections = {
      static: clickedSection === section
         ? { opacity: 1, transition: { duration: 1, delay: 0.3 } }
         : { opacity: 0, transition: { duration: 0.5 } },

      static2: clickedSection === section
         ? { opacity: 1, transition: { duration: 1 } }
         : { opacity: 0, transition: { duration: 0.5 } },

      up: clickedSection === section
         ? { y: 0, transition: { duration: 0.5 } }
         : { y: '-100vh', transition: { duration: 0.5 } },

      up2: clickedSection === section
         ? { y: 0, transition: { duration: 0.5 } }
         : { y: '-100vh', transition: { duration: 0.5 } },

      bottom: clickedSection === section
         ? { y: 0, transition: { duration: 0.5 } }
         : { y: '100vh', transition: { duration: 0.5 } },

      bottom2: clickedSection === section
         ? { y: 0, transition: { duration: 0.5 } }
         : { y: '100vh', transition: { duration: 0.5 } },

      left: clickedSection === section
         ? { x: 0, transition: { duration: 0.5 } }
         : { x: '-100vw', transition: { duration: 0.5 } },

      left2: clickedSection === section
         ? { x: 0, transition: { duration: 0.5 } }
         : { x: '-100vw', transition: { duration: 0.5 } },

      right: clickedSection === section
         ? { x: 0, transition: { duration: 0.5 } }
         : { x: '100vw', transition: { duration: 0.5 } },

      right2: clickedSection === section
         ? { x: 0, transition: { duration: 0.5 } }
         : { x: '100vw', transition: { duration: 0.5 } }
   };

   const projectsAnimateDirections = {
      static: clickedProjectSection === projectSection
         ? { opacity: 1, transition: { duration: 0.5 } }
         : { opacity: 0, transition: { duration: 0.5 } },

      static2: clickedProjectSection === projectSection
         ? { opacity: 1, transition: { duration: 1 } }
         : { opacity: 0, transition: { duration: 0.5 } },

      up: clickedProjectSection === projectSection
         ? { y: 0, transition: { duration: 0.5 } }
         : { y: '-100vh', transition: { duration: 0.5 } },

      up2: clickedProjectSection === projectSection
         ? { y: 0, transition: { duration: 0.5 } }
         : { y: '-100vh', transition: { duration: 0.5 } },

      bottom: clickedProjectSection === projectSection
         ? { y: 0, transition: { duration: 0.5 } }
         : { y: '100vh', transition: { duration: 0.5 } },

      bottom2: clickedProjectSection === projectSection
         ? { y: 0, transition: { duration: 0.5 } }
         : { y: '100vh', transition: { duration: 0.5 } },

      left: clickedProjectSection === projectSection
         ? { x: 0, transition: { duration: 0.5 } }
         : { x: '-100vw', transition: { duration: 0.5 } },

      left2: clickedProjectSection === projectSection
         ? { x: 0, transition: { duration: 0.5 } }
         : { x: '-100vw', transition: { duration: 0.5 } },

      right: clickedProjectSection === projectSection
         ? { x: 0, transition: { duration: 0.5 } }
         : { x: '100vw', transition: { duration: 0.5 } },

      right2: clickedProjectSection === projectSection
         ? { x: 0, transition: { duration: 0.5 } }
         : { x: '100vw', transition: { duration: 0.5 } }
   };

   const animateDirections = clickedProjectSection === projectSection ? projectsAnimateDirections : sectionsAnimateDirections;

   return (
      <motion.div
         initial={directions[animate || 'static']}
         animate={animateDirections[animate || 'static']}
         className={cn(cardTypes[type], className)}
         onClick={onClick}
      >
         {children}
      </motion.div>
   )
}
