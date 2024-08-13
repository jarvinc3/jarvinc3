import { motion } from "framer-motion"
import { LightIcon } from "../components/utils/LightIcon"
import { useState } from "react";

export const Home = () => {
   const [light, setLight] = useState(false);

   return (
      <motion.div className="flex items-start justify-center w-screen h-screen p-20 bg-white main">
         <div className="flex relative items-center justify-center w-full h-full bg-gradient-to-r from-white via-gray-200 to-gray-400 rounded-[4rem] shadow-xl">
            <div className="flex flex-col items-end justify-center w-1/2 h-full">
               <div className="flex flex-col gap-10">
                  <section className="grid grid-cols-2">
                     <motion.section></motion.section>
                     <motion.section className="flex flex-col items-center justify-center cursor-pointer hover:scale-[1.01] transition-all duration-300 h-44 w-28">
                        <div className="flex flex-col items-center justify-center w-24 h-24 bg-blue-400 rounded-2xl">
                           {/* <img className="w-12 h-12" src="" alt="" /> */}
                        </div>
                        <h2 className="text-xl font-medium">About</h2>
                     </motion.section>
                     <motion.section className="flex flex-col items-center justify-center cursor-pointer hover:scale-[1.01] transition-all duration-300 h-44 w-28">
                        <div className="flex flex-col items-center justify-center w-24 h-24 bg-purple-400 rounded-2xl">
                           {/* <img className="w-12 h-12" src="" alt="" /> */}
                        </div>
                        <h2 className="text-xl font-medium">Resume</h2>
                     </motion.section>
                     <motion.section></motion.section>
                  </section>
                  <section className="grid grid-cols-2">
                     <motion.section className="flex flex-col items-center justify-center cursor-pointer hover:scale-[1.01] transition-all duration-300 h-44 w-28">
                        <div className="flex flex-col items-center justify-center w-24 h-24 bg-teal-300 rounded-2xl">
                           {/* <img className="w-12 h-12" src="" alt="" /> */}
                        </div>
                        <h2 className="text-xl font-medium">Works</h2>
                     </motion.section>
                     <motion.section></motion.section>
                     <motion.section></motion.section>
                     <motion.section className="flex flex-col items-center justify-center cursor-pointer hover:scale-[1.01] transition-all duration-300 h-44 w-28">
                        <div className="flex flex-col items-center justify-center w-24 h-24 bg-red-300 rounded-2xl">
                           {/* <img className="w-12 h-12" src="" alt="" /> */}
                        </div>
                        <h2 className="text-xl font-medium">Contact</h2>
                     </motion.section>
                  </section>
               </div>
            </div>
            <div className="z-50 w-1/2">
               <div className="w-[35rem] bg-gradient-to-r from-[#2d2d2f] to-[#161717] rounded-full h-[35rem]"></div>
            </div>
            <div className="flex flex-col items-start justify-between w-1/2 h-full">
               <section className="flex flex-col justify-center gap-2 h-1/2">
                  <h1 className="text-6xl font-bold">Hi, I'm Jarvin</h1>
                  <h2 className="text-3xl font-medium">Software Developer</h2>
               </section>
               <section className="grid grid-cols-2 h-1/2">
                  <motion.section></motion.section>
                  <motion.div className="flex flex-col items-center justify-center cursor-pointer hover:scale-[1.02] transition-all duration-300 h-44 w-28">
                     <div onClick={() => setLight(!light)} className={`flex flex-col items-center justify-center w-24 h-24 rounded-2xl transition-all duration-300 ${light ? "bg-gray-700" : "bg-gray-200"}`}>
                        <LightIcon light={light} className="w-16 h-16 transition-all duration-500 hover:scale-[1.2] left-1/2 top-1/2" />
                     </div>
                  </motion.div>
                  <motion.section className="flex flex-col items-center justify-center cursor-pointer hover:scale-[1.01] transition-all duration-300 h-44 w-28">
                     <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-300 rounded-2xl">
                        {/* <img className="w-12 h-12" src="" alt="" /> */}
                     </div>
                     <h2 className="text-base font-medium">Download CV</h2>
                  </motion.section>
                  <motion.section></motion.section>
               </section>
            </div>
         </div>
      </motion.div>
   )
}
