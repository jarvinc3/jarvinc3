import type { Project } from "@/components/types/projects.types"
import { ProjectSection } from "@/components/types/section.types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { useResponsive } from "@/hooks/use-responsive"
import { useTranslate } from "@/hooks/use-translate"
import { Icon } from "@iconify/react/dist/iconify.js"

interface ProjectOverviewProps {
   projectData: {
      title: string,
      subtitle: string,
      description: string,
      objectives: string[],
      results: string[],
   },
   currentProject: Project
}

export const ProjectOverview = ({ projectData, currentProject }: ProjectOverviewProps) => {
   const { isMobile, isTablet } = useResponsive()
   const { t } = useTranslate()

   const getStatusText = (status: string) => {
      switch (status) {
         case 'completed':
            return t("projects.completed");
         case 'in-progress':
            return t("projects.inProgress");
         default:
            return t("projects.planned");
      }
   };

   return (
      <div className="container mx-auto size-full flex flex-col items-center justify-center gap-6">
         <div className="relative w-full grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="w-full space-y-6">
               <Card
                  type="custom"
                  animate="up"
                  projectSection={ProjectSection.OVERVIEW}
               >
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                     {projectData.title}
                  </h1>
                  <p className="hidden md:block text-xl text-secondary-foreground leading-relaxed">
                     {projectData.subtitle}
                  </p>
               </Card>

               <Card
                  type="custom"
                  animate={isMobile ? "right" : isTablet ? 'up' : "left"}
                  projectSection={ProjectSection.OVERVIEW}
                  className="flex flex-wrap items-center justify-between gap-4 w-full"
               >
                  <div className="flex items-center gap-4">
                     {currentProject.links.demo && (
                        <a
                           href={currentProject.links.demo}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                           <Icon icon="mdi:play" className="w-5 h-5 mr-2" />
                           {t("projects.viewDemo")}
                        </a>
                     )}
                     {currentProject.links.github && (
                        <a
                           href={currentProject.links.github}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center px-6 py-3 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg backdrop-blur-sm"
                        >
                           <Icon icon="mdi:github" className="w-5 h-5 mr-2" />
                           {t("projects.code")}
                        </a>
                     )}
                  </div>
                  <div className="card-secondary px-4 py-2 w-fit !rounded-full flex items-center gap-2">
                     <div className={`w-4 h-4 rounded-full ${currentProject.status === 'completed' ? 'bg-green-400' :
                        currentProject.status === 'in-progress' ? 'bg-yellow-400' : ''
                        }`} />
                     <span className="text-secondary-foreground uppercase tracking-wide text-sm font-medium">
                        {getStatusText(currentProject.status)}
                     </span>
                  </div>
               </Card>
            </div>

            {/* Quick Stats */}
            <Card
               type="custom"
               animate="right"
               projectSection={ProjectSection.OVERVIEW}
               className="hidden md:grid grid-cols-2 gap-6"
            >
               <div className="card-secondary p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{currentProject.timeline.duration}</div>
                  <div className="text-secondary-foreground">{t("projects.duration")}</div>
               </div>
               <div className="card-secondary p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{currentProject.technologies.length}</div>
                  <div className="text-secondary-foreground">{t("projects.technologies")}</div>
               </div>
               <div className="card-secondary p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{currentProject.metrics.components}</div>
                  <div className="text-secondary-foreground">{t("projects.components")}</div>
               </div>
               <div className="card-secondary p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{currentProject.metrics.testCoverage}</div>
                  <div className="text-secondary-foreground">{t("projects.coverage")}</div>
               </div>
            </Card>
         </div>
         <Accordion type="single" defaultValue="item-1" className="w-full xl:hidden grid grid-cols-1 gap-6">
            <Card
               type="custom"
               animate="left"
               projectSection={ProjectSection.OVERVIEW}
            >
               <AccordionItem value="item-1" className="card-base !rounded-2xl px-8 pt-6">
                  <AccordionTrigger>
                     <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                           <Icon icon="mdi:file-document" className="w-5 h-5 text-blue-600" />
                        </div>
                        {t("projects.description")}
                     </h2>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                     <p className="text-gray-700 leading-relaxed text-lg pb-6">
                        {projectData.description}
                     </p>
                  </AccordionContent>
               </AccordionItem>
            </Card>
            <Card
               type="custom"
               animate="right"
               projectSection={ProjectSection.OVERVIEW}
            >
               <AccordionItem value="item-2" className="card-base !rounded-2xl px-8 pt-6">
                  <AccordionTrigger>
                     <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                           <Icon icon="mdi:target" className="w-5 h-5 text-green-600" />
                        </div>
                        {t("projects.objectives")}
                     </h2>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                     <div className="space-y-4 pb-6">
                        {projectData.objectives.map((objective, index) => (
                           <div key={index} className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                 <div className="w-2 h-2 bg-green-600 rounded-full" />
                              </div>
                              <span className="text-gray-700 leading-relaxed">{objective}</span>
                           </div>
                        ))}
                     </div>
                  </AccordionContent>
               </AccordionItem>
            </Card>
         </Accordion>
         <div className="hidden xl:grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Description */}
            <Card
               className="p-8"
               type="base"
               animate="left"
               projectSection={ProjectSection.OVERVIEW}>
               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                     <Icon icon="mdi:file-document" className="w-5 h-5 text-blue-600" />
                  </div>
                  {t("projects.description")}
               </h2>
               <p className="text-gray-700 leading-relaxed text-lg">
                  {projectData.description}
               </p>
            </Card>

            {/* Objectives */}
            <Card
               className="p-8"
               type="base"
               animate="right"
               projectSection={ProjectSection.OVERVIEW}
            >
               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                     <Icon icon="mdi:target" className="w-5 h-5 text-green-600" />
                  </div>
                  {t("projects.objectives")}
               </h2>
               <div className="space-y-4">
                  {projectData.objectives.map((objective, index) => (
                     <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                           <div className="w-2 h-2 bg-green-600 rounded-full" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{objective}</span>
                     </div>
                  ))}
               </div>
            </Card>
         </div>
      </div>
   )
}
