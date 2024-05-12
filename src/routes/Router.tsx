import { BrowserRouter, Route, Routes } from "react-router-dom";
import Works from "../components/common/Works";
import Resume from "../components/common/Resume";
import Contact from "../components/common/Contact";
import About from "../components/common/About";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
