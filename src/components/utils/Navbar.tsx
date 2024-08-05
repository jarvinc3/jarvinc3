interface NavbarProps {
  setView: (view: string) => void;
  view: string;
}

export default function Navbar({ setView, view }: NavbarProps) {
  return (
    <ul className="flex items-center justify-between gap-5 xl:flex-col">
      <li onClick={() => setView("about")} className={`flex cursor-pointer transition-all duration-300 flex-col items-center px-4 py-2 rounded-md ${view === "about" ? "bg-[#9addee] scale-[1.05]" : "bg-slate-100 hover:bg-[#c2e4e5] hover:scale-[1.05]"}`}>
        <img className="w-6 xl:w-8" src="/svg/user.svg" alt="" />
        <span className="hidden xl:block">About</span>
      </li>

      <li onClick={() => setView("resume")} className={`flex cursor-pointer transition-all duration-300 flex-col items-center px-3 py-2 rounded-md ${view === "resume" ? "bg-[#9addee] scale-[1.05]" : "bg-slate-100 hover:bg-[#c2e4e5] hover:scale-[1.05]"}`}>
        <img className="w-6 xl:w-8" src="/svg/resume.svg" alt="" />
        <span className="hidden xl:block">Resume</span>
      </li>

      <li onClick={() => setView("works")} className={`flex cursor-pointer transition-all duration-300 flex-col items-center px-4 py-2 rounded-md ${view === "works" ? "bg-[#9addee] scale-[1.05]" : "bg-slate-100 hover:bg-[#c2e4e5] hover:scale-[1.05]"}`}>
        <img className="w-6 xl:w-8" src="/svg/work.svg" alt="" />
        <span className="hidden xl:block">Works</span>
      </li>

      <li onClick={() => setView("contact")} className={`flex cursor-pointer transition-all duration-300 flex-col items-center px-3 py-2 rounded-md ${view === "contact" ? "bg-[#9addee] scale-[1.05]" : "bg-slate-100 hover:bg-[#c2e4e5] hover:scale-[1.05]"}`}>
        <img className="w-6 xl:w-8" src="/svg/contact.svg" alt="" />
        <span className="hidden xl:block">Contact</span>
      </li>

    </ul>
  );
}
