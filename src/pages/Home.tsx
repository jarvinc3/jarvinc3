import { domAnimation, LazyMotion, motion } from "framer-motion";
import { useRef } from "react";
import { Dashboard } from "../components/common/Dashboard";
import { AboutMe } from "../components/common/AboutMe";
import { Experience } from "../components/common/Experience";
import { Work } from "../components/common/Work";
import { References } from "../components/common/References";
import { Contact } from "../components/common/Contact";

export const Home = () => {
   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);


   return (
      <LazyMotion features={domAnimation}>
         <motion.div className="bg-[#f8f7f1] w-screen h-auto scrollbar-hide scroll-smooth">
            <div className="fixed left-0 flex items-center tranlate-y-1/2 top-1/2">
               <a className="text-[#f8f7f1] rounded-r-xl text-3xl font-bold p-5 bg-[#032d3f]" href="#work">work</a>
            </div>
            <motion.div
               className="bg-red-500"
               id="dashboard"
               ref={(el) => (sectionRefs.current[0] = el)}
               initial="hidden"
               transition={{ duration: 0.5 }}
            >
               <Dashboard />
            </motion.div>
            <motion.div
               className="bg-blue-500"
               id="aboutme"
               ref={(el) => (sectionRefs.current[1] = el)}
               initial="hidden"
               transition={{ duration: 0.5 }}
            >
               <AboutMe />
            </motion.div>
            <motion.div
               className="bg-green-500"
               id="experience"
               ref={(el) => (sectionRefs.current[2] = el)}
               initial="hidden"
               transition={{ duration: 0.5 }}
            >
               <Experience />
            </motion.div>
            <motion.div
               className="bg-yellow-500"
               id="work"
               ref={(el) => (sectionRefs.current[3] = el)}
               initial="hidden"
               transition={{ duration: 0.5 }}
            >
               <Work />
            </motion.div>
            <motion.div
               className="bg-purple-500"
               id="references"
               ref={(el) => (sectionRefs.current[4] = el)}
               initial="hidden"
               transition={{ duration: 0.5 }}
            >
               <References />
            </motion.div>
            <motion.div
               className="bg-orange-500"
               id="contact"
               ref={(el) => (sectionRefs.current[5] = el)}
               initial="hidden"
               transition={{ duration: 0.5 }}
            >
               <Contact />
            </motion.div>
         </motion.div>
      </LazyMotion>
   );
};
