"use client";

import {
  BriefcaseBusiness,
  BadgeCheck,
  Star,
} from "lucide-react";

const features = [
  {
    icon: BriefcaseBusiness,
    title: "Plan Your Future",
    description:
      "Get a roadmap from education to employment",
  },
  {
    icon: BadgeCheck,
    title: "Identify Skills",
    description:
      "Understand the exact skills required for your dream role",
  },
  {
    icon: Star,
    title: "Career Outcomes",
    description:
      "See real - world job roles and salary expectations",
  },
];

export default function SuccessSection() {
  return (
    <section className="bg-[#1652A1] py-[70px] md:py-15">
      
      {/* CONTAINER */}
      <div className="max-w-[1180px] mx-auto px-[20px]">
        
        {/* HEADING */}
        <h2 className="text-center text-white font-heading text-[30px] md:text-[34px] font-bold tracking-[-0.5px]">
          How Global Career Hub Helps You Succeed
        </h2>

        {/* CARDS */}
        <div className="mt-[55px] grid grid-cols-1 md:grid-cols-3 gap-[34px]">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-[#f7f7f7]
                  rounded-[12px]
                  shadow-[0_6px_18px_rgba(0,0,0,0.18)]
                  px-[28px]
                  py-[34px]
                  flex
                  flex-col
                  items-center
                  text-center
                  min-h-[248px]
                "
              >
                {/* ICON CIRCLE */}
                <div className="w-[52px] h-[52px] rounded-full bg-[#B9DBF7] flex items-center justify-center">
                  <Icon
                    size={26}
                    strokeWidth={2}
                    className="text-[#1652A1]"
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-[28px] text-[20px] font-bold text-black leading-none">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-[22px] text-[17px] leading-[1.35] text-[#7A7A7A] max-w-[280px] font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}