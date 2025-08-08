
export const Section = {
   HOME: '',
   ABOUT: 'about',
   RESUME: 'resume',
   CONTACT: 'contact',
   SERVICES: 'services',
   CREDENTIALS: 'credentials',
   PROJECTS: 'projects',
   PROJECT: 'project',
   EXAMPLE: 'example',
} as const;

export const ProjectSection = {
   OVERVIEW: 'overview',
   GALLERY: 'gallery',
   RESULTS: 'results'
} as const;

export type SectionKey = keyof typeof Section;
export type SectionValue = (typeof Section)[SectionKey];

export type ProjectSectionKey = keyof typeof ProjectSection;
export type ProjectSectionValue = (typeof ProjectSection)[ProjectSectionKey];

export interface SectionContextType {
   clickedSection: SectionValue;
   setClickedSection: (section: SectionValue) => void;
   clickedProjectSection: ProjectSectionValue;
   setClickedProjectSection: (section: ProjectSectionValue) => void;
   onAnimate: boolean;
   setOnAnimate: (value: boolean) => void;
   goBack: () => void;
}