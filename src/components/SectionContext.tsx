import React, { useState } from 'react';
import { SectionContext } from '../hooks/useSectionClick';
import { Section } from '../types/Section.types';

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [clickedSection, setClickedSection] = useState<Section>(Section.Dashboard);
   const [onAnimate, setOnAnimate] = useState(false);

   return (
      <SectionContext.Provider value={{ clickedSection, setClickedSection, onAnimate, setOnAnimate }}>
         {children}
      </SectionContext.Provider>
   );
};


