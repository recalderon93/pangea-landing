"use client";
import Button from "../buttons/Button";

export default function GreatSolutionsBanner() {
  return (
    <div className="sm:12 px-8 py-10 md:px-16 lg:px-20">
      <div className="flex flex-col gap-y-16 rounded-[24px] bg-teal-400 px-9 py-6 sm:py-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
        <div>
          <Button
            className="flex-none bg-[rgba(255,255,255,.2)]"
            title="Customized Design and Development"
          />
        </div>
        <div className="flex flex-col items-end justify-between gap-30 md:flex-row">
          <h2 className="text-white-50 h3 max-w-[700px]">
            Great solution for those who want{" "}
            <span className="text-green-400">
              high quality and startup-friendly prices.
            </span>
          </h2>

          <Button variant="accent" title="GET STARTED" className="flex-none" />
        </div>
      </div>
    </div>
  );
}
