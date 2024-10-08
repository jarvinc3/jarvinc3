import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavbarProps {
  handleClick: (section: string) => void;
  onAnimate: boolean;
  clickedSection: string | null;
}


export default function Navbar({ handleClick, onAnimate, clickedSection }: NavbarProps) {
  return (
    <motion.ul initial={{ translateY: 1000 }} animate={{
      translateX:
        clickedSection === "contact" ? "170%" :
          clickedSection === "resume" ? "-163%" : 0,
      translateY: onAnimate ? 0 : 1000,
      transition: {
        duration: onAnimate ? 1 : 1.5,
        delay: onAnimate ? 0.5 : 0
      }
    }}
      className="z-50 flex items-center justify-center w-auto h-auto gap-5 p-2 shadow-2xl bg-slate-50 rounded-2xl"
    >
      <Link to='/about'>
        <li className={`transition-all duration-300 cursor-pointer hover:scale-105  p-2 ${clickedSection === 'about' ? "shadow-inner rounded-2xl border scale-105" : ""}`} onClick={() => handleClick('about')}>
          <img className="w-8 h-8" src="/svg/user.svg" alt="" />
        </li>
      </Link>
      <Link to='/resume'>
        <li className={`transition-all duration-300 cursor-pointer hover:scale-105  p-2 ${clickedSection === 'resume' ? "shadow-inner rounded-2xl border scale-105" : ""}`} onClick={() => handleClick('resume')}>
          <img className="w-8 h-8" src="/svg/resume.svg" alt="" />
        </li>
      </Link>
      <Link to='/works'>
        <li className={`transition-all duration-300 cursor-pointer hover:scale-105  p-2 ${clickedSection === 'works' ? "shadow-inner rounded-2xl border scale-105" : ""}`} onClick={() => handleClick('works')}>
          <img className="w-8 h-8" src="/svg/work.svg" alt="" />
        </li>
      </Link>
      <Link to='/contact'>
        <li className={`transition-all duration-300 cursor-pointer hover:scale-105  p-2 ${clickedSection === 'contact' ? "shadow-inner rounded-2xl border scale-105" : ""}`} onClick={() => handleClick('contact')}>
          <img className="w-8 h-8" src="/svg/contact.svg" alt="" />
        </li>
      </Link>
    </motion.ul>
  );
}
