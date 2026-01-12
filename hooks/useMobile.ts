import { useEffect, useState } from "react";

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const handler = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Set initial value (important!)
    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, [breakpoint]);

  return isMobile;
}
