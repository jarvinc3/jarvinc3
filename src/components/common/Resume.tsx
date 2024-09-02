import { motion } from 'framer-motion';
import Navbar from '../utils/Navbar';

interface ResumeProps {
   clickedSection: string | null;
   handleClick: (section: string) => void;
   onAnimate: boolean;
}

export const Resume = ({ clickedSection, handleClick, onAnimate }: ResumeProps) => {
   return (
      <div id='resume' className="absolute flex w-full h-full py-20">
         <section className="flex flex-col items-center justify-center w-1/3 h-full gap-12">
            {/* <motion.ul initial={{ translateX: 1000 }} animate={clickedSection === "resume" ? { translateX: 0, transition: { duration: 1, delay: 0.5 } } : { translateX: 1000, transition: { duration: 1, }}} className='grid w-1/2 h-full grid-cols-1 gap-3 overflow-auto' >
            <motion.li className='h-32 bg-slate-50 rounded-3xl'></motion.li>
            <motion.li className='h-32 bg-slate-50 rounded-3xl'></motion.li>
            <motion.li className='h-32 bg-slate-50 rounded-3xl'></motion.li>
            <motion.li className='h-32 bg-slate-50 rounded-3xl'></motion.li>
            <motion.li className='h-32 bg-slate-50 rounded-3xl'></motion.li>
            <motion.li className='h-32 bg-slate-50 rounded-3xl'></motion.li>
            <motion.li className='h-32 bg-slate-50 rounded-3xl'></motion.li>
            <motion.li className='h-32 bg-slate-50 rounded-3xl'></motion.li>
            <motion.li className='h-32 bg-slate-50 rounded-3xl'></motion.li>
            <motion.li className='h-32 bg-slate-50 rounded-3xl'></motion.li>
            <motion.li className='h-32 bg-slate-50 rounded-3xl'></motion.li>
         </motion.ul> */}
         </section>
         <section className={`flex items-end justify-center w-1/3 h-full ${clickedSection === "resume" ? "" : "opacity-0"}`}>
            <Navbar handleClick={handleClick} onAnimate={onAnimate} clickedSection={clickedSection} />
         </section>
         <section className="flex items-center justify-center w-1/3 h-full pr-20">
            <motion.div
               initial={{ translateX: 1500 }}
               animate={
                  clickedSection === "resume"
                     ? { translateX: 0, transition: { duration: 1, delay: 0.5 } }
                     : { translateX: 1500, transition: { duration: 1, } }
               }
               className="absolute w-[45%] h-[80%] shadow-2xl right-20 bg-slate-50 rounded-3xl"
            ></motion.div>
         </section>
      </div>
   )
}
