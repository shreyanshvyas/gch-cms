"use client";
import { useRef } from "react";

const threatsData = [
    {
        title: "Malware",
        desc: `"Malware" is short for "malicious software”, and it's essentially any program designed to harm your computer or steal your information.`,
        backDesc: "It includes viruses, trojans, spyware and worms spreading across networks. Once malware infects your system, it can delete files, slow down your computer, steal sensitive data, or even give hackers complete control of your device.",
        icon: "🐞",
        color: "bg-[#FF5656]"
    },
    {
        title: "Phishing",
        desc: "Phishing attacks are like digital con games. Attackers send emails, texts, or messages that look like they're from someone you trust—your bank, your boss, or even a friend.",
        backDesc: "They create urgency to trick you into clicking links ('Your account will be locked!') or sharing passwords and card data. These scams have become incredibly sophisticated; that's why phishing remains one of the most successful attack methods today.",
        icon: "🎣",
        color: "bg-[#5D7BFF]",
    },
    {
        title: "Ransomware",
        desc: "Imagine waking up one day to find your phone  encrypted and inaccessible, with a message demanding thousands of rupees  to restore access.",
        backDesc: "That's ransomware in action. This type of malware locks up your data and holds it hostage until you pay a ransom, usually in cryptocurrency. Even worse, paying the ransom doesn't guarantee you'll get your files back. Regular backups and strong security measures are your best defence.",
        icon: "🔒",
        color: "bg-[#E9AA37]",
    },
    {
        title: "DoS & DDoS",
        desc: "Think of a DDoS attack like a massive crowd blocking the entrance to a store; legitimate customers can't get in.",
        backDesc: "In digital terms, it overwhelms a website or network with so much traffic that it crashes, making it unavailable to legitimate users. These attacks don't steal data, but they can be just as damaging. They use multiple devices to flood a target with traffic, causing a big service interruption or sometimes a complete shutdown.",
        icon: "⚡",
        color: "bg-[#CC7AFF]",
    },
    {
        title: 'Network Security',
        desc: "Network security involves protecting the integrity, confidentiality, and availability of computer networks and the data transmitted over them.",
        backDesc: "This includes securing routers, switches, firewalls, and wireless access points to prevent unauthorized access, monitor traffic for suspicious activity, and block malicious content before it reaches your devices. Strong network security uses multiple layers of defence. Even if an attacker breaches one layer, they face more barriers before reaching sensitive data.",
        icon: "🌐",
        color: "bg-[#4E80C1]",
    },
    {
        title: 'Infrastructure Security',
        desc: "It mainly focuses on protecting an organization’s physical and digital infrastructure.",
        backDesc: "This includes data centers, servers, networks and the software that runs on them. It also includes safeguarding power and cooling infrastructure, network cables, and backup power. Poor infrastructure may result in an organization’s servers being physically accessed by unauthorized server access, power loss and exploitable network vulnerabilities. It serves as a backbone for every security within an organization.",
        icon: "🏗️",
        color: "bg-[#2B2C8D]",
    },
    {
        title: 'Insider Threats',
        desc: "Not all threats come from outside; sometimes the danger is already inside your organization.",
        backDesc: "Insider threats involve employees or contractors who, either intentionally or accidentally, compromise security and misuse their access to steal data. This could be a disgruntled employee stealing company secrets or someone who accidentally downloads malware by clicking a bad link.",
        icon: "👤",
        color: "bg-[#E9AA37]",
    },
    {
        title: 'Business Email Compromise',
        desc: "Business Email Compromise (BEC) is a sophisticated scam where attackers hijack or impersonate a company executive's email account.",
        backDesc: "They then send urgent requests to employees, usually asking them to transfer money or share confidential information. These attacks are successful because they exploit trust and authority within organizations. When an email seems to come from the CEO and asks for an urgent wire transfer, many employers act without questioning it. That immediate trust is exactly what the attacker relies on",
        icon: "📧",
        color: "bg-[#4782C2]",
    },
    {
        title: 'APTs',
        desc: "Advanced Persistent Threats are the elite forces of the cyber world.",
        backDesc: "APTs are long-term, targeted attacks; hackers quietly infiltrate systems and stay hidden to steal data over time. In this case, the attackers gain unauthorized access to a network and remain undetected for an extended period of time. Persistent threats involve attackers using multiple tactics and playing long term.",
        icon: "🌐",
        color: "bg-[#46BB4E]",
    },
    {
        title: 'Social Engineering',
        desc: "Social engineering is a manipulation technique that exploits human psychology to gain unauthorized access to systems or information.",
        backDesc: "It is an art of manipulating people into breaking certain security procedures. This might involve pretending to be someone else, building trust over time and finally making their move to deceive others. The weakness in this case is not technology; it's our human nature.",
        icon: "👥",
        color: "bg-[#DE7C04]",
    },
    {
        title: 'Cloud Security',
        desc: "As more businesses move their data and applications to the cloud, cloud security is becoming a very critical concern.",
        backDesc: "Cloud security involves safeguarding data stored in cloud services such as AWS, Google Cloud, or Microsoft Azure from unauthorized access, data breaches, and service disruptions. Cloud providers offer built-in security features. Organizations must still take responsibility for the correct configuration and continuous monitoring of their cloud environments.",
        icon: "☁️",
        color: "bg-[#44A9E4]",
    },
    {
        title: 'IoT Security',
        desc: "Smart fridges, wearable health monitors, home security cameras and voice assistants are all examples of IoT.",
        backDesc: "They are everyday devices connected to the internet. IoT security is especially challenging. Many devices are built with minimal security and weak default passwords. In many cases, security updates cannot be installed. It's like having dozens of unlocked doors in your home.",
        icon: "🌐",
        color: "bg-[#4667BB]",
    }
];

import { useState } from "react";

function ThreatCard({ item }: { item: any }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="min-w-[260px] max-w-[280px] h-[240px] [perspective:1000px] cursor-pointer"
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""
                    }`}
            >
                {/* FRONT */}
                <div className="absolute inset-0 bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between [backface-visibility:hidden]">

                    <div>
                        <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-red-100 text-red-500 mb-4`}>
                            {item.icon}
                        </div>

                        <h3 className="text-[1.25rem] font-semibold text-gray-900 mb-2">
                            {item.title}
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                            {item.desc}
                        </p>
                    </div>

                </div>

                {/* BACK */}
                <div
                    className={`absolute inset-0 ${item.color} text-white p-5 rounded-2xl shadow-md flex flex-col justify-start [transform:rotateY(180deg)] [backface-visibility:hidden]`}
                >
                    <p className="text-[12.5px] leading-[1.45] break-words">
                        {item.backDesc}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function ThreatsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            className="py-20"
            style={{
                background: `
      radial-gradient(circle at 12% 25%, #D2E2FF 0%, transparent 40%),
      radial-gradient(circle at 85% 95%, #D2E2FF 0%, transparent 50%),
      #FFFFFF
    `,
            }}
        >

            <div className="max-w-7xl mx-auto px-6">

                {/* TITLE */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl text-[#0C0C0C] font-semibold">
                        Types of Cyber Security{" "}
                        <span className="text-[#EDA12E]">Threats</span>
                    </h2>

                    <p className="text-sm text-gray-500 max-w-6xl mx-auto mt-4">
                        Cyber threats come in various forms, each with its own tactics and targets. Understanding these threats is the first step in defending against them. Cybercriminals use tactics ranging from file-corrupting viruses to password-stealing schemes to breach systems. These threats constantly evolve, becoming more complex and harder to detect.  Let's break down the most common types you should know about:
                    </p>
                </div>

                {/* SLIDER */}
                <div className="relative">

                    {/* LEFT ARROW */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute -left-8 top-1/2 -translate-y-1/2 text-2xl text-[#0C0C0C] hover:text-black transition z-10"
                    >
                        ‹
                    </button>

                    {/* RIGHT ARROW */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute -right-8 top-1/2 -translate-y-1/2 text-2xl text-[#0C0C0C] hover:text-black transition z-10"
                    >
                        ›
                    </button>

                    {/* SCROLL CONTAINER */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-hidden"
                    >
                        {threatsData.map((item, i) => (
                            <ThreatCard key={i} item={item} />
                        ))}
                    </div>

                </div>

            </div>

        </section>
    );
}
