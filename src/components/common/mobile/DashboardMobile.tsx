
export const DashboardMobile: React.FC = () => {

   return (
      <div className="relative w-full max-w-sm mx-auto">
         {/* Triángulo con imagen */}
         <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 origin-bottom-right transform -rotate-45 bg-purple-600"></div>
            <img
               src="/portafolio.png"
               alt="Profile"
               className="relative z-10 object-cover w-full h-full"
               style={{
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
               }}
            />
         </div>
      </div>
   );
};