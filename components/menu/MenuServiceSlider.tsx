import data from "@/components/Services/data";
import { cva } from "class-variance-authority";
import { useRef, useState } from "react";

export default function MenuServiceSlider() {
  const [selected, setSelected] = useState<(typeof data)[0]>(data[0]);
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex gap-6 px-3">
      <div className="flex flex-col gap-3">
        {data.map((item) => (
          <button
            key={item.id}
            className={step({ selected: selected.id === item.id })}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>
      <div
        ref={sliderRef}
        className="no-scrollbar flex h-18 flex-1 snap-y snap-mandatory snap-start flex-col overflow-y-auto bg-gray-400 py-9">
        {data.map((item) => (
          <div
            key={item.id}
            className={sliderItem({ selected: selected.id === item.id })}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

const step = cva("w-2 aspect-square rounded-full bg-gray-200 cursor-pointer", {
  variants: {
    selected: {
      true: "bg-teal-700",
      false: "bg-gray-200",
    },
  },
});

const sliderItem = cva(
  "rounded-lg h-9 flex items-center px-3 snap-center  justify-center",
  {
    variants: {
      selected: {
        true: "bg-teal-700 text-white-50",
        false: "text-teal-700",
      },
    },
  },
);
