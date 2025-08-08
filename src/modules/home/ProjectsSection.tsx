import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslate } from "@/hooks/use-translate";
import type { SectionProps } from "../App";

export const ProjectsSection = ({ ...props }: SectionProps) => {
   const { t } = useTranslate();

   return (
      <Card
         {...props}
      >
         <div className="group relative cursor-pointer h-full w-full flex flex-col justify-between p-6 gap-6">
            <div className="h-full p-4 flex items-center justify-center overflow-hidden">
               <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png" alt="projects" className="scale-125 w-full h-full object-contain" />
            </div>
            <div>
               <p className="text-sm text-secondary-foreground">{t("home.showcase")}</p>
               <h2 className="md:text-2xl font-semibold text-primary-foreground">{t("home.projects")}</h2>
               <Button variant="icon" />
            </div>
         </div>
      </Card>
   )
}
