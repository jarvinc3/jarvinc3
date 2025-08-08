import { useTranslate } from "@/hooks/use-translate";
import { motion } from 'framer-motion';

export const EducationCard = () => {
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
            {t("credentials.education")}
         </h2>
         <div className="flex flex-col gap-8 text-balance">
            <div className="relative rounded-2xl overflow-hidden  font-sans isolate group">
               <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-info transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />

               <div className="relative z-10 flex flex-col justify-center">
                  <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                     {t("credentials.education1Period")}
                  </div>
                  <div className=" font-medium text-[1.1rem] px-5 py-2 transition-transform duration-300 group-hover:translate-x-[0.15rem]">
                     {t("credentials.education1School")}
                  </div>
                  <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                     {t("credentials.education1Degree")}
                  </div>
               </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden  font-sans isolate group">
               <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-success transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />

               <div className="relative z-10 flex flex-col justify-center">
                  <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                     {t("credentials.education2Period")}
                  </div>
                  <div className=" font-medium text-[1.1rem] px-5 py-2 transition-transform duration-300 group-hover:translate-x-[0.15rem]">
                     {t("credentials.education2School")}
                  </div>
                  <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                     {t("credentials.education2Degree")}
                  </div>
                  <p className="px-5 text-[1.1rem] transition-transform duration-300 group-hover:translate-x-1">
                     <span className=" font-medium mr-1">{t("credentials.education2Honors")}</span>
                     {t("credentials.education2HonorsText")}
                  </p>
               </div>
            </div>
         </div>
      </motion.section>
   )
}
