import { useState } from "react";
import Navbar from "../utils/Navbar";
import ProfileInfo from "../utils/ProfileInfo";

interface MainLayoutProps {
  children: JSX.Element;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed xl:relative flex flex-col justify-between xl:flex-row xl:justify-center xl:items-start w-screen h-screen xl:gap-10 xl:pt-[10%] p-4 xl:p-0 main">
      <section className="xl:w-[20%] hidden mt-28 xl:mt-0 bg-white rounded-2xl xl:flex justify-center px-8">
        <ProfileInfo />
      </section>
      {!open && (
        <section className="p-4 overflow-hidden overflow-y-scroll bg-white sm:max-h-[90%] max-h-[75%] sm:p-16 sm:w-1/2 rounded-2xl relative">
          {children}
        </section>
      )}
      <section className="sm:w-[7%] w-[44vh] sm:h-auto z-10 h-[70px] bg-white rounded-2xl p-3 py-4 flex justify-center mt-3 sm:mt-0 fixed sm:relative bottom-3 sm:bottom-0 sm:left-0 sm:translate-x-0 left-1/2 -translate-x-1/2">
        <Navbar open={open} onClick={handleClick} />
      </section>
      {open && (
        <div className="absolute h-[73%] w-[44vh] px-10 transform -translate-x-1/2 bg-white cursor-pointer rounded-2xl top-3 sm:hidden left-1/2 overflow-y-auto scrollbar-hide">
          <ProfileInfo />
        </div>
      )}
      {!open ? (
        <img
          onClick={handleClick}
          className="fixed transform -translate-x-1/2 cursor-pointer opacity-30 bottom-20 sm:hidden left-1/2"
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/collapse-arrow.png"
          alt="collapse-arrow"
        />
      ) : (
        <img
          onClick={handleClick}
          className="fixed transform -translate-x-1/2 cursor-pointer bottom-20 sm:hidden left-1/2"
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
          alt="expand-arrow--v1"
        />
      )}
    </div>
  );
};

export default MainLayout;
