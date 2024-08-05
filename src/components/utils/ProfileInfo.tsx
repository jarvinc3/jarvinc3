export default function ProfileInfo() {
  return (
    <div className="relative flex flex-col w-full gap-3 pb-8">
      <article className="sm:absolute sm:top-[-100px] flex justify-center w-full pt-10 sm:pt-0">
        <img
          className="rounded-md"
          width={200}
          src="/profile.jpg"
          alt=""
        />
      </article>
      <section className="flex flex-col items-center gap-3 text-center sm:mt-[110px]">
        <h2 className="text-2xl font-bold">{`<Jarvin Collado/>`}</h2>
        <p className="w-auto p-2 px-4 font-medium rounded-md bg-slate-100">
          Frontend Developer
        </p>
      </section>
      <section className="p-1 rounded-lg bg-slate-100">
        <ul className="flex flex-col gap-3 p-1">
          <li className="flex items-center gap-2 p-2 border-b">
            <div className="p-1 bg-white rounded-md">
              <img width={35} src="/phone.png" alt="" />
            </div>
            <div>
              <p className="text-sm">Phone</p>
              <span className="text-lg font-semibold">+1 (809) 637 6631</span>
            </div>
          </li>
          <li className="flex items-center gap-2 p-2 border-b">
            <div className="p-1 bg-white rounded-md">
              <img width={35} src="/gmail.png" alt="" />
            </div>
            <div>
              <p className="text-sm">Email</p>
              <span className="text-lg font-semibold text-container">jarvinct3@gmail.com</span>
            </div>
          </li>
          <li className="flex items-center gap-2 p-2">
            <div className="p-1 bg-white rounded-md">
              <img width={35} src="/maps.png" alt="" />
            </div>
            <div>
              <p className="text-sm">Location</p>
              <span className="text-lg font-semibold">
                Republica Dominicana
              </span>
            </div>
          </li>
        </ul>
      </section>
      <button
        type="button"
        data-ripple-light="true"
        className="align-middle mt-3 select-none active:scale-[0.98] hover:scale-[1.01] font-sans font-bold text-center bg-[#9addee] hover:bg-[#c2e4e5] uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      >
        Download CV
      </button>
    </div>
  );
}
