const heroData = {
    titleHighlight: "Cybersecurity",
    titleRest:
        " is growing rapidly and is one of the most in-demand fields worldwide",
    description:
        "The field goes beyond stopping and blocking hackers; it also focuses on identifying, preventing, and responding to complex cyber threats. You will understand the daily responsibilities of cybersecurity experts and the real-world threats they face. You can get a chance to explore the global industries and regions with active job openings.",
    buttonText: "Get Started",
    image: "/images/cyber-hero.jpg",
};

export default function CyberHero() {
    return (
        <section className="bg-[#FFFFFF] pt-28 pb-16 md:pt-32 md:pb-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                {/* LEFT */}
                <div className="max-w-md">
                    <h1 className="text-2xl md:text-[36px] font-semibold leading-[1.2] text-gray-900">
                        <span className="text-[#EDA12E] font-semibold">
                            {heroData.titleHighlight}
                        </span>
                        {heroData.titleRest}
                    </h1>

                    <p className="mt-4 text-[15px] text-gray-600 leading-relaxed">
                        {heroData.description}
                    </p>

                    <button className="mt-10 px-6 py-3 bg-[#10519E] text-white text-sm rounded-lg hover:bg-blue-700 transition shadow-sm">
                        {heroData.buttonText}
                    </button>
                </div>

                {/* RIGHT */}
                <div className="mt-10 md:mt-2">
                    <img
                        src={heroData.image}
                        alt="Cybersecurity"
                        className="w-full h-auto object-cover"
                    />
                </div>

            </div>
        </section>
    );
}