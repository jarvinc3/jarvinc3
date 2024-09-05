import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Dashboard } from "../components/common/desktop/Dashboard";
import { AboutMe } from "../components/common/desktop/AboutMe";
import { Resume } from "../components/common/desktop/Resume";
import { Works } from "../components/common/desktop/Works";
import { Contact } from "../components/common/desktop/Contact";


export const Home = () => {
   const [clickedSection, setClickedSection] = useState<string | null>(null);
   const [onAnimate, setOnAnimate] = useState<boolean>(false);
   const scrollContainerRef = useRef<HTMLDivElement>(null);

   const handleClick = (section: string) => {
      setClickedSection(section);
      setOnAnimate(true);
      console.log(clickedSection);
   };

   useEffect(() => {
      if (scrollContainerRef.current) {
         const containerWidth = scrollContainerRef.current.offsetWidth;
         const cardWidth = 210;
         const gap = 16;
         const indexOfCardToCenter = 1;

         const scrollPosition = (cardWidth + gap) * indexOfCardToCenter - (containerWidth / 2) + (cardWidth / 2);

         scrollContainerRef.current.scrollLeft = scrollPosition;
      }
      const widthThreshold = 1280;
      if (window.innerWidth < widthThreshold) {
         if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
               console.error("Error al intentar entrar en pantalla completa:", err);
            });
         }
      }
   }, [])


   return (
      <motion.div className="flex items-start justify-center w-screen h-screen bg-white scrollbar-hide main md:p-10 xl:p-20 ">
         <div className="desktop flex relative items-center justify-center w-full h-full bg-gradient-to-r from-white via-gray-200 to-[#89909a] rounded-[4rem] shadow-xl">
            <Link to='/'>
               <motion.div animate={onAnimate ? { opacity: 1, transition: { duration: 1 } } : {}} onClick={() => { setOnAnimate(false), setClickedSection(null) }} whileHover={{ scale: 1.1 }} className="absolute z-50 p-2 transition-all duration-300 ease-linear bg-white shadow-xl opacity-0 top-10 left-10 rounded-3xl">
                  <img className="w-12 h-12" src="/svg/back.svg" alt="" />
               </motion.div>
            </Link>
            <Dashboard handleClick={handleClick} onAnimate={onAnimate} clickedSection={clickedSection} />
            <AboutMe clickedSection={clickedSection} handleClick={handleClick} onAnimate={onAnimate} />
            <Resume clickedSection={clickedSection} handleClick={handleClick} onAnimate={onAnimate} />
            <Works clickedSection={clickedSection} handleClick={handleClick} onAnimate={onAnimate} />
            <Contact clickedSection={clickedSection} handleClick={handleClick} onAnimate={onAnimate} />
         </div>
         <div className="responsive flex flex-col relative items-center justify-center w-full h-full bg-gradient-to-b from-white via-gray-200 to-[#89909a]">
            <div className="w-full bg-orange-500 h-2/5"></div>
            <div className="relative flex items-center justify-center w-full h-screen bg-gray-800">
               {/* Tarjeta central */}
               <motion.div
                  className="w-40 h-64 bg-teal-400 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
               />

               {/* Tarjeta rotada a la izquierda */}
               <motion.div
                  className="absolute left-[10%] top-[50%] w-40 h-64 bg-pink-500 rounded-lg shadow-lg"
                  style={{ transform: 'rotate(-30deg)' }}
                  whileHover={{ scale: 1.05, rotate: -25 }}
                  transition={{ type: 'spring', stiffness: 300 }}
               />

               {/* Tarjeta rotada a la derecha */}
               <motion.div
                  className="absolute right-[10%] top-[50%] w-40 h-64 bg-yellow-400 rounded-lg shadow-lg"
                  style={{ transform: 'rotate(30deg)' }}
                  whileHover={{ scale: 1.05, rotate: 25 }}
                  transition={{ type: 'spring', stiffness: 300 }}
               />

               {/* Pequeña línea central */}
               <div className="absolute bottom-[30%] w-16 h-1 bg-teal-400" />
            </div>
         </div>
      </motion.div>
   );
};
