"use client";
import cyber from "@/assets/cyber.png"
import machine from "@/assets/machine.png"
import cloud from "@/assets/cloud.png"
import management from "@/assets/management.png"
import data from "@/assets/data.png"
import software from "@/assets/software.png"


import Image from "next/image";

const domains = [
  {
    title: "Cybersecurity",
    desc: "Protect systems, networks, and programs from digital attacks",
    image: cyber,
    active: true,
  },
  {
    title: "AI & Machine Learning",
    desc: "Build intelligent systems that learn and adapt.",
    image: machine,
    active: false,
  },
  {
    title: "Cloud Computing",
    desc: "Master the infrastructure that powers the modern web",
    image: cloud,
    active: false,
  },
  {
    title: "Product Management",
    desc: "Lead the vision and strategy of successful products.",
    image: management,
    active: false,
  },
  {
    title: "Data Science",
    desc: "Extract insights from complex data sets.",
    image: data,
    active: false,
  },
  {
    title: "Software Engineering",
    desc: "Design and build software applications.",
    image: software,
    active: false,
  },
];

export default function DomainsSection() {
  return (
    <section className="bg-[#f4f6f8] py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[32px]">
        
        {/* HEADER */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[32px] font-semibold text-[#111827]">
            Explore Emerging Domains
          </h2>
          <p className="mt-[10px] text-[16px] text-gray-600">
            Select a domain to view detailed career paths, jobs, and insights.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-[28px]">
          {domains.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[14px] shadow-[0_6px_18px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[190px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* COMING SOON OVERLAY */}
                {!item.active && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                    <span className="bg-[#1d4ed8] text-white text-[14px] px-[20px] py-[8px] rounded-full font-medium shadow">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-[18px]">
                <div className="flex items-start justify-between">
                  <h3 className="text-[18px] font-semibold text-[#111827]">
                    {item.title}
                  </h3>

                  {/* ICON PLACEHOLDER */}
                  <div className="w-[20px] h-[20px] border border-gray-300 rounded-full" />
                </div>

                <p className="mt-[8px] text-[14px] text-gray-600 leading-[1.5]">
                  {item.desc}
                </p>

                {/* ACTIVE LINK */}
                {item.active && (
                  <button className="mt-[12px] text-[#1d4ed8] text-[14px] font-medium flex items-center gap-[6px]">
                    Explore Program →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-[60px] flex justify-center">
          <button className="bg-[#f59e0b] text-white px-[28px] py-[12px] rounded-full text-[14px] font-medium shadow hover:opacity-90 transition">
            Get Free Certificate
          </button>
        </div>
      </div>
    </section>
  );
}