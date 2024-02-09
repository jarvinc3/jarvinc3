import Nav from "../components/Nav";
import "../css/nav.css";
import "../css/contact.css"
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

export default function Contact() {
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
        <div className="flex flex-col items-center justify-center w-screen h-screen home-d">
          <div className="reset-button-container">
            <div className="form-container">
              <div className="form">
                <span className="heading">Send me a message</span>
                <input placeholder="Name" type="text" className="input" />
                <input placeholder="Email" id="mail" type="email" className="input" />
                <textarea placeholder="Hi, I really liked your work." rows={10} cols={30} id="message" name="message" className="textarea" defaultValue={""} />
                <div className="button-container">
                  <div className="send-button">Send</div>
                  <div className="reset-button-container">
                    <div id="reset-btn" className="reset-button">
                      Reset
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Nav />
        </div>
      )}
    </>
  );
}
