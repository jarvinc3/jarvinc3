import PropTypes from "prop-types";

export function Cards({ isDisplay, activeCard }) {
  const folderWorks = [
    {
      image: {
        hrefImg: "https://app-del-clima-alpha.vercel.app",
        srcImg: "/weather-app.png",
      },
      title: "Wether App",
      links: {
        link1: "https://github.com/jarvinc3/AppDelClima",
        link2: "https://app-del-clima-alpha.vercel.app",
      },
      skilUsed: {
        html: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/html-5--v1.png",
        },
        css: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/css3.png",
        },
        javascript: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/javascript--v1.png",
        },
        react:  {
          class: "hidden",
          src: "",
        },
        tailwind:  {
          class: "hidden",
          src: "",
        },
        next:  {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/fluency/48/nextjs.png",
        },
      },
      description:
        "En la región montañosa de Neblina, un lugar mágico y enigmático, se esconde un bosque ancestral donde las luces danzan entre los árboles. Este rincón secreto ha cautivado a exploradores y fotógrafos durante generaciones, convirtiéndose en un destino imperdible para quienes buscan la conexión con la naturaleza.",
    },

    {
      image: {
        hrefImg: "https://melon-shop.vercel.app",
        srcImg: "/eshop-app.png",
      },
      title: "Eshop App",
      links: {
        link1: "https://github.com/jarvinc3/melon-shop",
        link2: "https://melon-shop.vercel.app",
      },
      skilUsed: {
        html: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/html-5--v1.png",
        },
        css: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/css3.png",
        },
        javascript: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/javascript--v1.png",
        },
        react:  {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/react-native.png",
        },
        tailwind:  {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/tailwindcss.png",
        },
        next:  {
          class: "hidden",
          src: "",
        },
      },
      description:
        "En la bulliciosa ciudad de Prismatown, la escena gastronómica florece con una variedad de sabores y aromas que deleitan los paladares más exigentes. Desde pequeños puestos callejeros hasta elegantes restaurantes, cada rincón ofrece una experiencia culinaria única que refleja la diversidad cultural de la región.",
    },

    {
      image: {
        hrefImg: "https://usuarios-registrer.vercel.app",
        srcImg: "/react-router-app.png",
      },
      title: "React Router App",
      links: {
        link1: "https://github.com/jarvinc3/usuarios-registrer",
        link2: "https://usuarios-registrer.vercel.app",
      },
      skilUsed: {
        html: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/html-5--v1.png",
        },
        css: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/css3.png",
        },
        javascript: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/javascript--v1.png",
        },
        react:  {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/react-native.png",
        },
        tailwind:  {
          class: "hidden",
          src: "",
        },
        next:  {
          class: "hidden",
          src: "",
        },
      },
      description:
        "La empresa innovadora Quantum Dynamics ha anunciado el lanzamiento de su último dispositivo revolucionario: el QuantumXplorer. Este dispositivo, que combina tecnología cuántica y realidad aumentada, promete cambiar la forma en que interactuamos con el mundo digital, abriendo nuevas posibilidades en campos como la educación y el entretenimiento.",
    },

    {
      image: {
        hrefImg: "https://tic-toe-game-iota.vercel.app",
        srcImg: "/tic-tac-toe-app.png",
      },
      title: "TicTacToe App",
      links: {
        link1: "https://github.com/jarvinc3/tic-toe-game",
        link2: "https://tic-toe-game-iota.vercel.app",
      },
      skilUsed: {
        html: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/html-5--v1.png",
        },
        css: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/css3.png",
        },
        javascript: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/javascript--v1.png",
        },
        react:  {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/react-native.png",
        },
        tailwind:  {
          class: "hidden",
          src: "",
        },
        next:  {
          class: "hidden",
          src: "",
        },
      },
      description:
        "En el tranquilo pueblo de Serenidad, la comunidad se ha unido para crear un espacio verde sostenible. Con jardines comunitarios, paneles solares y programas de reciclaje, Serenidad se ha convertido en un modelo de eco-sostenibilidad, inspirando a otras localidades a seguir su ejemplo.",
    },

    {
      image: {
        hrefImg: "https://coordinate-converter-five.vercel.app",
        srcImg: "/cordinates-app.png",
      },
      title: "Coordinates App",
      links: {
        link1: "https://github.com/jarvinc3/coordinate-converter",
        link2: "https://coordinate-converter-five.vercel.app",
      },
      skilUsed: {
        html: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/html-5--v1.png",
        },
        css: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/css3.png",
        },
        javascript: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/javascript--v1.png",
        },
        react:  {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/react-native.png",
        },
        tailwind:  {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/tailwindcss.png",
        },
        next:  {
          class: "hidden",
          src: "",
        },
      },
      description:
        "La pintoresca playa de Coral Cove es conocida por sus aguas cristalinas y su arrecife de coral vibrante. Los amantes del buceo y el snorkel encuentran en este paraíso marino un escenario perfecto para explorar la diversidad de la vida submarina y maravillarse con la belleza del océano.",
    },

    {
      image: {
        hrefImg: "",
        srcImg: "https://picsum.photos/300/200",
      },
      title: "Last App",
      links: {
        link1:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/UlEQVR4nO2WPUscURSGx2S3iKQIWiWrEkgZscgfSGEdSYJpBBdTx00UtfI3JL0EE1i2CLay7II2EfQnLKYKahEQQvxKo3v2kctc2Nkz18mdGdPtCxfm457zvufMmXNuEPTRRwoAY0AFpAmyD3Jhl7luAvPA6P8gLoGsgbShQ/ISAdkAHt8W+UuQ838Tx4ScAVN5yT+EEaUlj2aD93kil+zkPSLSZQIY6U27fATuA29BDu2zY5CWXcf22QEwF+6VT+pzPEohQNZ7o6AcETdoitIhumTeRe7nVCY++0Y/Fq92FrzVd/0sKAFtk1kfw0r8O/Iig4Aph593HobSUMq30pJHfG0rX3Ufox9509/1xaISsO8j4EwJmM0hoKybk4+Av0pAtkbiLsQLHwEHyuhrdgFSVb5++hjVldFv4EF6coZA/ihfmz6GK452+g24k4L8bjgRY7/hsu/ovbLEeyC/7PUO8Nw4T7AtAJMgu44gLr3bMUjNGjWAhyDfI47OgSUH+Wq8gHsEVL3IDYxSkFNr+MWKaEWm29NAAXiWQH6SahgZAG9AOraHT5gaAMaB4cAB4F7COJ4OchxIOiBHwAzwxEQPDDj2Fm4gr2QiV5k4VdVccOwrOtKeLfIbaqIWVrLJCEXHnqLNltlTNXUT3DYIDx2vEt6/dh1W+ugjSMA1jq24ovzt6psAAAAASUVORK5CYII=",
        link2:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtUlEQVR4nO2Zy2oUQRSGKzsl0byCqAg+RCRxgssMipBXiJtZJRD0QTQi+AzRuFEwKgi+gBo3LhRUCBPjqLMJZz6prh7sa/Ul6eoK9A89NENVcb6uS5//tFKdOnXyXsAyyEOQjyC/w0vfbwE95buAyyCvYYL9kle6rfJRwCLIsBhiMoUZAgvKJwHXQP6Uh5hMYQ68mRm95kHGGUFum1liNrz0jD3JaLfrKYTon3VLn7tpGK67jbwcxKC4r+wk+t13E3UqEJbqQvx/CLG+H5RrAVdBDutCaAHnEv1/KZcCZkDeHgdCCzifGONQuRRwI2OjbtYYp5cAed9MxLkByONEAM/1LNUY51mrmx3kU2I2VqqPwUbGrC41E3FuEPI38hTfAWfC4G6CfAfZB25bIAZmT8Vm46VTiDhIADEfBrcKchQJbL8CxBC41AbInh0iCO5HSYixTlucQ4QB3SmAOAJulYTotQKRCC4PYjXSZkYfzacWQh8AQB/kRUam2zyEzkCNFQ0s6UFoT/f0cqoAMW/2UKb3GDcKAVzMt6eFG7ssxLDRjW23pycGsdvoEZvv7KpBhG3WdCpu7K6MdO6k0w6afmNb7KnOnVYib+xCCB+d3WY0ATytEINEu37xnmCtLYjFsvYU5GvxxnbsISIVwGFZZwfyrfh0kpFyLVLvCbs9DZfWF5DP+j7872z8iHUMQlBQThmZ9Rrj9Nu2p1uJALZrFh0SuZM8aibiHJl8KTYblVMFczS3XB0keNPGApit1j/TT7xpLuLyIHPHhPgJXFGuRZCWV19aFmfntuJh2exPVYG8tKekqnrBrNyztN/wDmIq880ulenuGFfInCkqB3lYogLoEYQWcMEUz7K8h+0KIJaVTwIWanysbKfuVCRtObOXmWN7esJfnB6ElnTk1J526tRJnYT+AU2n5tCnKWolAAAAAElFTkSuQmCC",
      },
      skilUsed: {
        html: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/html-5--v1.png",
        },
        css: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/css3.png",
        },
        javascript: {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/javascript--v1.png",
        },
        react:  {
          class: "text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50",
          src: "https://img.icons8.com/color/48/react-native.png",
        },
        tailwind:  {
          class: "hidden",
          src: "https://img.icons8.com/color/48/tailwindcss.png",
        },
        next:  {
          class: "hidden",
          src: "",
        },
      },
      description:
        "La aclamada artista contemporánea Luna Estelar presenta su última instalación en la Galería Aurora. Con elementos de luz y sonido, la obra invita a los espectadores a sumergirse en un viaje sensorial único. La crítica elogia la creatividad de Estelar, que sigue desafiando las fronteras del arte contemporáneo.",
    },
  ];

  const folderData = folderWorks[activeCard];

  if (!folderData) {
    return null;
  }
  
  const {image, title, links, skilUsed, description } = folderData;
  
  const { link1, link2 } = links;

  const {hrefImg, srcImg } = image;

  const { html, css, javascript, next, react, tailwind } = skilUsed;
  
  const { class: htmlClass, src: htmlSrc } = html;
  const { class: cssClass, src: cssSrc } = css;
  const { class: jsClass, src: jsSrc } = javascript;
  const { class: nextClass, src: nextSrc } = next;
  const { class: reactClass, src: reactSrc } = react;
  const { class: tailwindClass, src: tailwindSrc } = tailwind;

  return (
    <div className="relative">
      <div className={`${isDisplay ? "max-h-[421px] h-[421px]" : "h-0 opacity-0"} ml-[450px] relative max-w-[600px] w-[600px] duration-500 rounded-lg bg-[#ffb400]`}>
        <section className={`${isDisplay ? "opacity-1 duration-300" : "opacity-0"} flex justify-between p-3 gap-3`}>
          <a target="_blank" rel="noreferrer" href={hrefImg} className="w-[60%]">
            <img
              className="rounded-lg bg-cover bg-no-repeat"
              src={srcImg}
              alt=""
            />
          </a>
          <div className="flex flex-col justify-center gap-9 mr-11">
            <h2
              id="title"
              className="text-slate-50 text-xl font-semibold text-center"
            >
              {title}
            </h2>
            <div id="icons" className="flex justify-center gap-5">
              <a target="_blank" rel="noreferrer" href={link1}>
                <img
                  id="link1"
                  width="40"
                  height="30"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/UlEQVR4nO2WPUscURSGx2S3iKQIWiWrEkgZscgfSGEdSYJpBBdTx00UtfI3JL0EE1i2CLay7II2EfQnLKYKahEQQvxKo3v2kctc2Nkz18mdGdPtCxfm457zvufMmXNuEPTRRwoAY0AFpAmyD3Jhl7luAvPA6P8gLoGsgbShQ/ISAdkAHt8W+UuQ838Tx4ScAVN5yT+EEaUlj2aD93kil+zkPSLSZQIY6U27fATuA29BDu2zY5CWXcf22QEwF+6VT+pzPEohQNZ7o6AcETdoitIhumTeRe7nVCY++0Y/Fq92FrzVd/0sKAFtk1kfw0r8O/Iig4Aph593HobSUMq30pJHfG0rX3Ufox9509/1xaISsO8j4EwJmM0hoKybk4+Av0pAtkbiLsQLHwEHyuhrdgFSVb5++hjVldFv4EF6coZA/ihfmz6GK452+g24k4L8bjgRY7/hsu/ovbLEeyC/7PUO8Nw4T7AtAJMgu44gLr3bMUjNGjWAhyDfI47OgSUH+Wq8gHsEVL3IDYxSkFNr+MWKaEWm29NAAXiWQH6SahgZAG9AOraHT5gaAMaB4cAB4F7COJ4OchxIOiBHwAzwxEQPDDj2Fm4gr2QiV5k4VdVccOwrOtKeLfIbaqIWVrLJCEXHnqLNltlTNXUT3DYIDx2vEt6/dh1W+ugjSMA1jq24ovzt6psAAAAASUVORK5CYII="
                  alt="github"
                />
              </a>
              <a target="_blank" rel="noreferrer"  href={link2}>
                <img
                  id="link2"
                  width="40"
                  height="30"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtUlEQVR4nO2Zy2oUQRSGKzsl0byCqAg+RCRxgssMipBXiJtZJRD0QTQi+AzRuFEwKgi+gBo3LhRUCBPjqLMJZz6prh7sa/Ul6eoK9A89NENVcb6uS5//tFKdOnXyXsAyyEOQjyC/w0vfbwE95buAyyCvYYL9kle6rfJRwCLIsBhiMoUZAgvKJwHXQP6Uh5hMYQ68mRm95kHGGUFum1liNrz0jD3JaLfrKYTon3VLn7tpGK67jbwcxKC4r+wk+t13E3UqEJbqQvx/CLG+H5RrAVdBDutCaAHnEv1/KZcCZkDeHgdCCzifGONQuRRwI2OjbtYYp5cAed9MxLkByONEAM/1LNUY51mrmx3kU2I2VqqPwUbGrC41E3FuEPI38hTfAWfC4G6CfAfZB25bIAZmT8Vm46VTiDhIADEfBrcKchQJbL8CxBC41AbInh0iCO5HSYixTlucQ4QB3SmAOAJulYTotQKRCC4PYjXSZkYfzacWQh8AQB/kRUam2zyEzkCNFQ0s6UFoT/f0cqoAMW/2UKb3GDcKAVzMt6eFG7ssxLDRjW23pycGsdvoEZvv7KpBhG3WdCpu7K6MdO6k0w6afmNb7KnOnVYib+xCCB+d3WY0ATytEINEu37xnmCtLYjFsvYU5GvxxnbsISIVwGFZZwfyrfh0kpFyLVLvCbs9DZfWF5DP+j7872z8iHUMQlBQThmZ9Rrj9Nu2p1uJALZrFh0SuZM8aibiHJl8KTYblVMFczS3XB0keNPGApit1j/TT7xpLuLyIHPHhPgJXFGuRZCWV19aFmfntuJh2exPVYG8tKekqnrBrNyztN/wDmIq880ulenuGFfInCkqB3lYogLoEYQWcMEUz7K8h+0KIJaVTwIWanysbKfuVCRtObOXmWN7esJfnB6ElnTk1J526tRJnYT+AU2n5tCnKWolAAAAAElFTkSuQmCC"
                  alt="external-link"
                />
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 pl-1">
              <div id="skilUsed" className="flex gap-3">
                <h5 className={htmlClass}>
                  HTML5
                  <img
                    id="html"
                    className="w-[16px]"
                    width="48"
                    height="48"
                    src={htmlSrc}
                    alt="html-5--v1"
                  />
                </h5>
                <h5 className={cssClass}>
                  CSS3
                  <img
                    id="css"
                    className="w-[16px]"
                    width="48"
                    height="48"
                    src={cssSrc}
                    alt="css3"
                  />
                </h5>
                <h5 className={tailwindClass}>
                  TailwindCSS
                  <img
                    id="css"
                    className="w-[16px]"
                    width="48"
                    height="48"
                    src={tailwindSrc}
                    alt="css3"
                  />
                </h5>
              </div>
              <div className="flex gap-3">
                <h5 className={jsClass}>
                  javaScript
                  <img
                    id="javascript"
                    className="w-[16px]"
                    width="48"
                    height="48"
                    src={jsSrc}
                    alt="javascript--v1"
                  />
                </h5>
                <h5 className={reactClass}>
                  React Js
                  <img
                    id="next"
                    className="w-[16px]"
                    width="48"
                    height="48"
                    src={reactSrc}
                    alt="next-js"
                  />
                </h5>
                <h5 className={nextClass}>
                  Next Js
                  <img
                    id="next"
                    className="w-[16px]"
                    width="48"
                    height="48"
                    src={nextSrc}
                    alt="next-js"
                  />
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className={`${isDisplay ? "opacity-1 duration-2000" : "opacity-0 "} p-3 duration-200`}>
          <h3 className="text-[#fff] text-xl mt-2">{description}</h3>
        </section>
      </div>
    </div>
  );
}

Cards.propTypes = {
  isDisplay: PropTypes.bool.isRequired,
  activeCard: PropTypes.number
};
