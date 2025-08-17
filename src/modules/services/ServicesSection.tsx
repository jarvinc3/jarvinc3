import { Card } from "@/components/ui/card";
import { useServices } from "@/hooks";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { SectionProps } from "../App";

export const ServicesSection = ({ ...props }: SectionProps) => {
   const { t } = useTranslate();
   const services = useServices();

   return (
      <Card
         {...props}
      >
         <div className="w-full flex items-center justify-between">
            <Icon icon="solar:star-fall-linear" className="size-12 md:size-16" />
            <h2 className="w-full text-center text-3xl md:text-4xl xl:text-5xl font-semibold text-primary-foreground">{t("services.myOfferings")}</h2>
            <Icon icon="solar:star-fall-linear" className="size-12 md:size-16 rotate-180" />
         </div>
         <div data-scrollable="true" className="card-base relative w-full h-full md:overflow-y-auto scroll-hide grid grid-cols-1 xl:grid-cols-2 gap-6 p-4">
            {services.map((service) => (
               <div key={service.id} className="card-secondary relative w-full h-full flex flex-col gap-1 p-4">
                  <div className="w-full flex gap-2 items-center">
                     <img src={service.icon} alt={service.service.toLowerCase()} className="size-6" />
                     <h2 className="text-xl font-semibold ">
                        {service.service}
                     </h2>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden space-y-3 font-sans isolate group">
                     <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-success transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
                     <ul className="px-5 transition-transform duration-300 group-hover:translate-x-1 space-y-2">
                        {service.description.map((desc: string, descIndex: number) => (
                           <li key={descIndex}>
                              {desc}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            ))}
         </div>
      </Card>
   )
}
