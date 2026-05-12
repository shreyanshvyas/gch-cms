

"use client";
import { useState } from "react";

// ================= DATA =================

const aspectsData = [
    {
        title: "Strategies and Policies",
        color: "bg-[#FFF5E6]",
        type: "strategies",
    },
    {
        title: "Cybersecurity Tools and Technologies",
        color: "bg-[#FFDEDE]",
        type: "tools",
    },
    {
        title: "Cybersecurity Frameworks",
        color: "bg-[#D8DFFF]",
        type: "frameworks",
    },
    {
        title: "Cyber Security Standards",
        color: "bg-[#C5E6FF]",
        type: "standards",
    },
];
function StrategiesContent() {
    const data = [
        ["ZERO TRUST POLICY", "The previous security paradigm assumed that all the components within the corporate network were secure, and the ones outside were insecure. The Zero Trust model is grounded on the belief that threats could be found anywhere, whether inside or outside the network. Every user, device and application must be continuously verified, regardless of their connection location."],
        ["ROBUST SECURITY POLICY", "A robust security policy is your company's set of guidelines for data protection. It defines who can access information, how it can be used, what counts as proper use of resources and the consequences for violations. Effective policies balance security and usability. Too strict, employees bypass them; too lenient, issues may arise. The best policies are clear, regulated, updated, and strictly enforced."],
        ["Security Hygiene, PATCH MANAGEMENT, AND SOFTWARE UPDATES", "The majority of breaches take advantage of known flaws that have already been fixed. Security hygiene is the routine of performing the basics consistently, choosing complex passwords, upgrading the software, removing unnecessary access rights, and maintaining clean systems. Patch management involves promptly applying security updates as vendors release them, preventing attackers from exploiting known vulnerabilities. It's just like brushing your teeth; it's not very exciting, but if you neglect it often, you will end up suffering the consequences."],
        ["REGULAR SECURITY TRAINING AND CYBERSECURITY AWARENESS PROGRAMS", "Your employees are either your strongest defence or your weakest link. Regular training improves skills in spotting phishing attacks, handling sensitive data, reporting incidents and understanding the purpose of security measures. The superior training methods incorporate practical scenarios, interactive practices, and periodic updates instead of plain lectures once a year that people forget quickly."],
        ["REGULAR SECURITY AUDITS AND ASSESSMENTS", "You can't improve what you don't measure. Security evaluations consist of testing your defences by means of vulnerability assessments, penetration tests, and security audits in order to discover flaws ahead of the attackers. Consider it as a medical checkup for your security posture. Such evaluations should take place frequently, not merely once a year, since the threat landscape is constantly changing."],
        ["INCIDENT RESPONSE PLANNING AND MANAGEMENT", "Having a plan can be the difference between a little inconvenience and a catastrophic breach when (not if) a security incident occurs. An effective incident response plan describes who is responsible for what, how to contain the damage, how to look into what happened, how to recover systems and data, and how to interact with stakeholders. To ensure that everyone is aware of their responsibilities when actual crises arise, teams should regularly practice these strategies through tabletop exercises."]
    ];

    return (
        <div className="grid md:grid-cols-[220px_1fr] gap-6 pt-2">
            {data.map((item, i) => (
                <div key={i} className="contents">
                    <div className="text-xs font-semibold uppercase text-[#0F172A]">
                        {item[0]}
                    </div>
                    <p className="text-sm text-[#070707]">
                        {item[1]}
                    </p>
                </div>
            ))}
        </div>
    );
}
function ToolsContent() {
    const tools = [
        ["Endpoint Protection and antivirus software", "In your organization, every laptop, smartphone, and server is an endpoint; a potential entry point for attackers. Modern endpoint protection is huge compared to traditional antivirus software. It isolates compromised devices, monitors suspicious activity, enforces security standards, and employs behavioural analysis to identify new risks. It serves as your initial line of security against malware and illegal access."],
        ["Identity and Access Management (IAM) Solutions", "IAM systems manage who has access to what resources within your company. They take care of the user's identity verification, impose the password rules, control the access, and verify that the workers have only the rights necessary for their tasks. It should be noted that a strong IAM system is a must since the majority of the breaches are due to stolen credentials. Today's IAM consists of multi-factor authentication, single sign-on, and the automatic provisioning and deprovisioning of users as they come and go in the organization, among others."],
        ["Firewalls and Intrusion Detection and Prevention Systems (IDPS)", "Firewalls serve as the access controllers for your network and the internet, managing the flow of data according to the pre-set security rules. Intrusion Prevention Systems (IPS) proactively block identified threats. Combined with other tools, they filter out malicious traffic while allowing legitimate communications."],
        ["Cloud Security", "The deployment of cloud security tools is specifically aimed at securing the digital assets and applications that are located in the cloud environment. Tools include cloud access security brokers (CASB), cloud workload protection platforms (CWPP) to secure virtual machines (VMs) and containers, and cloud security posture management (CSPM) to detect configuration errors. As more companies adopt cloud technology, mastering these tools becomes a key factor in the career growth of security professionals."],
        ["Collaboration security", "Protecting collaboration tools like Slack, Teams, Zoom, and shared drives is essential as remote work becomes more common. Securing collaboration tools involves preventing data leaks in messaging, blocking malware in shared files, enforcing security policies in video calls and restricting unauthorized access to sensitive information. These solutions maintain team productivity by striking a balance between security and usability."],
        ["Encryption and data protection tools", "With encryption, the original information is transformed in a way that only the legitimate users possessing the corresponding keys can comprehend it. Whether data is at rest in a database or in transit over a network, encryption ensures attackers cannot use it if intercepted. Data confidentiality also covers data loss prevention (DLP) mechanisms that stop sensitive data from leaving your company accidentally or on purpose."],
        ["Security Information and Event Management (SIEM) Systems", "The brains behind your security operations are SIEM platforms. They collect security data and logs from your infrastructure, analyze them for attacks, alert analysts to incidents and provide forensic data for breach investigations. Today's SIEM systems leverage machine learning to enhance their detection power and minimize false positives that are a burden for analysts as they occupy their time."],
        ["Extended detection and response (XDR)", "XDR builds on endpoint detection and response (EDR) but extends protection across the entire security stack, including endpoints, network, cloud environments and applications. Instead of having to handle various isolated security measures, XDR links data from all the sources to give a wide-ranging perspective of the dangers. It takes automatic action on the attacks, thus cutting down the period of the detection and containment process from hours to minutes."],
        ["Unified SecOps solution","A single SecOps platform unites all your security operation tools, such as SIEM, XDR, threat intelligence, vulnerability management, etc., into one integrated system. This strategy eliminates the division between the security teams and gives a clearer view of the threats, automates the manual processes, and allows quicker and better-coordinated responses. For companies that are exhausted from managing many separate solutions, unified SecOps is the future of security operations."]
    ];

    return (
        <div className="grid md:grid-cols-[200px_1fr] gap-6 pt-2">
            {tools.map((t, i) => (
                <div key={i} className="contents">
                    <div className="text-sm font-medium text-[#0F172A]">
                        {t[0]}
                    </div>
                    <p className="text-sm text-gray-700">
                        {t[1]}
                    </p>
                </div>
            ))}
        </div>
    );
}
function FrameworksContent() {
    return (
        <div className="space-y-5 pt-2">
            <h4 className="text-[#475569]">Cybersecurity frameworks offer organized methods for controlling security threats and constructing strong defences. Organizations depend on recognized frameworks and standards to steer their cybersecurity initiatives. Among the most commonly utilized frameworks are:</h4>
            <div>
                <h4 className="text-[#135BEC] font-semibold text-sm">
                    NIST Framework for Cybersecurity
                </h4>
                <p className="text-sm text-gray-700">
                    This framework, which was created by the National Institute of Standards and Technology, divides cybersecurity efforts into five main categories: Identify, Protect, Detect, Respond, and Recover. It has become the de facto standard in the US and is adaptable enough to work for companies of any size and any industry. Organizations can use the framework to communicate cybersecurity risk in business terms, set goals for improvement, and assess their current security posture.
                </p>
            </div>

            <div>
                <h4 className="text-[#135BEC] font-semibold text-sm">
                    ISO/IEC 27001
                </h4>
                <p className="text-sm text-gray-700">
                    This global standard offers a methodical way to handle sensitive data. Companies that obtain ISO 27001 certification show that they have put in place thorough security controls that address everything from incident management to employee training to physical security. Although it takes a significant amount of work, certification gives partners and clients confidence that security is taken seriously. Working with ISO 27001-certified organizations is either mandatory or highly preferred in many industries and geographical areas.
                </p>
            </div>

            <div>
                <h4 className="text-[#135BEC] font-semibold text-sm">
                    CIS Controls
                </h4>
                <p className="text-sm text-gray-700">
                   A prioritized list of defences against the most frequent cyberattacks is provided by the Centre for Internet Security Controls. Based on the size and sophistication of the organization, these 18 controls are arranged by implementation groups (IG1, IG2, and IG3). CIS Controls are especially useful because they are prescriptive, meaning they tell you exactly what to do rather than just what to think about. Particularly for those who are just beginning their cybersecurity journey, many organizations use CIS Controls as their roadmap for enhancing security.
                </p>
            </div>

        </div>
    );
}
function StandardsContent() {
    return (
        <div className="grid md:grid-cols-[1fr_200px] gap-8 pt-2">

            <div>
                <p className="text-sm text-[#0F172A] mb-4">
                    Cybersecurity standards provide frameworks and guidelines to protect data, systems and networks. They ensure consistent security practices, compliance with regulations, and reduce risks from cyber threats across organizations and industries.
                </p>

                <h4 className="font-semibold text-sm text-[#0F172A] mb-2">
                    Importance of compliance
                </h4>

                <p className="text-sm text-[#0F172A]">
                    Compliance isn't just about staying out of trouble with the law to avoid huge fines. Minimum security standards are set by regulations such as GDPR, HIPAA, PCI-DSS, and SOC 2. These standards protect customers, patients, and citizens. These rules make companies put in place security measures they might not have otherwise, make sure sensitive data is handled correctly, and keep records that show they did their part. For sure, compliance doesn't mean security, but it sets a standard that makes security higher across whole industries. Compliance requirements are very important for people who work in cybersecurity, since many companies need help figuring out how to deal with these complicated rules.
                </p>
            </div>

            <div className="flex flex-col gap-6 items-center justify-center">

                <div className="text-center">
                    <h3 className="text-2xl text-[#0F172A] font-bold">100%</h3>
                    <p className="text-xs text-gray-600">Mandatory Compliance</p>
                </div>

                <div className="text-center">
                    <h3 className="text-2xl text-[#0F172A] font-bold">Global</h3>
                    <p className="text-xs text-gray-600">Regulatory Adoption</p>
                </div>

            </div>

        </div>
    );
}

// ================= COMPONENT =================

export default function KeyAspectsSection() {
    const [active, setActive] = useState<number | null>(null);

    const toggle = (i: number) => {
        setActive(prev => (prev === i ? null : i));
    };

    return (
        <section className="py-20 bg-white">

            <div className="max-w-5xl mx-auto px-6">

                {/* TITLE */}
                <div className="text-center mb-10">
                    <h2 className="text-[26px] text-[#0F172A] font-semibold">
                        Students must know these{" "}
                        <span className="text-[#EDA12E]">key aspects</span> of Cybersecurity
                    </h2>

                    <p className="text-lg text-[#475569] mt-4 max-w-5xl mx-auto">
                        In case you are really interested in cybersecurity, then knowing the following frameworks, tools, and strategies will not be an option for you; it will be a must. These components serve as the foundation for how experts really safeguard systems in the real world.
                    </p>
                </div>

                {/* BLOCKS */}
                <div className="space-y-4">

                    {aspectsData.map((item, i) => {
                        const isOpen = active === i;

                        return (
                            <div
                                key={i}
                                className={`${item.color} rounded-xl overflow-hidden`}
                            >

                                {/* HEADER */}
                                <div
                                    onClick={() => toggle(i)}
                                    className="px-6 py-5 flex justify-between items-center cursor-pointer"
                                >
                                    <span className="font-medium text-[#0F172A] text-lg">
                                        {item.title}
                                    </span>

                                    <span className={`transition ${isOpen ? "rotate-180" : ""}`}>
                                        ⌄
                                    </span>
                                </div>

                                {/* CONTENT */}
                                <div
                                    className={`transition-all duration-500 overflow-hidden ${
                                        isOpen ? "max-h-[1200px] px-6 pb-6" : "max-h-0 px-6"
                                    }`}
                                >
                                    {item.type === "strategies" && <StrategiesContent />}
                                    {item.type === "tools" && <ToolsContent />}
                                    {item.type === "frameworks" && <FrameworksContent />}
                                    {item.type === "standards" && <StandardsContent />}
                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* BUTTON */}
                <div className="flex justify-center mt-10">
                    <button className="px-7 py-2.5 bg-[#EDA12E] text-white rounded-full text-sm">
                        Speak to Our Experts
                    </button>
                </div>

            </div>
        </section>
    );
}
