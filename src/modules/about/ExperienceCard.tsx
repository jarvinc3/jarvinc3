import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslate } from "@/hooks/use-translate";
import { motion } from 'framer-motion';

export const ExperienceCard = () => {
   const { t } = useTranslate();

   return (
      <motion.section
         initial={{ opacity: 0, x: 100 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: -100 }}
         transition={{ duration: 0.5 }}
         className="space-y-4 "
      >
         <AccordionItem value="item-2" className="card-base !rounded-2xl px-4 pt-6">
            <AccordionTrigger>
               <h2 className="mb-6 text-xl font-semibold ">
                  {t("about.experience")}
               </h2>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-8 text-balance">
               <div className="relative rounded-2xl overflow-hidden font-sans isolate group">
                  <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-info transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
                  <div className="relative z-10 flex flex-col justify-center">
                     <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                        {t("about.experience1Period")}
                     </div>
                     <div className=" font-medium text-[1.1rem] px-5 pb-1 transition-transform duration-300 group-hover:translate-x-[0.15rem]">
                        {t("about.experience1Title")}
                     </div>
                     <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                        {t("about.experience1Company")}
                     </div>
                     <ul className="px-5 mt-3 text-[1.1rem] transition-transform duration-300 group-hover:translate-x-1 space-y-2">
                        <li>
                           {t("about.experience1Description1")}
                        </li>
                        <li>
                           {t("about.experience1Description2")}
                        </li>
                        <li>
                           {t("about.experience1Description3")}
                        </li>
                        <li>
                           {t("about.experience1Description4")}
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="relative rounded-2xl overflow-hidden font-sans isolate group mb-4">
                  <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-success transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
                  <div className="relative z-10 flex flex-col justify-center">
                     <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                        {t("about.experience2Period")}
                     </div>
                     <div className=" font-medium text-[1.1rem] px-5 pb-1 transition-transform duration-300 group-hover:translate-x-[0.15rem]">
                        {t("about.experience2Title")}
                     </div>
                     <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                        {t("about.experience2Company")}
                     </div>
                     <ul className="px-5 mt-3 text-[1.1rem] transition-transform duration-300 group-hover:translate-x-1 space-y-2">
                        <li>
                           {t("about.experience2Description1")}
                        </li>
                        <li>
                           {t("about.experience2Description2")}
                        </li>
                        <li>
                           {t("about.experience2Description3")}
                        </li>
                     </ul>
                  </div>
               </div>
            </AccordionContent>
         </AccordionItem>
      </motion.section>
   )
}
