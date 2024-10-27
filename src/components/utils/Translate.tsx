interface TranslateProps {
   light?: boolean;
   className?: string;
}

export const Translate = ({ className, light }: TranslateProps) => {
   return (
      <div className={className}>
         <svg
            viewBox="0 0 48 48"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
         >
            <g id="SVGRepo_iconCarrier">
               <defs>
                  <style>
                     {
                        `.cls-1{ fill: none; stroke: #${light ? "fff" : "000"}; stroke-linecap: round; stroke-linejoin: round; transition:all .3s ease-in-out}`
                     }
                  </style>
               </defs>
               <path className="cls-1" d="M12.62 24.31L17.94 11.42" />
               <path className="cls-1" d="M23.04 24.35L17.94 11.42" />
               <path className="cls-1" d="M21.34 20.02L14.39 20.02" />
               <path className="cls-1" d="M32.63 25.38L39.35 25.38" />
               <path
                  className="cls-1"
                  d="M35.68 25.38c0 4.34-5.29 11.51-10.59 12.61M27.93 32.79c2.13 2.4 5.61 4.74 8.82 5.2"
               />
               <rect
                  className="cls-1"
                  x={5.5}
                  y={5.5}
                  width={24.67}
                  height={24.67}
                  rx={3.64}
                  ry={3.64}
               />
               <path
                  className="cls-1"
                  d="M17.83 30.17v8.69c0 2 1.64 3.64 3.64 3.64h17.38c2 0 3.64-1.64 3.64-3.64V21.47c0-2-1.64-3.64-3.64-3.64h-8.69"
               />
            </g>
         </svg>
      </div>
   )
}
