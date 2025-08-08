import { DownloadCV } from "@/components/lib/downloadCV";
import { ThemeToggle } from "@/components/lib/theme-toggle";
import { Section } from "@/components/types/section.types";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useResponsive } from "@/hooks/use-responsive";
import { useSectionClick } from "@/hooks/use-section";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import type { TranslationKey } from "../types/translations.index";

const navItems = [
   {
      name: "Home",
      icon: "mynaui:home-solid",
      section: Section.HOME
   },
   {
      name: "About",
      icon: "fluent:contact-card-32-regular",
      section: Section.ABOUT
   },
   {
      name: "Projects",
      icon: "gg:work-alt",
      section: Section.PROJECTS
   },
   {
      name: "Contact",
      icon: "fluent:contact-card-link-16-regular",
      section: Section.CONTACT
   }
]

export const NavbarActions = () => {
   const { clickedSection, setClickedSection, goBack } = useSectionClick();
   const [isOpen, setIsOpen] = useState({ likns: false, tools: false });
   const [showMobileBars, setShowMobileBars] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);
   const { lang, toggleLang } = useTranslate();
   const { isTablet } = useResponsive();
   const { t } = useTranslate();

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;

         if (Math.abs(currentScrollY - lastScrollY) < 20) return;

         const goingDown = currentScrollY > lastScrollY;
         setShowMobileBars(!goingDown);

         setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [lastScrollY]);

   return (
      <div>

         {isTablet && clickedSection !== Section.PROJECT &&
            <motion.div
               initial={{ opacity: 0 }}
               onMouseEnter={() => setIsOpen({
                  likns: true,
                  tools: false
               })}
               onMouseLeave={() => setIsOpen({
                  likns: false,
                  tools: false
               })}
               animate={clickedSection !== Section.HOME
                  ? { opacity: 1, transition: { duration: 1, delay: 1 } }
                  : { opacity: 0, transition: { duration: 0.5 } }}
               className="card-secondary hidden md:block absolute top-4 left-4 z-50 !rounded-xl text-primary-foreground transition-transform duration-300"
            >
               <div onClick={() => setIsOpen({ likns: !isOpen.likns, tools: !isOpen.tools })} className="p-4 cursor-pointer flex items-center justify-center">
                  <Icon
                     icon={isOpen.likns
                        ? "ic:round-add"
                        : "qlementine-icons:menu-dots-16"
                     }
                     className="size-9 transition-all duration-300 hover:scale-110 group-hover:scale-110 group-hover:drop-shadow-muted-foreground group-hover:drop-shadow-lg"
                  />
               </div>
               <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen.tools ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div onClick={() => setIsOpen({ likns: false, tools: true })} className="h-full w-full grid grid-cols-1 gap-4 p-2 mt-2">
                     <DownloadCV isNavbar />
                     <div onClick={toggleLang} className="neu-button cursor-pointer !rounded-lg flex flex-col items-center justify-center hover:scale-105">
                        <Icon
                           icon={lang === "en" ? "icon-park-outline:english" : "material-symbols:language-spanish"}
                           className={`hover:scale-105 transition-all duration-200 ${lang === "en" ? "size-8" : "border-4 size-8 rounded-md"}`}
                        />
                     </div>
                     <ThemeToggle />
                  </div>
               </div>
               <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen.likns ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="h-full w-full grid grid-cols-1 gap-4 p-2 mt-2">
                     {navItems.map(({ name, icon, section }, index) => (
                        <button
                           key={index}
                           className="neu-button group/button relative cursor-pointer flex items-center justify-center p-2 !rounded-lg hover:translate-y-2 transition-all duration-250 hover:from-[#331029] hover:to-[#310413]"
                           onClick={() => (setClickedSection(section))}
                        >
                           <Icon icon={icon} className="size-8 transition-all duration-250" />
                           <span className="absolute opacity-0 group-hover/button:opacity-100 group-hover/button:text-secondary-foreground group-hover/button:text-md group-hover/button:-translate-y-10 duration-500">
                              {name}
                           </span>
                        </button>
                     ))}
                  </div>
               </div>
            </motion.div>
         }

         {!isTablet && clickedSection !== Section.PROJECT &&
            <motion.div
               className="absolute z-50 top-1/2 left-2 md:left-4 -translate-y-1/2 hidden md:flex flex-col"
               animate={clickedSection !== Section.HOME
                  ? { x: 0, transition: { duration: 0.5, delay: 0.5 } }
                  : { x: '-100vw', transition: { duration: 0.5 } }
               }
            >
               <div className="flex flex-col items-center gap-4">
                  <div className="h-6 w-0.5 bg-stone-400" />
                  <button onClick={goBack} className='neu-button size-10 flex items-center justify-center !rounded-xl'>
                     <Icon icon="mdi:arrow-left" className="size-6" />
                  </button>
                  <div className="h-6 w-0.5 bg-stone-400" />
               </div>
               {navItems.map((item, i) => (
                  <div key={i} className='flex flex-col items-center gap-4'>
                     <div className="h-6 w-0.5 bg-stone-400" />
                     <button
                        onClick={() => setClickedSection(item.section)}
                        className={cn(
                           'group relative size-10 flex items-center justify-center !rounded-xl',
                           clickedSection === item.section ? 'card-base' : 'neu-button'
                        )}
                     >
                        <Icon icon={item.icon} className={`size-6 ${clickedSection === item.section ? 'text-info' : ''}`} />
                        <div
                           className="bg-secondary-foreground p-2 rounded-md hidden group-hover:flex absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full"                     >
                           <span className="text-secondary whitespace-nowrap">{t(("general." + item.name) as TranslationKey)}</span>
                           <div className="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"></div>
                        </div>
                     </button>
                     <div className="h-6 w-0.5 bg-stone-400" />
                  </div>
               ))}
            </motion.div>
         }

         {Section.PROJECT !== clickedSection &&
            <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 px-2 transition-transform duration-300 ${showMobileBars ? 'translate-y-0' : 'translate-y-full'}`}>
               <nav className="card-secondary grid grid-cols-5 px-2 items-center h-14 rounded-3xl shadow-md mb-2 p-2">
                  {navItems.map((item) => (
                     <button
                        onClick={() => setClickedSection(item.section)}
                        key={item.name}
                        className={`h-full cursor-pointer flex items-center justify-center 
                           ${clickedSection === item.section ? 'neu-button rounded-2xl' : 'text-primary-foreground bg-transparent'}
                        `}
                     >
                        <Icon icon={item.icon} className="size-6" />
                     </button>
                  ))}

                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                        <div className="cursor-pointer flex items-center justify-center">
                           <Icon
                              icon="qlementine-icons:menu-dots-16"
                              className="size-6 text-primary-foreground"
                           />
                        </div>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className="p-4 card-secondary grid grid-cols-1 gap-4" align="end">
                        <DownloadCV isNavbar />
                        <div onClick={toggleLang} className="neu-button p-2 cursor-pointer flex flex-col items-center justify-center hover:scale-105">
                           <Icon
                              icon={lang === "en" ? "icon-park-outline:english" : "material-symbols:language-spanish"}
                              className={`hover:scale-105 transition-all duration-200 ${lang === "en" ? "size-7" : "size-7"}`}
                           />
                        </div>
                        <ThemeToggle isNavbar />
                     </DropdownMenuContent>
                  </DropdownMenu>
               </nav>
            </div>
         }
      </div >
   )
}
