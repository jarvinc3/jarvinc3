import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dashboard } from "../components/common/desktop/Dashboard";
import { AboutMe } from "../components/common/desktop/AboutMe";
import { Resume } from "../components/common/desktop/Resume";
import { Works } from "../components/common/desktop/Works";
import { Contact } from "../components/common/desktop/Contact";
import { DashboardMobile } from "../components/common/mobile/DashboardMobile";


export const Home = () => {
   const [clickedSection, setClickedSection] = useState<string | null>(null);
   const [onAnimate, setOnAnimate] = useState<boolean>(false);

   const handleClick = (section: string) => {
      setClickedSection(section);
      setOnAnimate(true);
   };


   return (
      <motion.div className="flex items-start justify-center w-screen h-screen bg-white scrollbar-hide main md:p-10 xl:p-10 3xl:p-20 ">
         <div className="desktop flex relative items-center justify-center w-full h-full bg-gradient-to-r from-white via-gray-200 to-[#89909a] rounded-[3rem] 2xl:rounded-[4rem] shadow-xl">
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
            <DashboardMobile />
         </div>
      </motion.div>
   );
};
