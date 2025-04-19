"use client";
import Button from "../buttons/Button";
import data from "./data";
import ServiceSlider from "./ServiceSlider";
import SliderButtons from "../SliderControls/SliderButtons";
import StepIndicators from "../SliderControls/StepIndicators";
import useHorizontalSlider from "../../hooks/useHorizontalSliderReducer";

export default function ServicesSection() {
  const {
    currentIndex,
    containerRef,
    goToItem,
    goToNext,
    goToPrev,
    onScrollIndexChange,
    showControls,
  } = useHorizontalSlider({ totalItems: data.length });

  const services = data; // replace with your data

  return (
    <div className="flex flex-col gap-y-8 px-4 py-8 sm:px-6 md:px-10 lg:px-14">
      <div className="items-center justify-between py-8 sm:flex sm:flex-row sm:py-10">
        <h2 className="h3 pb-8 text-teal-400">
          High-level Talent
          <br />
          Inside Your
          <br />
          Business Budget
        </h2>
        <h3 className="h5 text-shade-400">
          Imagine what your startup could
          <br />
          achieve with access to world-class
          <br />
          talent - we make it possible!
        </h3>
      </div>
      <div className="flex items-center justify-between">
        <Button title="Let’s Work Together" />
        <SliderButtons
          color="brand"
          onGoNext={goToNext}
          onGoPrevious={goToPrev}
          showControls={showControls}
          nextDisabled={currentIndex === services.length - 1}
          previousDisabled={currentIndex === 0}
        />
      </div>
      {/* Slider */}
      <ServiceSlider
        services={services}
        containerRef={containerRef}
        onScrollIndexChange={onScrollIndexChange}
      />

      {/* Step Indicators */}
      <StepIndicators
        showControls={showControls}
        currentIndex={currentIndex}
        onGoToItem={goToItem}
        numberOfItems={services.length}
      />
    </div>
  );
}
