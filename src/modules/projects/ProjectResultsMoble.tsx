import { categoryColors, categoryIcons, metricColors, metricIcons, metricLabels, type Project } from "@/components/types/projects.types"
import { ProjectSection } from "@/components/types/section.types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { useTranslate } from "@/hooks/use-translate"
import { Icon } from "@iconify/react/dist/iconify.js"

interface ProjectResultsProps {
   currentProject: Project
}

export const ProjectResultsMobile = ({ currentProject }: ProjectResultsProps) => {
   const { t } = useTranslate()

   const getStatusIcon = (status: string) => {
      switch (status) {
         case 'completed':
            return <Icon icon="material-symbols:check-circle-rounded" className="w-5 h-5 text-green-500" />;
         case 'in-progress':
            return <Icon icon="material-symbols:play-circle-rounded" className="w-5 h-5 text-blue-500" />;
         default:
            return <div className="w-5 h-5 rounded-full border-2 border-gray-300" />;
      }
   };

   const getStatusColor = (status: string) => {
      switch (status) {
         case 'completed':
            return 'bg-green-500';
         case 'in-progress':
            return 'bg-blue-500';
         default:
            return 'bg-gray-300';
      }
   };

   return (
      <div className="container mx-auto size-full relative text-foreground flex flex-col justify-center">
         <Accordion type="single" defaultValue="item-1" className="w-full xl:hidden grid grid-cols-1 gap-6">
            <Card
               type="custom"
               animate="up"
               projectSection={ProjectSection.RESULTS}
            >
               <AccordionItem value="item-1" className="card-base !rounded-2xl px-4 pt-6">
                  <AccordionTrigger>
                     <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                           <Icon icon="mdi:chart-donut" className="w-5 h-5 text-blue-600" />
                        </div>
                        {t("projects.results")}
                     </h2>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                     <div className="pb-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {Object.entries(currentProject.metrics).map(([key, value]) => {
                           const IconComponent = metricIcons[key as keyof typeof metricIcons];
                           const label = metricLabels[key as keyof typeof metricLabels];
                           const colorGradient = metricColors[key as keyof typeof metricColors];

                           return (
                              <div key={key} className="card-secondary p-4 md:p-6 xl:p-5 group flex flex-col xl:justify-between">
                                 <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${colorGradient} text-white group-hover:scale-110 transition-transform duration-200`}>
                                       <Icon icon={IconComponent} className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                                       {label}
                                    </h4>
                                 </div>
                                 <p className="text-2xl text-center font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                    {value}
                                 </p>
                              </div>
                           );
                        })}
                     </div>
                  </AccordionContent>
               </AccordionItem>
            </Card>
            <Card
               type="custom"
               animate="left"
               projectSection={ProjectSection.RESULTS}
            >
               <AccordionItem value="item-2" className="card-base !rounded-2xl px-6 pt-6">
                  <AccordionTrigger>
                     <div className="w-full mb-6 flex items-center justify-between">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                           <Icon icon="material-symbols:timeline" className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
                           <h3 className="text-xl font-semibold text-gray-900">Timeline</h3>
                           <span className="w-fit p-2 bg-info text-blue-800 rounded-lg text-center text-sm font-medium">
                              Duración: {currentProject.timeline.duration}
                           </span>
                        </div>
                     </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                     <div className="space-y-4 pb-6 pr-2 max-h-[45vh] md:max-h-[99vh] overflow-y-auto xl:row-span-3 xl:col-start-1 xl:row-start-2">
                        {currentProject.timeline.phases.map((phase, index) => (
                           <div key={index} className="flex items-start space-x-4">
                              <div className="flex flex-col items-center">
                                 {getStatusIcon(phase.status)}
                                 {index < currentProject.timeline.phases.length - 1 && (
                                    <div className={`w-0.5 h-12 mt-2 ${getStatusColor(phase.status)}`} />
                                 )}
                              </div>
                              <div className="flex-1 min-w-0">
                                 <div className="flex items-center justify-between mb-1">
                                    <h4 className="text-lg font-medium text-gray-900">{phase.name}</h4>
                                    <span className="text-sm text-gray-500 font-medium">{phase.duration}</span>
                                 </div>
                                 <div className="flex items-center space-x-2">
                                    <span
                                       className={`px-2 py-1 text-xs font-medium rounded-full ${phase.status === 'completed'
                                          ? 'bg-green-100 text-green-800'
                                          : phase.status === 'in-progress'
                                             ? 'bg-blue-100 text-blue-800'
                                             : 'bg-gray-100 text-gray-600'
                                          }`}
                                    >
                                       {phase.status === 'completed' ? 'Completado' :
                                          phase.status === 'in-progress' ? 'En Progreso' : 'Pendiente'}
                                    </span>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </AccordionContent>
               </AccordionItem>
            </Card>
            <Card
               type="custom"
               animate="bottom"
               projectSection={ProjectSection.RESULTS}
            >
               <AccordionItem value="item-3" className="card-base !rounded-2xl px-4 pt-6">
                  <AccordionTrigger>
                     <div className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                           <Icon icon="mdi:target" className="w-5 h-5 text-green-600" />
                        </div>
                        {t("projects.techDescription")}
                     </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                     <div className="space-y-4 pb-6 pr-2 max-h-[45vh] md:max-h-full overflow-y-auto">
                        {currentProject.technologies.map((technology, index) => {
                           const IconComponent = categoryIcons[technology.category as keyof typeof categoryIcons] || 'mdi:code';
                           const colorGradient = categoryColors[technology.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600';
                           return (
                              <div className="card-secondary !rounded-2xl p-4 xl:row-span-4 xl:col-start-2 xl:row-start-1" key={index}>
                                 <div className="flex items-center space-x-4">
                                    <div className="neu-button p-3 !rounded-xl">
                                       <Icon icon={IconComponent} className="size-8" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                       <div className="flex items-center justify-between mb-2">
                                          <h3 className="text-lg font-semibold text-gray-900 truncate">
                                             {technology.name}
                                          </h3>
                                          <span className={`px-3 py-1 text-xs font-medium rounded-lg bg-gradient-to-r ${colorGradient} text-white`}>
                                             {technology.category}
                                          </span>
                                       </div>
                                       <p className="text-gray-600 text-sm leading-relaxed">
                                          {technology.description}
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </AccordionContent>
               </AccordionItem>
            </Card>
         </Accordion>
      </div>
   )
}
