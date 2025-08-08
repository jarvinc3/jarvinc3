import { Card } from "@/components/ui/card";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { SectionProps } from "../App";

export const ServicesSection = ({ ...props }: SectionProps) => {
   const { t } = useTranslate();

   return (
      <Card
         {...props}
      >
         <div className="w-full flex items-center justify-between">
            <Icon icon="solar:star-fall-linear" className="size-12 md:size-16" />
            <h2 className="w-full text-center text-3xl md:text-4xl xl:text-5xl font-semibold text-primary-foreground">{t("services.myOfferings")}</h2>
            <Icon icon="solar:star-fall-linear" className="size-12 md:size-16 rotate-180" />
         </div>
         <div className="card-base relative w-full h-full md:overflow-y-auto scroll-hide grid grid-cols-1 xl:grid-cols-2 gap-6 p-4">
            <div className="card-secondary relative w-full h-full flex flex-col gap-1 p-4">
               <div className="w-full flex gap-2 items-center">
                  <img src="https://img.icons8.com/?size=100&id=2778&format=png&color=000000" alt="frontend" className="size-6" />
                  <h2 className="text-xl font-semibold ">
                     {t("services.frontend")}
                  </h2>
               </div>
               <div className="relative rounded-2xl overflow-hidden space-y-3 font-sans isolate group">
                  <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-success transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
                  <ul className="px-5 transition-transform duration-300 group-hover:translate-x-1 space-y-2">
                     <li>
                        {t("services.frontendDescription1")}
                     </li>
                     <li>
                        {t("services.frontendDescription2")}
                     </li>
                     <li>
                        {t("services.frontendDescription3")}
                     </li>
                     <li>
                        {t("services.frontendDescription4")}
                     </li>
                     <li>
                        {t("services.frontendDescription5")}
                     </li>
                     <li>
                        {t("services.frontendDescription6")}
                     </li>
                  </ul>
               </div>
            </div>
            <div className="card-secondary relative w-full h-full flex flex-col gap-1 p-4">
               <div className="w-full flex gap-2 items-center">
                  <img src="https://img.icons8.com/?size=100&id=116827&format=png&color=000000" alt="frontend" className="size-6" />
                  <h2 className="text-xl font-semibold ">
                     {t("services.backend")}
                  </h2>
               </div>
               <div className="relative rounded-2xl overflow-hidden space-y-3 font-sans isolate group">
                  <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-info transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
                  <ul className="px-5 transition-transform duration-300 group-hover:translate-x-1 space-y-2">
                     <li>
                        {t("services.backendDescription1")}
                     </li>
                     <li>
                        {t("services.backendDescription2")}
                     </li>
                     <li>
                        {t("services.backendDescription3")}
                     </li>
                     <li>
                        {t("services.backendDescription4")}
                     </li>
                     <li>
                        {t("services.backendDescription5")}
                     </li>
                     <li>
                        {t("services.backendDescription6")}
                     </li>
                  </ul>
               </div>
            </div>
            <div className="card-secondary relative w-full h-full flex flex-col gap-1 p-4">
               <div className="w-full flex gap-2 items-center">
                  <img src="https://img.icons8.com/?size=100&id=24870&format=png&color=000000" alt="frontend" className="size-6" />
                  <h2 className="text-xl font-semibold ">
                     {t("services.uiUxDesign")}
                  </h2>
               </div>
               <div className="relative rounded-2xl overflow-hidden space-y-3 font-sans isolate group">
                  <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-purple-500 transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
                  <ul className="px-5 transition-transform duration-300 group-hover:translate-x-1 space-y-2">
                     <li>
                        {t("services.uiUxDescription1")}
                     </li>
                     <li>
                        {t("services.uiUxDescription2")}
                     </li>
                     <li>
                        {t("services.uiUxDescription3")}
                     </li>
                     <li>
                        {t("services.uiUxDescription4")}
                     </li>
                     <li>
                        {t("services.uiUxDescription5")}
                     </li>
                     <li>
                        {t("services.uiUxDescription6")}
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </Card>
   )
}
