import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from 'framer-motion';

export const SkillsCard = () => {
   const { t } = useTranslate();

   const SkillButton = ({ icon, label }: { icon: string; label: string }) => (
      <div className="tooltip-container inline-flex items-center relative group">
         <Icon icon={icon} className="size-10 cursor-pointer text-muted group-hover:scale-110 group-hover:text-foreground transition-all duration-250" />
         <span className="absolute pointer-events-none opacity-0 group-hover:opacity-100 px-4 py-2 text-sm font-medium text-white bg-[#1A1F2C] backdrop-blur-sm rounded-lg shadow-lg border border-neutral-800/10 transition-all duration-200 ease-in-out whitespace-nowrap z-50 bottom-full left-1/2 -translate-x-1/2 -translate-y-2 mb-2">
            {label}
            <span className="absolute w-2 h-2 bg-[#1A1F2C] transform rotate-45 bottom-[-4px] left-1/2 -translate-x-1/2" />
         </span>
      </div>
   );

   return (
      <motion.section
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -100 }}
         transition={{ duration: 0.5 }}
         className="py-6 md:px-6 space-y-4"
      >
         <div className="flex items-center justify-between gap-10">
            <h2 className="text-xl font-semibold">{t("credentials.skills")}</h2>
            <div className="w-full h-1 rounded-sm bg-info transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
         </div>

         <div className="size-full flex flex-col gap-6">
            <div className="flex justify-between md:justify-start md:items-center gap-6">
               <h2 className="text-lg font-semibold">{t("credentials.languages")}</h2>
               <div className="grid grid-cols-4 gap-4 md:gap-6">
                  <SkillButton icon="logos:javascript" label="JavaScript" />
                  <SkillButton icon="logos:typescript-icon" label="TypeScript" />
                  <SkillButton icon="logos:nodejs" label="Node.js" />
                  <SkillButton icon="logos:python" label="Python" />
               </div>
            </div>
            <div className="flex justify-between md:justify-start md:items-center gap-6">
               <h2 className="text-lg font-semibold">{t("credentials.frontend")}</h2>
               <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
                  <SkillButton icon="logos:html-5" label="HTML" />
                  <SkillButton icon="logos:css-3" label="CSS" />
                  <SkillButton icon="logos:react" label="React" />
                  <SkillButton icon="logos:nextjs-icon" label="Next.js" />
                  <SkillButton icon="logos:astro-icon" label="Astro.js" />
                  <SkillButton icon="logos:angular-icon" label="Angular.js" />
                  <SkillButton icon="logos:tailwindcss-icon" label="TailwindCSS" />
                  <SkillButton icon="logos:bootstrap" label="Bootstrap" />
               </div>
            </div>
            <div className="flex justify-between md:justify-start md:items-center gap-6">
               <h2 className="text-lg font-semibold">{t("credentials.backend")}</h2>
               <div className="grid grid-cols-4 gap-4 md:gap-6">
                  <SkillButton icon="simple-icons:express" label="Express" />
                  <SkillButton icon="logos:nestjs" label="Nest.js" />
                  <SkillButton icon="material-icon-theme:django" label="Django" />
                  <SkillButton icon="logos:fastapi-icon" label="FastAPI" />
               </div>
            </div>
            <div className="flex justify-between md:justify-start md:items-center gap-6">
               <h2 className="text-lg font-semibold">{t("credentials.database")}</h2>
               <div className="grid grid-cols-4 gap-4 md:gap-6">
                  <SkillButton icon="logos:postgresql" label="PostgreSQL" />
                  <SkillButton icon="devicon:mongodb" label="MongoDB" />
                  <SkillButton icon="logos:sql-server" label="SQL Server" />
               </div>
            </div>
            <div className="flex justify-between md:justify-start md:items-center gap-6">
               <h2 className="text-lg font-semibold">{t("credentials.tools")}</h2>
               <div className="grid grid-cols-4 gap-4 md:gap-6">
                  <SkillButton icon="logos:docker-icon" label="Docker" />
                  <SkillButton icon="skill-icons:git" label="Git" />
                  <SkillButton icon="skill-icons:github-light" label="GitHub" />
                  <SkillButton icon="mingcute:ai-fill" label="Ai Tools" />
               </div>
            </div>
         </div>
      </motion.section>
   )
}
