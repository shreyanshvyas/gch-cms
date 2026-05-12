import CyberHero from "@/components/CyberHero";
import AudienceSection from "@/components/AudienceSection";
import WhatIsSection from "@/components/WhatIsSection";
import KeyComponents from "@/components/KeyComponents";
import Types from "@/components/Types";
import CourseSection from "@/components/CourseSection";
import JourneySection from "@/components/JourneySection";
import OpportunitySection from "@/components/OpportunitySection";
import Highlights from "@/components/HighLights";
import EntryLevelRoles from "@/components/Entry-Level-Roles";
import MidLevelRoles from "@/components/Mid-Level-Roles";
import AdvancedLevelRoles from "@/components/AdvancedRoles";
import SkillsGapSection from "@/components/SkillsGapSection";
import CyberSecurityLandscape from "@/components/CybersecurityLanscape";
import KeyAspectSection from "@/components/KeyAspectSection";
import ReusableFAQ from "@/components/ReusableFAQ";


export default function Page() {
  return (
    <main>
      <CyberHero />
      <AudienceSection />
      <WhatIsSection />
      <KeyComponents />
      <Types />
      <CourseSection />
      <JourneySection />
      <OpportunitySection />
      <Highlights />
      <EntryLevelRoles />
      <MidLevelRoles />
      <AdvancedLevelRoles />
      <SkillsGapSection />
      <CyberSecurityLandscape />
      <KeyAspectSection />
      <ReusableFAQ />
    </main>
  );
}