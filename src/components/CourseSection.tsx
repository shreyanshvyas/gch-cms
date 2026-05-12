"use client";

// ================= DATA =================

const courseData = {
    title: "Cyber Security Courses to Advance Your Career",
    // courseName: "B.Voc in Cybersecurity and Digital Forensics",
    image: "/images/course-banner.jpg", 

    description:
        "A comprehensive degree programme that transforms students into industry-ready cybersecurity professionals. Through hands-on training, real-world projects, and expert mentorship, you'll master both defensive and offensive security techniques while gaining crucial digital forensics skills. Our partnership with Think Cyber India ensures you're learning the latest industry practices and technologies.",

    stats: [
        {
            label: "Course Duration",
            value: "3 Years spread over 6 semesters",
            icon: "⏱️",
        },
        {
            label: "Course Fees",
            value: "Total: INR 360,000 (INR 120,000 Per Year)",
            icon: "💳",
        },
        {
            label: "Course Level",
            value: "Beginner / Intermediate / Advanced",
            icon: "📊",
        },
    ],

    buttonText: "Get Free Consultation",
};

// ================= SMALL COMPONENT =================

function StatItem({ item }: { item: any }) {
    return (
        <div className="flex items-start gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#EEF3FB] text-[#10519E] text-lg">
                {item.icon}
            </div>

            <div>
                <p className="text-[11px] text-gray-500 uppercase tracking-wide">
                    {item.label}
                </p>
                <p className="text-sm font-medium text-gray-900 mt-1 max-w-[220px]">
                    {item.value}
                </p>
            </div>
        </div>
    );
}

// ================= MAIN COMPONENT =================

export default function CourseSection() {
    return (
        <section className="bg-white py-20">

            <div className="max-w-6xl mx-auto px-6">

                {/* TITLE */}
                <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
                    {courseData.title}
                </h2>

                {/* IMAGE BANNER */}
                <div className="relative rounded-2xl overflow-hidden mb-4">

                    <img
                        src={courseData.image}
                        alt="Course"
                        className="w-full rounded-2xl h-[300px] object-cover"
                    />

                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed max-w-6xl mx-auto text-center">
                    {courseData.description}
                </p>

                {/* STATS */}
                <div className="mt-10 text=[#0F172A] flex flex-col md:flex-row justify-between gap-8 max-w-5xl mx-auto">
                    {courseData.stats.map((item, i) => (
                        <StatItem key={i} item={item} />
                    ))}
                </div>

                {/* BUTTON */}
                <div className="flex justify-center mt-10">
                    <button className="px-7 py-3 bg-[#10519E] text-white text-sm rounded-full hover:bg-blue-700 transition shadow-md">
                        {courseData.buttonText}
                    </button>
                </div>

            </div>

        </section>
    );
}