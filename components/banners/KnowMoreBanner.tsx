"use client";
import Button from "../buttons/Button";

export default function KnowMoreBanner() {
  return (
    <div className="sm:12 px-8 py-10 md:px-16 lg:px-20">
      <div className="flex items-center justify-between rounded-[24px] bg-teal-400 px-9 py-6 sm:py-8 md:px-12 lg:px-16">
        <p className="paragraph-1 bold text-white-50">
          Want to know more about our pricing?
        </p>
        <Button variant="accent" title="BOOK A CALL" />
      </div>
    </div>
  );
}
