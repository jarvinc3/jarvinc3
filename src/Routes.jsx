import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home.jsx"
import About from "./containers/About.jsx"
import Works from "./containers/Works.jsx"
import Contact from "./containers/Contact.jsx"

export default function Rutas() {
  return (
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/works" element={<Works />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}