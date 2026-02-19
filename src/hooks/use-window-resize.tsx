import { useEffect, useState } from "react";

function useWindowResize() {
  const [resize, setResize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResize = () => {
    setResize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  
  return {...resize}
}

export default useWindowResize;
