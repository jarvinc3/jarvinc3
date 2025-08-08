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
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 p-4 text-primary-foreground">
         {/* Main Slider */}
         <Card
            type="custom"
            animate="up"
            projectSection={ProjectSection.GALLERY}
            className="relative w-full h-full overflow-hidden p-2"
         >
            <div className="absolute top-4 right-3 left-3 z-50 flex items-center justify-between">
               <span className="card-secondary px-3 py-1 text-sm font-bold">
                  Online Shop
               </span>
               <button
                  onClick={() => setIsAutoplay(!isAutoplay)}
                  className="neu-button flex items-center gap-2 px-4 py-2 w-fit"
               >
                  <Icon icon={isAutoplay ? "mdi:pause" : "mdi:play"} className="w-5 h-5" />
               </button>
            </div>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
               <img
                  src={images[currentImage]}
                  alt={`${projectTitle} - Full view ${currentImage + 1}`}
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-foreground/40" />
            </div>

            {/* Navigation Arrows */}
            <button
               onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
               className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm text-primary transition-all duration-200 hover:scale-110"
            >
               <Icon icon="mdi:chevron-left" className="w-6 h-6" />
            </button>

            <button
               onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
               className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm text-primary transition-all duration-200 hover:scale-110"
            >
               <Icon icon="mdi:chevron-right" className="w-6 h-6" />
            </button>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 xl:px-12  flex flex-row items-end justify-between gap-6">
               {/* Project Info */}
               <div className="flex-1 max-w-2xl">
                  <h2 className="text-3xl xl:text-5xl font-bold text-primary  leading-tight">
                     {projectTitle}
                  </h2>

                  <p className="text-lg text-slate-200 leading-relaxed mb-6 max-w-xl">
                     {imageDescriptions[currentImage]}
                  </p>

                  {/* Metrics */}
                  <div className="flex items-center gap-6 mb-6">
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

                     <button className="flex items-center gap-2 cursor-pointer text-secondary hover:text-primary hover:scale-105 transition-all">
                        <Icon icon="mdi:share" className="w-5 h-5" />
                        <span className="font-medium">Compartir</span>
                     </button>
                  </div>
               </div>

               {/* Controls */}
               <button
                  onClick={toggleFullscreen}
                  className="neu-button cursor-pointer p-3 mb-4"
               >
                  <Icon icon={isFullscreen ? "fluent:full-screen-minimize-32-filled" : "hugeicons:full-screen"} className="w-5 h-5" />
               </button>
            </div>
         </Card>

         {/* Thumbnail Navigation */}
         <div className="relative z-10 w-full space-y-4">
            {/* Navigation Controls */}
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
                  className="hidden md:block text-center"
               >
                  <div className="font-medium text-lg">
                     {currentImage + 1} / {images.length}
                  </div>
                  <div className="text-secondary-foreground text-sm">
                     {t("projects.view")} {currentImage + 1}
                  </div>
               </Card>

               <Card
                  type="custom"
                  animate="right"
                  projectSection={ProjectSection.GALLERY}
                  className="flex items-center justify-end"
               >
                  <div className="card-secondary w-fit px-4 py-2 flex items-center gap-2">
                     <div className="flex items-center gap-2">
                        <Icon icon="hugeicons:eye" className="size-5" />
                        <span>{views.toLocaleString()}</span>
                     </div>

                     <button
                        onClick={() => (setIsLiked(!isLiked), setLikes(prev => isLiked ? prev - 1 : prev + 1))}
                        className={`flex items-center gap-2 transition-colors ${isLiked
                           ? 'text-red-400'
                           : 'hover:text-red-400'
                           }`}
                     >
                        <Icon
                           icon={isLiked ? "mdi:heart" : "solar:heart-outline"}
                           className="w-5 h-5"
                        />
                        <span>{likes}</span>
                     </button>
                  </div>
               </Card>
            </div>

            {/* Thumbnails Carousel */}
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

                        {/* Thumbnail Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-foreground/80 to-transparent">
                           <div className="text-primary text-xs font-medium truncate">
                              {projectTitle}
                           </div>
                        </div>

                        {/* Active Indicator */}
                        {index === currentImage && (
                           <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-info rounded-full shadow-lg" />
                        )}
                     </button>
                  ))}
               </div>
            </Card>

            {/* Progress Dots */}
            <Card
               type="custom"
               animate="static2"
               projectSection={ProjectSection.GALLERY}
               className="flex items-center justify-center gap-2 mt-6"
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
         </div>
      </div>
   );
}