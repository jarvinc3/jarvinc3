import { ProjectSection, Section, type ProjectSectionValue } from "@/components/types/section.types";
import { SectionContext } from "@/hooks/use-section";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type SectionValue = (typeof Section)[keyof typeof Section];

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const navigate = useNavigate();
   const location = useLocation();

   const [onAnimate, setOnAnimate] = useState(false);
   const historyRef = useRef<SectionValue[]>([]);

   const pathToSection = (pathname: string): SectionValue => {
      const firstSegment = pathname.split('/')[1] || 'home';
      return Object.values(Section).includes(firstSegment as SectionValue)
         ? (firstSegment as SectionValue)
         : Section.HOME;
   };

   const clickedSection = pathToSection(location.pathname);
   const [clickedProjectSection, setClickedProjectSection] = useState<ProjectSectionValue>(ProjectSection.OVERVIEW);

   const setClickedSection = (newSection: SectionValue) => {
      const last = historyRef.current.at(-1);
      if (last !== newSection) {
         historyRef.current.push(newSection);
         navigate(`/${newSection}`);
      }
   };

   const goBack = () => {
      navigate(-1);
   };

   useEffect(() => {
      const initial = pathToSection(location.pathname);
      historyRef.current = [initial];

      if (initial === Section.PROJECT) {
         setClickedProjectSection(ProjectSection.OVERVIEW);
      }
   }, [location.pathname]);


   return (
      <SectionContext.Provider value={{
         clickedSection,
         setClickedSection,
         clickedProjectSection,
         setClickedProjectSection,
         onAnimate,
         setOnAnimate,
         goBack
      }}>
         {children}
      </SectionContext.Provider>
   );
};
