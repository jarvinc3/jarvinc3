import { motion } from 'framer-motion';
import { cn } from './components/lib/utils';

const Example = () => {
   return (
      <motion.div
         exit={{ opacity: 0 }}
         className={cn(
            "container mx-auto w-screen min-h-screen relative p-6 pl-12 xl:pl-0 xl:p-20 overflow-y-auto overflow-x-hidden scrollbar-hidden text-foreground")}
      >
         
      </motion.div>
   );
};

export default Example;
