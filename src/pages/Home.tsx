import { useIsMobile } from "@/hooks/useIsMobile";
import { useSectionClick } from "@/hooks/useSectionClick";
import { AboutMe } from "@/modules/desktop/AboutMe";
import { Contact } from "@/modules/desktop/Contact";
import { Dashboard } from "@/modules/desktop/Dashboard";
import { Resume } from "@/modules/desktop/Resume";
import { Works } from "@/modules/desktop/Works";
import { DashboardMobile } from "@/modules/mobile/Dashboard";
import { Section } from "@/types/Section.types";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";


export const Home = () => {
   const { onAnimate, setOnAnimate, setClickedSection } = useSectionClick();
   const isMobile = useIsMobile();

   return (
      <motion.div className="flex relative items-center justify-center w-screen h-screen scrollbar-hide bg-gradient-to-r from-white via-gray-200 to-[#89909a] md:p-10 xl:p-20 ">
         {isMobile
            ? <>
               <DashboardMobile />
            </>
            : <div className="desktop flex relative items-center justify-center w-full h-full backdrop-blur-2xl bg-gradient-to-r from-white via-gray-200 to-[#89909a] rounded-[3rem] 2xl:rounded-[4rem] border-2">
               <motion.div
                  animate={onAnimate ? { opacity: 1, transition: { duration: 1 } } : {}}
                  onClick={() => (setOnAnimate(false), setClickedSection(Section.Dashboard))}
                  whileHover={{ scale: 1.1 }}
                  className="absolute z-50 p-2 transition-all duration-300 ease-linear bg-white shadow-xl opacity-0 top-10 left-10 rounded-3xl"
               >
                  <Icon icon="weui:back-filled" className="w-12 h-12" />
               </motion.div>
               <Dashboard />
               <AboutMe />
               <Resume />
               <Works />
               <Contact />
            </div>
         }
      </motion.div>
   );
};
