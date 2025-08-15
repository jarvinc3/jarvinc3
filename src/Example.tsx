import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from './components/lib/utils';
import { useProjects } from './hooks';

const Example = () => {
   const { projects } = useProjects();
   const [isFlipped, setIsFlipped] = useState(true);

   return (
      <motion.div
         exit={{ opacity: 0 }}
         className={cn(
            "container mx-auto w-screen min-h-screen relative p-6 pl-12 xl:pl-0 xl:p-20 overflow-y-auto overflow-x-hidden scrollbar-hidden text-foreground",
            "grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 xl:grid-cols-6 xl:grid-rows-7 gap-6 md:gap-10"
         )}
      >
         <div
            className="relative size-full group [perspective:2000px] md:row-span-2 md:row-start-2 xl:col-span-2 xl:row-span-3"
            onMouseEnter={() => setIsFlipped(true)}
         onMouseLeave={() => setIsFlipped(false)}
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
                     "card-base absolute inset-0 w-full h-full p-3",
                     "[backface-visibility:hidden] [transform:rotateY(0deg)]",
                     "overflow-hidden !rounded-3xl",
                     "transition-all duration-500",
                     isFlipped ? "opacity-0" : "opacity-100"
                  )}
               >
                  <div className="relative w-full h-full overflow-hidden">
                     <img
                        alt={projects[0].title}
                        src={projects[0].images[0]}
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                     />
                     <div className="absolute inset-0 bg-black/40 rounded-2xl" />

                     <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between gap-3">
                        <div className="space-y-1.5">
                           <h3 className="text-lg font-semibold leading-snug tracking-tighter text-white transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px]">
                              {projects[0].title}
                           </h3>
                           <p className="text-sm text-white/80 line-clamp-2 tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px] delay-[50ms]">
                              {projects[0].description}
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
                     "card-secondary absolute inset-0 w-full h-full",
                     "[backface-visibility:hidden] [transform:rotateY(180deg)]",
                     "flex flex-col p-6 rounded-2xl overflow-hidden",
                     "relative transition-all duration-500",
                     !isFlipped ? "opacity-0" : "opacity-100"
                  )}
               >
                  <div className="flex-1 space-y-6">
                     <div className="space-y-2">
                        <h3 className="text-lg font-semibold leading-snug tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px]">
                           {projects[0].title}
                        </h3>
                        <p className="text-sm text-secondary-foreground tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px] line-clamp-2">
                           {projects[0].description}
                        </p>
                     </div>

                     <div className="space-y-2 overflow-hidden">
                        {projects[3].results.map((feature, index) => (
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
                           "w-full h-32 p-2 pr-3 m-1 flex items-end",
                           "transition-all duration-300",
                           "hover:scale-[1.02] hover:cursor-pointer"
                     )}
                  >
                     <button
                        className={cn(
                           "neu-button flex items-center justify-between",
                           "w-full p-3 !rounded-xl",
                           "transition-all duration-300",
                           "hover:scale-[1.02] hover:cursor-pointer"
                        )}
                     >
                        <span className="text-sm font-medium transition-colors duration-300">
                           View Project Details
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
      </motion.div>
   );
};

export default Example;
