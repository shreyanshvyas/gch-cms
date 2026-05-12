// ================= DATA =================

const audienceData = [
    {
        title: "Career Starters",
        desc: "New students looking to build a foundation from the ground up.",
        icon: "🎓",
    },
    {
        title: "Professionals",
        desc: "Established workers seeking a pivot into a future-proof industry.",
        icon: "🔄",
    },
    {
        title: "Business Owners",
        desc: "Entrepreneurs focused on securing their digital operations.",
        icon: "💼",
    },
];

const featureData = [
    {
        title:
            "It explains the job levels, required skill sets of a cybersecurity expert and employer expectations precisely.",
        icon: "📘",
    },
    {
        title:
            "The common career questions have been answered in an easy-to-follow, practical way.",
        icon: "❓",
    },
    {
        title:
            "Learn the full lifecycle of threats from identification and prevention to complex incident response.",
        icon: "🛡️",
    },
];

// ================= SMALL COMPONENTS =================

function AudienceCard({ item }: { item: any }) {
    return (
        <div className="bg-[#F6F6F8] p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-2xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
        </div>
    );
}

function FeatureCard({ item }: { item: any }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[120px] flex items-start gap-3">
            <div className="text-xl">{item.icon}</div>

            <p className="text-sm text-gray-600 leading-relaxed">
                {item.title}
            </p>
        </div>
    );
}

// ================= MAIN COMPONENT =================

export default function AudienceSection() {
    return (
        <section className="bg-[#FFFFFF] pt-10 pb-20">

            {/* TOP TEXT */}
            <div className="max-w-4xl mx-auto text-center text-gray-600 text-[20px]">
                If you are someone looking to start your career, a professional looking to switch careers, or a business
                owner wanting to protect their digital assets, you're in the right place.
            </div>

            {/* AUDIENCE CARDS */}
            <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6 px-6">
                {audienceData.map((item, i) => (
                    <AudienceCard key={i} item={item} />
                ))}
            </div>

            
            {/* FEATURE BLOCK WRAPPER */}
            <div className="max-w-6xl mx-auto mt-14 px-6">

                <div className="bg-[#FFF5DB] rounded-2xl p-10 md:p-12 grid md:grid-cols-[1fr_1.3fr] gap-12 items-center">

                    {/* LEFT */}
                    <div className="max-w-md">
                        <h2 className="text-[20px] font-semibold text-gray-900 leading-[1.4]">
                            This page will help you understand cybersecurity, from the fundamentals
                            of the subject to the various roles available in this field.
                        </h2>

                        <p className="text-[15px] text-gray-600 mt-6 max-w-sm">
                            If you want to protect the digital world while building a high-paying,
                            future-proof career, this is where you need to get started.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col items-center gap-5">

                        <div className="grid grid-cols-2 gap-5 max-w-[520px] w-full">
                            <FeatureCard item={featureData[0]} />
                            <FeatureCard item={featureData[1]} />
                        </div>

                        <div className="flex justify-center w-full">
                            <div className="max-w-[420px] w-full">
                                <FeatureCard item={featureData[2]} />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}