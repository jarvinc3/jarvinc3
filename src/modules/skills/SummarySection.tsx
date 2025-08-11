import { cn } from "@/components/lib/utils";
import { keyHighlights, skillsData, statGrid } from "@/components/types/skills.data";
import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { SectionProps } from "../App";

export const SummarySection = ({ ...props }: SectionProps) => {
   return (
      <Card
         {...props}
      >
         {/* Header */}
         <div className="text-center mb-6">
            <h2 className="text-xl md:text-3xl font-bold mb-2">Skills Overview & Analytics</h2>
            <p className="hidden xl:block text-muted-foregroundtext-lg">Comprehensive breakdown of technical expertise and project experience</p>
         </div>

         {/* Main Stats Grid */}
         <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6 mb-4 xl:mb-6">
            {statGrid.map((stat, index) => (
               <div key={index} className="card-secondary p-2 py-4">
                  <div className="flex flex-col justify-center items-center gap-2 mb-4">
                     <div className="neu-button p-2 !rounded-lg flex items-center justify-center">
                        <h2 className={cn("md:text-right xl:text-center text-3xl font-bold", stat.iconColor)}>
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
         </div>

         {/* Detailed Breakdown */}
         <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-6">
            <div className="card-secondary !rounded-2xl p-6">
               <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon icon="material-symbols:star-rounded" className="w-5 h-5 mr-2 text-blue-500" />
                  Skills by Category
               </h3>
               <div className="space-y-3">
                  {skillsData.map((category) => {
                     const total = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);
                     const percentage = Math.round((category.skills.length / total) * 100);
                     const expertCount = category.skills.filter(s => s.level === 'Expert').length;

                     return (
                        <div key={category.category} className="flex items-center justify-between">
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
                     );
                  })}
               </div>
            </div>

            <div className="card-secondary !rounded-2xl p-6">
               <h3 className="text-xl font-semibold mb-4 text-center">
                  Key Highlights
               </h3>
               <div className="grid grid-cols-1 gap-4 text-center">
                  {keyHighlights.map((highlight, index) => (
                     <div key={index} className="card-base !rounded-lg px-4 p-2 flex justify-between items-center">
                        <div className={`neu-button px-4 py-2 !rounded-lg text-3xl mb-1 ${highlight.countColor}`}>
                           {highlight.count}
                        </div>
                        <div className="text-right">
                           <div className="text-sm text-muted-foreground">{highlight.label}</div>
                           <div className="text-xs text-secondary-foreground mt-1">{highlight.description}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </Card>
   )
}
