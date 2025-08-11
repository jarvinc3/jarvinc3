import { cn } from '@/components/lib/utils';
import { projectsData } from '@/components/types/projects.data';
import { Section } from '@/components/types/section.types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTranslate } from '@/hooks/use-translate';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

const Projects = () => {
   const { t, lang } = useTranslate();
   const navigate = useNavigate();

   return (
      <motion.div
         exit={{ opacity: 0 }}
         className={cn(
            "container mx-auto w-screen min-h-screen md:h-screen relative p-6 pl-12 xl:pl-0 xl:p-20 overflow-y-auto overflow-x-hidden scrollbar-hidden md:overflow-hidden text-foreground",
            "grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 xl:grid-cols-6 xl:grid-rows-7 gap-6 md:gap-10")}
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
                  <div className="card-secondary !rounded-xl flex items-center justify-center overflow-hidden">
                     <img src={project.images[0]} alt="work" className="scale-125 w-full h-full object-contain" />
                  </div>
                  <div>
                     <p className="text-sm font-medium text-secondary-foreground">{project.translations[lang].subtitle}</p>
                     <h2 className="md:text-2xl font-semibold text-primary-foreground">{project.translations[lang].title}</h2>
                     <Button variant="icon" />
                  </div>
               </div>
            </Card>
         ))}

         <div className="card-base w-full text-primary-foreground !rounded-2xl p-2 overflow-hidden">
            {/* Top section */}
            <div className="h-36 rounded-xl flex flex-col card-secondary relative overflow-hidden">
               <img src="/images/image.png" alt="profile" className=" w-full h-full object-contain" />
               {/* Borde inclinado */}
               <div className="relative h-7 w-[70%] bg-background rounded-br-md -skew-x-12 shadow-[-10px_-10px_0_0_#e0e0e0]">
                  <div className="absolute top-0 -right-4 w-4 h-4 rounded-tl-md bg-transparent shadow-[-5px_-5px_0_2px_#e0e0e0]" />
               </div>

               {/* Esquina superior izquierda decorativa */}
               <div className="absolute top-7 left-0 w-4 h-4 rounded-tl-xl bg-transparent shadow-[-5px_-5px_0_2px_#e0e0e0]" />

               {/* Iconos */}
               <div className="absolute top-0 w-full h-7 flex justify-between">
                  <div className="h-full aspect-square pt-1 pl-4">
                     <Icon icon="mdi:alpha-u-circle" className="h-full" />
                  </div>
                  <div className="h-full px-4 py-1 flex justify-between gap-7">
                     <Icon
                        icon="mdi:instagram"
                        className="h-full transition-colors"
                     />
                     <Icon
                        icon="mdi:link"
                        className="h-full transition-colors"
                     />
                  </div>
               </div>
            </div>

            {/* Bottom section */}
            <div className="mt-4 px-1.5 py-2.5">
               <span className="block text-lg font-bold text-center tracking-widest">
                  {projectsData[0].translations[lang].title}
               </span>
               <div className="flex justify-between mt-5">
                  <div className="basis-1/3 text-center p-1">
                     <span className="block text-xs font-medium">2626</span>
                     <span className="text-[10px]">UI elements</span>
                  </div>
                  <div className="basis-1/3 text-center p-1 border-x border-white/20">
                     <span className="block text-xs font-medium">100%</span>
                     <span className="text-[10px]">Free for use</span>
                  </div>
                  <div className="basis-1/3 text-center p-1">
                     <span className="block text-xs font-medium">38,631</span>
                     <span className="text-[10px]">Contributors</span>
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
   )
}

export default Projects;
