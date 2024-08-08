import { motion } from 'framer-motion';
import { Bg } from '../utils/Bg';

export const References = () => {
  return (
    <motion.div className="w-full z-50 relative h-screen p-[8rem] bg-transparent">
      <Bg />
      <motion.h2 className="text-3xl font-bold text-[#032d3f]">References</motion.h2>
    </motion.div>
  )
}
