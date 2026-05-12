const skillsGapData = {
    title: "The Global ",
    highlight: "Skills Gap",

    paragraphs: [
        "The cybersecurity sector is dealing with an unparalleled labour shortage that is only becoming worse. Currently, there are 4.8 million unfilled cybersecurity jobs worldwide, a whopping 19% increase from last year. The global workforce has expanded to 5.5 million, but this is merely a drop in the bucket when compared to the 10.2 million who need to be employed in order to adequately protect our cyber infrastructure.",

        "Alarmingly, cybersecurity workforce shortages are now driven by budget cuts and economic factors, not a lack of qualified personnel. Currently, 37% of organizations are cutting cybersecurity budgets, and 25% are laying off staff. Organisations with cybersecurity staff shortages face breaches that cost $1.76 million more per incident.",

        "The problem with the worker shortage is not merely a matter of numbers; it's a matter of skills as well. The skills that are most desperately required are AI, ML, Security (34%), Cloud Computing Security (30%), and Zero Trust (27%). By late 2025, nearly half of cybersecurity leaders are expected to change jobs due to burnout and stress.",
    ],

    stats: [
        { value: "10.2M", label: "Required" },
        { value: "4.8M", label: "Unfilled Jobs" },
    ],
};

export default function SkillsGapSection() {
    return (
        <section className="bg-white py-15">

            <section className="bg-white py-20">

                {/* FULL WIDTH BLUE */}
                <div className="bg-[#1F5AA6] w-full py-12">

                    {/* CONSTRAINED CONTENT */}
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.5fr_0.7fr] gap-10 items-start">

                        {/* LEFT CONTENT */}
                        <div className="max-w-3xl">

                            <h2 className="text-[30px] font-semibold text-white mb-6">
                                {skillsGapData.title}
                                <span className="text-[#EDA12E]">
                                    {skillsGapData.highlight}
                                </span>
                            </h2>

                            <div className="space-y-4">
                                {skillsGapData.paragraphs.map((text, i) => (
                                    <p
                                        key={i}
                                        className="text-[14px] text-white/90 leading-relaxed"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>

                        </div>

                        {/* RIGHT STATS */}
                        <div className="flex flex-col gap-8 items-end justify-center h-full">

                            {skillsGapData.stats.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white/20 backdrop-blur-sm rounded-xl px-10 py-8 w-[200px] text-center"
                                >
                                    <h3 className="text-[40px] font-bold text-[#EDA12E] leading-none">
                                        {item.value}
                                    </h3>

                                    <p className="text-[15px] text-white mt-3 font-medium">
                                        {item.label}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>

        </section>
    );
}