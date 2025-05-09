import Button from "../buttons/Button";
import MenuItem from "./MenuItem";

export default function MenuNavbarMobile() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col gap-2">
        <MenuItem
          role="button"
          title="Solutions"
          onClick={() => {}}
          showArrow
        />
        <MenuItem role="link" title="Who We Are" href="#" showArrow />
        <MenuItem role="link" title="Our Work" href="#" showArrow />
      </div>
      <div className="flex w-full flex-col items-start gap-8 rounded-2xl bg-teal-700 p-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="h4 text-white-100 font-medium">
          We are ready to{" "}
          <span className="block text-green-300">digitize your project!</span>
        </p>
        <Button variant="accent" title="BOOK A CALL" className="grow-0" />
      </div>
    </div>
  );
}
