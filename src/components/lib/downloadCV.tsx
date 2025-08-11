import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export const DownloadCV = ({isNavbar}: {isNavbar?: boolean}) => {
   const { lang } = useTranslate();
   const [downloading, setDownloading] = useState(false);
   const isDownloadingRef = useRef(false);

   const handleDownload = () => {
      if (isDownloadingRef.current) return;

      isDownloadingRef.current = true;
      setDownloading(true);

      const fileUrl = lang === 'en' ? '/documents/cv-en.pdf' : '/documents/cv-es.pdf';
      const fileName =
         lang === 'en'
            ? 'Jarvin Collado - FullStack Developer.pdf'
            : 'Jarvin Collado - Desarrollador FullStack.pdf';

      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
         setDownloading(false);
         isDownloadingRef.current = false;
      }, 2000);
   };

   return (
      <AnimatePresence mode="wait">
         <motion.div
            key={downloading ? 'loading' : 'default'}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            onClick={handleDownload}
            className={`neu-button cursor-pointer flex items-center justify-center gap-1 hover:scale-105 ${isNavbar ? 'p-1' : ''}`}
         >
            {downloading ? (
               <Icon icon="line-md:download-loop" className="size-10" />
            ) : (
               <>
                  <Icon icon="ic:round-download" className={`${isNavbar ? 'size-8' : 'size-10'}`} />
                  <Icon icon="academicons:cv" className="size-10 hidden md:block" />
               </>
            )}
         </motion.div>
      </AnimatePresence>
   );
};
