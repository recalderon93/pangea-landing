import { useEffect } from "react";
import { TestimonialType } from "./data";
import TestimonialItem from "./TestimonialItem";

type Props = {
  data: TestimonialType[];
  containerRef: React.RefObject<HTMLDivElement | null>;
  onScrollIndexChange?: (index: number) => void;
};

export default function TestimonialSlider({
  data,
  containerRef,
  onScrollIndexChange,
}: Props) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, offsetWidth } = container;
      const maxScrollable = scrollWidth - offsetWidth;

      if (maxScrollable <= 0) {
        onScrollIndexChange?.(0);
        return;
      }

      const ratio = scrollLeft / maxScrollable;
      const index = Math.round(ratio * (data.length - 1));

      onScrollIndexChange?.(index);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef, data.length, onScrollIndexChange]);
  return (
    <div className="w-full overflow-x-auto">
      <div
        ref={containerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-16 py-8 lg:px-40">
        {data.map((item, i) => (
          <TestimonialItem
            key={i}
            id={item.id}
            avatar={item.avatar}
            username={item.username}
            role={item.role}
            company={item.company}
            testimonials={item.testimonials}
            color={i % 2 !== 0 ? "brand" : "accent"}
          />
        ))}
      </div>
    </div>
  );
}
