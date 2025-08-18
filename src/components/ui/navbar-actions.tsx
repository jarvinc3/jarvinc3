import { cn } from "@/components/lib/utils";
import { Section, SLIDES } from "@/components/types/section.types";
import type { TranslationKey } from "@/components/types/translations.index";
import { useSectionClick } from "@/hooks/use-section";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export const NavbarActions = ({ isScrolling }: { isScrolling: boolean }) => {
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
               <button onClick={goBack} className='neu-button size-10 flex items-center !rounded-r-xl !rounded-l-none justify-center !rounded-xl xl:!rounded-l-xl'>
                  <Icon icon="mdi:arrow-left" className="size-6" />
               </button>
               <div className="h-6 w-0.5 bg-stone-400" />
            </div>
            {SLIDES.map((slide, i) => (
               <div key={i} className='flex flex-col items-center gap-4'>
                  <div className="h-6 w-0.5 bg-stone-400" />
                  <button
                     onClick={() => !isScrolling && setClickedSection(slide.section)}
                     className={cn(
                        'group relative size-10 flex items-center justify-center !rounded-r-xl !rounded-l-none xl:!rounded-xl',
                        clickedSection === slide.section ? 'card-base' : 'neu-button'
                     )}
                  >
                     <Icon icon={slide.icon} className={`size-6 ${clickedSection === slide.section ? 'text-info' : ''}`} />
                     <div
                        className="bg-secondary-foreground p-2 rounded-md hidden group-hover:flex absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full"                     >
                        <span className="text-secondary whitespace-nowrap">{t(("general." + slide.name) as TranslationKey)}</span>
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
