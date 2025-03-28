"use client";
import Image from "next/image";
import heroBg from "@/public/hero-bg.png";
import heroBgMobile from "@/public/hero-bg-mobile.png";
import TextInputWithSubmit from "../TextInput/TextInputWithSubmit";

export default function HeroSection() {
  return (
    <div className="relative h-screen min-h-[540px] w-screen md:min-h-[680px]">
      <div className="absolute inset-0 z-0 h-[95%] w-full overflow-hidden rounded-b-[20px] bg-teal-400 md:rounded-b-[40px]">
        <Image
          src={heroBg}
          alt=""
          fill
          className="hidden object-cover md:block"
          priority
        />
        <Image
          fill
          src={heroBgMobile}
          alt=""
          className="object-cover md:hidden"
          priority
        />
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-16 pt-16 md:gap-14 lg:pt-20">
        <h1 className="w-[85%] text-center text-white lg:max-w-[800px]">
          Accelerate the <br className="hidden sm:block" />
          <span className="text-green-300">Growth</span> of Your Startup
        </h1>
        <p
          className="text-white-50 paragraph-1 w-[70%] text-center lg:max-w-[580px]"
          data-testid="hero-description">
          Need a reliable tech partner? ... We develop the digital tools
          essential for accelerating your growth and maximizing your efficiency.
        </p>
        <TextInputWithSubmit
          buttonTitle="GO"
          color="accent"
          placeholder="Your Email"
        />
      </div>
    </div>
  );
}
