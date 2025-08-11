import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslate } from '@/hooks/use-translate';
import { motion } from 'framer-motion';

export const DescriptionCard = () => {
   const { t } = useTranslate();

   return (
      <motion.section
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -100 }}
         transition={{ duration: 0.5 }}
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
                  {t("about.aboutDescription1")}
               </p>
               <p className="px-5 transition-transform duration-300 group-hover:translate-x-1">
                  {t("about.aboutDescription2")}
               </p>
               <p className="px-5 mb-6 transition-transform duration-300 group-hover:translate-x-1">
                  {t("about.aboutDescription3")}
               </p>
            </AccordionContent>
         </AccordionItem>
      </motion.section>
   )
}
