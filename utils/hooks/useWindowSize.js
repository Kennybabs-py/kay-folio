import { useState, useEffect } from "react";

const useWindowSize = () => {
  const hasWindow = typeof window !== "undefined";

  const getWindowSize = () => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowSize(getWindowSize());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowSize;
};

export default useWindowSize;
