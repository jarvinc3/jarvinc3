import { motion } from "framer-motion";
import { LightIcon } from "../components/utils/LightIcon";
import { useState } from "react";

export const Home = () => {
   const [light, setLight] = useState(false);
   const [clickedSection, setClickedSection] = useState<string | null>(null);
   const [onAnimate, setOnAnimate] = useState<boolean>(false);

   const handleClick = (section: string) => {
      setClickedSection(section);
      setOnAnimate(true);
      console.log(clickedSection);
   };


   return (
      <motion.div className="flex items-start justify-center w-screen h-screen p-20 bg-white main">
         <div className="flex relative items-center justify-center w-full h-full bg-gradient-to-r from-white via-gray-200 to-[#89909a] rounded-[4rem] shadow-xl">
            <motion.div animate={onAnimate ? { opacity: 1, transition: { duration: 1 } } : {}} onClick={() => { setOnAnimate(false), setClickedSection(null) }} whileHover={{ scale: 1.1 }} className="absolute p-2 transition-all duration-300 ease-linear bg-white shadow-xl opacity-0 top-10 left-10 rounded-3xl">
               <img className="w-12 h-12" src="/public/svg/back.svg" alt="" />
            </motion.div>
            <div className="flex flex-col items-end justify-center w-1/2 h-full">
               <div className="flex flex-col gap-10">
                  <section className="grid grid-cols-2">
                     <motion.section></motion.section>
                     <motion.section
                        animate={onAnimate ? { x: 400, y: 300, opacity: 0, transition: { duration: 1 } } : {}}
                        onClick={() => handleClick("about")}
                        className="flex flex-col items-center justify-center cursor-pointer hover:scale-[1.01] transition-all duration-300 ease-linear h-44 w-28"
                     >
                        <div className="flex flex-col items-center justify-center w-24 h-24 bg-blue-400 rounded-2xl">
                           <img className="w-12 h-12" src="/public/svg/user.svg" alt="" />
                        </div>
                        <h2 className="text-xl font-medium">About</h2>
                     </motion.section>
                     <motion.section
                        animate={onAnimate ? { x: 500, y: 100, opacity: 0, transition: { duration: 1 } } : {}}
                        onClick={() => handleClick("resume")}
                        className="flex flex-col items-center justify-center cursor-pointer hover:scale-[1.01] transition-all duration-300 ease-linear h-44 w-28"
                     >
                        <div className="flex flex-col items-center justify-center w-24 h-24 bg-purple-400 rounded-2xl">
                           <img className="w-12 h-12" src="/public/svg/resume.svg" alt="" />
                        </div>
                        <h2 className="text-xl font-medium">Resume</h2>
                     </motion.section>
                     <motion.section></motion.section>
                  </section>
                  <section className="grid grid-cols-2">
                     <motion.section
                        animate={onAnimate ? { x: 500, y: -100, opacity: 0, transition: { duration: 1 } } : {}}
                        onClick={() => handleClick("works")}
                        className="flex flex-col items-center justify-center cursor-pointer hover:scale-[1.01] transition-all duration-300 ease-linear h-44 w-28"
                     >
                        <div className="flex flex-col items-center justify-center w-24 h-24 bg-teal-300 rounded-2xl">
                           <img className="w-12 h-12" src="/public/svg/work.svg" alt="" />
                        </div>
                        <h2 className="text-xl font-medium">Works</h2>
                     </motion.section>
                     <motion.section></motion.section>
                     <motion.section></motion.section>
                     <motion.section
                        animate={onAnimate ? { x: 400, y: -300, opacity: 0, transition: { duration: 1 } } : {}}
                        onClick={() => handleClick("contact")}
                        className="flex flex-col items-center justify-center cursor-pointer hover:scale-[1.01] transition-all duration-300 ease-linear h-44 w-28"
                     >
                        <div className="flex flex-col items-center justify-center w-24 h-24 bg-red-300 rounded-2xl">
                           <img className="w-12 h-12" src="/public/svg/contact.svg" alt="" />
                        </div>
                        <h2 className="text-xl font-medium">Contact</h2>
                     </motion.section>
                  </section>
               </div>
            </div>
            <div className="z-50 flex items-center justify-center w-1/2">
               <div className="2xl:w-[40rem] w-[30rem] h-[30rem] 2xl:h-[40rem] bg-gradient-to-r from-[#37373a] to-[#161717] rounded-full"></div>
            </div>
            <div className="flex flex-col items-start justify-between w-1/2 h-full gap-10">
               <section className="flex flex-col justify-center gap-2 h-1/2">
                  <motion.h1 animate={onAnimate ? { x: -500, opacity: 0, transition: { duration: 0.6, delay: 0.5 } } : { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }} className="text-5xl font-bold 2xl:text-6xl">
                     Hi, I'm Jarvin
                  </motion.h1>
                  <motion.h2 animate={onAnimate ? { x: -500, opacity: 0, transition: { duration: 0.5, delay: 0.5 } } : { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }} className="text-2xl font-medium 2xl:text-3xl">
                     Software Developer
                  </motion.h2>
               </section>
               <div className="h-1/2">
                  <section className="grid grid-cols-2">
                     <motion.section></motion.section>
                     <motion.div
                        animate={onAnimate ? { x: -450, y: -100, opacity: 0, transition: { duration: 1 } } : {}}
                        className="flex flex-col items-center justify-center cursor-pointer hover:scale-[1.02] transition-all duration-300 ease-linear h-44 w-28"
                     >
                        <div
                           onClick={() => setLight(!light)}
                           className={`flex flex-col items-center justify-center w-24 h-24 rounded-2xl transition-all duration-300 ${light ? "bg-gray-700" : "bg-gray-200"}`}
                        >
                           <LightIcon light={light} className="w-16 h-16 transition-all duration-500 hover:scale-[1.2] left-1/2 top-1/2" />
                        </div>
                     </motion.div>
                     <motion.section
                        animate={onAnimate ? { x: -350, y: -300, opacity: 0, transition: { duration: 1 } } : {}}
                        className="flex flex-col items-center justify-center cursor-pointer hover:scale-[1.01] transition-all duration-300 ease-linear h-44 w-28"
                     >
                        <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-300 rounded-2xl">
                           <img className="w-12 h-12" src="/public/svg/download.svg" alt="" />
                        </div>
                        <h2 className="text-base font-medium">Download CV</h2>
                     </motion.section>
                     <motion.section></motion.section>
                  </section>
               </div>
            </div>
         </div>
      </motion.div>
   );
};
