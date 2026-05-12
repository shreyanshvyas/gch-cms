// src/components/HiringOrganizations.tsx
import Image, { StaticImageData } from "next/image";
import { cn } from "./cn";

export type LogoData = {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
};

export type CategoryData = {
  title: string;
  logos: LogoData[];
  bgColor?: string;
};

export type HiringOrganizationsProps = {
  title: string;
  subtitle?: string;
  categories: CategoryData[];
};

export default function HiringOrganizations({
  title,
  subtitle,
  categories,
}: HiringOrganizationsProps) {
  return (
    <section className="bg-[#FFFAF1] relative">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {title}
          </h2>
          {subtitle ? (
            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600">{subtitle}</p>
          ) : null}
        </div>

        {/* Categories Grid */}

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-12">
          {categories.map((category, i) => {
            // 0..4 expected: 2 on row 1 (1/2 each), 3 on row 2 (1/3 each)
            const lgPos =
              i === 0
                ? "lg:col-span-6 lg:col-start-1"
                : i === 1
                  ? "lg:col-span-6 lg:col-start-7"
                  : i === 2
                    ? "lg:col-span-4 lg:col-start-1"
                    : i === 3
                      ? "lg:col-span-4 lg:col-start-5"
                      : "lg:col-span-4 lg:col-start-9";

            return (
              <div key={i} className={lgPos}>
                <CategoryCard {...category} />
              </div>
            );
          })}
        </div>
      </div>
      <div
        aria-hidden
        // moved further down so the scallop hugs the bottom edge like your screenshot
        style={{
          position: "absolute",
          bottom: "-79px", // <-- moved down (tweak this number if needed)
          left: 0,
          right: 0,
          height: 80,
          pointerEvents: "none",
          zIndex: 30,
        }}
      >
        <svg viewBox="0 0 1440 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1362.47 37.1875C1375.31 37.1875 1381.57 33.038 1388.28 28.5956C1395.3 23.9523 1402.77 19.0159 1417.38 19.0156C1427.7 19.0156 1434.45 21.4761 1440 24.5552V0.843704H0V19.9864C8.23348 21.6502 13.6079 25.1997 18.7388 28.5956C25.4511 33.038 31.7107 37.1875 44.553 37.1875C57.3945 37.1873 63.6541 33.0379 70.3662 28.5956C77.3818 23.9524 84.8516 19.0157 99.4648 19.0156C114.078 19.0156 121.548 23.9524 128.563 28.5956C135.276 33.0379 141.536 37.1873 154.378 37.1875C167.22 37.1875 173.48 33.038 180.192 28.5956C187.208 23.9521 194.679 19.0156 209.293 19.0156C223.906 19.0159 231.376 23.9523 238.392 28.5956C245.104 33.038 251.363 37.1874 264.205 37.1875C277.047 37.1874 283.307 33.038 290.019 28.5956C297.035 23.9523 304.505 19.0157 319.118 19.0156C333.731 19.0156 341.201 23.9524 348.217 28.5956C354.929 33.0379 361.189 37.1873 374.031 37.1875C386.873 37.1874 393.132 33.0379 399.844 28.5956C406.86 23.9521 414.331 19.0157 428.946 19.0156C443.559 19.0158 451.029 23.9523 458.044 28.5956C464.757 33.038 471.016 37.1875 483.858 37.1875C496.7 37.1874 502.959 33.0379 509.672 28.5956C516.687 23.9524 524.157 19.0158 538.77 19.0156C553.383 19.0156 560.854 23.9524 567.87 28.5956C574.582 33.0378 580.842 37.1872 593.683 37.1875C606.525 37.1875 612.785 33.038 619.497 28.5956C626.513 23.9521 633.985 19.0156 648.599 19.0156C663.212 19.0158 670.682 23.9523 677.697 28.5956C684.41 33.038 690.669 37.1874 703.511 37.1875C716.353 37.1875 722.612 33.038 729.325 28.5956C736.34 23.9523 743.81 19.0158 758.423 19.0156C773.038 19.0156 780.509 23.9521 787.525 28.5956C794.237 33.038 800.497 37.1875 813.339 37.1875C823.259 37.187 829.434 33.13 837.118 28.5246C844.86 23.8841 853.719 19.0157 868.251 19.0156C882.864 19.0158 890.334 23.9524 897.35 28.5956C904.062 33.038 910.322 37.1875 923.164 37.1875C936.006 37.1875 942.266 33.038 948.978 28.5956C955.994 23.9523 963.463 19.0158 978.077 19.0156C992.691 19.0157 1000.16 23.9521 1007.18 28.5956C1013.89 33.0379 1020.15 37.1874 1032.99 37.1875C1045.83 37.1872 1052.09 33.0379 1058.81 28.5956C1065.82 23.9524 1073.29 19.0156 1087.9 19.0156C1102.52 19.0157 1109.99 23.9523 1117 28.5956C1123.71 33.038 1129.97 37.1874 1142.82 37.1875C1155.66 37.1874 1161.92 33.038 1168.63 28.5956C1175.65 23.9523 1183.12 19.0159 1197.73 19.0156C1212.34 19.0156 1219.81 23.9521 1226.83 28.5956C1233.54 33.038 1239.8 37.1875 1252.64 37.1875C1265.49 37.1872 1271.75 33.0378 1278.46 28.5956C1285.47 23.9524 1292.94 19.0156 1307.56 19.0156C1322.17 19.0158 1329.64 23.9524 1336.66 28.5956C1343.37 33.0379 1349.63 37.1874 1362.47 37.1875Z" fill="#FFFAF1" />
        </svg>

      </div>
    </section>
  );
}

type CategoryCardProps = CategoryData;

function CategoryCard({ title, logos, bgColor = "bg-white" }: CategoryCardProps) {

  function getLgPos(i: number, total: number) {
    // Default for 5-card layout like your PremiumSkills: 3 on top, 2 centered
    if (total === 5) {
      // 0–2 on top row, 3–4 centered as 5+5
      if (i <= 2) return "lg:col-span-4";
      if (i === 3) return "lg:col-span-5 lg:col-start-2";
      return "lg:col-span-5 lg:col-start-7";
    }

    if (total === 4) {
      // 0,1 top row; 2,3 next row
      return i % 2 === 0 ? "lg:col-span-6 lg:col-start-1" : "lg:col-span-6 lg:col-start-7";
    }

    // For 3 cards: center the single first card, next two sit beneath it
    if (total === 3) {
      if (i === 0) return "lg:col-span-6 lg:col-start-4"; // centered in 12-col grid
      // i 1–2: split evenly below
      return i === 1 ? "lg:col-span-6 lg:col-start-1" : "lg:col-span-6 lg:col-start-7";
    }

    // For any odd counts where you want the first item centered on the first row:
    // Put item 0 centered; others flow in two columns beneath
    if (total % 2 === 1) {
      if (i === 0) return "lg:col-span-6 lg:col-start-4"; // center
      // After the first, place items in two columns 6+6
      // 1,3,5... left; 2,4,6... right
      const posInPair = (i - 1) % 2; // 0 = left, 1 = right
      return posInPair === 0 ? "lg:col-span-6 lg:col-start-1" : "lg:col-span-6 lg:col-start-7";
    }

    // Fallback: simple equal thirds
    return "lg:col-span-4";
  }
  return (
    <article className={cn("rounded-3xl p-8 shadow-sm h-full", bgColor)}>
      {/* Category Title */}
      <h3 className="mb-2 text-center text-xl font-semibold text-gray-700">{title}</h3>

      <hr />

      {/* Logos Grid - Responsive 2 columns */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 mt-4">
        {logos.map((logo, idx) => {
          const lgPos = getLgPos(idx, logos.length);
          return (
            <div key={idx} className={`flex items-center justify-center ${lgPos}`}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 w-22 object-contain"
              />
            </div>
          );
        })
        }

      </div>
    </article>
  );
}
