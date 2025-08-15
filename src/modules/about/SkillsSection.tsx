import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { SectionProps } from "../App";

export const SkillsSection = ({ ...props }: SectionProps) => {
   const { t } = useTranslate();

   return (
      <Card
         {...props}
      >
         <div className="group relative cursor-pointer h-full w-full flex flex-col justify-between p-6 gap-6">
            <div className="h-full p-4 flex items-center justify-center overflow-hidden">
               <Icon icon="streamline-freehand-color:analytics-board-graph-line" className="scale-75 size-full md:w-1/3 h-full object-contain" />
            </div>
            <div>
               <p className="text-sm text-secondary-foreground">{t("about.skillsSectionDescription")}</p>
               <h2 className="md:text-2xl font-semibold text-primary-foreground">{t("about.skillsSection")}</h2>
               <Button variant="icon" />
            </div>
         </div>
      </Card>
   )
}
