import Nav from "../components/Nav";
import "../css/works.css";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Cards } from "../components/Card";

export default function Works() {
  const [isTransition, setTransition] = useState(false);
  const [isDisplay, setIsDisplay] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [activeCard, setActiveCard] = useState(null);

  const display = () => {
    setIsDisplay(!isDisplay);
  };

  function disabled() {
    setIsDisabled(false);
  }

  const handleToggleTransition = () => {
    setTransition(!isTransition);
  };

  const functions = (cardIndex) => {
    setActiveCard(cardIndex);
    handleToggleTransition();
    disabled();
    display();
  };

  const url3 = " https://loremflickr.com/400/400";

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="bg-[#111111] h-[97.5vh] overflow-hidden over">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="">
          <div className="relative ">
            <ul
              className={`card-stacks left-32 ${
                isTransition ? "transition" : ""
              }`}
            >
              <li className="title">
                <h2 className="text-[#ffb400] text-5xl py-5 pt-10">{`<My works/>`}</h2>
              </li>
              <div className="ml-10">
                <li className="stack stack-1 ">
                  <ul className="cards-down">
                    <li className="card card-2" onClick={() => functions(0)}>
                      <img src="/weather.png" alt="Card 2 Image" />
                      <div className="content">
                        <h2 className="bg-[#ffb400] text-white py-[2px] px-2 rounded-md">
                          Wether App
                        </h2>
                        <p className="bg-[#ffb400] text-slate-100 py[2px] px-2 rounded-md flex text-base">
                          Click to learn more
                        </p>
                      </div>
                    </li>
                    <li className="card card-3" onClick={() => functions(1)}>
                      <img src="/eshop.jpg" alt="Card 3 Image" />
                      <div className="content">
                        <h2 className="bg-[#ffb400] text-white py-[2px] px-2 rounded-md">
                          E-shop App
                        </h2>
                        <p className="bg-[#ffb400] text-slate-100 py[2px] px-2 rounded-md flex text-base">
                          Click to learn more
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="stack stack-2 hidden sm:block">
                  <ul className="cards-down">
                    <li className="card card-2" onClick={() => functions(2)}>
                      <img src="/reactrouter.jpg" alt="Card 2 Image" />
                      <div className="content">
                        <h2 className="bg-[#ffb400] text-white py-[2px] px-2 rounded-md">
                          React Router App
                        </h2>
                        <p className="bg-[#ffb400] text-slate-100 py[2px] px-2 rounded-md flex text-base">
                          Click to learn more
                        </p>
                      </div>
                    </li>
                    <li className="card card-3" onClick={() => functions(3)}>
                      <img src="/tictactoe.png" alt="Card 3 Image" />
                      <div className="content">
                        <h2 className="bg-[#ffb400] text-white py-[2px] px-2 rounded-md">
                          Tic Tac Toe App
                        </h2>
                        <p className="bg-[#ffb400] text-slate-100 py[2px] px-2 rounded-md flex text-base">
                          Click to learn more
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="stack stack-3 hidden md:block">
                  <ul className="cards-down">
                    <li className="card card-2" onClick={() => functions(4)}>
                      <img src="/coordinates.png" alt="Card 2 Image" />
                      <div className="content">
                        <h2
                          className={`${
                            isDisabled
                              ? "hidden"
                              : "bg-[#ffb400] text-white py-[2px] px-2 rounded-md"
                          }`}
                        >
                          Coordinates App
                        </h2>
                        <p
                          className={`${
                            isDisabled ? "hidden" : ""
                          } bg-[#ffb400] text-slate-100 py[2px] px-2 rounded-md flex text-base absolute top-0`}
                        >
                          Click to learn more
                        </p>
                        <p
                          className={`${
                            isDisabled ? "" : "hidden"
                          } bg-[#ffb400] text-slate-100 py[2px] px-2 rounded-md flex text-lg absolute top-0`}
                        >
                          Show projects
                        </p>
                      </div>
                    </li>
                    <li className="card card-3" onClick={() => functions(5)}>
                      <img src={url3} alt="Card 3 Image" />
                      <div className="content">
                        <h2 className="bg-[#ffb400] text-white py-[2px] px-2 rounded-md">
                          Card 3 Title
                        </h2>
                        <p className="bg-[#ffb400] text-slate-100 py[2px] px-2 rounded-md flex text-base">
                          Click to learn more
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
          </div>
          <div onClick={functions} className={`${isDisabled ? "max-h-[421px] h-[421px]" : " h-0 opacity-0"} cursor-pointer ml-[40%] flex flex-col justify-center items-center absolute top-[20%] z-20 max-w-[600px] w-[600px] duration-500 rounded-lg bg-[#ffb400] hover:-translate-y-2 hover:shadow-xl hover:h-[440px]`}>
            <h2 className="text-white text-6xl text-center font-bold">
              Hi, WELCOME TO MY PROJECTS
            </h2>
            <p className="text-white mt-14 text-lg">Click to display projects...</p>
          </div>
          <Cards isDisplay={isDisplay} activeCard={activeCard}/>
          <Nav />
        </div>
      )}
    </div>
  );
}
