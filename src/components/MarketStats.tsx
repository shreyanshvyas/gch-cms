// src/components/MarketStats.tsx
import { LucideIcon } from "lucide-react";
import { cn } from "./cn";

export type StatCardData = {
  icon: LucideIcon;
  iconColor?: string; // Tailwind text color class like 'text-purple-600'
  title: string;
  description: string;
  bgColor?: string; // Tailwind bg color class like 'bg-purple-50'
};

export type MarketStatsProps = {
  title: string;
  subtitle?: string;
  stats: StatCardData[];
};

export default function MarketStats({ title, subtitle, stats }: MarketStatsProps) {
  return (
    <section className=" bg-[#FFFAF1] relative">
      <div
        aria-hidden
        // moved upward so the scallop sits higher relative to the card
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 80,
          pointerEvents: "none",
          zIndex: 30,
        }}
        className="-top-2 md:-top-4 xl:-top-8"
      >
        <svg viewBox="0 0 1440 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1362.47 0C1375.31 0 1381.57 4.14946 1388.28 8.59194C1395.3 13.2352 1402.77 18.1716 1417.38 18.1719C1427.7 18.1719 1434.45 15.7114 1440 12.6323V36.3438H0V17.2011C8.23348 15.5373 13.6079 11.9878 18.7388 8.59194C25.4511 4.14946 31.7107 0 44.553 0C57.3945 0.000190925 63.6541 4.14962 70.3662 8.59194C77.3818 13.2351 84.8516 18.1718 99.4648 18.1719C114.078 18.1719 121.548 13.2351 128.563 8.59194C135.276 4.14957 141.536 0.000200094 154.378 0C167.22 2.37939e-06 173.48 4.14946 180.192 8.59194C187.208 13.2354 194.679 18.1719 209.293 18.1719C223.906 18.1716 231.376 13.2352 238.392 8.59194C245.104 4.14955 251.363 6.18047e-05 264.205 0C277.047 9.51218e-05 283.307 4.14951 290.019 8.59194C297.035 13.2352 304.505 18.1718 319.118 18.1719C333.731 18.1719 341.201 13.2351 348.217 8.59194C354.929 4.1496 361.189 0.000240109 374.031 0C386.873 9.14194e-05 393.132 4.14957 399.844 8.59194C406.86 13.2354 414.331 18.1718 428.946 18.1719C443.559 18.1717 451.029 13.2352 458.044 8.59194C464.757 4.14946 471.016 0 483.858 0C496.7 8.23411e-05 502.959 4.14958 509.672 8.59194C516.687 13.2351 524.157 18.1717 538.77 18.1719C553.383 18.1719 560.854 13.2351 567.87 8.59194C574.582 4.14971 580.842 0.000306293 593.683 0C606.525 0 612.785 4.14952 619.497 8.59194C626.513 13.2354 633.985 18.1719 648.599 18.1719C663.212 18.1717 670.682 13.2352 677.697 8.59194C684.41 4.14954 690.669 9.03558e-05 703.511 0C716.353 1.50841e-05 722.612 4.14948 729.325 8.59194C736.34 13.2352 743.81 18.1717 758.423 18.1719C773.038 18.1719 780.509 13.2354 787.525 8.59194C794.237 4.14954 800.497 0 813.339 0C823.259 0.000458631 829.434 4.05745 837.118 8.66292C844.86 13.3034 853.719 18.1718 868.251 18.1719C882.864 18.1717 890.334 13.2351 897.35 8.59194C904.062 4.14947 910.322 2.62462e-05 923.164 0C936.006 0 942.266 4.14946 948.978 8.59194C955.994 13.2352 963.463 18.1717 978.077 18.1719C992.691 18.1718 1000.16 13.2354 1007.18 8.59194C1013.89 4.1496 1020.15 6.54958e-05 1032.99 0C1045.83 0.000270276 1052.09 4.1496 1058.81 8.59194C1065.82 13.2351 1073.29 18.1719 1087.9 18.1719C1102.52 18.1718 1109.99 13.2352 1117 8.59194C1123.71 4.1495 1129.97 6.49561e-05 1142.82 0C1155.66 8.7729e-05 1161.92 4.14954 1168.63 8.59194C1175.65 13.2352 1183.12 18.1716 1197.73 18.1719C1212.34 18.1719 1219.81 13.2354 1226.83 8.59194C1233.54 4.14948 1239.8 0 1252.64 0C1265.49 0.000253804 1271.75 4.14968 1278.46 8.59194C1285.47 13.2351 1292.94 18.1719 1307.56 18.1719C1322.17 18.1717 1329.64 13.2351 1336.66 8.59194C1343.37 4.14961 1349.63 0.000134835 1362.47 0Z" fill="#FFFAF1" />
        </svg>

      </div>
      <div className="mx-auto max-w-7xl px-6 md:py-20 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          {subtitle ? (
            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600">{subtitle}</p>
          ) : null}
        </div>

        {/* Stats Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

type StatCardProps = StatCardData;

function StatCard({
  icon: Icon,
  iconColor = "text-gray-700",
  title,
  description,
  bgColor = "bg-gray-50"
}: StatCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col items-center rounded-3xl p-8 text-center transition-shadow hover:shadow-lg border",
        bgColor
      )}
    >
      {/* Icon */}
      <div className={cn("mb-6", iconColor)}>
        <Icon className="h-16 w-16" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className={cn("mb-3 text-2xl md:text-3xl font-semibold leading-tight", iconColor)}>
        {title}
      </h3>

      {/* Description */}
      <p className="md:text-lg text-base leading-6 text-gray-700">{description}</p>
    </article>
  );
}
