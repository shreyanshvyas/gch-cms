"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import map from "@/assets/map.png";
import { US, CA, DE, AE, IN, AU } from "country-flag-icons/react/3x2";


const countries = [
    {
        name: "USA",
        icon: <US className="w-full h-auto" />,
        region: "North America",
        jobs: "1200+ Active jobs",
        desktop: "left-[18%] top-[34%]",
    },
    {
        name: "Canada",
        icon: <CA className="w-full h-auto" />,        
        region: "North America",
        jobs: "540+ Active jobs",
        desktop: "left-[20%] top-[28%]",
    },
    {
        name: "Germany",
        icon: <DE className="w-full h-auto" />,
        region: "Europe",
        jobs: "420+ Active jobs",
        desktop: "left-[45%] top-[16%]",
    },
    {
        name: "UAE",
        icon: <AE className="w-full h-auto" />,
        region: "Middle East",
        jobs: "310+ Active jobs",
        desktop: "left-[52%] top-[24%]",
    },
    {
        name: "India",
        icon: <IN className="w-full h-auto" />,
        region: "South Asia",
        jobs: "850+ Active jobs",
        desktop: "left-[60%] top-[25%]",
    },
    {
        name: "Australia",
        icon: <AU className="w-full h-auto" />,
        region: "Oceania",
        jobs: "210+ Active jobs",
        desktop: "left-[74%] top-[48%]",
    },
];

export default function CareersByCountry() {
    return (
        <section className="relative overflow-hidden bg-[#f2fbfd] py-[90px] md:py-15">
            {/* Decorative Location Pins */}

            {/* TOP CONTENT */}
            <div className="relative z-10 text-center">
                <h2 className="font-heading text-[44px] leading-none font-bold tracking-[-1px] text-[#1652A1]">
                    Careers by{" "}
                    <span className="text-[#E8A126]">Country</span>
                </h2>

                <p className="mt-[18px] text-[18px] text-[#222] font-medium">
                    Find opportunities in top global destinations.
                </p>
            </div>
            {/* ================= DESKTOP ================= */}
            <div className="relative hidden md:block w-full mt-[70px]">

                {/* MAP AREA */}
                <div className="relative w-full h-[720px] overflow-visible">

                    {/* MAP */}
                    <div className="absolute inset-0 z-[1]">
                        <Image
                            src={map}
                            alt="World Map"
                            fill
                            priority
                            className="object-cover object-center"
                        />
                    </div>

                    {/* LEFT DECOR */}
                    <div className="absolute left-[2%] bottom-[12%] opacity-[0.08] z-[10] pointer-events-none">
                        <svg
                            width="90"
                            height="120"
                            viewBox="0 0 90 120"
                            fill="none"
                        >
                            <path
                                d="M45 0C20 0 0 20 0 45C0 78 45 120 45 120C45 120 90 78 90 45C90 20 70 0 45 0Z"
                                fill="#000"
                            />
                            <circle cx="45" cy="45" r="15" fill="#eef3f4" />
                        </svg>
                    </div>

                    {/* RIGHT DECOR */}
                    <div className="absolute right-[4%] top-[5%] opacity-[0.08] z-[10] pointer-events-none">
                        <svg
                            width="90"
                            height="120"
                            viewBox="0 0 90 120"
                            fill="none"
                        >
                            <path
                                d="M45 0C20 0 0 20 0 45C0 78 45 120 45 120C45 120 90 78 90 45C90 20 70 0 45 0Z"
                                fill="#000"
                            />
                            <circle cx="45" cy="45" r="15" fill="#eef3f4" />
                        </svg>
                    </div>

                    {/* DASHED PATH */}
                    <svg
                        className="absolute inset-0 w-full h-full z-[2] pointer-events-none"
                        viewBox="0 0 1920 720"
                        preserveAspectRatio="none"
                        fill="none"
                    >
                        <path
                            d="M0 180C180 40 280 80 260 240C240 380 360 420 520 320C680 220 760 240 820 340C900 480 980 560 1160 540C1340 520 1360 360 1460 340C1580 320 1660 460 1780 420C1880 390 1910 280 1920 260"
                            stroke="#6d6d6d"
                            strokeDasharray="14 14"
                            strokeWidth="1.5"
                            opacity="0.45"
                        />
                    </svg>

                    {/* COUNTRY TAGS */}
                    {countries.map((country) => (
                        <div
                            key={country.name}
                            className={`absolute z-[5] ${country.desktop}`}
                        >
                            <div className="relative">

                                {/* PIN */}
                                <div className="absolute left-1/2 top-full w-[2px] h-[18px] bg-[#d9d9d9] -translate-x-1/2"></div>

                                {/* LABEL */}
                                <div className="bg-[#E8A126] rounded-[12px] px-[10px] py-[5px] flex items-center gap-[6px] shadow-[0_4px_14px_rgba(0,0,0,0.12)]">
                                    <div className="w-[18px] overflow-hidden rounded-[2px] shrink-0">
                                        {country.icon}
                                    </div>

                                    <span className="text-white text-[15px] font-semibold leading-none">
                                        {country.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* FLOATING TEXT */}
                    <div className="absolute left-[8%] top-[28%] z-[6] bg-white rounded-[12px] shadow-[0_4px_18px_rgba(0,0,0,0.15)] px-[14px] py-[8px] text-[15px] text-[#222]">
                        Click to explore
                    </div>
                </div>

                {/* BOTTOM TEXT */}
                <div className="relative z-[20] text-center mt-[-40px]">
                    <p className="text-[20px] leading-[1.5] font-semibold text-[#111] max-w-[760px] mx-auto">
                        Discover job market trends, salary and insights requirements
                        <br />
                        for your dream destination.
                    </p>
                </div>
            </div>

            {/* ================= MOBILE ================= */}
            <div className="relative md:hidden mt-[50px]">

                {/* BACKGROUND MAP */}
                <div className="absolute inset-x-0 top-[200px] opacity-100">
                    <Image
                        src={map}
                        alt="World Map"
                        width={900}
                        height={800}
                        className="w-auto h-[50vh] object-cover"
                    />
                </div>

                {/* MOBILE CARDS */}
                <div className="relative z-10 px-[20px] space-y-[20px] flex flex-col items-center">
                    {countries.map((country) => (
                        <div
                            key={country.name}
                            className="bg-white rounded-[10px] w-max shadow-[0_4px_16px_rgba(0,0,0,0.12)] px-[14px] py-[12px] flex items-center justify-between gap-4 opacity-90"
                        >
                            <div>
                                <div className="flex items-center gap-[8px]">
                                     <div className="w-[18px] overflow-hidden rounded-[2px] shrink-0">
                                        {country.icon}
                                    </div>

                                    <h3 className="text-[16px] font-bold text-[#111]">
                                        {country.name}
                                    </h3>
                                </div>

                                <p className="mt-[4px] text-[13px] text-[#7b7b7b]">
                                    {country.region}
                                </p>

                                <p className="mt-[2px] text-[13px] text-[#7b7b7b]">
                                    {country.jobs}
                                </p>
                            </div>

                            <button className="w-[34px] h-[34px] rounded-full bg-[#E8A126] flex items-center justify-center shrink-0">
                                <ArrowRight
                                    size={16}
                                    className="text-white"
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}