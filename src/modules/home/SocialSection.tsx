import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAboutMe } from "@/hooks";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { SectionProps } from "../App";

export const SocialSection = ({ ...props }: SectionProps) => {
   const { t } = useTranslate();
   const aboutMe = useAboutMe();

   const SocialIcon = ({ icon, url }: { icon: string, url: string }) => (
      <a href={url} target="_blank" rel="noopener noreferrer" className="neu-button cursor-pointer p-1 !rounded-2xl flex items-center justify-center hover:scale-105 hover:text-primary">
         <Icon icon={icon} className="size-7" />
      </a>
   );

   return (
      <Card
         {...props}
      >
         <div className="group relative h-full w-full flex flex-col justify-between gap-6 p-3 md:p-4 transition-all duration-300 ease-linear">
            <div className="card-secondary h-full !rounded-3xl grid grid-cols-2 gap-2 md:gap-4 p-2 md:p-4">
               {aboutMe.social_media.map((media, index) => (
                  <SocialIcon key={index} icon={media.icon} url={media.url} />
               ))}
            </div>
            <div className="px-1">
               <p className="text-sm text-primary-foreground">{t("home.stay")}</p>
               <h2 className="text-2xl font-semibold text-primary-foreground">{t("home.profiles")}</h2>
               <Button variant="icon" />
            </div>
         </div>
      </Card>
   )
}
