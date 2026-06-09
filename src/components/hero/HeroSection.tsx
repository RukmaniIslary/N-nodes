"use client";

import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import Logo3D from "./Logo3D";

export default function HeroSection() {
  return (
    <section
      className="
      min-h-screen
      relative
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      <div
        className="
        absolute
        inset-0
        opacity-70
        "
      >
        <Logo3D />
      </div>

      <div className="relative z-20 text-center">
        <HeroContent />
        <HeroButtons />
      </div>
    </section>
  );
}