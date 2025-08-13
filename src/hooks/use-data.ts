import { DataContext, type DataContextType } from '@/components/lib/data-context-definition';
import { useContext } from 'react';

export const useData = (): DataContextType => {
   const context = useContext(DataContext);
   if (!context) {
      throw new Error('useData must be used within a DataProvider');
   }
   return context;
};

export const useAboutMe = () => {
   const { aboutMe } = useData();
   if (!aboutMe) {
      throw new Error('About me data not found for current language');
   }
   return aboutMe;
};

export const useExperience = () => useData().experience;

export const useEducation = () => useData().education;

export const useSkills = () => {
   const { skills, stats, highlights } = useData();
   return { skills, stats, highlights };
};

export const useServices = () => useData().services;

export const useProjects = () => {
   const { projects, featuredProjects, projectFilters } = useData();
   return { projects, featuredProjects, projectFilters };
};

export const useProject = (id: string) => {
   const { projectFilters } = useData();
   const project = projectFilters.byId(id);
   if (!project) {
      throw new Error(`Project with id ${id} not found`);
   }
   return project;
};
