import { cn } from "@/components/lib/utils";
import { Section } from "@/components/types/section.types";
import { Card } from "@/components/ui/card";
import { useResponsive } from "@/hooks/use-responsive";
import { useSectionClick } from "@/hooks/use-section";
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from "framer-motion";
import { ActionsSection } from "./ActionsSection";
import { CredentialSection } from "./CredentialSection";
import { ProfileSection } from "./ProfileSection";
import { ProjectsSection } from "./ProjectsSection";
import { ServicesSection } from "./ServicesSection";
import { SocialSection } from "./SocialSection";
import { TogetherSection } from "./TogetherSection";

const Home = () => {
   const { setClickedSection } = useSectionClick();
   const { isMobile, isTablet, isDesktop } = useResponsive();

   return (
      <motion.div
         exit={{ opacity: 0 }}
         className={cn(
            "container mx-auto w-screen min-h-screen md:h-screen relative p-6 xl:p-20 overflow-y-auto overflow-x-hidden scrollbar-hidden md:overflow-hidden text-foreground",
            "grid gap-5 grid-cols-2 md:grid-cols-3 md:grid-rows-6 xl:gap-10 xl:grid-cols-4 xl:grid-rows-5"
         )}
      >
         <ProfileSection
            className="col-span-2 row-span-2 md:col-span-3 xl:col-span-2 xl:row-span-3"
            type="base"
            animate={isMobile || isTablet ? 'up' : "left"}
            section={Section.HOME}
            onClick={() => setClickedSection(Section.ABOUT)}
         />
         <ActionsSection
            className="col-span-2 row-span-2 md:col-span-3 xl:col-span-2 xl:col-start-3 xl:row-start-1 xl:row-span-1 xl:block"
            type="base"
            animate={isDesktop ? "up" : 'bottom'}
            section={Section.HOME}
         />
         <CredentialSection
            className="row-span-2 row-start-3 xl:row-start-2 xl:col-start-3"
            type="base"
            animate={isMobile || isTablet ? 'left' : "static"}
            section={Section.HOME}
            onClick={() => setClickedSection(Section.ABOUT)}
         />
         <ProjectsSection
            className="row-span-2 row-start-3 xl:row-start-2 xl:col-start-4"
            type="base"
            animate={isMobile || isDesktop ? 'right' : "static"}
            section={Section.HOME}
            onClick={() => setClickedSection(Section.PROJECTS)}
         />
         <SocialSection
            className="row-span-2 row-start-7 md:row-start-3 xl:row-start-4"
            type="base"
            animate={isMobile || isDesktop ? 'bottom2' : "right"}
            section={Section.HOME}
            onClick={() => setClickedSection(Section.CONTACT)}
         />
         <ServicesSection
            className="col-span-2 row-span-2 col-start-1 xl:col-start-2 row-start-5 xl:row-start-4"
            type="base"
            animate={isDesktop ? "bottom" : 'left'}
            section={Section.HOME}
            onClick={() => setClickedSection(Section.SERVICES)}
         />
         <TogetherSection
            className="row-span-2 row-start-7 md:row-start-5 xl:row-start-4 xl:col-start-4"
            type="base"
            animate={isDesktop ? "bottom2" : 'right'}
            section={Section.HOME}
            onClick={() => setClickedSection(Section.CONTACT)}
         />
         <Card
            className="absolute bottom-4 right-1/2 translate-x-1/2 z-50"
            animate="bottom"
            type='custom'
            section={Section.HOME}
         >
            <Icon icon="lineicons:scroll-down-2" className="hidden xl:block animate-bounce size-10" />
         </Card>
      </motion.div>
   );
};

export default Home;
