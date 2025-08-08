import { cn } from '@/components/lib/utils';
import { Section } from '@/components/types/section.types';
import { motion } from 'framer-motion';
import { InfoSection } from './InfoSection';
import { ProfileCard } from './ProfileCard';


export const Credentials = () => {
   return (
      <motion.div
         exit={{ opacity: 0 }}
         className={cn(
            "container mx-auto w-screen min-h-screen md:h-screen relative p-6 xl:p-20 overflow-y-auto overflow-x-hidden scrollbar-hidden md:overflow-hidden text-foreground",
            "grid grid-cols-1 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-1 xl:gap-6")}
      >
         <ProfileCard
            className="xl:h-fit"
            type="base"
            animate="static"
            section={Section.CREDENTIALS}
         />

         <InfoSection />
      </motion.div>
   )
}
