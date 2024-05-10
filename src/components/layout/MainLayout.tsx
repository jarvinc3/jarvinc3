import Navbar from "../utils/Navbar";
import ProfileInfo from "../utils/ProfileInfo";

interface MainLayoutProps {
  children: JSX.Element;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-start w-screen h-screen gap-10 pt-[10%] main">
      <section className="w-[20%] bg-white rounded-2xl flex justify-center px-8">
        <ProfileInfo />
      </section>
      <section className="w-1/2 p-16 bg-white rounded-2xl">{children}</section>
      <section className="w-[7%] bg-white rounded-2xl p-3 py-4 flex justify-center">
        <Navbar />
      </section>
    </div>
  );
};

export default MainLayout;
