import { Section } from "@/components/types/section.types";
import { Card } from "@/components/ui/card";
import { useAboutMe } from "@/hooks";
import { useSectionClick } from "@/hooks/use-section";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { SectionProps } from "../App";

const SocialIcon = ({ icon, url }: { icon: string, url: string }) => (
   <a href={url} target="_blank" rel="noopener noreferrer" className="neu-button cursor-pointer p-1 md:p-2 !rounded-2xl flex items-center justify-center hover:scale-105 hover:text-primary">
      <Icon icon={icon} className="size-7" />
   </a>
);

export const ProfileCard = ({ ...props }: SectionProps) => {
   const { setClickedSection } = useSectionClick();
   const { t } = useTranslate();
   const aboutMe = useAboutMe();

   return (
      <Card
         {...props}
      >
         <section className="md:grid md:grid-cols-2 xl:grid-cols-1 space-y-4 p-4">
            <div className=" flex items-center justify-center rounded-xl overflow-hidden">
               <img
                  src="/images/pixel_art.png"
                  alt="profile-pictureee"
                  className="w-[80%] md:w-[60%] rounded-xl object-contain"
               />
            </div>
            <div className="flex flex-col justify-between gap-4">
               <div className="">
                  <h2 className="text-3xl text-center font-semibold text-primary-foreground">
                     {aboutMe.name} {aboutMe.last_name}
                  </h2>
                  <p className="text-center text-secondary-foreground">{aboutMe.job_position}</p>
               </div>
               <div className="card-secondary hidden w-full md:grid grid-cols-4 gap-4 p-2 md:p-4 !rounded-2xl">
                  {aboutMe.social_media.map((media, index) => (
                     <SocialIcon key={index} icon={media.icon} url={media.url} />
                  ))}
               </div>
               <div className="flex items-center justify-center">
                  <button
                     onClick={() => setClickedSection(Section.CONTACT)}
                     className="neu-button cursor-pointer w-full py-4 text-primary-foreground text-xl font-semibold !rounded-2xl flex items-center justify-center"
                  >
                     {t("about.contactMe")}
                  </button>
               </div>
            </div>
         </section>
      </Card>
   )
}
