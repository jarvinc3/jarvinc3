import { cn } from '@/components/lib/utils';
import { projectsData } from '@/components/types/projects.data';
import { Section } from '@/components/types/section.types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTranslate } from '@/hooks/use-translate';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

export const Projects = () => {
   const { t, lang } = useTranslate();
   const navigate = useNavigate();

   return (
      <motion.div
         exit={{ opacity: 0 }}
         className={cn(
            "container mx-auto w-screen min-h-screen md:h-screen relative p-6 xl:p-20 overflow-y-auto overflow-x-hidden scrollbar-hidden md:overflow-hidden text-foreground",
            "grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 xl:grid-cols-6 xl:grid-rows-7 gap-10")}
      >
         <Card
            className="col-span-1 md:col-span-2 xl:col-span-6 w-full flex items-center justify-between"
            type="custom"
            animate="static"
            section={Section.PROJECTS}
         >
            <Icon icon="solar:star-fall-linear" className="size-11 md:size-16" />
            <h2 className="w-full text-center text-2xl md:text-4xl xl:text-5xl font-semibold text-primary-foreground">{t("projects.title")}</h2>
            <Icon icon="solar:star-fall-linear" className="size-11 md:size-16 rotate-180" />
         </Card>

         {projectsData.map((project, index) => (
            <Card
               key={project.id}
               className={`md:row-span-2 md:row-start-2 xl:col-span-2 xl:row-span-3 ${index === 0 ? 'md:row-span-2 md:row-start-2 xl:col-start-2 xl:row-start-2' :
                     index === 1 ? 'md:row-span-2 md:row-start-2 xl:col-start-4 xl:row-start-2' :
                        index === 2 ? 'md:row-span-2 md:row-start-4 xl:col-start-2 xl:row-start-5' :
                           'md:row-span-2 md:row-start-4 xl:col-start-4 xl:row-start-5'
                  } !rounded-4xl`}
               type="base"
               animate={index === 0 ? "up" : index === 1 ? "right" : index === 2 ? "left" : "bottom"}
               section={Section.PROJECTS}
               onClick={() => navigate(`/project/${project.id}`)}
            >
               <div className="group relative cursor-pointer h-full w-full flex flex-col justify-between p-6 gap-6">
                  <div className="card-secondary !rounded-4xl p-4 flex items-center justify-center overflow-hidden">
                     <img src="/images/work.png" alt="work" className="scale-125 w-full h-full object-contain" />
                  </div>
                  <div>
                     <p className="text-sm font-medium text-secondary-foreground">{project.translations[lang].subtitle}</p>
                     <h2 className="md:text-2xl font-semibold text-primary-foreground">{project.translations[lang].title}</h2>
                     <Button variant="icon" />
                  </div>
               </div>
            </Card>
         ))}
      </motion.div>
   )
}
