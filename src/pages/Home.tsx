import { domAnimation, LazyMotion, motion } from "framer-motion"
import { Dashboard } from "../components/common/Dashboard";
import { AboutMe } from "../components/common/AboutMe";
import { Experience } from "../components/common/Experience";
import { Work } from "../components/common/Work";
import { References } from "../components/common/References";
import { Contact } from "../components/common/Contact";

export const Home = () => {

   return (
      <LazyMotion features={domAnimation}>
         <motion.div className="bg-[#f8f7f1] w-screen h-auto scrollbar-hide">
            <div><Dashboard /></div>
            <div><AboutMe /></div>
            <div><Experience /></div>
            <div><Work /></div>
            <div><References /></div>
            <div><Contact /></div>
         </motion.div>
      </LazyMotion>
   )
}
