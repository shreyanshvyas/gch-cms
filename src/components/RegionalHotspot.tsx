// src/components/RegionalHotspots.tsx
import Image from "next/image";
import { cn } from "./cn";

export type LocationCardData = {
    title: string;
    description: string;
    bgColor?: string; // Tailwind color class like 'bg-green-50', 'bg-orange-50', etc.
};

export type RegionalHotspotsProps = {
    title: string;
    subtitle?: string;
    mapSvgPath: string; // Path to SVG in public folder, e.g., '/images/usa-map.svg'
    mapAlt?: string;
    locations: LocationCardData[];
};

export default function RegionalHotspots({
    title,
    subtitle,
    mapSvgPath,
    mapAlt = "Regional map",
    locations,
}: RegionalHotspotsProps) {
    return (
        <section className="mx-auto max-w-7xl px-6 md:py-20 py-12">
            {/* Header */}
            <div className=" text-center">
                <h2 className="mb-4 text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 md:w-[50rem] mx-auto">
                    {title}
                </h2>
                {subtitle ? (
                    <p className="mx-auto max-w-3xl text-base leading-7 text-gray-600">{subtitle}</p>
                ) : null}
            </div>

            {/* Map Visual */}
            <div className=" flex justify-center">
                <div className="relative w-full">
                    <Image
                        src={mapSvgPath}
                        alt={mapAlt}
                        width={500}
                        height={500}
                        className="md:h-[35rem] h-auto w-auto mx-auto py-5"
                        priority
                    />
                </div>
            </div>

            {/* Location Cards - Flex Wrap Layout */}
            <div className="flex flex-wrap gap-6">
                {locations.map((location, idx) => (
                    <LocationCard
                        key={idx}
                        {...location}
                        className={cn(
                            "basis-full", // Full width on mobile
                            idx < 3
                                ? "sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]" // 2 cols tablet, 3 cols desktop
                                : "sm:basis-[calc(50%-0.75rem)]" // 2 cols on tablet and up
                        )}
                    />
                ))}
            </div>
        </section>
    );
}

type LocationCardProps = LocationCardData & {
    className?: string;
};

function LocationCard({ title, description, bgColor = "bg-gray-50", className }: LocationCardProps) {
    return (
        <article
            className={cn(
                "rounded-2xl p-5 md:p-8 transition-shadow hover:shadow-md",
                bgColor,
                className
            )}
        >
            <h3 className="mb-3 text-xl md:text-2xl font-bold leading-8 text-gray-900">
                {title}
            </h3>
            <p className="text-base md:text-xl leading-6 text-[#535862]">{description}</p>
        </article>
    );
}
