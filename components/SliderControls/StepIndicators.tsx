type Props = {
  showControls?: boolean;
  currentIndex: number;
  onGoToItem?: (index: number) => void;
  numberOfItems: number;
};

export default function StepIndicators({
  showControls = true,
  currentIndex = 0,
  onGoToItem,
  numberOfItems = 3,
}: Props) {
  if (!showControls) return <div className="hidden" />;

  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: numberOfItems }, (_, index) => (
        <button
          key={index}
          onClick={() => onGoToItem?.(index)}
          className={`h-2 w-2 rounded-full transition-all duration-300 ${
            currentIndex === index ? "bg-teal-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
