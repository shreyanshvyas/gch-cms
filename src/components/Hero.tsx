"use client";

import Image from "next/image";
import girl from "@/assets/girl.png"


export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* BACKGROUND TEXT */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <span className="absolute top-[-20px] left-[-30px] text-[220px] font-bold text-[#00000008] leading-none">
          CYBER
        </span>

      </div>

      {/* MAIN */}
      <div className="relative max-w-[1200px] mx-auto px-[32px] pt-[110px] pb-[120px] flex items-center justify-between">

        {/* LEFT */}
        <div className="w-[520px] ">
          <h1 className="text-[50px] leading-[1.15] text-[#0f172a] font-bold tracking-[-0.3px] font-heading">
            Explore{" "}
            <span className="text-[#f59e0b] ">Global</span> Career
            <br />
            Paths in{" "}
            <span className="text-[#2563eb] ">Emerging</span>
            <br />
            Domains
          </h1>

          <button className="mt-[28px] bg-[#1d4ed8] text-white text-[14px] px-[20px] py-[10px] rounded-[8px] font-medium shadow-sm hover:bg-[#1e40af] transition">
            Get in Touch
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative w-[520px] h-[460px]">

          {/* BACK SHAPE */}
<div className="absolute right-[10px] bottom-10 z-10">
  
  {/* OUTER CONTAINER (rounded top) */}
  <div className="relative w-[340px] h-[460px] bg-[#F6F6F4] rounded-t-full rounded-b-[40px] overflow-hidden flex items-end justify-center">
    
    {/* IMAGE */}
    <Image
      src={girl}
      alt="student"
      width={300}
      height={420}
      className="object-contain"
      priority
    />

  </div>

</div>

          {/* TOP CARD */}
          <div className="absolute top-[0px] right-[120px] bg-white rounded-[12px] px-[14px] py-[10px] w-[240px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] z-20">
            <p className="text-[12px] text-gray-600 leading-[1.4]">
              “Discover where your skills meet the future of global work.”
            </p>
          </div>


          {/* BOTTOM CARD */}
          <div className="absolute bottom-[20px] right-[0px] bg-[#1e293b] text-white rounded-[14px] px-[16px] py-[12px] w-[260px] shadow-[0_15px_35px_rgba(0,0,0,0.25)] z-20">
            <p className="text-[11px] leading-[1.4]">
              Unlock pathways driven by change, technology, and creativity.
            </p>

            <div className="mt-[6px] flex items-center gap-[6px] text-[11px] font-semibold text-[#3b82f6]">
              ACTIVATE YOUR FUTURE
              <span className="w-[5px] h-[5px] bg-green-400 rounded-full"></span>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none select-none">
        <span className="absolute -bottom-[40px] left-[80px] text-[220px] font-bold text-[#0000000d] leading-none">
          SECURITY
        </span>
      </div>
    </section>
  );
}