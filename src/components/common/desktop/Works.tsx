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
               className="z-40 flex flex-col justify-between w-3/4 h-full p-5 shadow-2xl bg-slate-50 rounded-3xl"
            >
               <div className="relative flex justify-center w-full">
                  <img onClick={() => window.open("https://melon-shop.vercel.app/")} className='w-[90%] cursor-pointer rounded-2xl' src="/projects/melon-shop.png" alt="" />
                  <div className="absolute flex items-center justify-between w-[90%] px-5 -bottom-5">
                     <div onClick={() => window.open("https://github.com/jarvinc3/melon-shop")} className="flex items-center gap-2 px-5 py-2 hover:scale-[1.01] transition-all duration-300 ease-linear cursor-pointer rounded-3xl bg-slate-700">
                        <img className="w-10" src="/svg/github.svg" alt="" />
                        <p className="text-xl font-bold text-white">Repo</p>
                     </div>
                     <div onClick={() => window.open("https://melon-shop.vercel.app/")} className="flex items-center gap-2 px-5 py-2 cursor-pointer hover:scale-[1.01] transition-all duration-300 ease-linear rounded-3xl bg-slate-700">
                        <img className="w-10" src="/svg/link.svg" alt="" />
                        <p className="text-xl font-bold text-white">View</p>
                     </div>
                  </div>
               </div>
               <h2 className="mt-8 text-2xl font-semibold text-center">Melon Shop - <span className="text-slate-500">E-commerce</span></h2>
            </motion.div>
            <motion.div
               drag
               dragConstraints={{ left: -50, right: 60, top: -50, bottom: 50 }}
               initial={{ translateX: -1000 }}
               animate={
                  clickedSection === "works"
                     ? { translateX: 0, transition: { duration: 0.5, delay: 1 } }
                     : { translateX: -1000, transition: { duration: 1, } }
               }
               className="z-40 flex flex-col justify-between w-3/4 h-full p-5 shadow-2xl bg-slate-50 rounded-3xl"
            >
               <div className="relative flex justify-center w-full">
                  <img onClick={() => window.open("https://ecommerce-kappa-eosin.vercel.app/")} className='w-[90%] cursor-pointer rounded-2xl' src="/projects/ecommerce.png" alt="" />
                  <div className="absolute flex items-center justify-between w-[90%] px-5 -bottom-5">
                     <div onClick={() => window.open("https://github.com/jarvinc3/ecommerce")} className="flex items-center gap-2 px-5 py-2 hover:scale-[1.01] transition-all duration-300 ease-linear cursor-pointer rounded-3xl bg-slate-700">
                        <img className="w-10" src="/svg/github.svg" alt="" />
                        <p className="text-xl font-bold text-white">Repo</p>
                     </div>
                     <div onClick={() => window.open("https://ecommerce-kappa-eosin.vercel.app/")} className="flex items-center gap-2 px-5 py-2 cursor-pointer hover:scale-[1.01] transition-all duration-300 ease-linear rounded-3xl bg-slate-700">
                        <img className="w-10" src="/svg/link.svg" alt="" />
                        <p className="text-xl font-bold text-white">View</p>
                     </div>
                  </div>
               </div>
               <h2 className="mt-8 text-2xl font-semibold text-center">Clothing Store - <span className="text-slate-500">E-commerce</span></h2>
            </motion.div>
         </section>
         <section className={`flex items-end justify-center w-1/3 h-full ${clickedSection === "works" ? "" : "opacity-0"}`}>
            <Navbar handleClick={handleClick} onAnimate={onAnimate} clickedSection={clickedSection} />
         </section>
         <section className="flex flex-col items-center justify-center w-1/3 h-full gap-12">
            <motion.div
               drag
               dragConstraints={{ left: -60, right: 50, top: -50, bottom: 50 }}
               initial={{ translateX: 1000 }}
               animate={
                  clickedSection === "works"
                     ? { translateX: 0, transition: { duration: 0.5, delay: 1 } }
                     : { translateX: 1000, transition: { duration: 1 } }
               }
               className="z-40 flex flex-col justify-between w-3/4 h-full p-5 shadow-2xl bg-slate-50 rounded-3xl"
            >
               <div className="relative flex justify-center w-full">
                  <img onClick={() => window.open("https://usuarios-registrer.vercel.app/")} className='w-[90%] cursor-pointer rounded-2xl' src="/projects/tasks.png" alt="" />
                  <div className="absolute flex items-center justify-between w-[90%] px-5 -bottom-5">
                     <div onClick={() => window.open("https://github.com/jarvinc3/usuarios-registrer")} className="flex items-center gap-2 px-5 py-2 hover:scale-[1.01] transition-all duration-300 ease-linear cursor-pointer rounded-3xl bg-slate-700">
                        <img className="w-10" src="/svg/github.svg" alt="" />
                        <p className="text-xl font-bold text-white">Repo</p>
                     </div>
                     <div onClick={() => window.open("https://usuarios-registrer.vercel.app/")} className="flex items-center gap-2 px-5 py-2 cursor-pointer hover:scale-[1.01] transition-all duration-300 ease-linear rounded-3xl bg-slate-700">
                        <img className="w-10" src="/svg/link.svg" alt="" />
                        <p className="text-xl font-bold text-white">View</p>
                     </div>
                  </div>
               </div>
               <h2 className="mt-8 text-2xl font-semibold text-center">Tasks Manager - <span className="text-slate-500">ToDo App</span></h2>
            </motion.div>
            <motion.div
               drag
               dragConstraints={{ left: -60, right: 50, top: -50, bottom: 50 }}
               initial={{ translateY: 1000 }}
               animate={
                  clickedSection === "works"
                     ? { translateY: 0, transition: { duration: 1, delay: 0.5 } }
                     : { translateY: 1000, transition: { duration: 1 } }
               }
               className="z-40 flex flex-col justify-between w-3/4 h-full p-5 shadow-2xl bg-slate-50 rounded-3xl"
            >
               <div className="relative flex justify-center w-full">
                  <img onClick={() => window.open("https://tic-toe-game-iota.vercel.app/")} className='w-[90%] cursor-pointer rounded-2xl' src="/projects/tictacktoe.png" alt="" />
                  <div className="absolute flex items-center justify-between w-[90%] px-5 -bottom-5">
                     <div onClick={() => window.open("https://github.com/jarvinc3/tic-toe-game")} className="flex items-center gap-2 px-5 py-2 hover:scale-[1.01] transition-all duration-300 ease-linear cursor-pointer rounded-3xl bg-slate-700">
                        <img className="w-10" src="/svg/github.svg" alt="" />
                        <p className="text-xl font-bold text-white">Repo</p>
                     </div>
                     <div onClick={() => window.open("https://tic-toe-game-iota.vercel.app/")} className="flex items-center gap-2 px-5 py-2 cursor-pointer hover:scale-[1.01] transition-all duration-300 ease-linear rounded-3xl bg-slate-700">
                        <img className="w-10" src="/svg/link.svg" alt="" />
                        <p className="text-xl font-bold text-white">View</p>
                     </div>
                  </div>
               </div>
               <h2 className="mt-8 text-2xl font-semibold text-center">Tic-Tac-Toe - <span className="text-slate-500">Game</span></h2>
            </motion.div>
         </section>
      </div>
   )
}
