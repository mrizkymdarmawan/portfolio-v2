"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

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

  if (safeImages.length === 0) {
    return (
      <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
          Preview
        </h2>
        <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
          This project has no preview images.
        </p>
      </section>
    );
  }

  const currentImage = safeImages[activeIndex];
  const hasControls = safeImages.length > 1;

  function goPrev() {
    setActiveIndex(
      (prev) => (prev - 1 + safeImages.length) % safeImages.length,
    );
  }

  function goNext() {
    setActiveIndex((prev) => (prev + 1) % safeImages.length);
  }

  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
          Preview
        </h2>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          {activeIndex + 1}/{safeImages.length}
        </span>
      </div>

      <div className="relative mt-3 h-[260px] rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 sm:h-[360px] lg:h-[420px]">
        <Image
          src={currentImage.src}
          alt={currentImage.alt || `${title} preview`}
          fill
          className="object-contain p-2"
          sizes="(max-width: 640px) 100vw, 768px"
        />
      </div>

      {hasControls ? (
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Previous
          </button>
          <div className="flex items-center gap-2">
            {safeImages.map((image, index) => (
              <button
                type="button"
                key={`${image.src}-${index}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to preview ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full ${
                  index === activeIndex
                    ? "bg-zinc-900 dark:bg-zinc-100"
                    : "bg-zinc-300 dark:bg-zinc-600"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Next
          </button>
        </div>
      ) : null}
    </section>
  );
}
