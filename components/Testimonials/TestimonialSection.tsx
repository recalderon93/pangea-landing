"use client";
import Button from "../buttons/Button";
import SliderButtons from "../SliderControls/SliderButtons";
import StepIndicators from "../SliderControls/StepIndicators";
import { testimonialsData } from "./data";
import useHorizontalSlider from "../../hooks/useHorizontalSliderReducer";
import TestimonialSlider from "./TestimonialSlider";

export default function TestimonialsSections() {
  const {
    containerRef,
    currentIndex,
    goToItem,
    goToNext,
    goToPrev,
    onScrollIndexChange,
    showControls,
  } = useHorizontalSlider({
    totalItems: testimonialsData.length,
  });

  return (
    <div className="flex flex-col gap-y-10 py-14 sm:gap-12 sm:py-16 md:gap-14 md:py-20 lg:gap-16 lg:py-24">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-0">
        <div className="bg-white-50 z-20 flex flex-col px-8 sm:px-12 md:px-16 lg:pr-4 lg:pl-20">
          <h2 className="h3 text-teal-400">
            Trust is everything.
            <br />
            That’s why entrepreneurs rely on us.
          </h2>
          <div className="flex items-center gap-10 lg:justify-between lg:gap-0">
            <Button variant="accent" title="LET'S WORK TOGETHER" />
            <div className="flex items-center gap-10 lg:justify-between lg:gap-6">
              <SliderButtons
                color="accent"
                onGoNext={goToNext}
                onGoPrevious={goToPrev}
                showControls={showControls}
                nextDisabled={currentIndex === testimonialsData.length - 1}
                previousDisabled={currentIndex === 0}
              />
              <StepIndicators
                numberOfItems={testimonialsData.length}
                showControls={showControls}
                currentIndex={currentIndex}
                onGoToItem={goToItem}
              />
            </div>
          </div>
        </div>
        <TestimonialSlider
          data={testimonialsData}
          containerRef={containerRef}
          onScrollIndexChange={onScrollIndexChange}
        />
      </div>
    </div>
  );
}
