import { Section } from "@/components/types/section.types";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEducation, useSectionClick } from "@/hooks";
import { useTranslate } from "@/hooks/use-translate";
import { motion } from 'framer-motion';

export const EducationCard = () => {
   const { clickedSection } = useSectionClick();
   const education = useEducation();
   const { t } = useTranslate();

   return (
      <motion.section
         initial={{ x: '100vw' }}
         animate={clickedSection === Section.ABOUT
            ? { x: 0, transition: { duration: 0.7 } }
            : { x: '100vw', transition: { duration: 0.5 } }}
         className="space-y-4 "
      >
         <AccordionItem value="item-3" className="card-base !rounded-2xl space-y-4 px-4 py-6">
            <AccordionTrigger>
               <h2 className="text-xl font-semibold ">
                  {t("about.education")}
               </h2>
            </AccordionTrigger>
            <AccordionContent className="relative rounded-2xl overflow-hidden space-y-3 font-sans isolate group">
               {education.map((edu) => (
                  <div key={edu.id} className="relative rounded-2xl overflow-hidden font-sans isolate group">
                     <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-info transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
                     <div className="relative z-10 flex flex-col justify-center">
                        <div className="md:flex justify-between items-center">
                           <div className=" font-medium text-[1.1rem] px-5 py-2 transition-transform duration-300 group-hover:translate-x-[0.15rem]">
                              {edu.place_of_study}
                           </div>
                           <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                              {new Date(edu.init_date).getFullYear()} - {edu.currently ? 'Present' : new Date(edu.finish_date!).getFullYear()}
                           </div>
                        </div>
                        <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                           {edu.graduate}
                        </div>
                        {edu.honors && (
                           <p className="px-5 text-[1.1rem] transition-transform duration-300 group-hover:translate-x-1">
                              <span className=" font-medium mr-1">Honors:</span>
                              {edu.honors}
                           </p>
                        )}
                     </div>
                  </div>
               ))}
            </AccordionContent>
         </AccordionItem>
      </motion.section>
   )
}
