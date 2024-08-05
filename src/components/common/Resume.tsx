
export default function Resume() {
  return (
      <div className="flex flex-col gap-5">
        <section className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-bold">Resume</h2>
          <div className="w-2/5 h-1 rounded-full bg-[#f4c6f4]"></div>
        </section>
        <section className="flex justify-center w-full gap-3">
          <div className="flex flex-col items-center w-1/2 gap-3">
            <h3 className="text-base font-medium sm:text-xl">Work Experience</h3>
            <section className="w-full gap-2 p-3 bg-[#defaf9] rounded-md shadow-lg">
              <h3 className="text-sm font-semibold text-blue-gray-700">2023 - Present</h3>
              <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-base font-bold">
                Media Revolition SRL
              </h3>
              <h3 className="text-sm font-semibold text-blue-gray-700">Frontend Developer</h3>
            </section>
          </div>
          <div className="flex flex-col items-center w-1/2 gap-3">
            <h3 className="text-base font-medium sm:text-xl">Education</h3>
            <section className="w-full gap-2 p-3 bg-[#f9fade] rounded-md shadow-lg">
              <h3 className="text-sm font-semibold text-blue-gray-700">2022 - 2023</h3>
              <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-base font-bold">
                Funval International
              </h3>
              <h3 className="text-sm font-semibold text-blue-gray-700">Technical in Frontend Web Development</h3>
            </section>
          </div>
        </section>
        <section className="relative flex flex-col items-center justify-center w-full h-full">
          <div className="flex items-center justify-start w-full gap-3 my-8 ">
            <h2 className="text-xl font-medium text-start">Skills</h2>
            <div className="w-1/5 h-1 rounded-full bg-[#f4c6f4]"></div>
          </div>          
        </section>
      </div>
  );
}
