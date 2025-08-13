// data-context.tsx
import { aboutMeData } from '@/components/data/aboutMe.data';
import { educationRows } from '@/components/data/education.data';
import { experienceData } from '@/components/data/experience.data';
import { serviceOfferings } from '@/components/data/offerings.data';
import { projectsData } from '@/components/data/projects.data';
import { keyHighlights, skillsData, statGrid } from '@/components/data/skills.data';
import { useTranslate } from '@/hooks/use-translate';
import React, { useMemo } from 'react';
import { DataContext } from './data-context-definition';

const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const { lang } = useTranslate();

   const getDataByLanguage = <T extends { language: string }>(data: T[]): T[] => data.filter(item => item.language === lang);

   const aboutMe = getDataByLanguage(aboutMeData)[0] || null;
   const experience = getDataByLanguage(experienceData);
   const education = getDataByLanguage(educationRows);
   const services = getDataByLanguage(serviceOfferings);
   const skills = skillsData;
   const projects = projectsData;
   const featuredProjects = projects.filter(p => p.featured);

   const value = useMemo(() => {
      const projectFilters = {
         byId: (id: string) => projects.find(p => p.id === id) || null,
         byTechnology: (techName: string) =>
            projects.filter(p => p.technologies.some(t => t.name.toLowerCase().includes(techName.toLowerCase()))),
         byStatus: (status: string) => projects.filter(p => p.status === status),
         byCategory: (category: string) =>
            projects.filter(p => p.technologies.some(t => t.category.toLowerCase() === category.toLowerCase())),
      };

      return {
         aboutMe,
         experience,
         education,
         services,
         skills,
         stats: statGrid,
         highlights: keyHighlights,
         projects,
         featuredProjects,
         projectFilters,
      };
   }, [aboutMe, experience, education, services, skills, projects, featuredProjects]);

   return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;