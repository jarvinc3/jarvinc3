import { cn } from '@/components/lib/utils';
import { Section } from '@/components/types/section.types';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export const Contact = () => {
   return (
      <motion.div
         exit={{ opacity: 0 }}
         className={cn(
            "container mx-auto w-screen min-h-screen md:h-screen relative p-6 xl:p-20 overflow-y-auto overflow-x-hidden scrollbar-hidden md:overflow-hidden text-foreground",
            "grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-1 gap-6")}
      >
         <ContactForm
            className="xl:col-span-2 xl:col-start-2 xl:row-start-1 grid"
            type="custom"
            animate="right"
            section={Section.CONTACT}
         />
         <ContactInfo
            className="xl:col-start-1 xl:row-start-1"
            type="custom"
            animate="left"
            section={Section.CONTACT}
         />
      </motion.div>
   )
}
