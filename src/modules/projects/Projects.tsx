import { cn } from '@/components/lib/utils';
import { Section } from '@/components/types/section.types';
import { Card } from '@/components/ui/card';
import { useProjects } from '@/hooks';
import { useTranslate } from '@/hooks/use-translate';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Projects = () => {
   const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
   const { projects } = useProjects();
   const { t } = useTranslate();
   const navigate = useNavigate();

   return (
      <motion.div
         exit={{ opacity: 0 }}
         className={cn(
            "container mx-auto w-screen min-h-screen md:h-screen relative p-6 pl-12 xl:pl-0 xl:p-20 overflow-y-auto overflow-x-hidden scrollbar-hidden md:overflow-hidden text-foreground",
            "grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 xl:grid-cols-6 xl:grid-rows-7 gap-6 xl:gap-10")}
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

         {projects.map((project, index) => {
            const isFlipped = flippedIndex === index;

            return (
               <div
                  key={index}
                  className={cn("relative group [perspective:2000px]",
                     index === 0 && 'md:row-span-2 md:row-start-2 xl:col-span-3 xl:row-span-3 xl:col-start-1 xl:row-start-2',
                     index === 1 && 'md:row-span-2 md:row-start-2 xl:col-span-3 xl:row-span-3 xl:col-start-4 xl:row-start-2',
                     index === 2 && 'md:row-span-2 md:row-start-4 xl:col-span-3 xl:row-span-3 xl:col-start-1 xl:row-start-5',
                     index === 3 && 'md:row-span-2 md:row-start-4 xl:col-span-3 xl:row-span-3 xl:col-start-4 xl:row-start-5'
                  )}
                  onMouseEnter={() => setFlippedIndex(index)}
                  onMouseLeave={() => setFlippedIndex(null)}
               >
                  <div
                     className={cn("relative w-full h-full [transform-style:preserve-3d] transition-all duration-700",
                        isFlipped
                           ? "[transform:rotateY(180deg)]"
                           : "[transform:rotateY(0deg)]"
                     )}
                  >
                     {/* Front Side */}
                     <div
                        className={cn(
                           "card-secondary absolute inset-0 w-full h-full p-3",
                           "[backface-visibility:hidden] [transform:rotateY(0deg)]",
                           "overflow-hidden !rounded-3xl",
                           "transition-all duration-500",
                           isFlipped ? "opacity-0" : "opacity-100"
                        )}
                     >
                        <div className="relative w-full h-full overflow-hidden">
                           <img
                              alt={project.title}
                              src={project.images[0]}
                              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                           />
                           <div className="absolute inset-0 bg-black/40 rounded-2xl" />

                           <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between gap-3">
                              <div className="space-y-1.5">
                                 <h3 className="text-xl md:text-2xl font-semibold leading-snug tracking-tighter text-white transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px]">
                                    {project.title}
                                 </h3>
                                 <p className="text-sm md:text-base text-white/80 line-clamp-2 tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px] delay-[50ms]">
                                    {project.description}
                                 </p>
                              </div>
                              <div className="relative group/icon">
                                 <div
                                    className={cn(
                                       "absolute inset-[-8px] !rounded-lg transition-opacity duration-300",
                                       "neu-button"
                                    )}
                                 />
                                 <Icon
                                    icon="ant-design:arrow-right-outlined"
                                    className="relative z-10 w-4 h-4 text-orange-400 transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:-rotate-12"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Back Side */}
                     <div
                        className={cn(
                           "card-base absolute inset-0 w-full h-full",
                           "[backface-visibility:hidden] [transform:rotateY(180deg)]",
                           "flex flex-col p-6 rounded-2xl overflow-hidden",
                           "relative transition-all duration-500",
                           !isFlipped ? "opacity-0" : "opacity-100"
                        )}
                     >
                        <div className="flex-1 space-y-6">
                           <div className="space-y-2">
                              <h3 className="text-xl md:text-2xl font-semibold leading-snug tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px]">
                                 {project.title}
                              </h3>
                              <p className="text-sm md:text-base text-secondary-foreground tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px] line-clamp-2">
                                 {project.description}
                              </p>
                           </div>

                           <div className="space-y-2 overflow-hidden">
                              {project.results.map((feature, index) => (
                                 <div
                                    key={feature}
                                    className="flex items-center gap-2 text-sm text-secondary-foreground transition-all duration-500"
                                    style={{
                                       transform: isFlipped
                                          ? "translateX(0)"
                                          : "translateX(-10px)",
                                       opacity: isFlipped ? 1 : 0,
                                       transitionDelay: `${index * 100 + 200
                                          }ms`,
                                    }}
                                 >
                                    <Icon icon="ant-design:check" className="w-3 h-3 text-success" />
                                    <span>{feature}</span>
                                 </div>
                              ))}
                           </div>
                        </div>

                        <div
                           className={cn(
                              "absolute bottom-0 left-0 right-0",
                              "bg-gradient-to-b from-transparent via-background/70 to-background/0",
                              "w-full h-32 p-3 pr-4 m-1 flex items-end",
                              "transition-all duration-300",
                           )}
                        >
                           <button
                              onClick={() => navigate(`/project/${index + 1}`)}
                              className={cn(
                                 "neu-button flex items-center justify-between",
                                 "w-full p-3 !rounded-xl",
                                 "transition-all duration-300",
                              )}
                           >
                              <span className="text-sm font-medium transition-colors duration-300">
                                 {t("projects.viewButton")}
                              </span>
                              <Icon
                                 icon="ant-design:arrow-right-outlined"
                                 className="size-5"
                              />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )
         })}
      </motion.div >
   )
}

export default Projects;
