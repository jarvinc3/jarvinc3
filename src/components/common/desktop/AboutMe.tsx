import { motion } from 'framer-motion';
import Navbar from '../../utils/Navbar';

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
               } className="flex flex-col w-3/4 h-full p-10 shadow-2xl bg-slate-50 rounded-3xl"
            >
               <div className="flex items-center gap-5">
                  <h2 className="text-3xl font-bold">About Me</h2>
                  <div className="h-1 bg-[#60a5fa] rounded-full w-52"></div>
               </div>
               <div className="flex flex-col h-full gap-10 mt-10">
                  <p className='text-lg' >As a frontend developer, I design and build user interfaces, manage data using APIs, implement business logic with the client, and ensure effective communication with the backend. I use HTML, CSS, JavaScript and frameworks to create attractive and responsive interfaces.</p>
                  <p className='text-lg' >Excellent skills for page and application layout, I am proactive, I learn very quickly, I adapt well to a new environment and I am very friendly, I consider myself an efficient person who can meet your needs.</p>
               </div>
               <div className="w-full h-1 bg-[#60a5fa] rounded-full "></div>
            </motion.div>
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
                     ? { translateX: 0, transition: { duration: 1, delay: 0.5 } }
                     : { translateX: 1000, transition: { duration: 1 } }
               }
               className='z-50 flex flex-col w-3/4 gap-5 shadow-2xl p-7 h-1/2 bg-slate-200 rounded-3xl'
            >
               <div className="flex items-center gap-5">
                  <h2 className="text-3xl font-bold">What I Do</h2>
                  <div className="h-1 bg-[#60a5fa] rounded-full w-52"></div>
               </div>
               <div className="flex items-center w-full gap-2 p-3 bg-[#acdcf2] rounded-md shadow-lg h-28">
                  <img className="gifimg" src="/services/frontend.gif" alt="" />
                  <section className="pl-3 border-l border-gray-400 blo2k">
                     <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
                        Frontend Developer
                     </h3>
                     <h3 className="text-sm font-semibold text-gray-600">Using HTML, CSS, JavaScript, and frameworks to create user interfaces</h3>
                  </section>
               </div>
               <div className="flex items-center w-full gap-2 p-3 bg-[#f5c5ab] rounded-md shadow-lg h-28">
                  <img className="gifimg" src="/services/backend.gif" alt="" />
                  <section className="pl-3 border-l border-gray-400 blo2k">
                     <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
                        Backend Developer
                     </h3>
                     <h3 className="text-sm font-semibold text-gray-600">Using Node.js and Express to build APIs and databases with SQL</h3>
                  </section>
               </div>
            </motion.div>
            <div className='flex justify-start w-3/4 h-1/2'>
               <motion.div
                  drag
                  dragConstraints={{ left: -100, right: 170, top: -50, bottom: 50 }}
                  initial={{ translateX: 1000 }}
                  animate={
                     clickedSection === "about"
                        ? { translateX: 0, transition: { duration: 0.5, delay: 1 } }
                        : { translateX: 1000, transition: { duration: 0.5, delay: 0.2 } }
                  }
                  className='z-50 flex flex-col justify-between w-3/4 h-full p-6 shadow-2xl bg-slate-200 rounded-3xl'
               >
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100">
                     <div className="p-1 rounded-md">
                        <img width={35} src="/icons/phone.png" alt="" />
                     </div>
                     <div>
                        <p className="text-sm">Phone</p>
                        <span className="text-lg font-semibold">+1 (809) 637 6631</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100">
                     <div className="p-1 rounded-md">
                        <img width={35} src="/icons/gmail.png" alt="" />
                     </div>
                     <div>
                        <p className="text-sm">Email</p>
                        <span className="text-lg font-semibold text-container">jarvinct3@gmail.com</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100">
                     <div className="p-1 rounded-md">
                        <img width={35} src="/icons/maps.png" alt="" />
                     </div>
                     <div>
                        <p className="text-sm">Location</p>
                        <span className="text-lg font-semibold">
                           Republica Dominicana
                        </span>
                     </div>
                  </div>
               </motion.div>
            </div>
         </section>
      </div >
   )
}
