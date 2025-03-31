"use client";
import Button from "../buttons/Button";

export default function UnlockPotentialBanner() {
  return (
    <div className="sm:12 px-8 py-20 md:px-16 lg:px-20">
      <div className="flex flex-col items-center justify-center gap-y-8 rounded-[24px] bg-teal-400 px-10 py-10 sm:py-16 md:py-24 lg:py-30">
        <h2 className="text-white-50 h4 text-center">
          Unlock Your StartUp&apos;s Potential
        </h2>
        <p className="text-white-50 paragraph-2 text-center">
          Don&apos;t let technology get in the way of your growth.
          <br />
          Our team will take care of developing what your startup needs.
        </p>
        <Button title="Get Started" variant="accent" />
      </div>
    </div>
  );
}
