import { motion } from 'framer-motion';
import Navbar from '../utils/Navbar';

interface WorksProps {
   clickedSection: string | null;
   handleClick: (section: string) => void;
   onAnimate: boolean;
}

export const Works = ({ clickedSection, handleClick, onAnimate }: WorksProps) => {
   return (
      <div className="absolute flex w-full h-full py-20">
         <section className="flex flex-col items-center justify-center w-1/3 h-full gap-12">
         </section>
         <section className="flex items-end justify-center w-1/3 h-full">
            <Navbar handleClick={handleClick} onAnimate={onAnimate} clickedSection={clickedSection} />
         </section>
         <section className="flex items-center justify-center w-1/3 h-full">
            <motion.div animate={clickedSection === "works" ? { translateX: 0, transition: { duration: 1, delay: 0.5 } } : { translateX: 1000, transition: { duration: 1, }}} className="w-3/4 h-full shadow-2xl bg-slate-50 rounded-3xl">

            </motion.div>
         </section>
      </div>
   )
}
