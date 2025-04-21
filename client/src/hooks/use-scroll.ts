import { useState, useEffect } from "react";

export function useScroll(threshold = 0): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initialize on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
