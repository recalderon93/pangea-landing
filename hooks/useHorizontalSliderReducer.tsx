import { useState, useRef, useEffect } from "react";

type UseHorizontalSliderProps = {
  totalItems: number;
};

export default function useHorizontalSlider({
  totalItems,
}: UseHorizontalSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollingByButtonRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const goToItem = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const item = container.children[index] as HTMLElement;
    if (item) {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      scrollingByButtonRef.current = true;

      item.scrollIntoView({
        behavior: "smooth",
        inline: "center", // 👈 center the item
        block: "nearest",
      });

      setCurrentIndex(index);

      scrollTimeoutRef.current = setTimeout(() => {
        scrollingByButtonRef.current = false;
      }, 600);
    }
  };

  const goToNext = () => {
    if (currentIndex < totalItems - 1) goToItem(currentIndex + 1);
  };

  const goToPrev = () => {
    if (currentIndex > 0) goToItem(currentIndex - 1);
  };

  function onScrollIndexChange(index: number) {
    if (scrollingByButtonRef.current) return;

    setCurrentIndex(index);
  }

  useEffect(() => {
    const checkControls = () => {
      const el = containerRef.current;
      if (!el) return;

      const needsScroll = el.scrollWidth > el.offsetWidth;
      setShowControls(needsScroll);
    };

    checkControls();

    window.addEventListener("resize", checkControls);
    return () => window.removeEventListener("resize", checkControls);
  }, [totalItems]);
  return {
    containerRef,
    onScrollIndexChange,
    goToItem,
    goToNext,
    goToPrev,
    currentIndex,
    showControls,
  };
}
