const ciaData = [
    {
        title: "Confidentiality",
        desc: "Ensuring that only authorized people can access sensitive data & information.",
        icon: "🔒",
    },
    {
        title: "Integrity",
        desc: "Making sure that the data remains accurate and hasn’t been tampered with.",
        icon: "🛡️",
    },
    {
        title: "Availability",
        desc: "Keeping the systems and data accessible when legitimate users need them.",
        icon: "🗄️",
    },
];

const layersData = [
    { title: "Network security", desc: "Focuses on protecting the pathways through which data travels. It makes sure that the network is accessible only to the trusted users and devices.", icon: "🖧" },
    { title: "Application security", desc: "Application security ensures the security of the app’s creation and its usage", icon: "📱" },
    { title: "Information security", desc: "Information security involves safeguarding data in any form, whether it is stored, shared, or in transit", icon: "📄" },
    { title: "Endpoint security", desc: "A network can have various devices, such as laptops, desktops, and phones; everyone can become a target. Endpoint security will guard against malware, unauthorized access, and suspicious activities on these devices", icon: "💻" },
    { title: "Cloud security", desc: "As cloud adoption grows, securing cloud environments requires monitoring users and protecting stored data", icon: "☁️" },
];

const importancePoints = [
    {
        title: "Protects Your Personal Data",
        desc: "Your passwords, bank details, and identity are your valuable assets. Strong cybersecurity keeps them secure.",
    },
    {
        title: "Prevents Financial Loss",
        desc: "Cyber attacks can drain your bank accounts and cost businesses millions in recovery and legal fees.",
    },
    {
        title: "Maintains Your Privacy",
        desc: "Without proper security, all your private information, including messages, photos, and sensitive data, could be exposed.",
    },
    {
        title: "Business Continuity & Reputation",
        desc: "Businesses rely on secure systems to operate smoothly. A breach can shut down your operations entirely, resulting in financial losses.",
    },
    {
        title: "Building Trust",
        desc: "When it comes to business and individuals alike, cybersecurity matters. It shows responsibility and preparedness by building trust with customers and stakeholders.",
    },
];

function CIACard({ item }: { item: any }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
        </div>
    );
}

function LayerCard({ item }: { item: any }) {
    return (
        <div className="bg-white p-5 rounded-xl border border-gray-100 text-center">
            <div className="text-xl mb-2">{item.icon}</div>
            <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
        </div>
    );
}

function ImportanceItem({ item, index }: { item: any; index: number }) {
    return (
        <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="w-7 h-7 flex items-center justify-center bg-blue-600 text-white rounded-full text-xs font-semibold">
                {index + 1}
            </div>
            <div>
                <h4 className="text-sm font-semibold text-gray-900">
                    {item.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
        </div>
    );
}

// ================= COMPONENT =================//

export default function KeyComponents() {
    return (
        <section className="bg-white py-20">

            <div className="max-w-7xl mx-auto px-6 mt-5">

                {/* ===== TITLE ===== */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Key Components of Cyber Security
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                        The foundation of good cybersecurity rests on protecting the three most critical elements, often called the CIA triad:
                    </p>
                </div>

                {/* ===== CIA CARDS ===== */}
                <div className="grid md:grid-cols-3 gap-6 mb-14">
                    {ciaData.map((item, i) => (
                        <CIACard key={i} item={item} />
                    ))}
                </div>

                {/* ===== LAYER TITLE ===== */}
                <div className="text-center mb-8">
                    <h3 className="text-lg font-semibold text-[#10519E]">
                        Cybersecurity is a multi-layered system where different security layers work together.
                    </h3>
                    <p className="text-[#EDA12E] text-[16px] text-bold mt-1">
                        These include
                    </p>
                </div>

                {/* ===== LAYER CARDS ===== */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
                    {layersData.map((item, i) => (
                        <LayerCard key={i} item={item} />
                    ))}
                </div>

                {/* ===== IMPORTANCE BLOCK ===== */}
                <div className="bg-[#DBDFFF] rounded-3xl py-12 px-10 max-w-6xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-12">

                    {/* LEFT */}
                    <div className="flex flex-col justify-center h-full max-w-md mx-auto">

                        {/* TEXT */}
                        <div className="text-center md:text-left">
                            <h3 className="text-[22px] font-semibold text-gray-900 mb-4">
                                Importance of Cyber Security
                            </h3>

                            <p className="text-[14px] text-[#475569] leading-relaxed">
                                Cybersecurity is essential today. Every online action, be it browsing, shopping, or emailing, creates a digital footprint that needs protection. Cybersecurity safeguards your personal data from cybercriminals who are continuously attempting to take advantage of vulnerabilities The global investment trends reflect the expanding scope of cyber threats. Gartner anticipates global security spending getting up to $240B by 2026 and India’s IT spend exceeding $176B, heavily focused on security infrastructure growth. This rapid increase in expenditure highlights that cybersecurity is a major factor not only for protecting digital ecosystems but also for securing business resilience in the long run.
                            </p>
                        </div>

                        {/* STATS */}
                        <div className="flex justify-center md:justify-start gap-6 mt-8">

                            <div className="bg-white px-13 py-4 rounded-xl shadow-md text-center min-w-[140px]">
                                <p className="text-[#EDA12E] font-bold text-2xl">$240B</p>
                                <p className="text-xs text-gray-500 mt-1">MARKET SIZE 2024</p>
                            </div>

                            <div className="bg-white px-8 py-5 rounded-xl shadow-md text-center min-w-[140px]">
                                <p className="text-[#10519E] font-bold text-2xl">$176B</p>
                                <p className="text-xs text-gray-500 mt-1">INVESTMENT GROWTH</p>
                            </div>

                        </div>

                        {/* BUTTON */}
                        <div className="flex justify-center mt-8">
                            <button className="px-8 py-3 bg-[#EDA12E] text-white text-sm rounded-full shadow-md hover:scale-[1.02] transition">
                                Get Free Certificate
                            </button>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div>

                        {/* TITLE */}
                        <h4 className="text-sm font-semibold text-gray-900 mb-4 text-center md:text-left">
                            Here's why cybersecurity is so important
                        </h4>

                        <div className="flex flex-col gap-4">
                            {importancePoints.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 bg-[#FFFFFF80] p-4 rounded-xl shadow-sm items-start"
                                >

                                    {/* BULLET*/}
                                    <div className="min-w-[32px] h-[32px] flex items-center justify-center bg-[#10519E] text-white rounded-full text-[13px] font-semibold">
                                        {i + 1}
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}