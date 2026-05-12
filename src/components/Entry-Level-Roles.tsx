// ================= DATA =================

const entryData = {
    title: "Entry Level Roles",
    description:
        "The Junior Cybersecurity Analyst position puts you in the spotlight and makes you the ears and eyes of the security team. Your daily work includes reviewing security dashboard logs. Your investigation reported incidents and prepared incident report. You also learn from senior, more experienced colleagues. You assist threat analysis, support security posture, and make a career start.",

    sections: [
        {
            heading: "Desired Certifications",
            items: [
                "CompTIA Security +",
                "Certified Ethical Hacker(CEH)",
                "GIAC Security Essentials(GSEC)",
            ],
        },
        {
            heading: "Required Skills",
            items: [
                "Understanding of networking fundamentals",
                "Knowledge of operating systems (Windows, Linux)",
                "Basic scripting abilities",
                "Critical thinking and problem-solving",
                "Strong communication skills",
                "Familiarity with SIEM tools",
            ],
        },
        {
            heading: "Aliases",
            items: [
                "SOC Analyst Level 1",
                "Security Operations Analyst",
                "Information Security Analyst",
            ],
        },
    ],

    buttonText: "Speak to Our Experts",
    image: "/images/entry-role.jpg", 
};

// ================= SMALL COMPONENT =================

function InfoColumn({ data }: { data: any }) {
    return (
        <div className="pr-6">
            <h4 className="text-[14px] font-semibold text-[#10519E] mb-3">
                {data.heading}
            </h4>

            <ul className="space-y-2">
                {data.items.map((item: string, i: number) => (
                    <li key={i} className="text-[13px] text-gray-700 flex gap-2">
                        <span className="mt-[6px] w-[4px] h-[4px] bg-gray-600 rounded-full"></span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}



// ================= MAIN COMPONENT =================

export default function EntryLevelRoles() {
    return (
        <section className="bg-white py-20">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.5fr_1fr] gap-16 items-stretch">

                {/* LEFT */}
                <div>

                    {/* TITLE */}
                    <h2 className="text-[28px] font-semibold text-[#0C0C0C] mb-4">
                        {entryData.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-[14px] text-[#000000] leading-relaxed mb-6 max-w-2xl">
                        {entryData.description}
                    </p>

                    {/* TOP BORDER*/}
                    <div className="mt-10">

                        {/* 3 COLUMN INFO */}
                        <div className="grid grid-cols-3 gap-6">

                            {entryData.sections.map((section, i) => (
                                <div
                                    key={i}
                                    className={`relative ${i !== 2
                                        ? "after:absolute after:top-0 after:right-0 after:h-full after:w-px after:bg-gray-200 pr-6"
                                        : ""
                                        }`}
                                >
                                    <InfoColumn data={section} />
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* BUTTON */}
                    <div className="mt-10 flex justify-center">
                        <button className="px-6 py-2.5 bg-[#10519E] text-white text-sm rounded-full hover:opacity-90 transition">
                            {entryData.buttonText}
                        </button>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-end h-full">
                    <div className="rounded-2xl overflow-hidden w-[420px] h-full">
                        <img
                            src={entryData.image}
                            alt="Entry Role"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>

        </section>
    );
}