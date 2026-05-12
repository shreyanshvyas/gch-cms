"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is Lorem Ipsum?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        question: "Why do we use it?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        question: "Where does it come from?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        question: "Is it safe to use?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        question: "Can it be customized?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

export function FAQSection() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <section className="bg-[#F8F8F8] py-24 lg:py-28">
            <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-start lg:justify-between lg:px-12">

                {/* LEFT */}
                <div className="lg:w-[32%]">
                    <h2 className="font-heading text-5xl font-bold leading-[1.2] tracking-tight">
                        <span className="text-[#1652A1]">
                            Frequently Asked
                        </span>

                        <br />

                        <span className="text-[#E59A21]">
                            Questions
                        </span>
                    </h2>
                </div>

                {/* RIGHT */}
                <div className="lg:w-[48rem]">
                    {faqs.map((item, index) => {
                        const isOpen = active === index;

                        return (
                            <div
                                key={index}
                                className="border-b border-[#B9B9B9]"
                            >
                                <button
                                    onClick={() =>
                                        setActive(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center justify-between py-6 text-left"
                                >
                                    <span className="text-2xl font-medium text-black">
                                        {item.question}
                                    </span>

                                    <ChevronDown
                                        className={`h-5 w-5 text-black transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen
                                            ? "max-h-40 pb-6"
                                            : "max-h-0"
                                        }`}
                                >
                                    <p className="max-w-3xl text-lg leading-9 text-[#2F2F2F]">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}

