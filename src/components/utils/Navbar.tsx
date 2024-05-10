import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex flex-col items-center gap-8">
      <Link to="/about">
        <li className="flex flex-col items-center px-4 py-2 rounded-md bg-[#9addee] text-white">
          <img width={30} src="/public/svg/user.svg" alt="" />
          <span>About</span>
        </li>
      </Link>
      <Link to="/works">
        <li className="flex flex-col items-center px-4 py-2 rounded-md bg-slate-100 hover:bg-[#c2e4e5]">
          <img width={30} src="/public/svg/work.svg" alt="" />
          <span>Works</span>
        </li>
      </Link>
      <Link to="/resume">
        <li className="flex flex-col items-center px-3 py-2 rounded-md bg-slate-100 hover:bg-[#c2e4e5]">
          <img width={30} src="/public/svg/resume.svg" alt="" />
          <span>Resume</span>
        </li>
      </Link>
      <Link to="/contact">
        <li className="flex flex-col items-center px-3 py-2 rounded-md bg-slate-100 hover:bg-[#c2e4e5]">
          <img width={30} src="/public/svg/contact.svg" alt="" />
          <span>Contact</span>
        </li>
      </Link>
    </ul>
  );
}
