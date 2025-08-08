import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "framer-motion";
import {
   createContext,
   type ReactNode,
   useCallback,
   useContext,
   useMemo,
   useState,
} from "react";

// 1. Tipos para el contexto global (estado compartido entre todos los items)
type AccordionType = "single" | "multiple";

type AccordionContextType = {
   openItems: string[];
   toggleItem: (value: string) => void;
   type: AccordionType;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordionContext = () => {
   const context = useContext(AccordionContext);
   if (!context) throw new Error("Accordion components must be used inside <Accordion>");
   return context;
};

// 2. Tipos para el contexto local de cada item
type AccordionItemContextType = {
   isOpen: boolean;
   toggle: () => void;
};

const AccordionItemContext = createContext<AccordionItemContextType | null>(null);

const useAccordionItemContext = () => {
   const context = useContext(AccordionItemContext);
   if (!context) throw new Error("AccordionTrigger or Content must be used inside AccordionItem");
   return context;
};

// 3. Componente Accordion (padre general)
type AccordionProps = {
   children: ReactNode;
   className?: string;
   type?: AccordionType;
   defaultValue?: string | string[];
};

export const Accordion = ({
   children,
   className,
   type = "multiple",
   defaultValue = [],
}: AccordionProps) => {
   const initialOpen = useMemo(() => {
      return type === "single"
         ? [defaultValue].flat().slice(0, 1)
         : [defaultValue].flat();
   }, [defaultValue, type]);

   const [openItems, setOpenItems] = useState<string[]>(initialOpen);

   const toggleItem = useCallback(
      (value: string) => {
         setOpenItems((prev) => {
            if (type === "single") {
               return prev.includes(value) ? [] : [value];
            } else {
               return prev.includes(value)
                  ? prev.filter((v) => v !== value)
                  : [...prev, value];
            }
         });
      },
      [type]
   );

   return (
      <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
         <div className={className}>{children}</div>
      </AccordionContext.Provider>
   );
};

// 4. Componente AccordionItem
type AccordionItemProps = {
   value: string;
   children: ReactNode;
   className?: string;
};

export const AccordionItem = ({ value, children, className }: AccordionItemProps) => {
   const { openItems, toggleItem } = useAccordionContext();

   const isOpen = openItems.includes(value);
   const toggle = () => toggleItem(value);

   return (
      <AccordionItemContext.Provider value={{ isOpen, toggle }}>
         <div className={className}>{children}</div>
      </AccordionItemContext.Provider>
   );
};

// 5. Componente AccordionTrigger
type AccordionTriggerProps = {
   children: ReactNode;
};

export const AccordionTrigger = ({ children }: AccordionTriggerProps) => {
   const { isOpen, toggle } = useAccordionItemContext();

   return (
      <button
         type="button"
         onClick={toggle}
         className="w-full cursor-pointer flex justify-between items-center font-semibold text-left text-base hover:underline"
      >
         {children}
         <Icon
            icon="material-symbols:expand-more-rounded"
            className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"
               }`}
         />
      </button>
   );
};

// 6. Componente AccordionContent
type AccordionContentProps = {
   children: ReactNode;
   className?: string;
};

export const AccordionContent = ({ children, className }: AccordionContentProps) => {
   const { isOpen } = useAccordionItemContext();

   return (
      <AnimatePresence initial={false}>
         {isOpen && (
            <motion.div
               key="content"
               initial="collapsed"
               animate="open"
               exit="collapsed"
               variants={{
                  open: { height: "auto", opacity: 1 },
                  collapsed: { height: 0, opacity: 0 },
               }}
               transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
               className={`overflow-hidden ${className}`}
            >
               {children}
            </motion.div>
         )}
      </AnimatePresence>
   );
};
