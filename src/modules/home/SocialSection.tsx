import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { SectionProps } from "../App";

export const SocialSection = ({ ...props }: SectionProps) => {
   const { t } = useTranslate();

   const SocialIcon = ({ icon }: { icon: string }) => (
      <div className="neu-button cursor-pointer p-1 rounded-full flex items-center justify-center hover:scale-105 hover:text-primary">
         <Icon icon={icon} className="size-7" />
      </div>
   );

   return (
      <Card
         {...props}
      >
         <div className="group relative h-full w-full flex flex-col justify-between gap-6 p-4 transition-all duration-300 ease-linear">
            <div className="card-secondary h-full grid grid-cols-2 gap-4 p-2 md:p-4">
               {[
                  "line-md:github-loop",
                  "line-md:linkedin",
                  "line-md:instagram",
                  "basil:gmail-outline"
               ].map((icon) => (
                  <SocialIcon key={icon} icon={icon} />
               ))}
            </div>
            <div>
               <p className="text-sm text-primary-foreground">{t("home.stay")}</p>
               <h2 className="text-2xl font-semibold text-primary-foreground">{t("home.profiles")}</h2>
               <Button variant="icon" />
            </div>
         </div>
      </Card>
   )
}
