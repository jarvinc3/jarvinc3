import { Link } from "react-router-dom";
import "../css/nav.css";

export default function Nav() {
  return (
    <nav className="relative">
      <Link to={"/"}>
        <button className="button a fixed right-8 top-[20%]">
          <img className="svgIcon" src="/home.png" alt="home icon" />
        </button>
      </Link>
      <Link to={"/works"}>
        <button className="button c fixed right-8 top-[35%]">
          <img className="svgIcon" src="/works.png" alt="works icon" />
        </button>
      </Link>
      <Link to={"/about"}>
        <button className="button b fixed right-8 top-[50%]">
          <img className="svgIcon" src="/about.png" alt="about icon" />
        </button>
      </Link>
      <Link to={"/contact"}>
        <button className="button d fixed right-8 top-[65%]">
          <img className="svgIcon" src="/contact.png" alt="contact icon" />
        </button>
      </Link>
    </nav>
  );
}
