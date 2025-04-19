import { RefObject, useEffect } from "react";
import ServiceItem, { ServiceItemProps } from "./ServiceItem";

type Props = {
  services: ServiceItemProps[];
  containerRef: RefObject<HTMLDivElement | null>;
  onScrollIndexChange?: (index: number) => void;
};

export default function ServiceSlider({
  services,
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
      const index = Math.round(ratio * (services.length - 1));

      onScrollIndexChange?.(index);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef, services.length, onScrollIndexChange]);
  return (
    <div className="w-full overflow-x-auto">
      <div
        ref={containerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 py-8">
        {services.map((item, i) => (
          <ServiceItem
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
