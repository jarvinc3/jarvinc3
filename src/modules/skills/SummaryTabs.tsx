import { cn } from "@/components/lib/utils";
import { Card } from "@/components/ui/card";
import { useSkills } from "@/hooks";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";
import type { SectionProps } from "../App";

export const SummaryTabs = ({ ...props }: SectionProps) => {
   const [tab, setTab] = useState<"overview" | "category" | "highlights">("overview");
   const { skills, stats, highlights } = useSkills();

   const tabAnimation = {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
      exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
   };

   return (
      <Card {...props}>
         <div className="text-center mb-6">
            <h2 className="text-xl md:text-3xl font-bold mb-2">Skills Overview & Analytics</h2>
         </div>

         <div className="flex justify-center items-center gap-4 mb-4">
            {['overview', 'category', 'highlights'].map((tab) => (
               <button
                  key={tab}
                  onClick={() => setTab(tab as "overview" | "category" | "highlights")}
                  className={cn(
                     "neu-button p-2 !rounded-lg",
                     tab === tab && 'neu-button-active'
                  )}
               >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
               </button>
            ))}
         </div>

         <div className="relative">
            <AnimatePresence mode="wait">
               {tab === 'overview' && (
                  <motion.div
                     key="overview"
                     {...tabAnimation}
                     className="grid grid-cols-2 gap-4"
                  >
                     {stats.map((stat, index) => (
                        <div key={index} className="card-secondary p-2 py-4">
                           <div className="flex flex-col justify-center items-center gap-2 mb-4">
                              <div className="neu-button p-2 !rounded-lg flex items-center justify-center">
                                 <h2 className={cn("md:text-right text-3xl font-bold", stat.iconColor)}>
                                    {stat.count}
                                 </h2>
                              </div>
                              <div className="text-center">
                                 <div className="text-muted-foreground text-sm">{stat.label}</div>
                              </div>
                           </div>
                           <div className="text-secondary-foreground text-sm text-center">
                              {stat.description}
                           </div>
                        </div>
                     ))}
                  </motion.div>
               )}

               {tab === 'category' && (
                  <motion.div
                     key="category"
                     {...tabAnimation}
                     className="grid grid-cols-1 gap-4"
                  >
                     {skills.map((category) => {
                        const total = skills.reduce((acc, cat) => acc + cat.skills.length, 0);
                        const percentage = Math.round((category.skills.length / total) * 100);
                        const expertCount = category.skills.filter(s => s.level === 'Expert').length;

                        return (
                           <div key={category.category} className="card-secondary !rounded-2xl p-6 flex justify-between items-center">
                              <div className="flex items-center space-x-3">
                                 <div className="neu-button p-2 !rounded-lg flex items-center justify-center">
                                    <Icon icon={category.icon} className="size-6" />
                                 </div>
                                 <span className="font-medium">{category.category}</span>
                              </div>
                              <div className="text-right">
                                 <div className="text-sm font-semibold">
                                    {category.skills.length} skills ({percentage}%)
                                 </div>
                                 <div className="text-muted-foreground text-xs">
                                    {expertCount} expert level
                                 </div>
                              </div>
                           </div>
                        )
                     })}
                  </motion.div>
               )}

               {tab === 'highlights' && (
                  <motion.div
                     key="highlights"
                     {...tabAnimation}
                     className="grid grid-cols-1 gap-4"
                  >
                     {highlights.map((highlight, index) => (
                        <div key={index} className="card-secondary !rounded-2xl p-6 flex justify-between items-center">
                           <div className={`neu-button px-4 py-2 !rounded-lg text-3xl mb-1 ${highlight.countColor}`}>
                              {highlight.count}
                           </div>
                           <div className="text-right">
                              <div className="text-sm text-muted-foreground">{highlight.label}</div>
                              <div className="text-xs text-secondary-foreground mt-1">{highlight.description}</div>
                           </div>
                        </div>
                     ))}
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </Card>
   )
}
