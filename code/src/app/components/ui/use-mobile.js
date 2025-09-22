import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    if (typeof window === "undefined") return false; // SSR safe
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    window.addEventListener("resize", onResize);

    // Run on mount to ensure state is correct
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
}
