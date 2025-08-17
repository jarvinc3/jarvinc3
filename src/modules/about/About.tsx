import { cn } from "@/components/lib/utils";
import { Section } from "@/components/types/section.types";
import { Accordion } from "@/components/ui/accordion";
import { useResponsive } from "@/hooks/use-responsive";
import { useSectionClick } from "@/hooks/use-section";
import { motion } from "framer-motion";
import { ServicesSection } from "../home/ServicesSection";
import { DescriptionCard } from "./DescriptionCard";
import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";
import { ProfileCard } from "./ProfileCard";
import { SkillsCard } from "./SkillsCard";
import { SkillsSection } from "./SkillsSection";

const About = () => {
   const { setClickedSection } = useSectionClick();
   const { isDesktop } = useResponsive();

   return (
      <motion.div
         exit={{ opacity: 0 }}
         className={cn(
            "container mx-auto w-screen max-h-screen relative p-6 pl-12 xl:p-20 overflow-y-auto overflow-x-hidden scrollbar-hidden text-foreground",
            "grid grid-cols-2 xl:grid-cols-3 xl:grid-rows-5 gap-4 md:gap-6")}
      >
         <ProfileCard
            className="col-span-2 xl:col-span-1 xl:row-span-1 md:grid md:grid-cols-2 md:gap-6 xl:block"
            type="base"
            animate="up"
            section={Section.ABOUT}
         />
         <Accordion
            type={isDesktop ? 'single' : 'multiple'}
            defaultValue="item-1"
            className="col-span-2 md:col-span-2 xl:col-span-2 xl:row-span-3 xl:col-start-2 xl:row-start-1S xl:h-[85vh] xl:overflow-y-scroll xl:overflow-x-hidden scrollbar-hidden space-y-6 xl:px-3 xl:pt-3"
         >
            <DescriptionCard />
            <ExperienceCard />
            <EducationCard />
            <SkillsCard />
         </Accordion>
         <SkillsSection
            className="xl:row-span-2 xl:col-start-1 xl:row-start-4"
            type="base"
            animate='bottom'
            section={Section.ABOUT}
            onClick={() => setClickedSection(Section.SKILLS)}
         />
         <ServicesSection
            className="xl:row-span-2 xl:col-start-1 xl:row-start-2"
            type="base"
            animate="left"
            section={Section.ABOUT}
            onClick={() => setClickedSection(Section.SERVICES)}
         />
      </motion.div >
   )
}

export default About;
