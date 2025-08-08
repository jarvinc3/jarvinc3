import { projectsData } from "@/components/types/projects.data";
import type { Project } from "@/components/types/projects.types";
import { useTranslate } from "@/hooks/use-translate";
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";
import ProjectGallery from "./ProjectGallery";
import { ProjectOverview } from "./ProjectOverview";
import { ProjectResults } from "./ProjectResults";

export default function ProjectPortfolio() {
   const [currentProject, setCurrentProject] = useState<Project | null>(null);
   const { t, lang } = useTranslate();

   useEffect(() => {
      const loadProjects = async () => {
         try {
            if (projectsData.length > 0) {
               setCurrentProject(projectsData[0]);
            }
         } catch (error) {
            console.error('Error loading projects:', error);
         }
      };

      loadProjects();
   }, []);

   const getProjectData = (project: Project) => {
      return project.translations?.[lang] || {
         title: project.title,
         subtitle: project.subtitle,
         description: project.description,
         objectives: project.objectives,
         results: project.results,
      };
   };


   if (!currentProject) {
      return (
         <div className="min-h-screen bg-background flex items-center justify-center">
            <p className="text-slate-600 text-lg">{t("projects.noProjects")}</p>
         </div>
      );
   }

   const projectData = getProjectData(currentProject);


   return (
      <AnimatePresence mode="wait">
         <motion.div
            exit={{ opacity: 0 }}
            className="w-screen min-h-screen md:h-screen relative p-6 overflow-y-auto overflow-x-hidden scrollbar-hidden text-foreground"
         >
            <ProjectOverview projectData={projectData} currentProject={currentProject} />
            <ProjectGallery images={currentProject.images} projectTitle={projectData.title} />
            <ProjectResults currentProject={currentProject} />
         </motion.div>
      </AnimatePresence>
   );
}