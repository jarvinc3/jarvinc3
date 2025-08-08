import { Card } from "@/components/ui/card";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { SectionProps } from "../App";

export const TogetherSection = ({ ...props }: SectionProps) => {
   const { t, lang } = useTranslate();

   return (
      <Card
         {...props}
      >
         <div className="group cursor-pointer h-full w-full flex flex-col items-center justify-between p-6">
            <div className="w-full">
               <Icon icon="mynaui:shooting-star" className="size-7 xl:size-12 text-primary-foreground" />
            </div>
            <div className={`flex flex-col items-center justify-center ${lang === 'es' ? 'text-center' : ''} gap-2`}>
               <h2 className="text-2xl md:text-4xl font-bold">
                  {t("home.lets")}<br />
                  <span className="text-blue-500">{t("home.together")}.</span>
               </h2>
            </div>
            <button className="w-full flex items-center justify-end">
               <Icon icon="material-symbols-light:bottom-right-click" className="size-7 cursor-pointer text-muted transition-all duration-250 group-hover:scale-110 group-hover:text-foreground" />
            </button>
         </div>
      </Card>
   )
}
