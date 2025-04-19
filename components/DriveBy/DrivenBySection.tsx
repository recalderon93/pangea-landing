"use client";
import Image from "next/image";
import drivenByImage from "@/public/driven-by-image.png";
import { drivenByDataList } from "./data";
import DrivenByItem from "./DrivenByItem";
import { useRef, useState } from "react";
import Chevron from "../Icons/Chevron";

export function DrivenBySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [side, setSide] = useState<"left" | "right">("left");
  const column1 = drivenByDataList.slice(0, 3);
  const column2 = drivenByDataList.slice(3, 6);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? window.innerWidth : -window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-teal-400 px-4 pt-16 pb-20 sm:rounded-[28px] sm:px-6 md:rounded-[32px] md:px-10 lg:rounded-[40px] lg:px-14 lg:pt-30">
      <h2 className="h2 mb-8 text-green-300">
        Driven by
        <br />
        Impact and Value
      </h2>
      <Image
        className="top-34 right-0 hidden xl:absolute xl:block"
        src={drivenByImage}
        alt=""
        width={300}
        // height={485}
      />

      {/* Buttons: only visible on small screens */}
      <div className="mb-4 flex gap-3 lg:hidden">
        <button
          disabled={side === "left"}
          onClick={() => scroll("left")}
          className="border-white-50 flex aspect-square w-10 items-center justify-center rounded-full border-[3px] bg-teal-400 pr-1 shadow hover:shadow-none disabled:opacity-70">
          <Chevron direction="left" width={18} height={9} color="accent" />
        </button>
        <button
          disabled={side === "right"}
          onClick={() => scroll("right")}
          className="border-white-50 flex aspect-square w-10 items-center justify-center rounded-full border-[3px] bg-teal-400 pl-1 shadow disabled:opacity-60">
          <Chevron direction="right" width={18} height={9} color="accent" />
        </button>
      </div>

      {/* Scrollable layout for small screens / two columns for large screens */}
      <div
        ref={scrollRef}
        onScroll={(e) => {
          // Check scroll position to determine which side is being scrolled
          const scrollLeft = e.currentTarget.scrollLeft;
          const scrollWidth = e.currentTarget.scrollWidth;
          const clientWidth = e.currentTarget.clientWidth;

          if (scrollLeft === 0) {
            setSide("left");
          } else if (scrollLeft + clientWidth >= scrollWidth) {
            setSide("right");
          }
        }}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth lg:snap-none lg:overflow-visible xl:pr-56">
        <div className="min-w-full flex-shrink-0 snap-start lg:w-1/2 lg:min-w-0">
          <div className="flex flex-col items-center gap-6">
            {column1.map((item) => (
              <DrivenByItem
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="min-w-full flex-shrink-0 snap-start lg:w-1/2 lg:min-w-0">
          <div className="flex flex-col items-center gap-6">
            {column2.map((item) => (
              <DrivenByItem
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
