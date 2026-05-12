// ================= DATA =================

const whatIsData = {
    title1: "What is",
    titleHighlight: "Cyber Security?",
    paragraphs: [
        "Cybersecurity is the practice of protecting your computer systems, networks, programmes, and data from digital attacks, unauthorized access, and damage.",

        "To quote Stephane Nappo, “It takes 20 years to build a reputation and a few minutes of a cyber incident to ruin it.” In the digital world, small mistakes can cause massive damage.",

        "Cybersecurity protects data, privacy, and systems, enabling individuals and businesses to operate safely without disruption.",
    ],
    buttonText: "Get Free Certificate",
};

// ================= COMPONENT =================

export default function WhatIsSection() {
    return (
        <section className="bg-white py-14">

            <div className="max-w-6xl mx-auto px-6">

                {/* GRID */}
                <div className="grid md:grid-cols-[auto_1fr] gap-4 items-start">

                    {/* LEFT */}
                    <div className="max-w-[320px]">
                        <h2 className="text-[32px] font-semibold leading-[1.3] text-gray-900">
                            {whatIsData.title1}{" "}
                            <span className="text-[#10519E]">
                                {whatIsData.titleHighlight}
                            </span>
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="max-w-4xl md:-ml">
                        {whatIsData.paragraphs.map((text, i) => (
                            <p
                                key={i}
                                className="text-[14px] text-gray-600 leading-relaxed mb-3"
                            >
                                {text}
                            </p>
                        ))}
                    </div>

                </div>
                {/* BUTTON */}
                <div className="flex justify-center mt-8">
                    <button className="px-6 py-2.5 bg-[#EDA12E] text-white text-sm rounded-full hover:opacity-90 transition shadow-sm">
                        {whatIsData.buttonText}
                    </button>
                </div>

            </div>

        </section>
    );
}