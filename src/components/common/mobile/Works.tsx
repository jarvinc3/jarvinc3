import { useRef, useState } from "react";

export const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const texts = [
    'Texto 1: Bienvenido.',
    'Texto 2: Explora.',
    'Texto 3: Contáctanos.',
    'Texto 4: Únete.',
  ];

  const handleSwipe = (direction: 'left' | 'right') => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'left' && prevIndex < texts.length - 1) {
        return prevIndex + 1;
      } else if (direction === 'right' && prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchStartX = e.touches[0].clientX;

    const handleTouchMove = (moveEvent: TouchEvent) => {
      const touchEndX = moveEvent.touches[0].clientX;

      if (touchStartX - touchEndX > 20) {
        handleSwipe('left');
        document.removeEventListener('touchmove', handleTouchMove);
      } else if (touchEndX - touchStartX > 20) {
        handleSwipe('right');
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };

    document.addEventListener('touchmove', handleTouchMove);
  };


  return (
    <div
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      className="flex flex-col w-screen h-screen gap-10 p-5 bg-gray-200"
    >
      <div className="flex items-center gap-5">
        <h2 className="font-bold">Works</h2>
        <div className="h-1 bg-[#c084fc] rounded-full w-full"></div>
      </div>
      <div
        className="flex transition-transform duration-500 ease-out h-[50%] w-full gap-10"
        style={{
          transform: `translateX(-${currentIndex * 43}%)`,
          marginLeft: "calc(60% - 100px)",
        }}
      >
        {texts.map((text, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-full rounded-lg shadow-md cursor-pointer w-[300px] bg-white"
          >
            <h2 className="p-4 text-xl font-bold text-center">{text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
