// ================= DATA =================

const highlightData = {
    title:
        "Cybersecurity welcomes freshers, career switchers, and experienced professionals.",

    points: [
        {
            text: "Strong job security, skills are always required",
            icon: "🛡️",
        },
        {
            text: "Good pay across the globe",
            icon: "💰",
        },
        {
            text: "Professional development without frequent job loss",
            icon: "📈",
        },
        {
            text: "Future-proof skills that endure for many years",
            icon: "🔄",
        },
        {
            text: "Possibilities to work on significant, real-world issues",
            icon: "💻",
        },
        {
            text: "Worldwide employment mobility",
            icon: "🌍",
        },
    ],
};

// ================= SMALL COMPONENT =================

function HighlightItem({ item }: { item: any }) {
    return (
        <div className="flex items-start gap-3">
            <div className="text-[#10519E] text-lg mt-[2px]">
                {item.icon}
            </div>

            <p className="text-[14px] text-gray-700 leading-snug max-w-[240px]">
                {item.text}
            </p>
        </div>
    );
}

// ================= MAIN COMPONENT =================

export default function Highlights() {
    return (
        <section className="bg-white py-16">

            <div className="max-w-6xl mx-auto px-6">

                {/* TITLE */}
                <h2 className="text-center text-[25px] md:text-[22px] font-bold  text-[#EDA12E] mb-10">
                    {highlightData.title}
                </h2>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-y-10 gap-x-13 ml-7">

                    {highlightData.points.map((item, i) => (
                        <HighlightItem key={i} item={item} />
                    ))}

                </div>

            </div>

        </section>
    );
}