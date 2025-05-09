import PangeaLogo from "../Icons/PangeLogo";

type Props = {
  onClose?: () => void;
};

export default function MenuHeader({ onClose }: Props) {
  return (
    <div className="mb-10 flex w-full items-center justify-between px-3 lg:px-0">
      <PangeaLogo color="green" />
      <button
        className="h5 text-shade-200 hover:text-shade-400 active:text-shade-400 cursor-pointer p-2"
        onClick={onClose}>
        Close
      </button>
    </div>
  );
}
