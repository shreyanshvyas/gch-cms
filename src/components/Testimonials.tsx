"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const testimonials = [
    {
        name: "Sankiza Tupat",
        role: "TY BVOC - Cyber Security Batch 2023, 3rd Year",
        image: "/students/student-1.jpg",
        text: `edept’s practical approach to cybersecurity has made the learning journey truly engaging. Each subject emphasises hands-on learning and problem-solving. Mentors encouraged me to think critically and apply concepts in real projects, which keeps the classes interactive and rewarding. The exposure I am getting here is shaping my confidence for the cybersecurity industry. This programme has equipped me with skills that align perfectly with real-world demands, opening doors to exciting career opportunities.`,
    },
    {
        name: "Prajval Vishwakarma",
        role: "TY BVOC - Cyber Security Batch 2023, 3rd Year",
        image: "/students/student-2.jpg",
        text: `What I like about edept’s programme is how well it aligns with industry trends such as AI in threat detection and ethical hacking. It focuses on both fundamentals and new technologies, helping us to stay updated and job-ready. Since cybersecurity is booming, edept’s programme positions me for high-demand roles and abundant job opportunities in the field.`,
    },
    {
        name: "Kellen R. Massey",
        role: "TY BVOC - Cyber Security Batch 2023, 3rd Year",
        image: "/students/student-3.jpg",
        text: `edept bridges the gap between classroom knowledge and industry exposure beautifully. The inclusion of real-time tools, workshops and live projects gives a complete picture of how cybersecurity works in the real world. The practical exposure here has aligned me to gain confidence in areas like preparing me for smooth entry to cybersecurity roles and, most importantly, handling threat monitoring and response.`,
    },
    {
        name: "Divya Yadav",
        role: "SYBVOC - Cyber Security Batch 2024, 2nd Year",
        image: "/students/student-4.jpg",
        text: `As you advance in edept’s programme, it gets more exciting. We get to explore diverse electives ranging from mobile app security to risk analysis, and apply what we can learn in projects and labs. edept helps you build a practical approach with essential skills that can be applied across the tech industry. It helps you ensure that — yes! I am ready for long-term success in cybersecurity.`,
    },
    {
        name: "Hina Gehlot",
        role: "SYBVOC - Cyber Security Batch 2024, 2nd Year",
        image: "/students/student-5.jpg",
        text: `I’m really enjoying edept’s cybersecurity course because it’s in a booming field with amazing future prospects. It equips me with practical knowledge and skills that feel directly tied to real-world applications. The programme has helped me build a strong base and explore different specialisations, from analyst roles to penetration testing in the cybersecurity field.`,
    },
];

export default function TestimonialsSection() {
    return (
        <section className="bg-[#EEF1FB] py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                {/* HEADING */}
                <div className="text-center">
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1652A1] sm:text-4xl">
                        Stories that{" "}
                        <span className="text-[#E8A126]">
                            Inspire
                        </span>
                    </h2>

                    <p className="mt-4 text-sm font-medium text-[#2A2A2A] sm:text-base">
                        Hear from students who transformed their careers
                    </p>
                </div>

                {/* GRID */}
                <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <article
                            key={index}
                            className="
                rounded-3xl
                bg-white
                p-6
                shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.12)]
                flex flex-col justify-between
              "
                        >
                            <div>
                                {/* TOP */}
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            fill="#F4B400"
                                            strokeWidth={0}
                                            className="text-[#F4B400]"
                                        />
                                    ))}

                                    <span className="ml-1 text-xs font-bold text-[#4285F4]">
                                        <FcGoogle className="text-lg" />
                                    </span>
                                </div>

                                {/* CONTENT */}
                                <p className="mt-5 text-sm leading-7 text-[#4B4B4B]">
                                    {item.text}
                                </p>

                            </div>

                            {/* USER */}
                            <div className="mt-8 flex items-center gap-3">
                                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-black">
                                        {item.name}
                                    </h3>

                                    <p className="mt-1 text-[0.72rem] leading-relaxed text-[#5F5F5F]">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}