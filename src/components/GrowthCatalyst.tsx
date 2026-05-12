// src/components/GrowthCatalysts.tsx
import { LucideIcon } from "lucide-react";
import { cn } from "./cn";

export type CatalystCardData = {
  icon: LucideIcon;
  iconColor?: string; // Tailwind text color class like 'text-purple-700'
  title: string;
  description: string;
  bgColor?: string; // Tailwind bg color class like 'bg-purple-50'
};

export type GrowthCatalystsProps = {
  title: string;
  subtitle?: string;
  catalysts: CatalystCardData[];
};

export default function GrowthCatalysts({ title, subtitle, catalysts }: GrowthCatalystsProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 md:py-20 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
          {title}
        </h2>
        {subtitle ? (
          <p className="mx-auto max-w-4xl text-base leading-7 text-gray-600">{subtitle}</p>
        ) : null}
      </div>

      {/* 2x2 Grid Layout */}
      <div className="grid gap-6 sm:grid-cols-2">
        {catalysts.map((catalyst, idx) => (
          <CatalystCard key={idx} {...catalyst} />
        ))}
      </div>
    </section>
  );
}

type CatalystCardProps = CatalystCardData;

function CatalystCard({
  icon: Icon,
  iconColor = "text-gray-700",
  title,
  description,
  bgColor = "bg-gray-50",
}: CatalystCardProps) {
  return (
    <article
      className={cn(
        "flex items-start gap-6 rounded-3xl p-8 transition-shadow hover:shadow-lg border",
        bgColor
      )}
    >
      {/* Icon */}
      <div className={cn("shrink-0", iconColor)}>
        <Icon className="h-12 w-12" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className= {cn("mb-2 text-xl font-semibold leading-tight text-gray-900", iconColor)}>{title}</h3>
        <p className="text-sm leading-6 text-gray-700">{description}</p>
      </div>
    </article>
  );
}
