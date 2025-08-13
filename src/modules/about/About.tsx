import { cn } from "@/components/lib/utils";
import { Section } from "@/components/types/section.types";
import { Accordion } from "@/components/ui/accordion";
import { useResponsive } from "@/hooks/use-responsive";
import { useSectionClick } from "@/hooks/use-section";
import { motion } from "framer-motion";
import { ProjectsSection } from "../home/ProjectsSection";
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
            "container mx-auto w-screen max-h-screen relative p-6 pl-12 xl:pl-0 xl:p-20 text-foreground",
            "grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-1 items-center xl:items-start space-y-6")}
      >
         <ProfileCard
            className="xl:h-fit"
            type="base"
            animate="up"
            section={Section.ABOUT}
         />

         <Accordion type={isDesktop ? 'single' : 'multiple'} defaultValue="item-1" className="xl:h-[90vh] xl:overflow-y-scroll xl:overflow-x-hidden scrollbar-hidden space-y-6 md:col-span-2 xl:px-10 xl:pt-3">
            <DescriptionCard />
            <ExperienceCard />
            <EducationCard />
            <SkillsCard />

            <div className="grid md:grid-cols-4 gap-5 pb-10">
               <ServicesSection
                  className="md:col-span-2"
                  type="base"
                  animate="bottom"
                  section={Section.ABOUT}
                  onClick={() => setClickedSection(Section.SERVICES)}
               />
               <ProjectsSection
                  className=""
                  type="base"
                  animate='right'
                  section={Section.ABOUT}
                  onClick={() => setClickedSection(Section.PROJECTS)}
               />
               <SkillsSection
                  className=""
                  type="base"
                  animate='right'
                  section={Section.ABOUT}
                  onClick={() => setClickedSection(Section.SKILLS)}
               />
            </div>
         </Accordion>
      </motion.div >
   )
}

export default About;
