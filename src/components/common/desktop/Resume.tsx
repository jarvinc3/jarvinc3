import { motion } from 'framer-motion';
import Navbar from '../../utils/Navbar';

interface ResumeProps {
   clickedSection: string | null;
   handleClick: (section: string) => void;
   onAnimate: boolean;
}

const skills = [
   { name: "HTML", icon: "/skills/html.svg" },
   { name: "CSS", icon: "/skills/css.svg" },
   { name: "Tailwind", icon: "/skills/tailwind.svg" },
   { name: "Bootstrap", icon: "/skills/bootstrap.svg" },
   { name: "JavaScript", icon: "/skills/js.svg" },
   { name: "TypeScript", icon: "/skills/typescript.svg" },
   { name: "React", icon: "/skills/react.svg" },
   { name: "React Native", icon: "/skills/react-native.svg" },
   { name: "Next.js", icon: "/skills/nextjs.svg" },
   { name: "Astro", icon: "/skills/astro.svg" },
   { name: "NodeJs", icon: "/skills/nodejs.svg" },
   { name: "Express", icon: "/skills/express.svg" },
   { name: "Rest API", icon: "/skills/restApi.svg" },
   { name: "Git", icon: "/skills/git.svg" },
   { name: "Jira", icon: "/skills/jira.svg" },
   { name: "Bitbucket", icon: "/skills/bitbucket.svg" },
   { name: "Cloudflare", icon: "/skills/cloudflare.svg" },
   { name: "Responsive", icon: "/skills/responsive.svg" },
];

export const Resume = ({ clickedSection, handleClick, onAnimate }: ResumeProps) => {
   return (
      <div id='resume' className="absolute flex w-full h-full py-20">
         <section className="flex flex-col items-center justify-center w-1/3 h-full gap-12">
         </section>
         <section className={`flex items-end justify-center w-1/3 h-full ${clickedSection === "resume" ? "" : "opacity-0"}`}>
            <Navbar handleClick={handleClick} onAnimate={onAnimate} clickedSection={clickedSection} />
         </section>
         <section className="flex items-center justify-center w-1/3 h-full pr-20">
            <motion.div
               initial={{ translateX: 2000 }}
               animate={
                  clickedSection === "resume"
                     ? { translateX: 0, transition: { duration: 1, delay: 0.5 } }
                     : { translateX: 2000, transition: { duration: 1, } }
               }
               className="absolute w-[45%] h-[80%] overflow-y-scroll scrollbar-hide flex flex-col shadow-2xl z-50 p-10 right-20 bg-slate-50 rounded-3xl"
            >
               <div className="flex items-center gap-5">
                  <h2 className="text-4xl font-bold">Resume</h2>
                  <div className="h-1 bg-[#c084fc] rounded-full w-full"></div>
               </div>
               <div className="flex flex-col h-full gap-10 mt-10">
                  <section className="flex justify-center w-full gap-10">
                     <div className="flex flex-col items-center w-1/2 gap-3">
                        <h3 className="text-base font-medium sm:text-xl">Work Experience</h3>
                        <section className="w-full gap-2 p-3 bg-[#defaf9] rounded-md shadow-lg">
                           <h3 className="text-sm font-semibold text-blue-gray-700">2023 - Present</h3>
                           <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
                              Media Revolition SRL
                           </h3>
                           <h3 className="font-semibold text-blue-gray-700">Frontend Developer</h3>
                        </section>
                     </div>
                     <div className="flex flex-col items-center w-1/2 gap-3">
                        <h3 className="text-base font-medium sm:text-xl">Education</h3>
                        <section className="w-full gap-2 p-3 bg-[#f9fade] rounded-md shadow-lg">
                           <h3 className="text-sm font-semibold text-blue-gray-700">2022 - 2023</h3>
                           <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
                              Funval International
                           </h3>
                           <h3 className="font-semibold text-blue-gray-700">Technical in Frontend Web Development</h3>
                        </section>
                     </div>
                  </section>
                  <section className="relative flex flex-col items-center justify-center w-full">
                     <div className="flex items-center justify-start w-full gap-3 my-8 ">
                        <h2 className="text-2xl font-medium text-start">Skills</h2>
                        <div className="w-1/5 h-1 rounded-full bg-[#f4c6f4]"></div>
                     </div>
                     <div className='grid w-full h-full grid-cols-6 grid-rows-3 gap-3'>
                        {skills.map((skill, index) => (
                           <div key={index} className="flex flex-col items-center justify-center gap-2">
                              <img className='w-10' src={skill.icon} alt={skill.name} />
                              <p>{skill.name}</p>
                           </div>
                        ))}
                     </div>
                  </section>
               </div>
            </motion.div>
         </section>
      </div>
   )
}
