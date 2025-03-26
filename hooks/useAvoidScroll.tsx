import { useEffect } from "react";

export default function useAvoidScroll(stopScrolling: boolean) {
  useEffect(() => {
    if (stopScrolling) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [stopScrolling]);
}
