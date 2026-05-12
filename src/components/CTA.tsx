"use client";

interface ConsultationCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onClick?: () => void;
  className?: string;
}

export default function ConsultationCTA({
  title,
  subtitle,
  buttonText,
  onClick,
  className = "",
}: ConsultationCTAProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#F8F8F8] py-24 ${className}`}
    >
      {/* BLUE GLOW */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(69,124,219,0.28),transparent)]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        
        {/* HEADING */}
        <h2 className="font-heading text-5xl font-bold tracking-tight text-[#1652A1]">
          {title}
        </h2>

        {/* SUBTITLE */}
        <p className="mt-8 text-3xl font-medium leading-relaxed text-[#E59A21]">
          {subtitle}
        </p>

        {/* BUTTON */}
        <button
          onClick={onClick}
          className="
            mt-16
            rounded-full
            bg-[#1652A1]
            px-16
            py-5
            text-2xl
            font-semibold
            text-white
            shadow-[0_0.5rem_1.2rem_rgba(0,0,0,0.25)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_0.8rem_1.6rem_rgba(0,0,0,0.28)]
          "
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}