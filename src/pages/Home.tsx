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
      <motion.div className="flex items-start justify-center w-screen h-screen p-5 bg-white md:p-10 xl:p-20 main">
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
         <div className="flex flex-col relative items-center justify-center w-full h-full bg-gradient-to-b from-white via-gray-200 to-[#89909a] rounded-xl shadow-xl">
            <div className="w-full bg-orange-500 h-2/5 rounded-t-xl"></div>
            <div ref={scrollContainerRef} className="flex items-center justify-start w-full overflow-x-auto bg-blue-500 h-3/5 rounded-b-xl">
               <div className="flex p-4 space-x-4">
                  <motion.div
                     className="w-[200px] h-[300px] bg-red-500 rounded-xl shadow-xl flex items-center justify-center"
                     whileHover={{ scale: 1.1 }}
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                     <span className="text-white">Card 1</span>
                  </motion.div>

                  <motion.div
                     className="w-[200px] h-[300px] bg-green-500 rounded-xl shadow-xl flex items-center justify-center"
                     whileHover={{ scale: 1.1 }}
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                     <span className="text-white">Card 2</span>
                  </motion.div>

                  <motion.div
                     className="w-[200px] h-[300px] bg-yellow-500 rounded-xl shadow-xl flex items-center justify-center"
                     whileHover={{ scale: 1.1 }}
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                     <span className="text-white">Card 3</span>
                  </motion.div>

                  <motion.div
                     className="w-[200px] h-[300px] bg-pink-500 rounded-xl shadow-xl flex items-center justify-center"
                     whileHover={{ scale: 1.1 }}
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                     <span className="text-white">Card 4</span>
                  </motion.div>
               </div>
            </div>
         </div>
      </motion.div>
   );
};
