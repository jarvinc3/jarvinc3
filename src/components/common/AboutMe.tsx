import { motion } from 'framer-motion';
import Navbar from '../utils/Navbar';

interface AboutMeProps {
   clickedSection: string | null;
   handleClick: (section: string) => void;
   onAnimate: boolean;
}

export const AboutMe = ({ clickedSection, handleClick, onAnimate }: AboutMeProps) => {
   return (
      <div id='about' className="absolute flex w-full h-full py-20">
         <section className="flex items-center justify-center w-1/3 h-full">
            <motion.div
               initial={{ translateX: -1000 }}
               animate={
                  clickedSection === "about"
                     ? { translateX: 20, transition: { duration: 1, delay: 0.5 } }
                     : { translateX: -1000, transition: { duration: 1, } }
               } className="w-3/4 h-full shadow-2xl bg-slate-50 rounded-3xl"
            ></motion.div>
         </section>
         <section className={`flex items-end justify-center w-1/3 h-full ${clickedSection === "about" ? "" : "opacity-0"}`}>
            <Navbar handleClick={handleClick} onAnimate={onAnimate} clickedSection={clickedSection} />
         </section>
         <section className="flex flex-col items-center justify-center w-1/3 h-full gap-12">
            <motion.div
               drag
               dragConstraints={{ left: -100, right: 50, top: -50, bottom: 50 }}
               initial={{ translateX: 1000 }}
               animate={
                  clickedSection === "about"
                     ? { translateX: 0, transition: { duration: 0.5, delay: 1 } }
                     : { translateX: 1000, transition: { duration: 0.5, delay: 0.2 } }
               }
               className='z-50 w-3/4 shadow-2xl h-1/2 bg-slate-200 rounded-3xl'
            ></motion.div>
            <div className='flex justify-start w-3/4 h-1/2'>
               <motion.div
                  drag
                  dragConstraints={{ left: -100, right: 170, top: -50, bottom: 50 }}
                  initial={{ translateX: 1000 }}
                  animate={
                     clickedSection === "about"
                        ? { translateX: 0, transition: { duration: 1, delay: 0.5 } }
                        : { translateX: 1000, transition: { duration: 1 } }
                  }
                  className='z-50 w-3/4 h-full shadow-2xl bg-slate-200 rounded-3xl'
               ></motion.div>
            </div>
         </section>
      </div>
   )
}
