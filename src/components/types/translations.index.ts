import { aboutTranslations } from '@/modules/about/translations';
import { contactTranslations } from '@/modules/contact/translate';
import { credentialsTranslations } from '@/modules/credentials/translations';
import { homeTranslations } from '@/modules/home/translations';
import { projectsTranslations } from '@/modules/projects/translations';
import { servicesTranslations } from '@/modules/services/translations';

const generalTranslations = {
   en: {
      Home: 'Home',
      About: 'About',
      Credentials: 'Credentials',
      Services: 'Services',
      Projects: 'Projects',
      Contact: 'Contact',
   },
   es: {
      Home: 'Inicio',
      About: 'Acerca de',
      Credentials: 'Credenciales',
      Services: 'Servicios',
      Projects: 'Proyectos',
      Contact: 'Contacto',
   },
};

export const translations = {
   en: {
      general: generalTranslations.en,
      home: homeTranslations.en,
      about: aboutTranslations.en,
      credentials: credentialsTranslations.en,
      services: servicesTranslations.en,
      projects: projectsTranslations.en,
      contact: contactTranslations.en
   },
   es: {
      general: generalTranslations.es,
      home: homeTranslations.es,
      about: aboutTranslations.es,
      credentials: credentialsTranslations.es,
      services: servicesTranslations.es,
      projects: projectsTranslations.es,
      contact: contactTranslations.es
   },
};


export type Translations = typeof translations['en'];

export type TranslationKey<T = Translations, Prefix extends string = ''> = {
   [K in keyof T]: T[K] extends string
   ? `${Prefix}${K & string}`
   : TranslationKey<T[K], `${Prefix}${K & string}.`>
}[keyof T]; 