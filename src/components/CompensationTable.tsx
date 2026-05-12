// src/components/CompensationTable.tsx
type Row = {
  position: string;
  salary: string;
  responsibilities: string;
  color?: "yellow" | "red" | "green" | "blue" | "orange" |"light_green"; // choose pastel per row
};

export type CompensationTableProps = {
  title: string;
  subtitle?: string;
  rows: Row[];
};

const colorMap: Record<NonNullable<Row["color"]>, string> = {
  yellow: "bg-[#FEFBE8] border-[#FEF7C3] text-[#854A0E]",
  orange:"bg-[#FEF6EE] border-[#FDEAD7] text-[#932F19]",
  red: "bg-[#FFF1F3] border-[#FFE4E8] text-[#A11043]",
  light_green: "bg-[#F3FEE7] border-[#E3FBCC] text-[#326212]",
  green: "bg-[#EDFCF2] border-[#D3F8DF] text-[#095C37]",
  blue: "bg-[#ECFDFF] border-[#CFF9FE] text-[#155B75]",
};

export default function CompensationTable({ title, subtitle, rows }: CompensationTableProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 md:py-20 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mx-auto max-w-3xl text-base leading-7 text-gray-600">{subtitle}</p>
        ) : null}
      </div>

      {/* Scroll wrapper - allows horizontal scroll on mobile */}
      <div className="overflow-x-auto">
        {/* Inner container with min-width to force scroll when needed */}
        <div className="md:min-w-[900px] min-w-xl">
          {/* Column headers */}
          <div
            className="grid grid-cols-3 gap-4"
            role="table"
            aria-label={title}
          >
            <HeaderCell >Position</HeaderCell>
            <HeaderCell>Average Compensation</HeaderCell>
            <HeaderCell>Core Responsibilities</HeaderCell>

            {/* Data rows */}
            {rows.map((r, i) => {
              const cellBg = r.color ? colorMap[r.color] : "bg-gray-50";
              return (
                <Fragment key={i}>
                  <DataCell className={cellBg}>{r.position}</DataCell>
                  <DataCell className={cellBg}>
                    <span className="font-semibold">{r.salary}</span>
                  </DataCell>
                  <DataCell className={cellBg}>{r.responsibilities}</DataCell>
                </Fragment>
              );
            })}
          </div>
          <span className="md:hidden block mt-4 text-gray-500">*Scroll on x-axis to see full table</span>
        </div>
      </div>
    </section>
  );
}

import { Fragment } from "react";

function HeaderCell({ children }: { children: React.ReactNode }) {
  return (
    <h3
      role="columnheader"
      className="rounded-2xl bg-[#FAFAFA] flex items-center justify-center px-6 py-4 text-center text-base font-semibold text-gray-700 shadow-sm md:text-lg"
    >
      {children}
    </h3>
  );
}

function DataCell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3
      role="cell"
      className={`flex h-full items-center justify-center rounded-2xl border px-2 py-6 text-center text-base leading-6 md:text-lg ${className}`}
    >
      {children}
    </h3>
  );
}

