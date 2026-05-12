// src/components/CostOfLiving.tsx
import ImagePanel from "@/components/ImagePanel";
import DisclosureList, { DisclosureItem } from "@/components/accordion";
import livingcost1 from "@/assets/country-guide/livingcost1.png"
import livingcost2 from "@/assets/country-guide/livingcost2.png"
import livingcost3 from "@/assets/country-guide/livingcost3.png"

type CostOfLivingProps = {
    regionAccordion: DisclosureItem[];
    educationAccordion: DisclosureItem[];
    taxAccordion: DisclosureItem[];
};

export default function CostOfLiving({regionAccordion, educationAccordion, taxAccordion }: CostOfLivingProps) {
    return (
        <section className="mx-auto max-w-7xl px-6 md:py-24 py-12"> 
            <div className="mb-10 text-center">
                <h2 className="mb-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                   Cost of Living Analysis - Housing, Tax, Healthcare & Education 
                </h2></div>
            {/* heading + subtitle remain the same */}

            {/* Row 1: Left accordion, Right image */}
            <div className="grid gap-8 lg:grid-cols-2">
                <div className="md:order-1 order-2">
                    <DisclosureList items={regionAccordion} />
                </div>
                <div className="md:order-2 order-1">
                <ImagePanel src={livingcost1.src} alt="Regional Housing Market" priority /></div>
            </div>

            {/* Row 2: Left image, Right accordion */}
            <div className="mt-12 grid gap-8 lg:grid-cols-2 ">
                <ImagePanel src={livingcost2.src} alt="Education System"  />
                <div>
                    <DisclosureList items={educationAccordion} /></div>
            </div>

            {/* Row 3: Left accordion, Right image */}
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="md:order-1 order-2">
                    <DisclosureList items={taxAccordion} />
                    </div>
                <div className="md:order-2 order-1">
                <ImagePanel src={livingcost3.src} alt="Tax Planning Strategies" /></div>
            </div>
        </section>
    );
}
