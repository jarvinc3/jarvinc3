import { motion } from 'framer-motion';
import Navbar from '../../utils/Navbar';

interface ContactProps {
   clickedSection: string | null;
   handleClick: (section: string) => void;
   onAnimate: boolean;
}

export const Contact = ({ clickedSection, handleClick, onAnimate }: ContactProps) => {
   return (
      <div id="contact" className="absolute flex w-full h-full py-20">
         <section className={`flex items-end justify-center w-1/3 h-full ${ clickedSection === "contact" ? "" : "opacity-0"}`}>
         <motion.div
               initial={{ translateX: -1500 }}
               animate={
                  clickedSection === "contact"
                     ? { translateX: 0, transition: { duration: 1, delay: 0.5 } }
                     : { translateX: -1000, transition: { duration: 1, } }
               }
               className="absolute w-[45%] h-[80%] shadow-2xl left-20 bg-slate-50 rounded-3xl"
            ></motion.div>
         </section>
         <section className={`flex items-end justify-center w-1/3 h-full ${ clickedSection === "contact" ? "" : "opacity-0"}`}>
            <Navbar handleClick={handleClick} onAnimate={onAnimate} clickedSection={clickedSection} />
         </section>
         <section className="flex flex-col items-center justify-center w-1/3 h-full gap-12">
         </section>
      </div>
   )
}
