"use client";
import React from "react";

const SalaryRange = () => {
  const salaryData = [
    { label: "Base Salary", range: "$53k - $117k", fill: "55%", flex: "flex-row-reverse" },
    { label: "Bonus", range: "$1 - $12k", fill: "25%" },
    { label: "Profit Salary", range: "$508 - $12k", fill: "25%" },
    { label: "Commission", range: "$0k - $15k", fill: "25%" },
    { label: "Total Pay", range: "$50k - $119k", fill: "75%", flex: "flex-row-reverse"  },
  ];

  return (
    <div className="max-w-7xl md:mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm md:p-10 p-6 flex flex-col md:flex-row justify-between gap-10 md:mb-30 mb-20">
      {/* LEFT SECTION */}
      <div className="flex-1 flex flex-col justify-around">
        <div>
          <h2 className="text-gray-800 font-semibold text-lg">
            Average Cybersecurity Salary Range
          </h2>

          <div className="mt-10">
            <p className="text-gray-500 text-base">Average Salary</p>
            <h3 className="md:text-5xl text-4xl font-extrabold text-gray-900">
              $93,000
              <span className="text-gray-500 text-base font-medium">yearly</span>
            </h3>
          </div>
        </div>

        {/* Salary Boxes */}
        <div className="mt-12">
          <div className="flex items-end gap-3">
            <div className="w-16 h-16 rounded-lg bg-[#FDF4FF]"></div>
            <div className="w-16 h-16 rounded-lg bg-[#FBE8FF]"></div>
            <div className="w-16 h-16 rounded-lg bg-[#F6D0FE]"></div>
            <div className="w-16 h-16 rounded-lg bg-[#E478FA]"></div>
            <div className="w-16 h-16 rounded-lg bg-[#BA24D5]"></div>
            <div className="w-16 h-16 rounded-lg bg-[#FDF4FF]"></div>
          </div>

          {/* Salary Labels */}
          <div className="mt-8 flex justify-between max-w-md text-gray-800 font-semibold">
            <div className="text-center">
              <p>$51,000</p>
              <p className="text-gray-500 text-sm font-normal">10%</p>
            </div>
            <div className="text-center">
              <p>$94,000</p>
              <p className="text-gray-500 text-sm font-normal">Median</p>
            </div>
            <div className="text-center">
              <p>$169,000</p>
              <p className="text-gray-500 text-sm font-normal">90%</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 flex flex-col justify-between gap-4">
        {salaryData.map((item, index) => (
          <div
            key={index}
            className="bg-[#FAF9FB] rounded-2xl px-6 py-5 flex items-center justify-between"
          >
            {/* Label and Range horizontally aligned */}
            <div className="flex md:flex-row flex-col items-center justify-between w-2/5">
              <p className="text-gray-800 font-semibold text-sm whitespace-nowrap">
                {item.label}
              </p>
              <p className="text-gray-500 text-sm whitespace-nowrap md:ml-2">
                {item.range}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-2/5">
              <div className={`w-full h-3 bg-[#F6D0FE] rounded-full overflow-hidden flex ${item.flex}`}>
                <div
                  className="h-full bg-[#9F1AB1] rounded-full"
                  style={{ width: item.fill }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryRange;