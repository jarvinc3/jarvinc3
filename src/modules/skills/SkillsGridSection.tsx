import { Section } from "@/components/types/section.types";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { useSkills } from "@/hooks";
import { Icon } from "@iconify/react/dist/iconify.js";

const getLevelColor = (level: string) => {
   switch (level) {
      case 'Expert':
         return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Advanced':
         return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Intermediate':
         return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Beginner':
         return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
         return 'bg-gray-100 text-gray-800 border-gray-200';
   }
};

export const SkillsGridSection = ({ className }: { className?: string }) => {
   const { skills } = useSkills();

   return (
      <div className={className}>
         {skills.map((category, index) => (
            <Card
               key={index}
               type="custom"
               animate="left"
               section={Section.SKILLS}
            >
               <AccordionItem value={`item-${index + 1}`} className="card-base !rounded-2xl px-4 pt-6">
                  <AccordionTrigger>
                     <div className="w-full mb-6 flex items-center space-x-3">
                        <div className="neu-button p-2 !rounded-lg flex items-center justify-center">
                           <Icon icon={category.icon} className="size-6" />
                        </div>
                        <div className='w-full flex justify-between items-center'>
                           <h2 className="text-xl font-semibold">{category.category}</h2>
                           <span className="text-sm text-gray-500">({category.skills.length} skills)</span>
                        </div>
                     </div>
                  </AccordionTrigger>
                  <AccordionContent className="">
                     {category.skills.map((skill, index) => (
                        <div
                           key={index}
                           className="card-secondary !rounded-lg p-4 mb-6 flex items-center justify-between"
                        >
                           <div className="">
                              <div className="flex items-center space-x-3">
                                 <div className="flex-shrink-0">
                                    <Icon icon={skill.icon} className="size-7" />
                                 </div>
                                 <div>
                                    <div className="text-sm font-medium">{skill.name}</div>
                                 </div>
                              </div>
                           </div>
                           <div className="">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
                                 {skill.level}
                              </span>
                           </div>
                        </div>
                     ))}
                  </AccordionContent>
               </AccordionItem>
            </Card>
         ))}
      </div>
   )
}
