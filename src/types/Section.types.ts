export enum Section {
   Dashboard = 'dashboard',
   About = 'about',
   Resume = 'resume',
   Works = 'works',
   Contact = 'contact',
}

export interface SectionContextType {
   clickedSection: Section;
   setClickedSection: (section: Section) => void;
   onAnimate: boolean;
   setOnAnimate: (value: boolean) => void;
}
