// src/components/Hero.tsx
import Image, { StaticImageData } from "next/image";

export type HeroProps = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  cta?: { label: string; href?: string; icon?: React.ReactNode };
  primaryImage?: { src: StaticImageData; alt: string; width: number; height: number };
  bgColor?: string;
};

export default function CountryHero({
  eyebrow,
  title,
  paragraphs,
  cta,
  primaryImage,
  bgColor
}: HeroProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 md:py-20 py-12 mt-20">
      <div className={`relative overflow-hidden rounded-4xl ${bgColor}`}>
        <div className="grid gap-8 lg:grid-cols-5 lg:items-center lg:gap-12">
          <div className="text-white p-8 sm:p-10 lg:col-span-3">
            {eyebrow ? (
              <h3 className="mb-2 md:text-xl text-lg tracking-wide text-white/80">{eyebrow}</h3>
            ) : null}
            <h1 className="mb-6 text-3xl font-semibold leading-tight md:text-5xl">
              {title}
            </h1>
            <div className="space-y-2 md:text-xl text-lg text-white/90">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {cta ? (
              <div className="mt-8">
                <a href={cta.href ?? "#"} >
                  <button className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer md:px-6 md:py-3 px-4 py-2 md:text-xl text-lg bg-white text-gray-900 hover:bg-gray-100 ring-gray-200">
                    {cta.label}
                  </button>
                </a>
              </div>
            ) : null}
          </div>

          {primaryImage ? (
            <div className="relative md:ml-auto lg:col-span-2 flex items-center h-full">
              <div className="h-full flex items-center">
                <Image
                  src={primaryImage.src}
                  alt={primaryImage.alt}
                  width={primaryImage.width}
                  height={primaryImage.height}
                  className="h-full w-auto object-contain"
                  sizes="(min-width:1024px) 480px, 85vw"
                  priority
                />
              </div>
            </div>
          ) : null}
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
      </div>
    </section>
  );
}
