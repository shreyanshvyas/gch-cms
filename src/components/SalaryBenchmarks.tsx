// src/components/SalaryBenchmarks.tsx
import React from "react";
import { cn } from "./cn";

export type BenchmarkData = {
    years: string;
    title: string;
    salary: string;
    description: string;
};

export type SalaryBenchmarksProps = {
    heading: string;
    subheading?: string;
    items: BenchmarkData[]; // Expect 4 items in order: Entry, Mid, Senior, Executive
};

export default function SalaryBenchmarks({
    heading,
    subheading,
    items,
}: SalaryBenchmarksProps) {
    return (
        <section className="relative mx-auto max-w-7xl px-6 py-12 sm:py-20">
            {/* Header */}
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                    {heading}
                </h2>
                {subheading ? (
                    <p className="mx-auto max-w-3xl text-base leading-7 text-gray-600">
                        {subheading}
                    </p>
                ) : null}
            </div>

            {/* Chart overlay */}
            <div className="relative">
                <svg
                    className="pointer-events-none absolute top-0 inset-0 z-20 hidden h-1/2 w-full md:block"
                    viewBox="0 0 1000 200"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M 125 150 C 250 135, 250 135, 375 120 C 500 100, 500 100, 625 80 C 750 65, 750 65, 875 50"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        vectorEffect="non-scaling-stroke"
                    />
                    <circle cx="125" cy="150" r="6" fill="#3B82F6" />
                    <circle cx="375" cy="120" r="6" fill="#3B82F6" />
                    <circle cx="625" cy="80" r="6" fill="#3B82F6" />
                    <circle cx="875" cy="50" r="6" fill="#3B82F6" />
                </svg>


                {/* Cards */}
                <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {items.map((item, idx) => (
                        <BenchmarkCard
                            key={idx}
                            {...item}
                            highlighted={idx === 3}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function BenchmarkCard({
    years,
    title,
    salary,
    description,
    highlighted,
}: BenchmarkData & { highlighted?: boolean }) {
    return (
        <article
            className={cn(
                "rounded-2xl p-6 pt-20 md:pt-60 min-h-[320px]",
                "bg-gradient-to-b",
                highlighted ? "from-blue-100 to-white/50" : "from-sky-50 to-white"
            )}
        >
            <span className="mb-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                {years}
            </span>

            <h3 className="text-xl font-bold text-gray-800">{title}</h3>

            <p className="mt-2 text-lg font-semibold text-gray-900">{salary}</p>

            <p className="mt-3 text-sm text-gray-500">{description}</p>
        </article>
    );
}
