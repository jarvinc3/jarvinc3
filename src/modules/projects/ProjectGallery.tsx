import { ProjectSection } from '@/components/types/section.types';
import { Card } from '@/components/ui/card';
import { useTranslate } from '@/hooks/use-translate';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect, useState } from 'react';

interface ProjectGalleryProps {
   images: string[];
   projectTitle: string;
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
   const [likes, setLikes] = useState(Math.floor(Math.random() * 100) + 50);
   const [views] = useState(Math.floor(Math.random() * 1000) + 500);
   const [isFullscreen, setIsFullscreen] = useState(false);
   const [currentImage, setCurrentImage] = useState(0);
   const [isAutoplay, setIsAutoplay] = useState(true);
   const [isLiked, setIsLiked] = useState(false);
   const { t } = useTranslate();

   const imageDescriptions = [
      "Vista principal de la aplicación mostrando la interfaz de usuario moderna y limpia",
      "Panel de administración con dashboard completo y métricas en tiempo real",
      "Experiencia móvil optimizada con diseño responsive y navegación intuitiva",
      "Funcionalidades avanzadas y herramientas de gestión integradas"
   ];

   useEffect(() => {
      let interval: NodeJS.Timeout;
      if (isAutoplay && images.length > 1) {
         interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
         }, 4000);
      }
      return () => clearInterval(interval);
   }, [isAutoplay, images.length]);

   const toggleFullscreen = () => {
      setIsFullscreen(!isFullscreen);
   };

   return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 text-primary-foreground">
         <Card
            type="custom"
            animate="up"
            projectSection={ProjectSection.GALLERY}
            className="relative w-full h-full overflow-hidden p-2"
         >
            <div className="absolute top-4 right-3 left-3 z-50 flex justify-between">
               <span className="card-secondary h-fit px-3 py-1 text-sm font-bold">
                  Online Shop
               </span>
               <button
                  onClick={toggleFullscreen}
                  className="cursor-pointer text-primary bg-white/30 rounded-full p-3"
               >
                  <Icon icon={isFullscreen ? "fluent:full-screen-minimize-32-filled" : "hugeicons:full-screen"} className="w-5 h-5" />
               </button>
            </div>

            <div className="absolute inset-0 rounded-xl overflow-hidden">
               <img
                  src={images[currentImage]}
                  alt={`${projectTitle} - Full view ${currentImage + 1}`}
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-foreground/40" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10 px-4 xl:px-6 flex flex-col justify-end gap-4">
               <h2 className="text-3xl xl:text-5xl font-bold text-primary tracking-tight leading-tight">
                  {projectTitle}
               </h2>

               <p className="text-lg text-slate-200 shadow-sm tracking-tight leading-relaxed">
                  {imageDescriptions[currentImage]}
               </p>

               <div className="flex items-center gap-6 mb-2 md:mb-6">
                  <div className="hidden md:flex items-center gap-2 text-secondary">
                     <Icon icon="mdi:eye" className="size-5 xl:text-primary" />
                     <span>{views.toLocaleString()} {t("projects.views")}</span>
                  </div>

                  <button
                     onClick={() => (setIsLiked(!isLiked), setLikes(prev => isLiked ? prev - 1 : prev + 1))}
                     className={`hidden md:flex items-center gap-2 cursor-pointer transition-colors ${isLiked
                        ? 'text-red-400'
                        : 'text-secondary hover:text-red-400'
                        }`}
                  >
                     <Icon
                        icon="mdi:heart"
                        className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`}
                     />
                     <span>{likes}</span>
                  </button>

                  <button className="hidden md:flex items-center gap-2 cursor-pointer text-secondary hover:text-primary hover:scale-105 transition-all">
                     <Icon icon="mdi:share" className="w-5 h-5" />
                     <span className="font-medium">Compartir</span>
                  </button>

                  <div className="w-full text-center font-medium text-lg md:hidden text-primary">
                     {currentImage + 1} / {images.length}
                  </div>
               </div>
            </div>
         </Card>

         <div className="relative z-10 w-full space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 items-center">
               <Card
                  type="custom"
                  animate="left"
                  projectSection={ProjectSection.GALLERY}
                  className="flex items-center"
               >
                  <button
                     onClick={() => setIsAutoplay(!isAutoplay)}
                     className="neu-button flex items-center gap-2 px-4 py-2 w-fit"
                  >
                     <Icon icon={isAutoplay ? "mdi:pause" : "mdi:play"} className="w-5 h-5" />
                     <span className="text-sm font-medium">
                        {isAutoplay ? 'Pausar' : 'Reproducir'}
                     </span>
                  </button>
               </Card>

               <Card
                  type="custom"
                  animate="static2"
                  projectSection={ProjectSection.GALLERY}
                  className="hidden md:flex items-center justify-center gap-2"
               >
                  {images.map((_, index) => (
                     <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`cursor-pointer transition-all duration-300 ${index === currentImage
                           ? 'w-12 h-3 bg-info rounded-full'
                           : 'w-3 h-3 bg-foreground/30 hover:bg-foreground/50 rounded-full'
                           }`}
                     />
                  ))}
               </Card>

               <Card
                  type="custom"
                  animate="right"
                  projectSection={ProjectSection.GALLERY}
                  className="flex items-center justify-end"
               >
                  <div className="card-secondary w-fit px-4 py-2 flex gap-2">
                     <div className="flex items-center gap-2">
                        <Icon icon="hugeicons:eye" className="size-5" />
                        <span>{views.toLocaleString()}</span>
                     </div>

                     <button
                        onClick={() => (setIsLiked(!isLiked), setLikes(prev => isLiked ? prev - 1 : prev + 1))}
                        className={`border-l-2 border-disabled-foreground cursor-pointer pl-2 flex items-center gap-2 transition-colors 
                           ${isLiked
                              ? 'text-red-400'
                              : 'hover:text-red-400'
                           }
                        `}
                     >
                        <Icon
                           icon={isLiked ? "mdi:heart" : "solar:heart-outline"}
                           className="w-5 h-5 animate-bounce"
                        />
                        <span>{likes}</span>
                     </button>
                  </div>
               </Card>
            </div>

            <Card
               type="custom"
               animate="bottom"
               projectSection={ProjectSection.GALLERY}
               className="relative flex justify-center"
            >
               <div className="card-secondary max-w-full p-4 pb-4 flex items-center gap-3 overflow-x-scroll scrollbar-hidden">
                  {images.map((item, index) => (
                     <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`relative flex-shrink-0 w-20 h-20 xl:w-24 xl:h-24 rounded-xl overflow-hidden transition-all duration-300 group 
                        ${index === currentImage
                              ? 'scale-110'
                              : 'hover:scale-105 opacity-60 hover:opacity-90'
                           }
                     `}
                     >
                        <img
                           src={item}
                           alt={projectTitle}
                           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 transition-all duration-300 
                        ${index === currentImage
                              ? 'bg-gradient-to-t from-blue-600/40 to-transparent'
                              : 'bg-foreground/20 group-hover:bg-foreground/10'
                           }`}
                        />

                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-foreground/80 to-transparent">
                           <div className="text-primary text-xs font-medium truncate">
                              {projectTitle}
                           </div>
                        </div>

                        {index === currentImage && (
                           <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-info rounded-full shadow-lg" />
                        )}
                     </button>
                  ))}
               </div>
            </Card>
         </div>
      </div>
   );
}
