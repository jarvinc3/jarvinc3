import { useState } from "react";
import About from "../components/common/About"
import MainLayout from "../components/layout/MainLayout"
import Works from "../components/common/Works";
import Resume from "../components/common/Resume";
import Contact from "../components/common/Contact";

export const Home = () => {
   const [view, setView] = useState<string>("about");

   return (
      <MainLayout view={view} setView={setView}>
         <div>
            {view === "about" && <About />}
            {view === "works" && <Works />}
            {view === "resume" && <Resume />}
            {view === "contact" && <Contact />}
         </div>
      </MainLayout>
   )
}
