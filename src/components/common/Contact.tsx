import { useEffect, useRef } from "react";
import MainLayout from "../layout/MainLayout";
import emailjs from 'emailjs-com';

export default function Contact() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_zo420zu', 'template_qikkvzf', e.target as HTMLFormElement, 'UqK4uwXbFE4tF8oMJ')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email. Error: ' + error.text);
      });
  };

  return (
    <MainLayout>
      <div className="">
        <section className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="w-2/5 h-1 rounded-full bg-[#f5e4ab]"></div>
        </section>
        <section className="">
          <form onSubmit={sendEmail} className="flex flex-col p-4 mt-4 rounded-lg shadow-sm bg-slate-100">
            <h2 className="text-lg font-bold text-black">I'm Always Open To Discussing New Projects.</h2>
            <div className="mt-4">
              <label className="text-black" htmlFor="name">
                Name *
              </label>
              <input
                name="user_name"
                placeholder="John Doe"
                className="w-full px-2 py-1 text-black bg-white border-gray-300 rounded-md"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="text-black" htmlFor="email">
                Email *
              </label>
              <input
                name="user_email"
                placeholder="jhondoe@example.com"
                className="w-full px-2 py-1 text-black bg-white border-gray-300 rounded-md"
                type="email"
              />
            </div>
            <div className="mt-4">
              <label className="text-black" htmlFor="message">
                Message *
              </label>
              <textarea
                name="message"
                ref={textareaRef}
                placeholder="Hello! I'm interested in contacting you"
                className="w-full px-2 py-1 text-black bg-white border-gray-300 rounded-md"
                id="message"
                onInput={adjustTextareaHeight}
              />
            </div>
            <button
              type="submit"
              className="align-middle w-full md:w-auto mt-3 select-none active:animate-ping font-sans font-bold text-center bg-[#9addee] hover:bg-[#c2e4e5] uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            >
              Contact!
            </button>
          </form>
        </section>
      </div>
    </MainLayout>
  );
}
