"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  titleBlue?: string;
  titleOrange?: string;
  faqs?: FAQItem[];
  className?: string;
}

export default function ReusableFAQ({
  titleBlue = "Frequently Asked",
  titleOrange = "Questions",
  faqs = [
    {
      question:
        "Is Cyber Security a Good Choice for Your Career?",
      answer:
        "Yes, cybersecurity is widely seen as a great career choice, offering high demand, competitive salaries, strong job security, and diverse growth opportunities. As cyber threats become more frequent and complex with the rapid digitalization of services, the demand for skilled professionals continues to rise.",
    },
    {
      question:
        "How long does it take to become a Cyber Security Analyst?",
      answer:
        "It actually depends on your path. A bachelor's degree typically takes about 4 years to complete, but you can finish it faster with transfer credits from certificates or an associate's degree. If you already have a bachelor's in another field, a master's in cybersecurity takes around 15 months.\n\nThe fastest route? Many people enter the field within 6-12 months by earning entry-level certifications, such as CompTIA Security+ or CEH, engaging in hands-on practice, and building a project portfolio.",
    },
    {
      question:
        "What Skills Required for Cyber Security Analysts?",
      answer:
        "To monitor systems, identify threats, respond to breaches, and implement security measures like firewalls and hardening, cyber security analysts require a combination of technical skills and soft skills including networking, OS, SIEM tools, scripting, cloud security, critical thinking, teamwork, and adaptability.",
    },
    {
      question:
        "Why Should I Get Certified in Cyber Security?",
      answer:
        "You can develop in-demand technical skills and get ready for important professional certifications with a cybersecurity certificate. Compared to a traditional degree program, earning a certificate can also help you find employment in the field more quickly.",
    },
    {
      question: "Does Cyber Security Need Coding?",
      answer:
        "Coding is not always necessary in cybersecurity, but it greatly depends on the particular role. Technical roles such as ethical hacking, malware analysis, or security engineering require coding for automation, analysis, and threat understanding.",
    },
    {
      question:
        "What Exactly Does a Cyber Security Professional Do?",
      answer:
        "Analyze network traffic and keep an eye out for security breaches. Investigate problems with network performance. Give advice on key flaws in network security and maintain disaster recovery plans.",
    },
    {
      question:
        "Do I need prior tech background to enroll?",
      answer:
        "No, a technical background is not mandatory to enroll in our cybersecurity programme, but having a foundational understanding of computers and networks is good.",
    },
    {
      question:
        "What kind of support & placement assistance is provided?",
      answer:
        "We offer comprehensive career support tailored to cybersecurity, and our students receive extensive training and job placement assistance to maximize career prospects.",
    },
  ],
  className = "",
}: FAQSectionProps) {
  const [activeIndexes, setActiveIndexes] = useState<
    number[]
  >([0]);

  const toggleFAQ = (index: number) => {
    setActiveIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      className={`bg-[#F7F7F7] py-20 lg:py-28 ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6">
        
        {/* HEADING */}
        <div className="text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-[#1652A1]">
              {titleBlue}{" "}
            </span>

            <span className="text-[#E59A21]">
              {titleOrange}
            </span>
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="mt-16">
          {faqs.map((faq, index) => {
            const isOpen =
              activeIndexes.includes(index);

            return (
              <div
                key={index}
                className="border-b border-[#C9C9C9]"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start justify-between gap-6 py-7 text-left"
                >
                  <h3 className="text-lg leading-snug text-[#111111] md:text-2xl">
                    {faq.question}
                  </h3>

                  <ChevronUp
                    className={`mt-1 h-5 w-5 shrink-0 text-black transition-transform duration-300 ${
                      isOpen
                        ? "rotate-0"
                        : "rotate-180"
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[40rem] pb-8"
                      : "max-h-0"
                  }`}
                >
                  <div className="max-w-4xl">
                    {faq.answer
                      .split("\n\n")
                      .map((paragraph, i) => (
                        <p
                          key={i}
                          className="mb-6 text-base leading-9 text-[#2F2F2F] md:text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}