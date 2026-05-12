import heroImage from "@/assets/country-guide/heroUsa.png"

import Hero from "@/components/Hero";
import { ArrowRight, UserCheck, BarChart3, TrendingUp, PieChart, Laptop, CloudLightning, Scale, Sparkles } from "lucide-react";
import RegionalHotspots from "@/components/RegionalHotspot";
import MarketStats from "@/components/MarketStats";
import HiringOrganizations from "@/components/HiringOrganizations";
import GrowthCatalysts from "@/components/GrowthCatalyst";
import SalaryBenchmarks from "@/components/SalaryBenchmarks";
import CompensationTable from "@/components/CompensationTable";
import PremiumSkills from "@/components/PremiumSkills";
import VisaAccordion from "@/components/VisaAccordion";
import CostOfLiving from "@/components/CostOfLiving";
import { EducationAccordion, RegionAccordion, TaxAccordion, USA_VISA_ACCORDION } from "./data";

import microsoft from "@/assets/country-guide/microsoft.png";
import google from "@/assets/country-guide/google.png";
import amazon from "@/assets/country-guide/amazon.png";
import meta from "@/assets/country-guide/meta.png";
import apple from "@/assets/country-guide/apple.png";
import paloalto from "@/assets/country-guide/poloalto.png";
import crowdstrike from "@/assets/country-guide/crowdstrike.png";
import fortinet from "@/assets/country-guide/fortinet.png";
import zscaler from "@/assets/country-guide/zscaler.png";
import dod from "@/assets/country-guide/dod.png";
import nsa from "@/assets/country-guide/nsa.png";
import fbi from "@/assets/country-guide/fbi.png";
import dhs from "@/assets/country-guide/dhs.png";
import jp from "@/assets/country-guide/jp.png";
import gs from "@/assets/country-guide/gs.png";
import visa from "@/assets/country-guide/visa.png";
import mastercard from "@/assets/country-guide/mastercard.png";
import kp from "@/assets/country-guide/kp.png";
import uhg from "@/assets/country-guide/uhg.png";
import mayoclinic from "@/assets/country-guide/mayoclinic.png";

import { Inter } from "next/font/google";
import { Metadata } from "next";
import CountryHero from "@/components/CountryHero";
import CareerOverviewSection from "@/components/Overview";
import SkillsGapSection from "@/components/SkillsGapSection";
import SkillRoleAnalyzer from "@/components/SkillGapAnalyzer";
import CareerPath from "@/components/CareerPath";
import RecruitersSalarySection from "@/components/RecruitersSalarySection";
import CareerRoadmapSection from "@/components/CareerRoadmapSection";
import PppCalculator from "@/components/PPPCalculator";
import ScholarshipSection from "@/components/Scholarships";
import { FAQSection } from "@/components/FAQSections";
import ReusableFAQ from "@/components/ReusableFAQ";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Build a Cyber Security Career in US | Cyber Security Jobs in USA | edept",
    description: "Start your cyber security career in the US today. Find in-demand cyber security jobs in USA, career guidance, and expert insights from edept.",
}
export default function Page() {
    return (
        <main className={` ${inter.className} overflow-hidden`} >
            <CountryHero
                eyebrow="USA Cybersecurity Career Guide"
                title={"Your Comprehensive Pathway to American Success"}
                paragraphs={[
                    "Navigate the market with confidence using strategic insights tailored for international professionals.",
                    "Transform ambitions into success stories with a clear, actionable roadmap.",
                ]}
                cta={{ label: "Start Exploring", href: "#", icon: <ArrowRight className="h-5 w-5" /> }}
                primaryImage={{
                    src: heroImage, // replace with exported asset
                    alt: "Student holding notebook",
                    width: 640,
                    height: 640,
                }}
                bgColor="bg-[#175CD3]"
            />

            <CareerOverviewSection />
            <SkillRoleAnalyzer />
            <CareerPath />
            <RecruitersSalarySection />
            <SalaryBenchmarks
                heading="Professional Salary Benchmarks"
                subheading="Understanding compensation structures enables strategic career positioning and negotiation effectiveness"
                items={[
                    {
                        years: "0–2 years",
                        title: "Entry Level",
                        salary: "$70,000 – $95,000",
                        description:
                            "Foundation roles in security operations centers, junior analyst positions",
                    },
                    {
                        years: "3–5 years",
                        title: "Mid Career",
                        salary: "$95,000 – $135,000",
                        description:
                            "Specialized technical roles, senior analyst positions, and team coordination",
                    },
                    {
                        years: "6–10 years",
                        title: "Senior",
                        salary: "$135,000 – $185,000",
                        description:
                            "Leadership responsibilities, architectural design, strategic planning",
                    },
                    {
                        years: "10+ years",
                        title: "Executive",
                        salary: "$200,000 – $350,000+",
                        description:
                            "C‑suite positions, organizational security strategy, enterprise‑wide responsibility",
                    },
                ]}
            />
            <CompensationTable
                title="Role-Specific Compensation Framework"
                subtitle="Understanding compensation structures enables strategic career positioning and negotiation effectiveness"
                rows={[
                    {
                        position: "Cybersecurity Analyst",
                        salary: "$110,000",
                        responsibilities: "Threat monitoring, incident investigation, and security tool management",
                        color: "yellow",
                    },
                    {
                        position: "Penetration Tester",
                        salary: "$125,000",
                        responsibilities: "Vulnerability assessment, ethical hacking, security validation",
                        color: "orange",
                    },
                    {
                        position: "Security Engineer",
                        salary: "$142,000",
                        responsibilities: "System design, implementation, and technical architecture",
                        color: "red",
                    },
                    {
                        position: "Cloud Security Specialist",
                        salary: "$158,000",
                        responsibilities: "Cloud infrastructure protection, compliance management",
                        color: "light_green",
                    },
                    {
                        position: "Security Architect",
                        salary: "$175,000",
                        responsibilities: "Enterprise security design, strategic planning, risk assessment",
                        color: "green",
                    },
                    {
                        position: "CISO/Security Director",
                        salary: "$280,000+",
                        responsibilities: "Organizational leadership, strategic vision, stakeholder management",
                        color: "blue",
                    },
                ]}
            />
            <PremiumSkills
                heading="Premium Skill Markets:"
                items={[
                    {
                        title: "Cloud Security Architecture",
                        percent: "22%",
                        description: "salary premium over baseline roles",
                        color: "magenta",
                    },
                    {
                        title: "AI/ML Security Engineering",
                        percent: "28%",
                        description: "premium reflecting emerging technology needs",
                        color: "indigo",
                    },
                    {
                        title: "Zero Trust Implementation",
                        percent: "22%",
                        description: "premium for next-generation security frameworks",
                        color: "violet",
                    },
                    {
                        title: "Incident Response Leadership",
                        percent: "18%",
                        description: "premium for crisis management expertise",
                        color: "green",
                    },
                    {
                        title: "Compliance & Risk Management",
                        percent: "15%",
                        description: "premium for regulatory expertise",
                        color: "amber",
                    },
                ]}
            />
            <CareerRoadmapSection />
            <RegionalHotspots
                title="Strategic Career Hotspots: Where Opportunity Meets Growth"
                subtitle="The American cybersecurity landscape presents distinct regional advantages, each offering unique career trajectories and growth potential. Understanding these markets is crucial for strategic career planning:"
                mapSvgPath="/images/usa.svg"
                mapAlt="USA cybersecurity career hotspots map"
                locations={[
                    {
                        title: "Indianapolis, Indiana - The Emerging Powerhouse",
                        description:
                            "With 31.8% year-over-year job growth and 17.2% wage increases, Indianapolis represents exceptional value for cybersecurity professionals. The city's healthcare and manufacturing sectors drive significant security investments, while cost-effective living standards maximize earning potential.",
                        bgColor: "bg-green-50",
                    },
                    {
                        title: "San Francisco Bay Area, California - Innovation Capital",
                        description:
                            "Remains the epicenter of cybersecurity innovation, hosting major technology companies and venture-backed startups. Despite higher living costs, the concentration of cutting-edge security challenges and premium compensation packages makes this region ideal for professionals seeking rapid skill development.",
                        bgColor: "bg-orange-50",
                    },
                    {
                        title: "Austin, Texas - Strategic Tax Advantages",
                        description:
                            "No state income tax, combined with robust technology sector growth, creates compelling financial benefits. The city's business-friendly environment attracts major corporations relocating security operations, generating substantial employment opportunities.",
                        bgColor: "bg-purple-50",
                    },
                    {
                        title: "Washington D.C. Metro - Government & Enterprise Hub",
                        description:
                            "Federal agencies and defense contractors provide stable, high-value career paths with security clearance premiums. The intersection of policy, compliance, and technical implementation creates diverse advancement opportunities",
                        bgColor: "bg-[#F5FBEE]",
                    },
                    {
                        title: "Raleigh, North Carolina - Research Triangle Excellence",
                        description:
                            "Experiencing 59% job growth, this region combines world-class research institutions with major corporate security operations. IBM's presence, alongside Research Triangle Park's ecosystem, creates sustained demand for advanced cybersecurity expertise.",
                        bgColor: "bg-[#FDF2FA]",
                    },
                ]}
            />
            <PppCalculator />
            <ScholarshipSection />
            <GrowthCatalysts
                title="Growth Catalysts Driving Expansion"
                subtitle="The cybersecurity job market in USA is experiencing rapid growth, increasing from $92.73 billion in 2025 to $136.82 billion by 2030, creating significant opportunities for professionals at every level. This surge is being driven by four main factors: a 38% yearly increase in cyberattacks, businesses racing to safeguard their cloud systems, the implementation of strict new rules in the healthcare and financial industries, and the transformation of artificial intelligence (AI) in how we attack and defend networks."
                catalysts={[
                    {
                        icon: Laptop,
                        iconColor: "text-[#9E165F]",
                        title: "Escalating Cyber Threats",
                        description:
                            "The annual growth of cyberattacks was 38%, with ransomware, supply chain breaches, and nation-state activities being the major targets of crucial infrastructures. Companies are desperately recruiting for cybersecurity positions in the USA, which include threat detection, incident response, and security operations.",
                        bgColor: "bg-[#FDF2FA] border-[#FCE7F6]",
                    },
                    {
                        icon: CloudLightning,
                        iconColor: "text-[#2D31A6]",
                        title: "Cloud Transformation",
                        description:
                            "In the USA, cloud transformation in cybersecurity has become a primary driver of growth, with the factors for this being rapid digitalization, rising cyber threats & strict regulation. These provide a rapid market expansion through artificial intelligence, zero-trust systems, and industry-specific solutions that promise greater agility, resilience, and innovation for businesses.",
                        bgColor: "bg-[#EEF4FF] border-[#EEF4FF]",
                    },
                    {
                        icon: Scale,
                        iconColor: "text-[#335015]",
                        title: "Regulatory Compliance",
                        description:
                            "Regulatory compliance is a major factor in U.S. cybersecurity that leads to the growth of the market because it creates the demand for advanced solutions (AI, cloud security), raises the budgets, improves the customer trust, and allows the market to grow, especially with the more strict regulations such as HIPAA, CCPA, and PCI DSS, which tempt the companies to build powerful frameworks for getting ahead of competitors, managing risks, and gaining access to the market.",
                        bgColor: "bg-[#F5FBEE] border-[#E6F4D7]",
                    },
                    {
                        icon: Sparkles,
                        iconColor: "text-[#854A0E]",
                        title: "AI Integration",
                        description:
                            "The integration of AI into cybersecurity acts as a major growth catalyst in USA, driving expansion through automation, predictive threat intelligence, and an autonomous response, with the market likely to reach several tens of billions by 2030.",
                        bgColor: "bg-[#FEFBE8] border-[#FEF7C3]",
                    },
                ]}
            />


            <VisaAccordion
                heading="Work Visa Options for Cybersecurity Professionals in USA"
                subtitle="Landing cybersecurity jobs in USA requires a proper visa pathway for international professionals. While O-1 visas are suitable for senior experts, L-1 transfers are suitable for multinational employees. H-1B visas are most common for cybersecurity jobs in USA for Indian talent. You can easily secure a cybersecurity analyst job in the USA by knowing which path best suits your profile and starting 8 to 12 months in advance. Each visa has its own set of requirements, timeline & caps, so making the right choice is essential for your entire immigration process."
                items={USA_VISA_ACCORDION}
            />
            <CostOfLiving regionAccordion={RegionAccordion} educationAccordion={EducationAccordion} taxAccordion={TaxAccordion} />
            <ReusableFAQ/>
        </main>
    );
}
