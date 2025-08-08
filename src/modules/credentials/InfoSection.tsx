import { Section } from "@/components/types/section.types";
import { useSectionClick } from "@/hooks/use-section";
import { useTranslate } from "@/hooks/use-translate";
import { motion } from 'framer-motion';
import { ProjectsSection } from "../home/ProjectsSection";
import { ServicesSection } from "../home/ServicesSection";
import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";
import { SkillsCard } from "./SkillsCard";

export const InfoSection = () => {
   const { t } = useTranslate();
   const { setClickedSection } = useSectionClick();

   return (
      <div className="col-span-2 md:row-span-2 w-full xl:h-[90vh] md:overflow-y-scroll md:overflow-x-hidden flex flex-col gap-6 text-primary-foreground">
         <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="p-6 space-y-4"
         >
            <h2 className="text-xl font-semibold ">
               {t("credentials.aboutMe")}
            </h2>
            <div className="relative rounded-2xl overflow-hidden  space-y-3 font-sans isolate group">
               <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-success transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
               <p className="px-5 transition-transform duration-300 group-hover:translate-x-1">
                  {t("credentials.aboutDescription1")}
               </p>
               <p className="px-5 transition-transform duration-300 group-hover:translate-x-1">
                  {t("credentials.aboutDescription2")}
               </p>
               <p className="px-5 transition-transform duration-300 group-hover:translate-x-1">
                  {t("credentials.aboutDescription3")}
               </p>
            </div>
         </motion.section>

         <ExperienceCard />

         <EducationCard />

         <SkillsCard />

         <div className="grid md:grid-cols-3 gap-5 mb-10">
            <ServicesSection
               className="md:col-span-2"
               type="secondary"
               animate="bottom"
               section={Section.CREDENTIALS}
               onClick={() => setClickedSection(Section.SERVICES)}
            />
            <ProjectsSection
               className="hidden md:block"
               type="secondary"
               animate='right'
               section={Section.CREDENTIALS}
               onClick={() => setClickedSection(Section.PROJECTS)}
            />
         </div>
      </div>
   )
}
