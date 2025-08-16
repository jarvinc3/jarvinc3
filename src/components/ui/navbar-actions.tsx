import { Section } from "@/components/types/section.types";
import { useSectionClick } from "@/hooks/use-section";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
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
   const { t } = useTranslate();

   return (
      <div>
         <motion.div
            className="fixed z-50 top-1/2 -left-1 xl:left-4 -translate-y-1/2 flex flex-col"
            animate={clickedSection !== Section.HOME && clickedSection !== Section.PROJECT
               ? { x: 0, transition: { duration: 0.5, delay: 0.5 } }
               : { x: '-100vw', transition: { duration: 0.5 } }
            }
         >
            <div className="flex flex-col items-center gap-4">
               <div className="h-6 w-0.5 bg-stone-400" />
               <button onClick={goBack} className='neu-button size-10 flex items-center !rounded-r-xl !rounded-l-none justify-center !rounded-xl'>
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
                        'group relative size-10 flex items-center justify-center !rounded-r-xl !rounded-l-none xl:!rounded-xl',
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
      </div>
   )
}
