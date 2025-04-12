import CheckIcon from "../Icons/Check";

type Props = {
  title: string;
  description: string;
};

export default function DrivenByItem({ title, description }: Props) {
  return (
    <div className="flex w-[90vw] max-w-[450px] gap-3 rounded-2xl p-3 hover:bg-[linear-gradient(102deg,_rgba(251,251,251,0.2)_0%,_rgba(251,251,251,0.05)_100%)] hover:shadow-[-2px_4px_4px_0_rgba(0,0,0,0.1)] hover:backdrop-blur-[10px] sm:gap-4 md:gap-5 md:rounded-3xl">
      <div>
        <CheckIcon />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="paragraph-1 bolder whitespace-pre-line text-white">
          {title}
        </h3>
        <p className="paragraph-2 whitespace-pre-line text-white">
          {description}
        </p>
      </div>
    </div>
  );
}
