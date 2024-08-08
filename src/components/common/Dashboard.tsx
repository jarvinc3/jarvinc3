import { motion } from 'framer-motion';
import { Bg } from '../utils/Bg';


export const Dashboard = () => {

  return (
    <motion.div className="w-full flex flex-col justify-between gap-5 z-10 relative h-screen p-[8rem] bg-transparent">
      <Bg />
      <div className="absolute bottom-0 flex justify-center w-1/2 transform -translate-x-1/2 left-1/2">
        <motion.img src="/waos.png" alt="" />
      </div>
      <div className="flex items-center justify-between w-full h-auto">
        <h2 className="text-7xl w-[25rem] font-bold text-[#032d3f]">Hey There, I'm Jarvin</h2>
        <p className="text-center text-5xl w-[20rem] mt-[10rem] font-bold text-[#032d3f]">Desarrollador De Software</p>
      </div>
      <div className="flex flex-col gap-2 w-80">
        <div className="flex items-center gap-2 p-2 border-b bg-slate-50 rounded-xl">
          <div className="p-1 bg-white rounded-md">
            <img width={35} src="/gmail.png" alt="" />
          </div>
          <div>
            <p className="text-sm">Email</p>
            <span className="text-lg font-semibold text-container">jarvinct3@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 border-b bg-slate-50 rounded-xl">
          <div className="p-1 bg-white rounded-md">
            <img width={35} src="/phone.png" alt="" />
          </div>
          <div>
            <p className="text-sm">Phone</p>
            <span className="text-lg font-semibold">+1 (809) 637 6631</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
