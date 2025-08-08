import { translations, type TranslationKey, type Translations } from '@/components/types/translations.index';
import React, { createContext, useCallback, useEffect, useState } from 'react';

type Lang = 'en' | 'es';

export interface TranslateContextType {
   lang: Lang;
   toggleLang: () => void;
   t: (key: TranslationKey) => string;
}

const TranslateContext = createContext<TranslateContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'app_lang';

export const TranslateProvider: React.FC<{ initialLang?: Lang; children: React.ReactNode }> = ({
   children,
   initialLang = 'en',
}) => {
   const getInitialLang = (): Lang => {
      const storedLang = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedLang === 'es' || storedLang === 'en' ? storedLang : initialLang;
   };

   const [lang, setLang] = useState<Lang>(getInitialLang);

   useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, lang);
   }, [lang]);

   const t = useCallback(
      (key: TranslationKey): string => {
         const parts = key.split('.');
         let result: unknown = translations[lang] as Translations;

         for (const part of parts) {
            if (result && typeof result === 'object' && part in result) {
               result = (result as Record<string, unknown>)[part];
            } else {
               return key;
            }
         }

         return typeof result === 'string' ? result : key;
      },
      [lang]
   );

   const toggleLang = () => {
      setLang(prev => (prev === 'en' ? 'es' : 'en'));
   };

   return (
      <TranslateContext.Provider value={{ lang, toggleLang, t }}>
         {children}
      </TranslateContext.Provider>
   );
};

export default TranslateContext;
