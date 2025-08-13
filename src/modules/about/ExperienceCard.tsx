import { Section } from "@/components/types/section.types";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useExperience, useSectionClick } from "@/hooks";
import { useTranslate } from "@/hooks/use-translate";
import { motion } from 'framer-motion';

export const ExperienceCard = () => {
   const { clickedSection } = useSectionClick();
   const experience = useExperience();
   const { t } = useTranslate();

   return (
      <motion.section
         initial={{ x: '100vw' }}
         animate={clickedSection === Section.ABOUT
            ? { x: 0, transition: { duration: 0.6 } }
            : { x: '100vw', transition: { duration: 0.5 } }}
         className="space-y-4 "
      >
         <AccordionItem value="item-2" className="card-base space-y-4 !rounded-2xl px-4 py-6">
            <AccordionTrigger>
               <h2 className="text-xl font-semibold ">
                  {t("about.experience")}
               </h2>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-8 text-balance">
               {experience.map((exp) => (
                  <div key={exp.id} className="relative rounded-2xl overflow-hidden font-sans isolate group">
                     <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-info transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
                     <div className="relative z-10 flex flex-col justify-center">
                        <div className="md:flex justify-between items-center">
                           <div className=" font-medium text-[1.1rem] px-5 pb-1 transition-transform duration-300 group-hover:translate-x-[0.15rem]">
                              {exp.position_in}
                           </div>
                           <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                              {new Date(exp.init_date).getFullYear()} - {exp.currently ? 'Present' : new Date(exp.finish_date).getFullYear()}
                           </div>
                        </div>
                        <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                           {exp.company_name}
                        </div>
                        <ul className="px-5 mt-3 text-[1.1rem] transition-transform duration-300 group-hover:translate-x-1 space-y-2">
                           {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex}>
                                 {achievement}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}
            </AccordionContent>
         </AccordionItem>
      </motion.section>
   )
}
