import data from "@/components/Services/data";
import MenuServicePreview from "./MenuServicePreview";
import Button from "../buttons/Button";
import MenuServiceSlider from "./MenuServiceSlider";

export default function MenuServiceMobile() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col gap-2">
        <MenuServiceSlider />
        <MenuServicePreview
          image={data[0].image}
          description={data[0].description}
        />
      </div>
      <div className="flex flex-col items-center gap-4 px-3">
        <div className="flex w-full items-center justify-between gap-10 rounded-2xl bg-teal-700 px-7 py-8">
          <p className="text-white-50 paragraph-1 bold">
            Want to know more about our pricing?
          </p>
          <Button variant="accent" title="BOOK A CALL" className="grow-0" />
        </div>
        <p className="h2 text-shade-100">Solutions</p>
      </div>
    </div>
  );
}
