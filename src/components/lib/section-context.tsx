import { ProjectSection, Section, type ProjectSectionValue } from "@/components/types/section.types";
import { SectionContext } from "@/hooks/use-section";
import React, { useEffect, useRef, useState } from "react";

type SectionValue = (typeof Section)[keyof typeof Section];

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [onAnimate, setOnAnimate] = useState(false);
   const historyRef = useRef<SectionValue[]>([]);

   const [clickedSection, setClickedSectionState] = useState<SectionValue>(Section.HOME);
   const [clickedProjectSection, setClickedProjectSection] = useState<ProjectSectionValue>(ProjectSection.OVERVIEW);

   const setClickedSection = (newSection: SectionValue) => {
      const last = historyRef.current.at(-1);
      if (last !== newSection) {
         historyRef.current.push(newSection);
         setClickedSectionState(newSection);

         if (newSection === Section.PROJECT) {
            setClickedProjectSection(ProjectSection.OVERVIEW);
         }
      }
   };

   const goBack = () => {
      if (historyRef.current.length > 1) {
         historyRef.current.pop();
         const prev = historyRef.current.at(-1) ?? Section.HOME;
         setClickedSectionState(prev);
      }
   };

   useEffect(() => {
      historyRef.current = [Section.HOME];
   }, []);

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
