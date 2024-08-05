import Navbar from '../utils/Navbar';
import ProfileInfo from "../utils/ProfileInfo";

interface MainLayoutProps {
  children: JSX.Element;
  setView: (view: string) => void;
  view: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, setView, view }) => {
  return (
    <div className="fixed xl:relative flex flex-col justify-between items-center xl:flex-row xl:justify-center xl:items-start w-screen h-screen xl:gap-10 xl:pt-[10%] p-4 pt-6 xl:p-0 main">
      <section className="xl:w-[25%] 2xl:w-[20%] bg-white rounded-2xl hidden xl:flex justify-center px-8">
        <ProfileInfo />
      </section>
      <section className="p-4 overflow-hidden overflow-y-scroll bg-white xl:max-h-[90%] md:h-auto max-h-[85%] xl:p-16 w-full xl:w-1/2 rounded-2xl relative scrollbar-hide">
        {children}
      </section>
      <section className="xl:w-auto w-[40vh] sm:w-auto xl:h-auto z-10 h-[70px] bg-white rounded-2xl p-3 py-5 flex justify-center mt-3 xl:mt-0 fixed xl:relative bottom-3 xl:bottom-0 xl:left-0 xl:translate-x-0 left-1/2 -translate-x-1/2">
        <Navbar setView={setView} view={view} />
      </section>
    </div>
  );
};

export default MainLayout;
