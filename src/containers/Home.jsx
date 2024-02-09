import Nav from "../components/Nav";
import "../css/nav.css";

export default function App() {
  return (
    <div className="home-d flex h-screen w-screen">
      <section className="flex items-center justify-center h-full w-[40%] relative">
        <img
          className="rounded-3xl"
          width={400}
          src="/profile.jpg"
          alt="profile"
        />
      </section>
      <section className="w-[60%] flex items-center gap-2 pr-28 pl-4">
        <div className="bg-[#ffb400] h-1 w-16 mb-[40%]"></div>
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-[#ffb400] text-6xl font-bold">I`M JARVIN COLLADO.</h2>
          <h3 className="text-slate-100 text-6xl font-bold">WEB DEVELOPER</h3>
          <p className="text-slate-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
            nostrum voluptatem iusto suscipit hic, fuga debitis dolorem odio
            consequuntur! Repellendus aperiam voluptatum praesentium! Excepturi,
            consequuntur? Nam tempore error et id!
          </p>
        </div>
      </section>
      <Nav />
    </div>
  );
}
