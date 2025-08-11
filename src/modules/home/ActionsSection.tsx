import { DownloadCV } from "@/components/lib/downloadCV";
import { ThemeToggle } from "@/components/lib/theme-toggle";
import { Card } from "@/components/ui/card";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { SectionProps } from "../App";

export const ActionsSection = ({ ...props }: SectionProps) => {
   const { lang, toggleLang } = useTranslate();
   return (
      <Card
         {...props}
      >
         <div className="h-32 xl:h-full w-full grid grid-cols-3 gap-4 p-4">
            <DownloadCV />

            <div
               onClick={toggleLang}
               className="neu-button cursor-pointer flex flex-col items-center justify-center hover:scale-105"
            >
               <Icon
                  icon={lang === "en" ? "icon-park-outline:english" : "material-symbols:language-spanish"}
                  className={`hover:scale-105 transition-all duration-200 ${lang === "en" ? "size-10" : "border-4 size-9 rounded-md"}`}
               />
            </div>

            <ThemeToggle />
         </div>
      </Card>
   )
}
