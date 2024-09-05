import { motion } from 'framer-motion';
import Navbar from '../../utils/Navbar';

interface WorksProps {
   clickedSection: string | null;
   handleClick: (section: string) => void;
   onAnimate: boolean;
}

export const Works = ({ clickedSection, handleClick, onAnimate }: WorksProps) => {
   return (
      <div id="works" className="absolute flex w-full h-full py-20">
         <section className="flex flex-col items-center justify-center w-1/3 h-full gap-10">
            <motion.div
               drag
               dragConstraints={{ left: -50, right: 60, top: -50, bottom: 50 }}
               initial={{ translateY: -1000 }}
               animate={
                  clickedSection === "works"
                     ? { translateY: 0, transition: { duration: 1, delay: 0.5 } }
                     : { translateY: -1000, transition: { duration: 1, } }
               }
               className="z-40 w-3/4 h-full shadow-2xl bg-slate-50 rounded-3xl"
            ></motion.div>
            <motion.div
               drag
               dragConstraints={{ left: -50, right: 60, top: -50, bottom: 50 }}
               initial={{ translateX: -1000 }}
               animate={
                  clickedSection === "works"
                     ? { translateX: 0, transition: { duration: 0.5, delay: 1 } }
                     : { translateX: -1000, transition: { duration: 1, } }
               }
               className="z-50 w-3/4 h-full shadow-2xl bg-slate-50 rounded-3xl"
            ></motion.div>
         </section>
         <section className={`flex items-end justify-center w-1/3 h-full ${clickedSection === "works" ? "" : "opacity-0"}`}>
            <Navbar handleClick={handleClick} onAnimate={onAnimate} clickedSection={clickedSection} />
         </section>
         <section className="flex flex-col items-center justify-center w-1/3 h-full gap-12">
            <motion.div
               drag
               dragConstraints={{ left: -100, right: 50, top: -50, bottom: 50 }}
               initial={{ translateX: 1000 }}
               animate={
                  clickedSection === "works"
                     ? { translateX: 0, transition: { duration: 0.5, delay: 1 } }
                     : { translateX: 1000, transition: { duration: 1 } }
               }
               className='z-50 w-3/4 shadow-2xl h-1/2 bg-slate-200 rounded-3xl'
            ></motion.div>
            <motion.div
               drag
               dragConstraints={{ left: -100, right: 50, top: -50, bottom: 50 }}
               initial={{ translateY: 1000 }}
               animate={
                  clickedSection === "works"
                     ? { translateY: 0, transition: { duration: 1, delay: 0.5 } }
                     : { translateY: 1000, transition: { duration: 1 } }
               }
               className='z-50 w-3/4 shadow-2xl h-1/2 bg-slate-200 rounded-3xl'
            ></motion.div>
         </section>
      </div>
   )
}
