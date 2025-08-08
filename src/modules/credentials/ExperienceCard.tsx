import { useTranslate } from "@/hooks/use-translate";
import { motion } from 'framer-motion';

export const ExperienceCard = () => {
   const { t } = useTranslate();

   return (
      <motion.section
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -100 }}
         transition={{ duration: 0.5 }}
         className="p-6 space-y-4 "
      >
         <h2 className="text-xl font-semibold ">
            {t("credentials.experience")}
         </h2>
         <div className="flex flex-col gap-8 text-balance">
            <div className="relative rounded-2xl overflow-hidden font-sans isolate group">
               <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-info transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />

               <div className="relative z-10 flex flex-col justify-center">
                  <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                     {t("credentials.experience1Period")}
                  </div>
                  <div className=" font-medium text-[1.1rem] px-5 pb-1 transition-transform duration-300 group-hover:translate-x-[0.15rem]">
                     {t("credentials.experience1Title")}
                  </div>
                  <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                     {t("credentials.experience1Company")}
                  </div>
                  <ul className="px-5 mt-3 text-[1.1rem] transition-transform duration-300 group-hover:translate-x-1 space-y-2">
                     <li>
                        {t("credentials.experience1Description1")}
                     </li>
                     <li>
                        {t("credentials.experience1Description2")}
                     </li>
                     <li>
                        {t("credentials.experience1Description3")}
                     </li>
                     <li>
                        {t("credentials.experience1Description4")}
                     </li>
                  </ul>
               </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden font-sans isolate group">
               <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-success transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
               <div className="relative z-10 flex flex-col justify-center">
                  <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                     {t("credentials.experience2Period")}
                  </div>
                  <div className=" font-medium text-[1.1rem] px-5 pb-1 transition-transform duration-300 group-hover:translate-x-[0.15rem]">
                     {t("credentials.experience2Title")}
                  </div>
                  <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                     {t("credentials.experience2Company")}
                  </div>
                  <ul className="px-5 mt-3 text-[1.1rem] transition-transform duration-300 group-hover:translate-x-1 space-y-2">
                     <li>
                        {t("credentials.experience2Description1")}
                     </li>
                     <li>
                        {t("credentials.experience2Description2")}
                     </li>
                     <li>
                        {t("credentials.experience2Description3")}
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </motion.section>
   )
}
