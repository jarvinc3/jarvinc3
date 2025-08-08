import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslate } from "@/hooks/use-translate";
import type { SectionProps } from "../App";

export const ServicesSection = ({ ...props }: SectionProps) => {
   const { t } = useTranslate();

   const ServiceButton = ({ imgSrc, label }: { imgSrc: string; label: string }) => (
      <button className="group/button relative cursor-pointer flex items-center justify-center p-2 rounded-md drop-shadow-xl from-gray-800 text-white font-semibold hover:translate-y-2 transition-all duration-250 hover:from-[#331029] hover:to-[#310413]">
         <img src={imgSrc} alt={label} className="size-12" />
         <span className="absolute opacity-0 group-hover/button:opacity-100 group-hover/button:text-gray-700 group-hover/button:text-md group-hover/button:-translate-y-10 duration-500">
            {label}
         </span>
      </button>
   );

   return (
      <Card
         {...props}
      >
         <div className="group relative cursor-pointer h-full w-full flex flex-col justify-between gap-6 p-6">
            <div className="h-full grid grid-cols-3 gap-4 p-4">
               <ServiceButton imgSrc="https://img.icons8.com/?size=100&id=2778&format=png&color=000000" label="Frontend" />
               <ServiceButton imgSrc="https://img.icons8.com/?size=100&id=116827&format=png&color=000000" label="Backend" />
               <ServiceButton imgSrc="https://img.icons8.com/?size=100&id=24870&format=png&color=000000" label="Web Design" />
            </div>
            <div>
               <p className="text-sm text-primary-foreground">{t("home.specialization")}</p>
               <h2 className="text-2xl font-semibold text-primary-foreground">{t("home.services")}</h2>
               <Button variant="icon" />
            </div>
         </div>
      </Card>
   )
}
