"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type PreviewImage = {
  src: string;
  alt: string;
};

type ProjectPreviewSliderProps = {
  title: string;
  images?: PreviewImage[];
};

export default function ProjectPreviewSlider({
  title,
  images = [],
}: ProjectPreviewSliderProps) {
  const safeImages = useMemo(
    () => images.filter((item) => item.src.trim() !== ""),
    [images],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  if (safeImages.length === 0) {
    return (
      <section className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
          Preview
        </h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          This project has no preview images.
        </p>
      </section>
    );
  }

  const hasControls = safeImages.length > 1;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let ticking = false;

    const updateActiveIndex = () => {
      const slideWidth = slider.clientWidth;
      if (slideWidth <= 0) {
        ticking = false;
        return;
      }

      const nextIndex = Math.round(slider.scrollLeft / slideWidth);
      const clampedIndex = Math.max(0, Math.min(nextIndex, safeImages.length - 1));

      setActiveIndex(clampedIndex);
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveIndex);
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, [safeImages.length]);

  function scrollToSlide(index: number) {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollTo({
      left: slider.clientWidth * index,
      behavior: "smooth",
    });
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
          Preview
        </h2>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          {activeIndex + 1}/{safeImages.length}
        </span>
      </div>

      <div
        ref={sliderRef}
        className="flex h-[260px] snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x sm:h-[360px] lg:h-[420px]"
      >
        {safeImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative h-full w-full shrink-0 snap-center overflow-hidden rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/50"
          >
            <Image
              src={image.src}
              alt={image.alt || `${title} preview ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 768px"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {hasControls ? (
        <div className="mt-4 flex items-center justify-center">
          <div className="flex items-center gap-2">
            {safeImages.map((image, index) => (
              <button
                type="button"
                key={`${image.src}-${index}`}
                onClick={() => scrollToSlide(index)}
                aria-label={`Go to preview ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-zinc-900 dark:bg-zinc-100"
                    : "bg-zinc-300 dark:bg-zinc-600"
                }`}
              />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
