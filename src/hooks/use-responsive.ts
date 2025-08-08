import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 1280;

const getDeviceSize = () => {
  const width = typeof window !== 'undefined' ? window.innerWidth : 0;

  return {
    isMobile: width < MOBILE_BREAKPOINT,
    isTablet: width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT,
    isDesktop: width >= TABLET_BREAKPOINT,
  };
};

export function useResponsive() {
  const [size, setSize] = useState(getDeviceSize);

  useEffect(() => {
    const handleResize = () => {
      setSize(getDeviceSize());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}
