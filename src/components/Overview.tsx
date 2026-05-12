"use client";

import {
  BadgeDollarSign,
  BriefcaseBusiness,
  ShieldCheck,
  Globe,
  Cpu,
} from "lucide-react";

interface BenefitItem {
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
}

interface CareerOverviewSectionProps {
  data?: {
    title: string;
    intro: string[];
    eligibilityTitle: string;
    eligibilityContent: string;
    primaryButtonText: string;
    benefitsTitle: string;
    benefitsDescription: string;
    benefits: BenefitItem[];
    secondaryButtonText: string;
  };
  className?: string;
}

export default function CareerOverviewSection({
  className = "",
  data = {
    title: "Overview of Cybersecurity Jobs in USA",

    intro: [
      "Cybersecurity Jobs in USA are growing more quickly than any other IT domain due to digital transformation, cybercrime escalation, and cloud adoption. The US faces a workforce shortage of over 500000 cybersecurity professionals, forming a massive hiring demand.",

      "The key job roles include cybersecurity analyst, SOC analyst, cloud security engineer, penetration tester, GRC consultant, and CISO. cybersecurity jobs in USA for freshers are expanding across healthcare, finance, defense, SaaS, and government agencies. Their salaries start from six figures for skilled professionals. The USA remains the most lucrative global market for cybersecurity careers.",
    ],

    eligibilityTitle:
      "Eligibility Criteria for Cyber Security Jobs in the USA",

    eligibilityContent:
      "The majority of the cybersecurity jobs in USA require a bachelor's degree in computer science, IT, or cybersecurity. Freshers typically need basic certifications like CompTIA Security+ or CEH in addition to hands-on skills in networking, operating systems, and basic security tools. Cloud security—AWS and Azure—threat hunting, and penetration testing form the key demands of mid-level cybersecurity analyst jobs in the USA, along with advanced certifications like CISSP or CISM. Soft skills should not be underestimated – problem-solving, communication, and analytical thinking are as important as technical knowledge in securing highly competitive roles.",

    primaryButtonText: "Get Free Consultation",

    benefitsTitle:
      "Benefits of Working as a Cybersecurity Professional in the USA",

    benefitsDescription:
      "A cybersecurity job in USA gives an individual the chance to be part of “the largest security community in the world with unparalleled innovation.” Professionals gain globally renowned expertise while dealing with complex issues across Fortune 500 companies & specialized firms.",

    benefits: [
      {
        title: "Industry-Leading Compensation",
        description:
          "Comprehensive healthcare and retirement benefits, with salaries 40–60% more than worldwide benchmarks",
        icon: BadgeDollarSign,
        iconColor: "text-[#E59A21]",
      },
      {
        title: "Career Growth",
        description:
          "There is ample room for growth, with rapid skill development and exposure to cutting-edge technology.",
        icon: Cpu,
        iconColor: "text-[#1877F2]",
      },
      {
        title: "Access to Innovation",
        description:
          "A constantly innovative landscape with AI-driven security, zero-trust architecture & cloud infrastructure",
        icon: ShieldCheck,
        iconColor: "text-[#1877F2]",
      },
      {
        title: "Job Security",
        description:
          "A 38% annual increase in threats ensures demand for skilled professionals, resulting in numerous job openings.",
        icon: BriefcaseBusiness,
        iconColor: "text-[#E59A21]",
      },
      {
        title: "Global Recognition",
        description:
          "US certifications & experience enhance professional opportunities.",
        icon: Globe,
        iconColor: "text-[#E59A21]",
      },
    ],

    secondaryButtonText: "Get Free Consultation",
  },
}: CareerOverviewSectionProps) {
  return (
    <section
      className={`bg-[#F8F8F8] py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* TOP TITLE */}
        <h2 className="font-heading text-4xl font-bold tracking-tight text-[#1652A1] lg:text-5xl">
          {data.title}
        </h2>

        {/* INTRO */}
        <div className="mt-8 space-y-10">
          {data.intro.map((paragraph, index) => (
            <p
              key={index}
              className="max-w-6xl text-xl text-[#52627A]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* ELIGIBILITY */}
        <div className="mt-20">
          
          {/* TITLE ROW */}
          <div className="flex items-center gap-8">
            <h3 className="shrink-0 text-3xl font-bold text-[#111827]">
              {data.eligibilityTitle}
            </h3>

            <div className="h-px w-full bg-[#D6DCE8]" />
          </div>

          {/* CONTENT BOX */}
          <div className="mt-10 border-l-4 border-[#1652A1] pl-8">
            <p className="max-w-6xl text-xl text-[#5E5E5E]">
              {data.eligibilityContent}
            </p>
          </div>

          {/* BUTTON */}
          <div className="mt-10 flex justify-center">
            <button
              className="
                rounded-full
                bg-[#E59A21]
                px-12
                py-4
                text-xl
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0.7rem_1.5rem_rgba(0,0,0,0.18)]
              "
            >
              {data.primaryButtonText}
            </button>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-24">
          
          {/* TITLE */}
          <h3 className="mx-auto max-w-5xl text-center font-heading text-4xl font-bold leading-[1.4] tracking-tight text-[#1652A1] lg:text-5xl">
            {data.benefitsTitle}
          </h3>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-5xl text-center text-xl leading-[1.5] text-[#5C5C5C]">
            {data.benefitsDescription}
          </p>

          {/* BENEFITS GRID */}
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-20 gap-y-14 md:grid-cols-2">
            {data.benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-5"
                >
                  {/* ICON */}
                  <div
                    className={`mt-1 shrink-0 ${item.iconColor}`}
                  >
                    <Icon
                      size={30}
                      strokeWidth={2.2}
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h4 className="text-2xl font-bold text-[#111827]">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-lg leading-[1.8] text-[#556274]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM BUTTON */}
          <div className="mt-20 flex justify-center">
            <button
              className="
                rounded-full
                bg-[#1652A1]
                px-14
                py-5
                text-2xl
                font-semibold
                text-white
                shadow-[0_0.5rem_1.2rem_rgba(0,0,0,0.16)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0.8rem_1.7rem_rgba(0,0,0,0.22)]
              "
            >
              {data.secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}