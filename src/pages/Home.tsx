import { motion } from "framer-motion";
import { useState } from "react";
import { Dashboard } from "../components/common/Dashboard";
import { AboutMe } from "../components/common/AboutMe";
import { Resume } from "../components/common/Resume";
import { Works } from "../components/common/Works";
import { Contact } from "../components/common/Contact";

export const Home = () => {
   const [clickedSection, setClickedSection] = useState<string | null>(null);
   const [onAnimate, setOnAnimate] = useState<boolean>(false);

   const handleClick = (section: string) => {
      setClickedSection(section);
      setOnAnimate(true);
      console.log(clickedSection);
   };

   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const a = []
   const b = []

   for (let i = 0; i < numbers.length; i++) {
      if (i % 2 === 0) {
         a.push(i)
      } else {
         b.push(i)
      }


   }

   console.log("par", a, "impar", b)
   return (
      <motion.div className="flex items-start justify-center w-screen h-screen p-20 bg-white main">
         <div className="flex relative items-center justify-center w-full h-full bg-gradient-to-r from-white via-gray-200 to-[#89909a] rounded-[4rem] shadow-xl">
            <motion.div animate={onAnimate ? { opacity: 1, transition: { duration: 1 } } : {}} onClick={() => { setOnAnimate(false), setClickedSection(null) }} whileHover={{ scale: 1.1 }} className="absolute z-50 p-2 transition-all duration-300 ease-linear bg-white shadow-xl opacity-0 top-10 left-10 rounded-3xl">
               <img className="w-12 h-12" src="/public/svg/back.svg" alt="" />
            </motion.div>
            <Dashboard handleClick={handleClick} onAnimate={onAnimate} clickedSection={clickedSection} />
            <AboutMe clickedSection={clickedSection} handleClick={handleClick} onAnimate={onAnimate} />
            <Resume clickedSection={clickedSection} handleClick={handleClick} onAnimate={onAnimate} />
            <Works clickedSection={clickedSection} handleClick={handleClick} onAnimate={onAnimate} />
            <Contact clickedSection={clickedSection} handleClick={handleClick} onAnimate={onAnimate} />
         </div>
      </motion.div>
   );
};
