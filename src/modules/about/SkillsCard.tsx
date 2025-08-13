import { cn } from "@/components/lib/utils";
import { Section } from "@/components/types/section.types";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSkills } from "@/hooks";
import { useResponsive } from "@/hooks/use-responsive";
import { useSectionClick } from "@/hooks/use-section";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from 'framer-motion';

export const SkillsCard = () => {
   const { clickedSection } = useSectionClick();
   const { isMobile } = useResponsive();
   const { skills } = useSkills();
   const { t } = useTranslate();

   const SkillButton = ({ icon, label }: { icon: string; label: string }) => (
      <div className="tooltip-container inline-flex items-center relative group">
         <Icon icon={icon} className="size-8 md:size-10 cursor-pointer text-muted group-hover:scale-110 group-hover:text-foreground transition-all duration-250" />
         <span className="absolute pointer-events-none opacity-0 group-hover:opacity-100 px-4 py-2 text-sm font-medium text-white bg-[#1A1F2C] backdrop-blur-sm rounded-lg shadow-lg border border-neutral-800/10 transition-all duration-200 ease-in-out whitespace-nowrap z-50 bottom-full left-1/2 -translate-x-1/2 -translate-y-2 mb-2">
            {label}
            <span className="absolute bg-[#1A1F2C] transform rotate-45 bottom-[-4px] left-1/2 -translate-x-1/2" />
         </span>
      </div>
   );

   return (
      <motion.section
         initial={{ x: '100vw' }}
         animate={clickedSection === Section.ABOUT
            ? { x: 0, transition: { duration: 0.8 } }
            : { x: '100vw', transition: { duration: 0.5 } }}
         className="space-y-4 relative"
      >
         <AccordionItem value="item-4" className="card-base !rounded-2xl px-4 pt-6">
            <AccordionTrigger>
               <div className="w-full flex items-center justify-between gap-10 mb-6">
                  <h2 className="text-xl font-semibold">{t("about.skills")}</h2>
               </div>
            </AccordionTrigger>
            <AccordionContent className="relative flex flex-col items-end space-y-3 font-sans">
               <table className="w-full">
                  <tbody className="size-full flex flex-col gap-6 mb-6">
                     {skills.map((category, index) => (
                        <tr key={index} className="flex justify-between md:items-center gap-6">
                           <td className="text-lg font-semibold">{category.category}:</td>
                           <td className={cn("flex flex-wrap gap-6 card-secondary p-2 !rounded-lg", isMobile && "grid gap-4 grid-cols-4")}>
                              {category.skills.map((skill, index) => (
                                 <SkillButton icon={skill.icon} label={skill.name} key={index} />
                              ))}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </AccordionContent>
         </AccordionItem>
      </motion.section>
   )
}
