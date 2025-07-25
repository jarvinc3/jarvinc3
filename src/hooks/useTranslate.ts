import { translations } from '@/types/translations.data';
import { useCallback, useState } from 'react';

type Lang = 'en' | 'es';

export const useTranslate = (initialLang: Lang = 'en') => {
   const [lang, setLang] = useState<Lang>(initialLang);

   const t = useCallback(
      (key: keyof typeof translations['en']) => {
         return translations[lang][key] || key;
      },
      [lang]
   );

   const toggleLang = () => setLang(prev => (prev === 'en' ? 'es' : 'en'));

   return { t, lang, toggleLang };
};
