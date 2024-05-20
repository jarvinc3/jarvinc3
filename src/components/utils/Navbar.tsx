import { Link } from "react-router-dom";

interface NavbarProps {
  open: boolean;
  onClick: () => void;
}

export default function Navbar({ open, onClick }: NavbarProps) {
  return (
    <ul className="flex items-center gap-8 xl:flex-col">
      <Link to="/">
        <li onClick={onClick} className={`flex flex-col items-center px-4 py-2 rounded-md ${window.location.pathname === "/" ? "bg-[#9addee]" : "bg-slate-100 hover:bg-[#c2e4e5]"} ${open ? "!bg-slate-100" : ""}}`}>
          <img className="w-6 xl:w-8" src="/svg/user.svg" alt="" />
          <span className="hidden xl:block">About</span>
        </li>
      </Link>
      <Link to="/works">
        <li onClick={onClick} className={`flex flex-col items-center px-4 py-2 rounded-md ${window.location.pathname === "/works" ? "bg-[#9addee]" : "bg-slate-100 hover:bg-[#c2e4e5]"} ${open ? "!bg-slate-100" : ""}`}>
          <img className="w-6 xl:w-8" src="/svg/work.svg" alt="" />
          <span className="hidden xl:block">Works</span>
        </li>
      </Link>
      <Link to="/resume">
        <li onClick={onClick} className={`flex flex-col items-center px-3 py-2 rounded-md ${window.location.pathname === "/resume" ? "bg-[#9addee]" : "bg-slate-100 hover:bg-[#c2e4e5]"} ${open ? "!bg-slate-100" : ""}`}>
          <img className="w-6 xl:w-8" src="/svg/resume.svg" alt="" />
          <span className="hidden xl:block">Resume</span>
        </li>
      </Link>
      <Link to="/contact">
        <li onClick={onClick} className={`flex flex-col items-center px-3 py-2 rounded-md ${window.location.pathname === "/contact" ? "bg-[#9addee]" : "bg-slate-100 hover:bg-[#c2e4e5]"} ${open ? "!bg-slate-100" : ""}`}>
          <img className="w-6 xl:w-8" src="/svg/contact.svg" alt="" />
          <span className="hidden xl:block">Contact</span>
        </li>
      </Link>
    </ul>
  );
}
