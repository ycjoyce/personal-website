import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [direction, setDirection] = useState<"up" | "down" | "">("");

  useEffect(() => {
    function handleScroll() {
      let y = window.scrollY;
      return () => {
        setDirection(y > window.scrollY ? "up" : "down");
        y = window.scrollY;
      };
    }

    const handler = handleScroll();

    window.addEventListener("scroll", handler, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return { direction };
};

export default useScrollDirection;
