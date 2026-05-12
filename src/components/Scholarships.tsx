"use client";

import Image, { StaticImageData } from "next/image";
import scholarship from "@/assets/scholarship.png"

interface ScholarshipSectionProps {
  className?: string;

  data?: {
    image: string | StaticImageData;
    title: string;
    highlightedText?: string;
    paragraphs: string[];
    buttonText: string;
  };
}

export default function ScholarshipSection({
  className = "",

  data = {
    image: scholarship,

    title:
      "Scholarships Available for Cybersecurity Career in USA",

    highlightedText: "Cybersecurity",

    paragraphs: [
      "To support international students in pursuing a career in cybersecurity, several scholarship opportunities are made available through education funding and certification support. CyberSeek, (ISC)², and the SANS Institute are among the organizations that offer merit-based scholarships ranging from $1,000 to $10,000.",

      "Through recognized degree programmes, federal initiatives like CyberCorps and NSF scholarships offer complete tuition coverage with service commitments, assisting recent graduates in transitioning into cybersecurity analyst careers in the United States.",
    ],

    buttonText: "Get Free Consultation",
  },
}: ScholarshipSectionProps) {
  const titleParts = data.title.split(
    data.highlightedText || ""
  );

  return (
    <section
      className={`bg-[#F8F8F8] py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-10">
        
        {/* IMAGE */}
        <div className="mx-auto w-full max-w-[28rem] shrink-0 lg:mx-0">
          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src={data.image}
              alt={data.title}
              width={700}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          
          {/* TITLE */}
          <h2 className="max-w-4xl font-heading text-4xl font-bold leading-[1.25] tracking-tight text-[#111827] lg:text-5xl">
            {titleParts[0]}

            {data.highlightedText && (
              <span className="text-[#1652A1]">
                {data.highlightedText}
              </span>
            )}

            {titleParts[1]}
          </h2>

          {/* UNDERLINE */}
          <div className="mt-5 h-[0.3rem] w-24 rounded-full bg-[#1652A1]" />

          {/* PARAGRAPHS */}
          <div className="mt-8 space-y-10">
            {data.paragraphs.map(
              (paragraph, index) => (
                <p
                  key={index}
                  className="max-w-5xl text-xl leading-[2] text-[#52627A]"
                >
                  {paragraph}
                </p>
              )
            )}
          </div>

          {/* BUTTON */}
          <div className="mt-16 flex justify-center lg:justify-start lg:pl-48">
            <button
              className="
                rounded-full
                bg-[#1652A1]
                px-12
                py-4
                text-xl
                font-semibold
                text-white
                shadow-[0_0.5rem_1.2rem_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0.8rem_1.8rem_rgba(0,0,0,0.24)]
              "
            >
              {data.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}