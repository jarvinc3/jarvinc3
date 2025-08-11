import { Section } from "@/components/types/section.types";
import { Card } from "@/components/ui/card";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { SectionProps } from "../App";

export const ContactInfo = ({ ...props }: SectionProps) => {
   const { t } = useTranslate();

   const SocialIcon = ({ icon }: { icon: string }) => (
      <div className="neu-button p-3 md:py-6 xl:py-4 rounded-full flex items-center justify-center">
         <Icon icon={icon} className="size-7" />
      </div>
   );

   return (
      <div
         {...props}
      >
         <div className="relative h-full w-full flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-col xl:justify-between gap-6 md:gap-10 pt-5 md:pt-10 xl:pt-0 xl:pr-8 transition-all duration-300 ease-linear">
            <Card
               type="base"
               animate="left"
               section={Section.CONTACT}
               className="flex flex-col gap-4 md:gap-6 !rounded-2xl p-4 h-full"
            >
               <h2 className="text-lg md:text-xl font-semibold text-primary-foreground">{t("contact.social")}</h2>
               <div className="grid grid-cols-4 md:grid-cols-1 xl:grid-cols-2 gap-4">
                  {[
                     "line-md:github-loop",
                     "line-md:linkedin",
                     "line-md:instagram",
                     "basil:gmail-outline"
                  ].map((icon) => (
                     <SocialIcon key={icon} icon={icon} />
                  ))}
               </div>
            </Card>
            <Card
               type="base"
               animate="bottom"
               section={Section.CONTACT}
               className="flex flex-col gap-6 md:gap-10 !rounded-2xl p-4 h-full"
            >
               <h2 className="text-lg md:text-xl font-semibold text-primary-foreground">{t("contact.contact")}</h2>
               <div className="flex flex-col gap-6 md:gap-10">
                  <div className="flex items-center gap-2">
                     <div className="card-secondary flex items-center p-6 !rounded-md justify-center">
                        <Icon icon="carbon:phone" className="size-8" />
                     </div>
                     <div className="relative rounded-2xl overflow-hidden font-sans isolate group">
                        <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-success transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
                        <div className="relative z-10 flex flex-col justify-center">
                           <h3 className="text-sm text-secondary-foreground font-semibold mb-1 px-5 transition-transform duration-300 group-hover:translate-x-1">{t("contact.number")}</h3>
                           <p className="px-5 transition-transform duration-300 group-hover:translate-x-1">+1 (809) 637-6631</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="card-secondary flex items-center p-6 !rounded-md justify-center">
                        <Icon icon="iconoir:mail" className="size-8" />
                     </div>
                     <div className="relative rounded-2xl overflow-hidden font-sans isolate group">
                        <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-info transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
                        <div className="relative z-10 flex flex-col justify-center">
                           <h3 className="text-sm text-secondary-foreground font-semibold mb-1 px-5 transition-transform duration-300 group-hover:translate-x-1">{t("contact.mail")}</h3>
                           <p className="px-5 transition-transform duration-300 group-hover:translate-x-1">jarvinct3@gmail.com</p>
                           <p className="px-5 transition-transform duration-300 group-hover:translate-x-1">jarvincollado@gmail.com</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="card-secondary flex items-center p-6 !rounded-md justify-center">
                        <Icon icon="mynaui:location" className="size-8" />
                     </div>
                     <div className="relative rounded-2xl overflow-hidden font-sans isolate group">
                        <div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-success transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
                        <div className="relative z-10 flex flex-col justify-center">
                           <h3 className="text-sm text-secondary-foreground font-semibold mb-1 px-5 transition-transform duration-300 group-hover:translate-x-1">{t("contact.location")}</h3>
                           <p className="px-5 transition-transform duration-300 group-hover:translate-x-1">
                              {t("contact.street")}, {" "}
                              {t("contact.city")}, {" "}
                              {t("contact.state")}, {" "}
                              {t("contact.country")}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </Card>
         </div>
      </div>
   )
}
