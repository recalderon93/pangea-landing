import { useEffect } from "react";

export default function useAvoidScroll(stopScrolling: boolean) {
  useEffect(() => {
    if (stopScrolling) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [stopScrolling]);
}
