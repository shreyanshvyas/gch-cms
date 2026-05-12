"use client";

import { useState } from "react";

const landscapeData = {
    title: "Cybersecurity Landscape",
    description:
        "The cybersecurity landscape is rapidly evolving, driven by new threats, advanced technologies and increasingly digital adoption. Organizations must stay vigilant, adopt proactive measures, and continuously update defences to protect critical assets.",

    items: [
        {
            title: "AI and machine learning",
            desc: "Artificial intelligence is making cybersecurity both exciting and terrifying. On the defence side, AI-powered tools can analyze massive amounts of data in seconds, spot patterns humans would miss, predict attacks before they happen, and automate responses to common threats. Machine learning algorithms continue to get smarter as time goes by, learning from each attack they encounter. The problem is that attackers are also utilizing AI. They create malware that adapts to security measures. They send large-scale, convincing phishing emails and discover vulnerabilities faster than ever before. And that means an AI arms race, where both sides are continuously upgrading their capabilities. For cybersecurity professionals, it is no longer optional to understand how AI works; rather, it's becoming a core skill.",
            icon: "⚙️",
        },
        {
            title: "Cloud security challenges and solutions",
            desc: "Although the cloud has completely changed how companies run, it has also brought about new security challenges. When data spreads across multiple clouds, is accessed globally and constantly moving, traditional security methods cannot keep up with it. It requires a new way of thinking around identity management, data encryption, access controls, and shared responsibility models. An organization also needs to protect not just the data but also the configurations, APIs, and services in use. The good news is that cloud providers invest heavily in security, while new solutions like cloud-native security platforms help organizations tackle these challenges.",
            icon: "☁️",
        },
        {
            title: "Supply chain security",
            desc: "Do you recall the time thousands of companies using a small software company's services were compromised due to a hack? That's supply chain security in action, or rather, the absence of it. Modern businesses rely on complex networks of vendors, contractors, and third-party services, each of which may represent a potential vulnerability. Securing the supply chain requires thorough vendor reviews, controlling third-party access, enforcing strong supplier security practices and having breach response plans ready. This area is becoming more important as attacks on supply chains are not only more frequent but also more advanced.",
            icon: "🔗",
        },
    ],
};

export default function CyberSecurityLandscape() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="bg-white py-15">
            <div className="max-w-6xl mx-auto px-6">

                {/* TOP BLOCK */}
                <div className="border-l-4 border-[#137FEC] pl-6">

                    <h2 className="text-[28px] font-semibold text-[#10519E] mb-4">
                        {landscapeData.title}
                    </h2>

                    <p className="text-[14px] text-gray-600 leading-relaxed">
                        {landscapeData.description}
                    </p>

                    {/* BUTTON */}
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="mt-4 text-[#10519E] text-sm font-medium hover:underline"
                    >
                        {expanded ? "Read Less" : "Read More"}
                    </button>

                </div>

                {/* EXPANDABLE CONTENT */}
                {expanded && (
                    <>
                        {/* DIVIDER */}
                        <div className="mt-10 border-t border-gray-200"></div>

                        {/* ITEMS */}
                        <div className="mt-10 space-y-10">

                            {landscapeData.items.map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">

                                    {/* ICON */}
                                    <div className="w-10 h-10 rounded-lg bg-[#FFF3E0] flex items-center justify-center text-lg">
                                        {item.icon}
                                    </div>

                                    {/* TEXT */}
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </>
                )}

            </div>
        </section>
    );
}