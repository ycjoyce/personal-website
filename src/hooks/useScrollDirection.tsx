import { useState, useEffect, useCallback } from "react";

const useScrollDirection = () => {
  const [y, setY] = useState(window.scrollY);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);

  const handleNavigation = useCallback(
    (e) => {
      const { currentTarget } = e;
      if (y > currentTarget.scrollY) {
        setDirection("up");
      } else if (y < currentTarget.scrollY) {
        setDirection("down");
      }
      setY(currentTarget.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return {
    direction,
  };
};

export default useScrollDirection;
