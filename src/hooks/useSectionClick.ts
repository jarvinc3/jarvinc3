import type { SectionContextType } from '@/types/Section.types';
import { createContext, useContext } from 'react';

export const SectionContext = createContext<SectionContextType | null>(null);

export function useSectionClick() {
   const context = useContext(SectionContext);
   if (!context) throw new Error("useSectionClick must be used within a SectionProvider");
   return context;
}
