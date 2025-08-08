import TranslateContext, { type TranslateContextType } from "@/components/lib/TranslateContext";
import { useContext } from "react";

export const useTranslate = (): TranslateContextType => {
   const context = useContext(TranslateContext);
   if (!context) {
      throw new Error('useTranslate must be used within a TranslateProvider');
   }
   return context;
};
