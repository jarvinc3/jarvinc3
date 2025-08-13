import { type AboutMeData } from '@/components/data/aboutMe.data';
import { type EducationRow } from '@/components/data/education.data';
import { type Experience } from '@/components/data/experience.data';
import { type ServiceOffering } from '@/components/data/offerings.data';
import { type Highlight, type SkillCategory, type Stat } from '@/components/data/skills.data';
import { createContext } from 'react';
import type { Project } from '../types/projects.types';

export interface ProjectFilters {
   byId: (id: string) => Project | null;
   byTechnology: (techName: string) => Project[];
   byStatus: (status: string) => Project[];
   byCategory: (category: string) => Project[];
}

export interface DataContextType {
   aboutMe: AboutMeData | null;
   experience: Experience[];
   education: EducationRow[];
   services: ServiceOffering[];
   skills: SkillCategory[];
   stats: Stat[];
   highlights: Highlight[];
   projects: Project[];
   featuredProjects: Project[];
   projectFilters: ProjectFilters;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);