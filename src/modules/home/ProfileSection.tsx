import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAboutMe } from "@/hooks";
import { useTranslate } from "@/hooks/use-translate";
import type { SectionProps } from "../App";

export const ProfileSection = ({ ...props }: SectionProps) => {
   const { t } = useTranslate();
   const aboutMe = useAboutMe();

   return (
      <Card
         {...props}
      >
         <div className="group relative cursor-pointer h-full w-full flex flex-col md:flex-row items-center justify-between p-6 md:gap-6 md:p-10">
            <div className="p-4 md:w-1/2 h-1/2 md:h-full xl:h-2/3 hidden card-secondary md:flex items-center justify-center overflow-hidden !rounded-tl-3xl !rounded-br-3xl !rounded-none">
               <img src="/images/pixel_art.png" alt="profile" className="w-full h-full object-contain" />
            </div>
            <div className="card-secondary absolute top-16 right-8 size-24 p-2 !rounded-full flex items-center justify-center md:hidden overflow-hidden">
               <img src="/images/pixel_art.png" alt="profile" className="w-full h-full object-contain" />
            </div>
            <div className="md:w-1/2 h-full flex flex-col justify-center gap-5">
               <p className="text-secondary-foreground">{t("home.hello")}</p>
               <h2 className="text-5xl font-semibold">{aboutMe.name} {aboutMe.last_name}</h2>
               <p className="text-secondary-foreground">{aboutMe.short_description}</p>
               <Button variant="icon" />
            </div>
         </div>
      </Card>
   )
}
