import { Icon } from "@iconify/react/dist/iconify.js"
import { motion, type Variants } from "framer-motion"

export default function NotFound404() {
   const handleGoHome = () => {
      window.location.href = "/"
   }

   const fadeInUp: Variants = {
      hidden: { opacity: 0, y: 30 },
      visible: (i: number) => ({
         opacity: 1,
         y: 0,
         transition: {
            delay: 0.2 * i,
            duration: 0.6,
            ease: "easeOut",
         },
      }),
   }

   return (
      <div className="h-screen flex items-center justify-center p-4 relative overflow-hidden">
         <motion.div
            className="card-base p-8 md:p-12 max-w-2xl w-full text-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
         >
            <motion.div className="relative mb-8" initial="hidden" animate="visible">
               <h1 className="text-8xl md:text-9xl font-bold text-gray-400 select-none relative flex justify-center gap-2">
                  {["4", "0", "4"].map((digit, i) => (
                     <motion.span
                        key={i}
                        custom={i}
                        variants={fadeInUp}
                        className="inline-block"
                     >
                        {digit}
                     </motion.span>
                  ))}
               </h1>
            </motion.div>

            <motion.div
               className="card-secondary p-6 mb-8"
               variants={fadeInUp}
               custom={2}
               initial="hidden"
               animate="visible"
            >
               <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-4">
                  Oops! Page Not Found
               </h2>
               <p className="text-gray-500 text-lg leading-relaxed">
                  The page you're looking for seems to have vanished into the digital void.
                  Don't worry, even the best explorers sometimes take a wrong turn.
               </p>
            </motion.div>

            <motion.div
               className="flex flex-col sm:flex-row gap-4 justify-center"
               variants={fadeInUp}
               custom={3}
               initial="hidden"
               animate="visible"
            >
               <button
                  onClick={handleGoHome}
                  className="neu-button px-6 py-3 flex items-center justify-center gap-2 text-lg font-medium hover:scale-105 transform transition-all duration-200"
               >
                  <Icon icon="mynaui:home-solid" className="size-7" />
                  Go Home
               </button>
            </motion.div>

            <motion.div
               className="mt-8 text-gray-400"
               variants={fadeInUp}
               custom={4}
               initial="hidden"
               animate="visible"
            >
               <p className="text-sm">
                  Error Code: 404 | Time: {new Date().toLocaleTimeString()}
               </p>
            </motion.div>
         </motion.div>
      </div>
   )
}
