import MainLayout from "../layout/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-5">
        <section className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">About</h2>
          <div className="w-2/5 h-1 rounded-full bg-[#acdcf2]"></div>
        </section>
        <article className="flex flex-col gap-3 w-[85%] font-normal">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, provident? Quasi, ullam ab laborum veniam sunt minus animi dolorum, modi mollitia perferendis vitae tempore aliquam quod aperiam asperiores quos vero?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores quidem nostrum repellendus ducimus unde blanditiis a veniam cupiditate minus?</p>
        </article>
        <section className="flex flex-col gap-3">
          <h3 className="text-xl font-medium">What I Do!</h3>
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
            <div className="flex items-center w-full gap-2 p-3 bg-[#f4c6f4] rounded-md shadow-lg h-28">
              <img className="gifimg" src="/desing.gif" alt="" />
              <section className="pl-3 border-l border-gray-400 blo2k">
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
                  Web Desing
                </h3>
                <h3 className="text-sm font-semibold text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, reiciendis.</h3>
              </section>
            </div>
            <div className="flex items-center w-full gap-2 p-3 bg-[#acdcf2] rounded-md shadow-lg h-28">
              <img className="gifimg" src="/frontend.gif" alt="" />
              <section className="pl-3 border-l border-gray-400 blo2k">
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
                  Frontend Developer
                </h3>
                <h3 className="text-sm font-semibold text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, reiciendis.</h3>
              </section>
            </div>
            <div className="flex items-center w-full gap-2 p-3 bg-[#f5c5ab] rounded-md shadow-lg h-28">
              <img className="gifimg" src="/backend.gif" alt="" />
              <section className="pl-3 border-l border-gray-400 blo2k">
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
                  Backend Developer
                </h3>
                <h3 className="text-sm font-semibold text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, reiciendis.</h3>
              </section>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
