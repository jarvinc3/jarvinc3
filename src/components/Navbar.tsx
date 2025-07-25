
import { useSectionClick } from '@/hooks/useSectionClick';
import { Section } from "@/types/Section.types";
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';


export default function Navbar() {
  const { clickedSection, onAnimate, setClickedSection } = useSectionClick();

  return (
    <motion.ul initial={{ translateY: 1000 }} animate={{
      translateY: onAnimate ? -40 : 1000,
      transition: {
        duration: onAnimate ? 1 : 1.5,
        delay: onAnimate ? 0.5 : 1.2
      }
    }}
      className="z-50 flex items-center justify-center w-auto h-auto gap-5 p-2 shadow-2xl bg-slate-50 rounded-2xl"
    >
      <li className={`transition-all duration-300 cursor-pointer hover:scale-105  p-2 ${clickedSection === Section.About ? "shadow-inner rounded-2xl border scale-105" : ""}`} onClick={() => setClickedSection(Section.About)}>
        <Icon icon="fluent-mdl2:profile-search" className="w-8 h-8" />
      </li>
      <li className={`transition-all duration-300 cursor-pointer hover:scale-105  p-2 ${clickedSection === Section.Resume ? "shadow-inner rounded-2xl border scale-105" : ""}`} onClick={() => setClickedSection(Section.Resume)}>
        <Icon icon="qlementine-icons:resume-16" className="w-8 h-8" />
      </li>
      <li className={`transition-all duration-300 cursor-pointer hover:scale-105  p-2 ${clickedSection === Section.Works ? "shadow-inner rounded-2xl border scale-105" : ""}`} onClick={() => setClickedSection(Section.Works)}>
        <Icon icon="hugeicons:work" className="w-8 h-8" />
      </li>
      <li className={`transition-all duration-300 cursor-pointer hover:scale-105  p-2 ${clickedSection === Section.Contact ? "shadow-inner rounded-2xl border scale-105" : ""}`} onClick={() => setClickedSection(Section.Contact)}>
        <Icon icon="hugeicons:contact-01" className="w-8 h-8" />
      </li>
    </motion.ul>
  );
}
