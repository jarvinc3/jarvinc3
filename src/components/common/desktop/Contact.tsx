import { motion } from 'framer-motion';
import Navbar from '../../utils/Navbar';
import { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

interface ContactProps {
   clickedSection: string | null;
   handleClick: (section: string) => void;
   onAnimate: boolean;
}

export const Contact = ({ clickedSection, handleClick, onAnimate }: ContactProps) => {
   const textareaRef = useRef<HTMLTextAreaElement>(null);

   const adjustTextareaHeight = () => {
      if (textareaRef.current) {
         textareaRef.current.style.height = 'auto';
         textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
   };

   useEffect(() => {
      adjustTextareaHeight();
   }, []);

   const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();

      emailjs.sendForm('service_zo420zu', 'template_qikkvzf', e.target as HTMLFormElement, 'UqK4uwXbFE4tF8oMJ')
         .then((result) => {
            console.log(result.text);
            alert('Email sent successfully!');
         }, (error) => {
            console.log(error.text);
            alert('Failed to send email. Error: ' + error.text);
         });
   };

   return (
      <div id="contact" className="absolute flex w-full h-full py-20">
         <section className="flex items-end justify-center w-1/3 h-full">
            <motion.div
               initial={{ translateX: -2000 }}
               animate={
                  clickedSection === "contact"
                     ? { translateX: 0, transition: { duration: 1, delay: 0.5 } }
                     : { translateX: -2000, transition: { duration: 1, } }
               }
               className="absolute flex flex-col justify-between p-10 w-[45%] h-[80%] shadow-2xl left-20 bg-slate-50 rounded-3xl"
            >
               <div className="flex items-center gap-5">
                  <h2 className="text-4xl font-bold">Contact</h2>
                  <div className="h-1 bg-[#fca5a5] rounded-full w-full"></div>
               </div>
               <form onSubmit={sendEmail} className="z-50 flex flex-col justify-between h-full gap-5">
                  <h2 className="mt-5 text-lg font-bold text-black">I'm Always Open To Discussing New Projects.</h2>
                  <div className="">
                     <label className="text-black" htmlFor="user_name">
                        Name *
                     </label>
                     <input
                        type="text"
                        name="user_name"
                        placeholder="Jhon Doe"
                        className="w-full py-4 pl-6 pr-20 mt-3 transition bg-transparent border rounded-2xl border-neutral-300 text-base/6 text-neutral-950 ring-4 ring-transparent placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                     />
                  </div>
                  <div className="">
                     <label className="text-black" htmlFor="user_email">
                        Email *
                     </label>
                     <input
                        name="user_email"
                        placeholder="jhondoe@example.com"
                        className="w-full py-4 pl-6 pr-20 mt-3 transition bg-transparent border rounded-2xl border-neutral-300 text-base/6 text-neutral-950 ring-4 ring-transparent placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                        type="email"
                     />
                  </div>
                  <div className="">
                     <label className="text-black" htmlFor="message">
                        Message *
                     </label>
                     <textarea
                        name="message"
                        ref={textareaRef}
                        placeholder="Hello! I'm interested in contacting you"
                        className="w-full py-4 pl-6 pr-20 mt-3 transition bg-transparent border rounded-2xl border-neutral-300 text-base/6 text-neutral-950 ring-4 ring-transparent placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                        id="message"
                        onInput={adjustTextareaHeight}
                     />
                  </div>
                  <button
                     type="submit"
                     className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#fca5a5]/30 backdrop-blur-lg px-6 py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl border border-white/20"
                  >
                     <span className="text-lg">Contact Me</span>
                     <div
                        className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-[2000ms] group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                     >
                        <div className="relative h-full bg-white w-14"></div>
                     </div>
                  </button>
               </form>
               <div className="w-full h-1 mt-10 bg-[#fca5a5] rounded-full "></div>
            </motion.div>
         </section>
         <section className={`flex items-end justify-center w-1/3 h-full ${clickedSection === "contact" ? "" : "opacity-0"}`}>
            <Navbar handleClick={handleClick} onAnimate={onAnimate} clickedSection={clickedSection} />
         </section>
         <section className="flex flex-col items-center justify-center w-1/3 h-full gap-12">
         </section>
      </div>
   )
}
