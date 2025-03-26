import { useState, useEffect, useCallback } from "react";

/**
 * # useScrollPosition
 *
 * @return boolean
 */
export function useScrollThreshold(threshold: number = 50) {
  const [isScrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isScrolled;
}
