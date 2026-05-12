"use client";

import {
  GraduationCap,
  BriefcaseBusiness,
  TrendingUp,
  Star,
  CheckCircle2,
} from "lucide-react";

interface RoadmapCardItem {
  title: string;
  subtitle: string;
}

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  side: "left" | "right";
  icon: React.ElementType;
  cardItems: RoadmapCardItem[];
}

interface CareerRoadmapSectionProps {
  className?: string;
  data?: {
    title: string;
    highlightedWord: string;
    description: string;
    buttonText: string;
    steps: RoadmapStep[];
  };
}

export default function CareerRoadmapSection({
  className = "",
  data = {
    title:
      "Cybersecurity Career Growth Roadmap in the USA",

    highlightedWord: "Roadmap",

    description:
      "Start with foundational IT and Networking concepts. You learn about Linux, TCP/IP, and other aspects of system administration. Explore the basics of cybersecurity, including ethical hacking, vulnerability assessment, and SIEM tools. Earn certifications such as Security+, CEH, and CySA+. Gain cloud security exposure using AWS and Azure security tools. Transition into SOC, Cloud Security, or GRC roles. Build expertise in incident responses, threat intelligence, and compliance frameworks like NIST and ISO 27001. You can earn certifications like CISSP and CISM. Progress into senior engineering positions or managerial roles. The final growth leads to cybersecurity leadership roles that include Security Architect and CISO.",

    buttonText: "Get Free Consultation",

    steps: [
      {
        id: "01",
        title: "Learning",
        description:
          "Foundational knowledge & theoretical basics.",
        side: "right",
        icon: GraduationCap,

        cardItems: [
          {
            title: "CompTIA A+ & Network+",
            subtitle:
              "Hardware, OSI Model, IP Addressing",
          },
          {
            title: "Linux Essentials",
            subtitle:
              "Command line proficiency",
          },
        ],
      },

      {
        id: "02",
        title: "Entry",
        description:
          "Securing your first role in the industry.",
        side: "left",
        icon: BriefcaseBusiness,

        cardItems: [
          {
            title: "SOC Analyst Tier 1",
            subtitle:
              "Log monitoring & alert triaging",
          },
          {
            title: "CompTIA Security+ / GSEC",
            subtitle:
              "Industry standard baseline certs",
          },
        ],
      },

      {
        id: "03",
        title: "Growth",
        description:
          "Specialization and advanced operations.",
        side: "right",
        icon: TrendingUp,

        cardItems: [
          {
            title:
              "Incident Responder / Pen Tester",
            subtitle:
              "Threat hunting & vulnerability assessment",
          },
          {
            title: "CySA+ / OSCP / BTL1",
            subtitle:
              "Intermediate hands-on expertise",
          },
        ],
      },

      {
        id: "04",
        title: "Mastery",
        description:
          "Strategic leadership and architecture.",
        side: "left",
        icon: Star,

        cardItems: [
          {
            title:
              "CISO / Security Architect",
            subtitle:
              "Governance, Risk & Compliance leadership",
          },
          {
            title:
              "CISSP / CISM / CCIE Security",
            subtitle:
              "Gold-standard executive certifications",
          },
        ],
      },
    ],
  },
}: CareerRoadmapSectionProps) {
  return (
    <section
      className={`bg-[#F8F8F8] py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* TITLE */}
        <h2 className="mx-auto max-w-6xl text-center font-heading text-4xl font-bold leading-[1.3] tracking-tight text-[#111827] lg:text-5xl">
          {data.title.split(data.highlightedWord)[0]}

          <span className="text-[#1652A1]">
            {data.highlightedWord}
          </span>

          {data.title.split(data.highlightedWord)[1]}
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-8 max-w-6xl text-center text-xl leading-[2] text-[#52627A]">
          {data.description}
        </p>

        {/* ROADMAP */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 hidden h-[90%] w-[0.35rem] -translate-x-1/2 rounded-full bg-[#DDE7FB] lg:block" />

          {/* STEPS */}
          <div className="space-y-16 lg:space-y-24">
            {data.steps.map((step, index) => {
              const Icon = step.icon;

              const isLeft =
                step.side === "left";

              return (
                <div
                  key={index}
                  className={`
                    relative
                    flex
                    flex-col
                    gap-10
                    lg:items-center
                    ${
                      isLeft
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                    }
                  `}
                >
                  {/* CONTENT SIDE */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className={`
                        ${
                          isLeft
                            ? "lg:pr-20"
                            : "lg:pl-20"
                        }
                      `}
                    >
                      
                      {/* STEP TITLE */}
                      <div
                        className={`
                          ${
                            isLeft
                              ? "lg:text-right"
                              : "lg:text-left"
                          }
                        `}
                      >
                        <h3 className="text-4xl font-bold text-[#1652A1]">
                          {step.id}. {step.title}
                        </h3>

                        <p className="mt-4 text-xl text-[#6B7A92]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CENTER ICON */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      hidden
                      h-20
                      w-20
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border-[0.4rem]
                      border-[#F8F8F8]
                      bg-[#E8A126]
                      shadow-[0_0.6rem_1.5rem_rgba(0,0,0,0.12)]
                      lg:flex
                    "
                  >
                    <Icon
                      size={34}
                      className="text-white"
                      strokeWidth={2.4}
                    />
                  </div>

                  {/* CARD */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className={`
                        rounded-3xl
                        border
                        border-[#1E1E1E]
                        bg-white
                        p-8
                        shadow-[0_0.4rem_1rem_rgba(0,0,0,0.05)]
                        ${
                          isLeft
                            ? "lg:ml-20"
                            : "lg:mr-20"
                        }
                      `}
                    >
                      <div className="space-y-7">
                        {step.cardItems.map(
                          (item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start gap-4"
                            >
                              {/* CHECK */}
                              <div className="mt-1 shrink-0 text-[#6798FF]">
                                <CheckCircle2
                                  size={20}
                                  fill="currentColor"
                                  strokeWidth={1.5}
                                />
                              </div>

                              {/* TEXT */}
                              <div>
                                <h4 className="text-2xl font-semibold text-[#111827]">
                                  {item.title}
                                </h4>

                                <p className="mt-2 text-lg text-[#7A879D]">
                                  {item.subtitle}
                                </p>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-24 flex justify-center">
            <button
              className="
                rounded-full
                bg-[#1652A1]
                px-14
                py-5
                text-2xl
                font-semibold
                text-white
                shadow-[0_0.5rem_1.4rem_rgba(0,0,0,0.16)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0.8rem_1.8rem_rgba(0,0,0,0.22)]
              "
            >
              {data.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}