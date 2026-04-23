"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 60000, easing: (t) => t };

export function BannerSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    mode: "free-snap",
    slides: { perView: "auto", spacing: 30 },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="bg-[#45270f] py-3 text-white font-bold text-sm md:text-base tracking-widest overflow-hidden">
      <div ref={sliderRef} className="keen-slider flex items-center">
        {Array.from({ length: 15 }).map((_, idx) => (
          <div
            key={idx}
            className="keen-slider__slide"
            style={{ minWidth: "max-content" }}
          >
            Rooted in Wayanad, Trusted Worldwide: Your Partner for Sustainable
            Green Trade. Contact us: +91 7558963712 | +966 559407752
          </div>
        ))}
      </div>
    </div>
  );
}
