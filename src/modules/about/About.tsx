import { cn } from "@/components/lib/utils";
import { Section } from "@/components/types/section.types";
import { Card } from "@/components/ui/card";
import { useSectionClick } from "@/hooks/use-section";
import { CredentialSection } from "@/modules/home/CredentialSection";
import { TogetherSection } from "@/modules/home/TogetherSection";
import { motion } from "framer-motion";
import { ProjectsSection } from "../home/ProjectsSection";
import { ServicesSection } from "../home/ServicesSection";
import { DescriptionSection } from "./DescriptionSection";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";

export const About = () => {
   const { setClickedSection } = useSectionClick();

   return (
      <motion.div
         exit={{ opacity: 0 }}
         className={cn(
            "container mx-auto w-screen min-h-screen md:h-screen relative p-6 xl:p-12 overflow-y-auto overflow-x-hidden scrollbar-hidden md:overflow-hidden text-foreground",
            "grid grid-cols-2 md:grid-cols-6 md:grid-rows-6 gap-6")}
      >
         <Card
            className="md:col-span-2 md:row-span-2 hidden md:block"
            type="base"
            animate="left"
            section={Section.ABOUT}
         >
            <div className="w-full h-full flex items-center justify-center p-4 rounded-xl overflow-hidden">
               <img
                  src="/images/pixel_art.png"
                  alt="profile-pictureee"
                  className="w-full h-full object-contain"
               />
            </div>
         </Card>
         <DescriptionSection
            className="col-span-2 row-span-2 md:col-span-4 md:row-span-2 md:col-start-3 flex flex-col justify-between"
            type="custom"
            animate="right"
            section={Section.ABOUT}
         />
         <ExperienceSection
            className="col-span-2 row-span-2 row-start-3 md:col-span-3 md:row-span-2 md:row-start-3 xl:col-span-2"
            type="base"
            animate="left2"
            section={Section.ABOUT}
         />
         <CredentialSection
            className="col-start-1 row-span-2 row-start-7 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-5 xl:row-start-3"
            type="base"
            animate="static"
            section={Section.ABOUT}
            onClick={() => setClickedSection(Section.CREDENTIALS)}
         />
         <EducationSection
            className="col-span-2 row-span-2 col-start-1 row-start-5 md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-3 xl:col-span-2 xl:col-start-5"
            type="base"
            animate="right2"
            section={Section.ABOUT}
         />
         <ServicesSection
            className="col-span-2 row-span-2 col-start-1 row-start-9 xl:col-span-3 xl:row-span-2 xl:col-start-1 xl:row-start-5 md:hidden xl:block"
            type="base"
            animate="bottom"
            section={Section.ABOUT}
            onClick={() => setClickedSection(Section.SERVICES)}
         />
         <ProjectsSection
            className="col-start-2 row-span-2 row-start-7 md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-5 xl:col-span-1 xl:row-span-2 xl:col-start-4 xl:row-start-5"
            type="base"
            animate="bottom2"
            section={Section.ABOUT}
            onClick={() => setClickedSection(Section.PROJECTS)}
         />
         <TogetherSection
            className="md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-5 xl:col-span-2 xl:row-span-2 xl:col-start-5 xl:row-start-5 hidden md:block"
            type="base"
            animate="bottom"
            section={Section.ABOUT}
            onClick={() => setClickedSection(Section.CONTACT)}
         />
      </motion.div>
   )
}
