import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/resume" element={<Home />} />
        <Route path="/works" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
