export const Section = {
   HOME: '',
   ABOUT: 'about',
   RESUME: 'resume',
   CONTACT: 'contact',
   SKILLS: 'skills',
   SERVICES: 'services',
   PROJECTS: 'projects',
   PROJECT: 'project',
   EXAMPLE: 'example',
} as const;

export const ProjectSection = {
   OVERVIEW: 'overview',
   GALLERY: 'gallery',
   RESULTS: 'results'
} as const;

export const SLIDES = [
   {
      name: "Home",
      icon: "mynaui:home-solid",
      section: Section.HOME
   },
   {
      name: "About",
      icon: "fluent:contact-card-32-regular",
      section: Section.ABOUT
   },
   {
      name: "Projects",
      icon: "gg:work-alt",
      section: Section.PROJECTS
   },
   {
      name: "Contact",
      icon: "fluent:contact-card-link-16-regular",
      section: Section.CONTACT
   }
]

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