const advancedData = {
    title: "Advanced-Level Cyber Security Roles",
    role: "Chief Information Security Officer",
    experience: "Experience Level: 10+ years",

    description:
        "Moving on to the advanced level, the responsibility is not just about securing systems; it's about establishing a comprehensive security strategy for the entire organization. As a CISO or security architect, you work closely with executive leadership. You align initiatives with business goals. You manage multi-million dollar budgets. You build and lead teams and make decisions that impact the entire organization. You prevent incidents, handle crises, combining technical business and leadership skills.",

    sections: [
        {
            heading: "Desired Certifications",
            items: [
                "CISSP",
                "Certified Information Security Manager (CISM)",
                "GIAC Security Leadership (GSLC)",
                "Certificate of Cloud Security Knowledge (CCSK)",
            ],
        },
        {
            heading: "Required Skills",
            items: [
                "Strategic planning and leadership",
                "Enterprise security architecture",
                "Risk management frameworks",
                "Budget management and ROI analysis",
                "Compliance and regulatory knowledge",
                "Vendor and stakeholder management",
                "Crisis management and communication",
            ],
        },
        {
            heading: "Aliases",
            items: [
                "Security Architect",
                "Director of Information Security",
                "VP of Security Operations",
            ],
        },
    ],

    buttonText: "Speak to Our Experts",
    image: "/images/advanced-role.jpg",
};

export default function AdvancedLevelRoles() {
    return (
        <section className="bg-white py-20">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.4fr_1fr] gap-16 items-stretch">

                {/* LEFT CONTENT */}
                <div className="max-w-[720px]">

                    {/* TITLE BLOCK */}
                    <div className="mb-4">
                        <h2 className="text-[28px] font-semibold text-[#0C0C0C]">
                            {advancedData.title}
                        </h2>

                        <p className="text-[#10519E] font-semibold mt-1">
                            {advancedData.role}
                        </p>

                        <p className="text-[12px] text-[#000000] mt-1">
                            {advancedData.experience}
                        </p>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-[14px] text-[#000000] leading-relaxed mb-8">
                        {advancedData.description}
                    </p>

                    {/* TABLE + BUTTON WRAPPER */}
                    <div className="max-w-[720px]">

                        {/* TABLE */}
                        <div className="grid grid-cols-3 gap-6">

                            {advancedData.sections.map((section, i) => (
                                <div
                                    key={i}
                                    className={`relative pr-6 ${i !== 2
                                            ? "after:absolute after:top-0 after:right-0 after:h-full after:w-px after:bg-gray-200"
                                            : ""
                                        }`}
                                >
                                    <h4 className="text-[14px] font-semibold text-[#10519E] mb-3">
                                        {section.heading}
                                    </h4>

                                    <ul className="space-y-2">
                                        {section.items.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="text-[13px] text-[#000000] flex gap-2"
                                            >
                                                <span className="mt-[6px] w-[4px] h-[4px] bg-gray-600 rounded-full"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                        </div>

                        {/* BUTTON */}
                        <div className="mt-10 mr-5 flex justify-center">
                            <button className="px-6 py-2.5 bg-[#10519E] text-white text-sm rounded-full hover:opacity-90 transition">
                                {advancedData.buttonText}
                            </button>
                        </div>

                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-end h-full">
                    <div className="rounded-2xl overflow-hidden w-[420px] h-full">
                        <img
                            src={advancedData.image}
                            alt="Advanced Role"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>

        </section>
    );
}