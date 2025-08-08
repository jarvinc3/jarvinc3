import { cn } from '@/components/lib/utils';
import { Section } from '@/components/types/section.types';
import { useSectionClick } from '@/hooks/use-section';
import { motion } from 'framer-motion';
import { CredentialSection } from '../home/CredentialSection';
import { ProjectsSection } from '../home/ProjectsSection';
import { TogetherSection } from '../home/TogetherSection';
import { ServicesSection } from './ServicesSection';

export const Services = () => {
   const { setClickedSection } = useSectionClick();

   return (
      <motion.div
         exit={{ opacity: 0 }}
         className={cn(
            "container mx-auto w-screen min-h-screen md:h-screen relative p-6 xl:p-20 overflow-y-auto overflow-x-hidden scrollbar-hidden md:overflow-hidden text-foreground",
            "grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 md:grid-rows-3 xl:grid-cols-4")}
      >
         <ServicesSection
            className="col-span-2 row-span-3 md:col-span-3 md:row-span-3 md:col-start-2 md:row-start-1 flex gap-6 flex-col justify-between"
            type="custom"
            animate="up"
            section={Section.SERVICES}
         />
         <ProjectsSection
            className="row-start-5 md:col-span-1 md:row-span-1 md:row-start-1"
            type="base"
            animate="bottom2"
            section={Section.SERVICES}
            onClick={() => setClickedSection(Section.PROJECTS)}
         />
         <TogetherSection
            className="md:row-start-2 hidden md:block"
            type="base"
            animate="bottom"
            section={Section.SERVICES}
            onClick={() => setClickedSection(Section.CONTACT)}
         />
         <CredentialSection
            className="row-start-5 md:row-start-3"
            type="base"
            animate="static"
            section={Section.SERVICES}
            onClick={() => setClickedSection(Section.CREDENTIALS)}
         />
      </motion.div>
   )
}
