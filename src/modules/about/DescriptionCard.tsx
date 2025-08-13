import { Section } from '@/components/types/section.types';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useAboutMe, useSectionClick } from '@/hooks';
import { useTranslate } from '@/hooks/use-translate';
import { motion } from 'framer-motion';

export const DescriptionCard = () => {
   const { clickedSection } = useSectionClick();
   const aboutMe = useAboutMe();
   const { t } = useTranslate();

   return (
      <motion.section
         initial={{ x: '100vw' }}
         animate={clickedSection === Section.ABOUT
            ? { x: 0, transition: { duration: 0.5 } }
            : { x: '100vw', transition: { duration: 0.5 } }}
         className="space-y-4"
      >
         <AccordionItem value="item-1" className="card-base !rounded-2xl px-4 pt-6">
            <AccordionTrigger>
               <h2 className="mb-6 text-xl font-semibold ">
                  {t("about.aboutMe")}
               </h2>
            </AccordionTrigger>
            <AccordionContent className="relative rounded-2xl overflow-hidden space-y-3 font-sans isolate group">
               <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-success transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
               <p className="px-5 transition-transform duration-300 group-hover:translate-x-1">
                  {aboutMe.description[0]}
               </p>
               <p className="px-5 transition-transform duration-300 group-hover:translate-x-1">
                  {aboutMe.description[1]}
               </p>
               <p className="px-5 mb-6 transition-transform duration-300 group-hover:translate-x-1">
                  {aboutMe.description[2]}
               </p>
            </AccordionContent>
         </AccordionItem>
      </motion.section>
   )
}
