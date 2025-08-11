import { cn } from '@/components/lib/utils';
import { Accordion } from '@/components/ui/accordion';
import { useResponsive } from '@/hooks/use-responsive';
import { motion } from 'framer-motion';
import { Section } from '../../components/types/section.types';
import { SkillsGridSection } from './SkillsGridSection';
import { SummarySection } from './SummarySection';

const Skills = () => {
   const { isMobile } = useResponsive();

   return (
      <motion.div
         exit={{ opacity: 0 }}
         className={cn(
            "container mx-auto w-screen min-h-screen relative p-6 pl-12 xl:pl-0 xl:p-20 overflow-y-auto overflow-x-hidden scrollbar-hidden text-foreground")}
      >
         <Accordion type={isMobile ? 'multiple' : 'single'} defaultValue="item-1" className="w-full grid grid-cols-1 md:grid-cols-5 xl:grid-cols-3 gap-6">
            <SkillsGridSection
               className="md:col-span-2 xl:col-span-1 flex flex-col gap-6"
            />

            <SummarySection
               className="md:col-span-3 xl:col-span-2 card-base h-fit block !rounded-2xl p-4 xl:p-6 text-foreground"
               type="base"
               animate="right"
               section={Section.SKILLS}
            />
         </Accordion>
      </motion.div>
   );
};

export default Skills;
