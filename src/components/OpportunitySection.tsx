// ================= DATA =================

const opportunityData = {
    title: "Opportunities in Cyber Security",
    description:
        "Cybersecurity is one of the strongest and safest career paths globally. The need to safeguard data, systems, and networks grows every year. This demand increases annually as digital use expands across nations, industries, and individuals. By 2026, cybersecurity will offer wide opportunities worldwide. It will deliver steady growth, easy career mobility and long-term benefits for professionals.",

    stats: [
        {
            value: "4+ million",
            label: "opportunities available worldwide",
        },
        {
            value: "15–20%",
            label: "yearly growth in jobs globally",
        },
        {
            value: "Every industry",
            label: "needs cybersecurity – IT, finance, healthcare, retail, gov, education",
        },
        {
            value: "High demand across 50+ Countries",
            label: "including the US, Canada, UK, Germany, India, Australia, Singapore, and the Middle East",
        },
    ],

    sectors: [
        "IT support",
        "Networking",
        "Software testing",
        "Data analytics",
        "Cloud and DevOps",
        "Even non-tech backgrounds with training",
    ],

    reasons: [
        "Many entry- and mid-level roles",
        "Skill-based hiring, not only degrees",
        "Certifications and practical skills matter more than past titles",
        "Clear learning paths and role progression",
    ],
};

// ================= COMPONENT =================

export default function OpportunitySection() {
    return (
        <section className="bg-white py-20">

            <div className="max-w-6xl mx-auto px-6 lg:px-0 space-y-12 rounded-3xl">

                {/* MAIN BLUE BLOCK */}
                <div className="bg-[#1F5596] rounded-2xl px-10 py-10">

                    {/* TITLE */}
                    <h2 className="text-[24px] font-semibold text-white mb-3">
                        {opportunityData.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-[13px] text-blue-100 leading-relaxed max-w-4xl">
                        {opportunityData.description}
                    </p>

                    {/* STATS CARD */}
                    <div className="mt-6 bg-[#2A62A8] rounded-xl px-6 py-5">

                        <p className="text-[13px] text-[#FFFFFF ] mb-4 flex items-center gap-2">
                            🌐 Global Cybersecurity Opportunities at a Glance:
                        </p>

                        <div className="grid md:grid-cols-4 gap-6">

                            {opportunityData.stats.map((item, i) => (
                                <div key={i}>
                                    <h3 className="text-white text-[20px] font-semibold">
                                        {item.value}
                                    </h3>
                                    <p className="text-[12px] text-blue-200 leading-snug mt-1">
                                        {item.label}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* BOTTOM SECTION */}
                    <div className="grid md:grid-cols-2 gap-12 mt-8">

                        {/* LEFT */}
                        <div>
                            <p className="text-[11px] tracking-widest text-blue-200 uppercase mb-3">
                                Popular Sectors
                            </p>

                            <p className="text-[13px] text-blue-100 mb-4 leading-relaxed">
                                Cybersecurity suits all industries and is one of the easiest tech fields to enter. Some of the popular sectors are mentioned below:
                            </p>

                            <div className="space-y-2">
                                {opportunityData.sectors.map((item, i) => (
                                    <div key={i} className="flex items-start gap-2 text-[13px] text-blue-100">
                                        <span className="mt-[3px]">✔</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div>
                            <p className="text-[11px] tracking-widest text-blue-200 uppercase mb-3">
                                Why is a career change easier?
                            </p>

                            <div className="space-y-3">
                                {opportunityData.reasons.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-[13px] text-blue-100">
                                        <span className="mt-[3px]">⚡</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}