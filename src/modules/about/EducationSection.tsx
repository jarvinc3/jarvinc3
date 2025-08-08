import { Card } from "@/components/ui/card";
import { useTranslate } from "@/hooks/use-translate";
import type { SectionProps } from "../App";

export const EducationSection = ({ ...props }: SectionProps) => {
   const { t } = useTranslate();

   return (
      <Card
         {...props}
      >
         <div className="relative w-full h-full flex flex-col gap-1 p-4">
            <h2 className="text-lg font-semibold text-primary-foreground">{t("about.education")}</h2>
            <div className="h-full flex flex-col justify-evenly">
               <div className="relative rounded-2xl overflow-hidden text-primary-foreground font-sans isolate group">
                  <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-info transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />

                  <div className="relative z-10 flex flex-col justify-center">
                     <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                        May 2025 - Jun 2029
                     </div>
                     <div className="text-primary-foreground font-medium text-[1.1rem] px-5 pt-2 transition-transform duration-300 group-hover:translate-x-[0.15rem]">
                        UNIVERSIDAD DEL CARIBE
                     </div>
                     <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                        B.S. in Software Engineering
                     </div>
                  </div>
               </div>
               <div className="relative rounded-2xl overflow-hidden text-primary-foreground font-sans isolate group">
                  <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-success transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />

                  <div className="relative z-10 flex flex-col justify-center">
                     <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                        Jan 2023 – Nov 2023
                     </div>
                     <div className="text-primary-foreground font-medium text-[1.1rem] px-5 pt-2 transition-transform duration-300 group-hover:translate-x-[0.15rem]">
                        FUNVAL INTERNATIONAL
                     </div>
                     <div className="text-secondary-foreground px-5 transition-transform duration-300 group-hover:translate-x-1">
                        Technician in Fullstack Web Development
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Card>
   )
}
