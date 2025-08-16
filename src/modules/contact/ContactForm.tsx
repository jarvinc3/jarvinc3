import { Card } from "@/components/ui/card";
import { useTranslate } from "@/hooks/use-translate";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from 'framer-motion';
import { useState } from "react";
import type { SectionProps } from "../App";

export const ContactForm = ({ ...props }: SectionProps) => {
   const [flipped, setFlipped] = useState(false);
   const { t } = useTranslate();

   return (
      <Card
         {...props}
      >
         <motion.div
            animate={!flipped
               ? { x: 0, transition: { duration: 0.5 } }
               : { x: '100vw', transition: { duration: 0.5 } }}
            className="card-base col-start-1 row-start-1 group h-full w-full flex flex-col p-6 xl:p-12"
         >
            <div className="flex items-center justify-between">
               <h2 className="text-2xl md:text-4xl md:ml-14 xl:ml-0 font-bold flex items-center">
                  {t("home.lets")} {" "}
                  <span className="text-blue-500 ml-2">{t("home.together")}.</span>
               </h2>
               <button onClick={() => setFlipped(!flipped)}>
                  <Icon icon="mynaui:shooting-star" className="size-7 xl:size-12 text-primary-foreground" />
               </button>
            </div>
            <form action="" className="size-full flex flex-col justify-between items-center gap-4 mt-4">
               <input type="text" placeholder={t("contact.name")} className="card-secondary !rounded-lg p-2 px-6 xl:p-6 w-full placeholder:text-secondary-foreground" />
               <input type="email" placeholder={t("contact.email")} className="card-secondary !rounded-lg p-2 px-6 xl:p-6 w-full placeholder:text-secondary-foreground" />
               <input type="text" placeholder={t("contact.subject")} className="card-secondary !rounded-lg p-2 px-6 xl:p-6 w-full placeholder:text-secondary-foreground" />
               <textarea placeholder={t("contact.message")} className="card-secondary !rounded-lg p-2 px-6 xl:p-6 w-full placeholder:text-secondary-foreground" />
               <button className="neu-button p-3 md:py-6 w-full text-xl text-primary-foreground font-semibold">{t("contact.send")}</button>
            </form>
         </motion.div>
         <motion.div
            animate={flipped
               ? { x: 0, transition: { duration: 0.5 } }
               : { x: '100vw', transition: { duration: 0.5 } }}
            className="card-secondary col-start-1 row-start-1 group h-fit w-full flex flex-col p-6 xl:p-12"
         >
            <div className="flex items-center justify-between">
               <h2 className="text-2xl md:text-4xl md:ml-14 xl:ml-0 font-bold flex items-center">
                  Welcome {" "}
                  <span className="text-blue-500 ml-2">Back.</span>
               </h2>
               <button onClick={() => setFlipped(!flipped)}>
                  <Icon icon="mynaui:shooting-star" className="size-7 xl:size-12 text-primary-foreground" />
               </button>
            </div>
            <form action="" className="size-full flex flex-col justify-between items-center gap-8 mt-4">
               <input type="email" placeholder={t("contact.email")} className="card-secondary !rounded-lg p-4 px-6 xl:p-6 w-full placeholder:text-secondary-foreground" />
               <input type="text" placeholder="Password" className="card-secondary !rounded-lg p-4 px-6 xl:p-6 w-full placeholder:text-secondary-foreground" />
               <button className="neu-button p-3 md:py-6 w-full text-xl text-primary-foreground font-semibold">Login</button>
            </form>
         </motion.div>
      </Card >
   )
}
