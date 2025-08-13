import { useAboutMe, useEducation, useExperience, useProjects, useServices, useSkills } from '@/hooks';
import { useTranslate } from '@/hooks/use-translate';
import React from 'react';

export const TestSystem: React.FC = () => {
   const { t, lang, toggleLang } = useTranslate();
   const aboutMe = useAboutMe();
   const { skills, stats, highlights } = useSkills();
   const { projects, featuredProjects } = useProjects();
   const experience = useExperience();
   const education = useEducation();
   const services = useServices();

   return (
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
         <div className="bg-blue-50 p-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">🔧 Sistema de Datos y Traducciones - Test</h1>
            <p><strong>Idioma actual:</strong> {lang}</p>
            <button 
               onClick={toggleLang}
               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-2"
            >
               Cambiar a {lang === 'en' ? 'Español' : 'English'}
            </button>
         </div>

         {/* Traducciones */}
         <section className="border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-3">🌐 Traducciones</h2>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <strong>Home:</strong> {t('general.Home')}<br/>
                  <strong>About:</strong> {t('general.About')}<br/>
                  <strong>Services:</strong> {t('general.Services')}<br/>
                  <strong>Projects:</strong> {t('general.Projects')}<br/>
                  <strong>Contact:</strong> {t('general.Contact')}
               </div>
               <div>
                  <strong>Hello:</strong> {t('home.hello')}<br/>
                  <strong>Credentials:</strong> {t('home.credentials')}<br/>
                  <strong>Showcase:</strong> {t('home.showcase')}<br/>
                  <strong>Specialization:</strong> {t('home.specialization')}
               </div>
            </div>
         </section>

         {/* Datos Personales */}
         <section className="border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-3">👤 Datos Personales</h2>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <strong>Nombre:</strong> {aboutMe.name} {aboutMe.last_name}<br/>
                  <strong>Posición:</strong> {aboutMe.job_position}<br/>
                  <strong>Email:</strong> {aboutMe.mail_address}<br/>
                  <strong>Teléfono:</strong> {aboutMe.phone_number}
               </div>
               <div>
                  <strong>Descripción Corta:</strong> {aboutMe.short_description}<br/>
                  <strong>País:</strong> {aboutMe.country}<br/>
                  <strong>Ciudad:</strong> {aboutMe.city_address}<br/>
                  <strong>Redes Sociales:</strong> {aboutMe.social_media.length}
               </div>
            </div>
         </section>

         {/* Habilidades */}
         <section className="border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-3">💻 Habilidades</h2>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <strong>Total Categorías:</strong> {skills.length}<br/>
                  <strong>Total Habilidades:</strong> {stats[0]?.count}<br/>
                  <strong>Nivel Experto:</strong> {stats[1]?.count}<br/>
                  <strong>Proyectos:</strong> {stats[2]?.count}
               </div>
               <div>
                  <strong>Frontend:</strong> {highlights[0]?.count}<br/>
                  <strong>Avanzadas+:</strong> {highlights[1]?.count}<br/>
                  <strong>Backend:</strong> {highlights[2]?.count}
               </div>
            </div>
         </section>

         {/* Proyectos */}
         <section className="border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-3">🚀 Proyectos</h2>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <strong>Total Proyectos:</strong> {projects.length}<br/>
                  <strong>Destacados:</strong> {featuredProjects.length}<br/>
                  <strong>Primer Proyecto:</strong> {projects[0]?.title || 'N/A'}
               </div>
               <div>
                  <strong>Estado Completado:</strong> {projects.filter(p => p.status === 'completed').length}<br/>
                  <strong>En Desarrollo:</strong> {projects.filter(p => p.status === 'inProgress').length}<br/>
                  <strong>Planificados:</strong> {projects.filter(p => p.status === 'planned').length}
               </div>
            </div>
         </section>

         {/* Experiencia */}
         <section className="border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-3">💼 Experiencia</h2>
            <div className="space-y-2">
               {experience.map((exp) => (
                  <div key={exp.id} className="border-l-4 border-blue-500 pl-4">
                     <strong>{exp.position_in}</strong> en {exp.company_name}<br/>
                     <span className="text-sm text-gray-600">
                        {new Date(exp.init_date).getFullYear()} - {exp.currently ? 'Present' : new Date(exp.finish_date).getFullYear()}
                     </span>
                  </div>
               ))}
            </div>
         </section>

         {/* Educación */}
         <section className="border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-3">🎓 Educación</h2>
            <div className="space-y-2">
               {education.map((edu) => (
                  <div key={edu.id} className="border-l-4 border-green-500 pl-4">
                     <strong>{edu.graduate}</strong> en {edu.place_of_study}<br/>
                     <span className="text-sm text-gray-600">
                        {new Date(edu.init_date).getFullYear()} - {edu.currently ? 'Present' : new Date(edu.finish_date!).getFullYear()}
                     </span>
                     {edu.honors && <div className="text-sm text-blue-600">Honores: {edu.honors}</div>}
                  </div>
               ))}
            </div>
         </section>

         {/* Servicios */}
         <section className="border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-3">🛠️ Servicios</h2>
            <div className="space-y-2">
               {services.map((service) => (
                  <div key={service.id} className="border-l-4 border-purple-500 pl-4">
                     <strong>{service.service}</strong><br/>
                     <span className="text-sm text-gray-600">{service.description.length} descripciones</span>
                  </div>
               ))}
            </div>
         </section>

         {/* Estado del Sistema */}
         <section className="bg-green-50 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-3">✅ Estado del Sistema</h2>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <strong>✅ DataContext:</strong> Funcionando<br/>
                  <strong>✅ Hooks:</strong> Funcionando<br/>
                  <strong>✅ Traducciones:</strong> Funcionando<br/>
                  <strong>✅ Idioma:</strong> {lang}
               </div>
               <div>
                  <strong>✅ AboutMe:</strong> {aboutMe ? 'Cargado' : 'Error'}<br/>
                  <strong>✅ Skills:</strong> {skills.length > 0 ? 'Cargado' : 'Error'}<br/>
                  <strong>✅ Projects:</strong> {projects.length > 0 ? 'Cargado' : 'Error'}<br/>
                  <strong>✅ Services:</strong> {services.length > 0 ? 'Cargado' : 'Error'}
               </div>
            </div>
         </section>
      </div>
   );
};
