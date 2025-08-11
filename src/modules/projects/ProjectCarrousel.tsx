import { cn } from '@/components/lib/utils';
import { projectsData } from '@/components/types/projects.data';
import type { Project } from '@/components/types/projects.types';
import { ProjectSection, Section } from '@/components/types/section.types';
import { Card } from '@/components/ui/card';
import { useResponsive } from '@/hooks/use-responsive';
import { useScrollNavigation } from '@/hooks/use-scrollNavigation';
import { useSectionClick } from '@/hooks/use-section';
import { useTranslate } from '@/hooks/use-translate';
import { Icon } from '@iconify/react/dist/iconify.js';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ProjectGallery from './ProjectGallery';
import { ProjectOverview } from './ProjectOverview';
import { ProjectResults } from './ProjectResults';
import { ProjectResultsMobile } from './ProjectResultsMoble';

const SLIDES = [
   { icon: 'material-symbols-light:overview-outline-rounded', section: ProjectSection.OVERVIEW },
   { icon: 'solar:gallery-wide-broken', section: ProjectSection.GALLERY },
   { icon: 'mdi:chart-bar', section: ProjectSection.RESULTS }
];

const ProjectCarousel = () => {
   const { clickedProjectSection, setClickedProjectSection, goBack } = useSectionClick();
   const [currentProject, setCurrentProject] = useState<Project | null>();
   const { t, lang } = useTranslate();
   const { isMobile, isTablet } = useResponsive();
   const index = SLIDES.findIndex(s => s.section === clickedProjectSection);

   const { isScrolling } = useScrollNavigation({
      items: SLIDES,
      activeIndex: index,
      disableOnMobile: true,
      onNavigate: (newIndex) => setClickedProjectSection(SLIDES[newIndex].section),
   });

   useEffect(() => {
      if (projectsData.length > 0) {
         setCurrentProject(projectsData[0]);
         setClickedProjectSection(ProjectSection.OVERVIEW);
      }
   }, [setClickedProjectSection]);

   if (!currentProject) {
      return (
         <div className="min-h-screen bg-background flex items-center justify-center">
            <p className="text-slate-600 text-lg">{t("projects.noProjects")}</p>
         </div>
      );
   }

   const getProjectData = (project: Project) => {
      return project.translations?.[lang] || {
         title: project.title,
         subtitle: project.subtitle,
         description: project.description,
         objectives: project.objectives,
         results: project.results,
      };
   };

   const projectData = getProjectData(currentProject);

   const sectionsMap = {
      [ProjectSection.OVERVIEW]:
         <ProjectOverview projectData={projectData} currentProject={currentProject} />,
      [ProjectSection.GALLERY]:
         <ProjectGallery images={currentProject.images} projectTitle={projectData.title} />,
      [ProjectSection.RESULTS]:
         isMobile || isTablet
            ? <ProjectResultsMobile currentProject={currentProject} />
            : < ProjectResults currentProject={currentProject} />,
   };

   return (
      <motion.div
         tabIndex={-1}
         exit={{ opacity: 0 }
         }
         className={cn("w-screen h-screen overflow-hidden bg-background text-foreground p-6 pl-10 md:p-10 xl:p-20 xl:pl-28")}
      >

         <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
               <motion.div
                  key={clickedProjectSection}
                  exit={{ opacity: 0 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full"
               >
                  {sectionsMap[clickedProjectSection]}
               </motion.div>
            </AnimatePresence>
         </div>

         <Card className="fixed z-50 top-1/2 -left-2 xl:left-4 -translate-y-1/2 flex flex-col" animate="left" type='custom' section={Section.PROJECT}>
            <div className="flex flex-col items-center gap-4">
               <div className="h-6 w-0.5 bg-stone-400 rounded-xl" />
               <button onClick={goBack} className='neu-button size-10 flex items-center justify-center pl-2 xl:pl-0 !rounded-r-xl !rounded-l-none xl:!rounded-xl'>
                  <Icon icon="mdi:arrow-left" className="size-6" />
               </button>
               <div className="h-6 w-0.5 bg-stone-400 rounded-t-xl" />
            </div>
            {SLIDES.map((slide, i) => (
               <div key={i} className='flex flex-col items-center gap-4'>
                  <div className="h-6 w-0.5 bg-stone-400 rounded-b-xl" />
                  <button
                     onClick={() => !isScrolling && setClickedProjectSection(slide.section)}
                     className={cn(
                        'group relative size-10 flex items-center justify-center pl-2 xl:pl-0 !rounded-r-xl !rounded-l-none xl:!rounded-xl',
                        clickedProjectSection === slide.section ? 'card-primary' : 'neu-button'
                     )}
                  >
                     <Icon icon={slide.icon} className={`size-6 ${clickedProjectSection === slide.section ? 'text-blue-500' : ''}`} />
                     <div className="bg-secondary-foreground p-2 rounded-md hidden group-hover:flex absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full">
                        <span className="text-secondary whitespace-nowrap">{slide.section}</span>
                        <div className="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2" />
                     </div>
                  </button>
                  <div className="h-6 w-0.5 bg-stone-400 rounded-t-xl" />
               </div>
            ))}
         </Card>
      </motion.div>
   );
};

export default ProjectCarousel;
