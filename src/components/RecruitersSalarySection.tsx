"use client";

import {
  Cloud,
  ShieldCheck,
  Landmark,
  WalletCards,
  BriefcaseMedical,
} from "lucide-react";

interface RecruiterItem {
  company: string;
  salary: string;
}

interface RecruiterCategory {
  title: string;
  icon: React.ElementType;
  recruiters: RecruiterItem[];
}

interface RecruitersSalarySectionProps {
  className?: string;
  data?: {
    title: string;
    description: string;
    categories: RecruiterCategory[];
  };
}

export default function RecruitersSalarySection({
  className = "",
  data = {
    title:
      "Top Recruiters and Average Salaries for Cybersecurity Jobs in USA",

    description:
      "Top US employers like Microsoft, Google, IBM, Amazon, and consulting firms like Deloitte and Accenture offer high demand and salaries for cyber roles in 2026. Security Architects, DevSecOps Engineers, and Cloud Security roles are the most lucrative, frequently exceeding $150k–$200k for senior/specialized positions, while overall average salaries hover around $100k–$130k, indicating strong growth driven by AI & Cloud.",

    categories: [
      {
        title: "Global Technology Leaders",
        icon: Cloud,
        recruiters: [
          {
            company: "Microsoft",
            salary: "$153K - $373K",
          },
          {
            company: "Google",
            salary: "$100K - $180K",
          },
          {
            company: "Amazon",
            salary: "$188K - $524K",
          },
        ],
      },

      {
        title: "Specialized Security Firms",
        icon: ShieldCheck,
        recruiters: [
          {
            company: "Palo Alto Networks",
            salary: "$100K - $300K",
          },
          {
            company: "CrowdStrike",
            salary: "$120K - $300K",
          },
          {
            company: "Fortinet",
            salary: "$100K - $200K+",
          },
        ],
      },

      {
        title: "Government Agencies",
        icon: Landmark,
        recruiters: [
          {
            company: "Department of Defence",
            salary: "$111K - $165K",
          },
          {
            company:
              "NSA (National Security Agency)",
            salary: "$111K - $150K",
          },
          {
            company: "FBI",
            salary: "$130K - $136K",
          },
        ],
      },

      {
        title: "Financial Institutions",
        icon: WalletCards,
        recruiters: [
          {
            company: "JPMorgan Chase",
            salary: "$140K - $200K",
          },
          {
            company: "Goldman Sachs",
            salary: "$121K - $168K",
          },
          {
            company: "Visa",
            salary: "$135K - $262K",
          },
        ],
      },

      {
        title: "Healthcare Systems",
        icon: BriefcaseMedical,
        recruiters: [
          {
            company: "Kaiser Permanente",
            salary: "$93K - $200K",
          },
          {
            company: "UnitedHealth Group",
            salary: "$90.6K - $200K",
          },
          {
            company: "Mayo Clinic",
            salary: "$134K - $190K",
          },
        ],
      },
    ],
  },
}: RecruitersSalarySectionProps) {
  return (
    <section
      className={`bg-[#F8F8F8] py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* TITLE */}
        <h2 className="mx-auto max-w-6xl text-center font-heading text-4xl font-bold leading-[1.3] tracking-tight text-[#111827] lg:text-5xl">
          {data.title}
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-8 max-w-6xl text-center text-xl leading-[2] text-[#52627A]">
          {data.description}
        </p>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data.categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#C7D0DC]
                  bg-white
                  shadow-[0_0.4rem_1rem_rgba(0,0,0,0.05)]
                "
              >
                {/* HEADER */}
                <div className="flex items-center gap-4 border-b border-[#C7D0DC] px-6 py-5">
                  <div className="text-[#1877F2]">
                    <Icon
                      size={24}
                      strokeWidth={2.2}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-[#111827]">
                    {category.title}
                  </h3>
                </div>

                {/* TABLE */}
                <div className="px-6 py-5">
                  
                  {/* TABLE HEAD */}
                  <div className="flex items-center justify-between border-b border-[#E1E6EE] pb-4">
                    <span className="text-sm font-bold uppercase tracking-wide text-[#72829B]">
                      Top Recruiter
                    </span>

                    <span className="text-sm font-bold uppercase tracking-wide text-[#72829B]">
                      Avg Package
                    </span>
                  </div>

                  {/* ROWS */}
                  <div className="space-y-5 pt-5">
                    {category.recruiters.map(
                      (recruiter, recruiterIndex) => (
                        <div
                          key={recruiterIndex}
                          className="flex items-start justify-between gap-6"
                        >
                          <span className="text-xl font-medium text-[#111827]">
                            {recruiter.company}
                          </span>

                          <span className="shrink-0 text-xl font-bold text-[#F59E0B]">
                            {recruiter.salary}
                          </span>
                        </div>
                      )
                    )}
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