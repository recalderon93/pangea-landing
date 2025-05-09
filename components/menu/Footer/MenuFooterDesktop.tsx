import Button from "../../buttons/Button";

export default function MenuFooterDesktop() {
  return (
    <div className="border-t-shade-50 flex h-54 w-full items-center justify-between border-t-3">
      <h2 className="text-shade-100 text-[40px] leading-[48px] xl:text-[56px] xl:leading-[64px]">
        Solutions
      </h2>
      <div className="flex items-center gap-6">
        <p className="h5 text-teal-700">Want to know more about our pricing?</p>
        <Button title="BOOK A CALL" variant="brand" />
      </div>
    </div>
  );
}
