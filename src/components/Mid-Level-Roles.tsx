const midLevelData = {
    title: "Mid-Level Cybersecurity Jobs",
    role: "Security Architect",
    tenure: "Tenure: 3-5 Years",

    description:
        "Mid-tier security professionals are those with greater responsibility and more independence. As a security engineer, you design and implement security solutions. You conduct vulnerability assessments and manage complex security incidents. You collaborate with developers to embed security early, configure firewalls and IDS, and manage small projects. Your skills enable independent decisions and incident handling without constant supervision.",

    sections: [
        {
            heading: "Desired Certifications",
            items: [
                "Certified Information Systems Security Professional (CISSP)",
                "Certified Information Security Manager (CISM)",
                "Offensive Security Certified Professional (OSCP)",
            ],
        },
        {
            heading: "Required Skills",
            items: [
                "Deep networking and systems knowledge",
                "Proficiency in multiple security tools",
                "Incident response and forensics",
                "Risk assessment and management",
                "Cloud security (AWS, Azure, GCP)",
                "Programming (Python, PowerShell)",
            ],
        },
        {
            heading: "Aliases",
            items: [
                "Information Security Engineer",
                "Application Security Engineer",
                "Infrastructure Security Engineer",
            ],
        },
    ],

    buttonText: "Speak to Our Experts",
    image: "/images/mid-role.jpg",
};

export default function MidLevelRoles() {
    return (
        <section className="bg-white py-20">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.1fr_1.5fr] gap-20 items-stretch">

                {/* LEFT IMAGE */}
                <div className="flex justify-start h-full">
                    <div className="rounded-2xl overflow-hidden w-[480px] h-full">
                        <img
                            src={midLevelData.image}
                            alt="Mid Level Role"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="ml-auto max-w-[640px] text-right h-full flex flex-col">

                    {/* TITLE */}
                    <div className="mb-6">
                        <h2 className="text-[28px] font-semibold text-[#0C0C0C]">
                            {midLevelData.title}
                        </h2>

                        <p className="text-[#10519E] font-semibold mt-1">
                            {midLevelData.role}
                        </p>

                        <p className="text-[12px] text-[#000000] mt-1">
                            {midLevelData.tenure}
                        </p>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-[14px] text-[#000000] leading-relaxed mb-10">
                        {midLevelData.description}
                    </p>

                    {/* TABLE + BUTTON WRAPPER*/}
                    <div className="ml-auto max-w-[600px] flex flex-col h-full">

                        {/* TABLE */}
                        <div className="grid grid-cols-3 gap-6 mt-5 flex-grow">

                            {midLevelData.sections.map((section, i) => (
                                <div
                                    key={i}
                                    className={`relative pr-6 ${i !== 2
                                            ? "after:absolute after:top-2 after:bottom-2 after:right-0 after:w-px after:bg-gray-200/50"
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
                                                <span className="mt-[6px] w-[4px] h-[4px] bg-gray-500 rounded-full"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                        </div>

                        {/* BUTTON */}
                        <div className="mt-auto flex justify-center">
                            <button className="px-6 py-2.5 bg-[#10519E] text-white text-sm rounded-full hover:opacity-90 transition">
                                {midLevelData.buttonText}
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}