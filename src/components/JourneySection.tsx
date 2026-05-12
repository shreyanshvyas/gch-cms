// ================= DATA =================

const journeyData = {
    title: "Learning Journey of Cyber Security",
    description:
        "Your cybersecurity career path is not a race but rather a ladder where each step builds on the previous one. Most people start their careers at the entry level. They build a strong foundation and earn essential certifications like CompTIA Security+ or CEH. Then, after that, they progress to the associate level, where they actively secure networks while handling real-world incidents. This field always offers something new to learn. As you move up the ranks, your earning potential rises significantly.",

    levels: [
        {
            title: "Entry Level:",
            desc: "This is your foundational stage where you will be introduced to networking, operating systems, and security principles. Entry-level positions involve monitoring security systems and assisting in incident response while learning from more senior team members.",
            icon: "🧑‍💻",
        },
        {
            title: "Associate Level:",
            desc: "This is the fascinating part. You are no longer observing. You actively identify potential threats, implement security measures, and even conduct basic penetration tests. Employers find you important because you have a few years of experience and several certificates under your belt.",
            icon: "🛡️",
        },
        {
            title: "Manager’s Level:",
            desc: "You're thinking strategically at the management level. You are leading teams, creating security architectures, deciding on budgets, and informing company executives about security threats. Both in-depth technical expertise and the capacity to comprehend the wider commercial picture are necessary at this level.",
            icon: "📊",
        },
    ],

    buttonText: "Speak to Our Experts",
};

// ================= CARD =================

function JourneyCard({ item }: { item: any }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 h-full flex flex-col">

            {/* ICON */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FFF5DB] text-[#EDA12E] mb-4 text-lg">
                {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
            </h3>

            {/* DESC */}
            <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
            </p>

        </div>
    );
}

// ================= MAIN =================

export default function JourneySection() {
    return (
        <section className="bg-white py-20">

            <div className="max-w-6xl mx-auto px-6">

                {/* TITLE + DESC */}
                <div className="max-w-7xl">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                        {journeyData.title}
                    </h2>

                    <p className="text-sm text-gray-600 max-w-10xl leading-relaxed">
                        {journeyData.description}
                    </p>
                </div>

                {/* CARDS */}
                <div className="mt-8 mr-5 grid md:grid-cols-3 gap-12 w-[100%] h-[100%]">
                    {journeyData.levels.map((item, i) => (
                        <JourneyCard key={i} item={item} />
                    ))}
                </div>

                {/* BUTTON */}
                <div className="flex justify-center mt-12">
                    <button className="px-7 py-3 bg-[#EDA12E] text-white text-sm rounded-full hover:opacity-90 transition shadow-md">
                        {journeyData.buttonText}
                    </button>
                </div>

            </div>

        </section>
    );
}