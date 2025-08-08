import { Section } from "@/components/types/section.types";
import { Card } from "@/components/ui/card";
import { useSectionClick } from "@/hooks/use-section";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { SectionProps } from "../App";

const SocialIcon = ({ icon }: { icon: string }) => (
   <div className="neu-button cursor-pointer flex items-center p-2 justify-center hover:scale-105 hover:text-primary">
      <Icon icon={icon} className="size-7" />
   </div>
);

export const ProfileCard = ({ ...props }: SectionProps) => {
   const { setClickedSection } = useSectionClick();
   const { t } = useTranslate();

   return (
      <Card
         {...props}
      >
         <section className="md:grid mb-4 md:grid-cols-2 xl:grid-cols-1 px-4 xl:space-y-4">
            <div className=" flex items-center justify-center p-4 md:p-0 xl:p-4 rounded-xl overflow-hidden">
               <img
                  src="/images/pixel_art.png"
                  alt="profile-pictureee"
                  className="w-[80%] md:w-[60%] rounded-xl object-contain"
               />
            </div>
            <div className="flex flex-col justify-between gap-5">
               <div className="pb-4 md:pt-4">
                  <h2 className="text-3xl text-center font-semibold text-primary-foreground">
                     Jarvin Collado
                  </h2>
                  <p className="text-center text-secondary-foreground">{t("credentials.fullStackDeveloper")}</p>
               </div>
               <div className="card-secondary grid grid-cols-4 gap-4 p-2 py-4 md:mx-8 md:p-4">
                  {[
                     "line-md:github-loop",
                     "line-md:linkedin",
                     "line-md:instagram",
                     "basil:gmail-outline"
                  ].map((icon) => (
                     <SocialIcon key={icon} icon={icon} />
                  ))}
               </div>
               <div className="flex items-center justify-center md:mx-8 md:mb-8">
                  <button
                     onClick={() => setClickedSection(Section.CONTACT)}
                     className="neu-button cursor-pointer w-full py-4 text-primary-foreground text-xl font-semibold !rounded-2xl flex items-center justify-center"
                  >
                     {t("credentials.contactMe")}
                  </button>
               </div>
            </div>
         </section>
      </Card>
   )
}
