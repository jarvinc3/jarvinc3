import Nav from "../components/Nav";
import "../css/nav.css";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

export default function About() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-[#111111] h-screen w-screen">
          <h1>about</h1>
          <Nav />
        </div>
      )}
    </>
  );
}
