import { Section } from "@/components/types/section.types";
import { Card } from "@/components/ui/card";
import { useAboutMe } from "@/hooks";
import { useSectionClick } from "@/hooks/use-section";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { SectionProps } from "../App";

export const ProfileCard = ({ ...props }: SectionProps) => {
   const { setClickedSection } = useSectionClick();
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
         <section className="relative flex flex-col items-end gap-4 p-4">
            <div className="absolute top-4  left-4 card-secondary size-24 p-2 !rounded-full flex items-center justify-center overflow-hidden">
               <img src="/images/pixel_art.png" alt="profile" className="w-full h-full object-contain" />
            </div>
            <div className="w-2/3 h-24 flex flex-col justify-center text-end">
               <h2 className="text-3xl font-semibold text-primary-foreground">
                  {aboutMe.name} {aboutMe.last_name}
               </h2>
               <p className="text-secondary-foreground">{aboutMe.job_position}</p>
            </div>
            <button
               className="neu-button cursor-pointer w-full h-14 text-primary-foreground text-xl font-semibold !rounded-2xl xl:hidden flex items-center justify-center"
               onClick={() => setClickedSection(Section.CONTACT)}
            >
               {t("about.contactMe")}
            </button>
         </section>
         <div className="hidden xl:hidden md:grid grid-cols-2 gap-4 py-4 pr-4">
            {aboutMe.social_media.map((media, index) => (
               <SocialIcon key={index} icon={media.icon} url={media.url} />
            ))}
         </div>
      </Card>
   )
}
