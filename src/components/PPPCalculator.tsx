// components/PppCalculator.tsx
"use client";
import { ChevronDownIcon, LucideMessageCircleMore, PiggyBank, Plane, ShoppingBag, Lightbulb, Utensils, Home } from "lucide-react";
import React, { useEffect, useMemo, useState, useRef } from "react";


type CountryItem = {
  id?: number | string;
  country_code: string;
  country_name: string;
  currency_code: string;
  [k: string]: unknown;
};

type SalarySummaryItem = {
  min_salary: number;
  max_salary: number;
  [k: string]: unknown;
};

type SalaryResponse = {
  status: "success" | string;
  result?: {
    summary: SalarySummaryItem[];
  };
  [k: string]: unknown;
};

type MonthlyBreakup = {
  HOUSING: number;
  TRAVEL: number;
  FOOD: number;
  UTILITIES: number;
  MISCELLANEOUS: number;
  SAVINGS: number;
};

type PppResponse = {
  status: "success" | string;
  result?: {
    converted_amount: string;
    desired_currency_code: string;
    local_currency_code: string;
    original_amount: string;
    estimated_monthly_breakup: MonthlyBreakup;
  };
  [k: string]: unknown;
};

const COUNTRIES_API = "https://api.careers.edept.co/v1/countries";
const PPP_API = "https://api.careers.edept.co/v1/ppp/calculate";
const SALARY_API = "https://api.careers.edept.co/v1/role-salaries/summary";

/** Currency symbols mapping */
const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: "$",
  INR: "₹",
  EUR: "€",
  GBP: "£",
  CAD: "CA$",
  AUD: "A$",
};

function currencySymbol(code?: string) {
  if (!code) return code ?? "";
  return CURRENCY_SYMBOLS[code.toUpperCase()] ?? code.toUpperCase();
}

/** Category colors matching the image */
const CATEGORY_COLORS: Record<keyof MonthlyBreakup, string> = {
  HOUSING: "#6B46C1", // purple
  FOOD: "#06B6D4", // cyan
  UTILITIES: "#84CC16", // lime green
  MISCELLANEOUS: "#EC4899", // pink
  TRAVEL: "#F97316", // orange
  SAVINGS: "#F59E0B", // yellow
};

const CATEGORY_LABELS: Record<keyof MonthlyBreakup, string> = {
  HOUSING: "Housing",
  FOOD: "Food",
  UTILITIES: "Utilities",
  MISCELLANEOUS: "Others",
  TRAVEL: "Travel",
  SAVINGS: "Savings",
};

const CATEGORY_ICONS: Record<keyof MonthlyBreakup, React.ComponentType<{ className?: string }>> = {
  HOUSING: Home,
  FOOD: Utensils,
  UTILITIES: Lightbulb,
  MISCELLANEOUS: ShoppingBag,
  TRAVEL: Plane,
  SAVINGS: PiggyBank,
};

export default function PppCalculator() {
  // data
  const [countries, setCountries] = useState<CountryItem[]>([]);
  const [loadingCountries, setLoadingCountries] = useState<boolean>(true);
  // const [countriesError, setCountriesError] = useState<string | null>(null);

  // inputs
  const [desiredCurrency, setDesiredCurrency] = useState<string>("");
  const [desiredCountryName, setDesiredCountryName] = useState<string>("");
  const [desiredCountryCode, setDesiredCountryCode] = useState<string>("");
  const [type, setType] = useState<string>("MODERATE");

  // salary range
  const [minSalary, setMinSalary] = useState<number>(15000);
  const [maxSalary, setMaxSalary] = useState<number>(200000);
  const [loadingSalary, setLoadingSalary] = useState<boolean>(false);

  const [amount, setAmount] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  // UI
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [pppResult, setPppResult] = useState<PppResponse | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Load countries
  useEffect(() => {
    let isMounted = true;
    async function loadCountries() {
      setLoadingCountries(true);
      try {
        const res = await fetch(COUNTRIES_API);
        if (!res.ok) throw new Error(`Countries fetch failed: ${res.status}`);
        const json = await res.json();
        let list: CountryItem[] = Array.isArray(json)
          ? json
          : json?.result ?? [];

        list = list.filter(country => country.country_code !== "IND");
        if (isMounted) {
          const seen = new Map<string, CountryItem>();
          list.forEach((c) => {
            const key = `${c.country_name}__${c.currency_code}`;
            if (!seen.has(key)) seen.set(key, c);
          });
          setCountries(Array.from(seen.values()));
        }
      } catch (err: unknown) {
        if (!isMounted) return;
        console.error(err);
      } finally {
        if (isMounted) setLoadingCountries(false);
      }
    }
    loadCountries();
    return () => {
      isMounted = false;
    };
  }, []);

  // Load salary range when desired country changes
  useEffect(() => {
    if (!desiredCountryName) return;

    let isMounted = true;
    async function loadSalaryRange() {
      setLoadingSalary(true);
      try {
        const res = await fetch(`${SALARY_API}/${desiredCountryCode}`);
        if (!res.ok) throw new Error(`Salary fetch failed: ${res.status}`);
        const json: SalaryResponse = await res.json();

        if (isMounted && json.result?.summary && json.result.summary.length >= 3) {
          const min = Math.round(json.result.summary[0].min_salary / 12 / 1000) * 1000;
          const max = Math.round((json.result.summary[2].max_salary / 12) / 1000) * 1000;
          setMinSalary(min);
          setMaxSalary(max);
          setAmount(Math.round((min + max) / 2));
        }
      } catch (err: unknown) {
        console.error("Failed to load salary range:", err);
      } finally {
        if (isMounted) setLoadingSalary(false);
      }
    }
    loadSalaryRange();
    return () => {
      isMounted = false;
    };
  }, [desiredCountryName]);

  const countryOptions = useMemo(() => {
    return countries.map((c) => ({
      label: c.country_name,
      value: c.currency_code,
      original: c,
    }));
  }, [countries]);

  // Validation
  useEffect(() => {
    setValidationError(null);
    if (!desiredCurrency) return;
  }, [desiredCurrency]);

  // Handle form submission
  async function handleSubmit() {
    setSubmitError(null);
    setPppResult(null);

    if (!desiredCurrency) {
      setSubmitError("Please select your desired country.");
      return;
    }
    if (amount <= 0) {
      setSubmitError("Please provide a positive monthly amount.");
      return;
    }

    setSubmitting(true);
    try {
      const body = {
        local_currency_code: desiredCurrency,
        desired_currency_code: desiredCurrency,
        amount: String(amount), // This should be the monthly SALARY
        lifestyle_type: type,
        // Remove these two lines if API doesn't need them:
        // min_salary: minSalary,
        // max_salary: maxSalary,
      };


      const res = await fetch(PPP_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`PPP API failed ${res.status}: ${txt}`);
      }

      const json: PppResponse = await res.json();
      setPppResult(json);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "string"
            ? err
            : JSON.stringify(err);
      setSubmitError(message);
    } finally {
      setSubmitting(false);
    }
  }


  const desiredCurrencySymbol = useMemo(() => {
    return currencySymbol(
      pppResult?.result?.desired_currency_code ?? desiredCurrency
    );
  }, [pppResult, desiredCurrency]);

  // Animated number hook
  function useAnimatedNumber(value: number, duration = 600) {
    const [display, setDisplay] = useState(value);
    const startValueRef = useRef(value);
    const startTimeRef = useRef<number | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startValueRef.current = display;
      startTimeRef.current = null;

      const step = (t: number) => {
        if (startTimeRef.current == null) startTimeRef.current = t;
        const elapsed = t - startTimeRef.current;
        const p = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const next = startValueRef.current + (value - startValueRef.current) * eased;
        setDisplay(next);
        if (p < 1) {
          rafRef.current = requestAnimationFrame(step);
        }
      };

      rafRef.current = requestAnimationFrame(step);
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, [value, duration]);

    return display;
  }

  // Calculate total (excluding savings)
  const totalAmount = useMemo(() => {
    if (!pppResult?.result?.estimated_monthly_breakup) return 0;
    const breakup = pppResult.result.estimated_monthly_breakup;
    return (
      Number(breakup.HOUSING) +
      Number(breakup.FOOD) +
      Number(breakup.UTILITIES) +
      Number(breakup.MISCELLANEOUS) +
      Number(breakup.TRAVEL)
    );
  }, [pppResult]);

  const animatedTotal = useAnimatedNumber(totalAmount, 600);

  const fmt = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 0,
  });

  // Calculate segments for the semicircle - FIXED VERSION
  const segments = useMemo(() => {
    if (!pppResult?.result?.estimated_monthly_breakup || totalAmount === 0) return [];

    const breakup = pppResult.result.estimated_monthly_breakup;
    const categories: (keyof Omit<MonthlyBreakup, "SAVINGS">)[] = [
      "HOUSING",
      "FOOD",
      "UTILITIES",
      "MISCELLANEOUS",
      "TRAVEL",
    ];

    let cumulativeAngle = 0;
    return categories.map((cat) => {
      const value = breakup[cat];
      const percentage = value / totalAmount;
      const angleSpan = percentage * 180; // semicircle is 180 degrees

      const segment = {
        category: cat,
        value: value,
        percentage: percentage,
        startAngle: cumulativeAngle,
        endAngle: cumulativeAngle + angleSpan,
        color: CATEGORY_COLORS[cat],
      };

      cumulativeAngle += angleSpan;
      return segment;
    });
  }, [pppResult, totalAmount]);

  // Generate SVG path for a segment - FIXED VERSION
  function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    // Flip by subtracting from 180 to invert the semicircle
    const angleInRadians = ((180 - angleInDegrees) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY - radius * Math.sin(angleInRadians), // Changed + to - to flip vertically
    };
  }



  function describeArc(centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number) {
    // Start from bottom-left (180°) and go to bottom-right (0°)
    // Map our 0-180 logical range to SVG's bottom semicircle
    const start = polarToCartesian(centerX, centerY, radius, 180 - startAngle);
    const end = polarToCartesian(centerX, centerY, radius, 180 - endAngle);

    const largeArcFlag = endAngle - startAngle > 180 ? "1" : "0";

    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  }

  const scrollToForm = () => {
  const element = document.getElementById('form');
  if (element) {
    const offset = 100; // Header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};



  return (
    <div className="max-w-7xl mx-auto xl:px-0 md:px-12 px-6 md:py-20 py-12" id="life_abroad_calculator">
      <div className="mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-1">
          Calculate your life abroad
        </h2>
        <span className="text-base md:text-lg text-gray-500">
          An overview of expenses abroad
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-gray-300 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Left: inputs */}
          <div className="md:col-span-2 p-6">
            <h3 className="text-xl font-semibold mb-4">Fill in your details</h3>

            {/* Desired country */}
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Desired country to move to
            </label>
            <div className="mb-4 relative">
              <select
                className="w-full border border-gray-200 rounded py-2 text-sm pl-3 appearance-none"
                value={desiredCurrency}
                onChange={(e) => {
                  const code = e.target.value;
                  setDesiredCurrency(code);
                  const entry = countries.find((c) => c.currency_code === code);
                  if (entry) {
                    setDesiredCountryName(entry.country_name);
                    setDesiredCountryCode(entry.country_code);
                  }
                  else setDesiredCountryName("");
                }}
              >
                <option value="">Select desired country</option>
                {countryOptions.map((opt) => (
                  <option key={opt.value + opt.label} value={opt.value}>
                    {opt.label} — {opt.value}
                  </option>
                ))}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDownIcon className="w-4 h-4" />
              </span>
            </div>

            {validationError && (
              <div className="mb-3 text-sm text-red-600">{validationError}</div>
            )}

            {/* Type of life */}
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type of life you are looking for
            </label>
            <div className="mb-4 relative">
              <select
                className="w-full border border-gray-200 rounded py-2 text-sm pl-3 appearance-none"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="BUDGET">Budget</option>
                <option value="MODERATE">Moderate</option>
                <option value="COMFORTABLE">Comfortable</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDownIcon className="w-4 h-4" />
              </span>
            </div>

            {/* Slider for monthly salary */}
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected monthly salary
            </label>

            {mounted && (
              <div className="mb-2">
                <input
                  type="range"
                  min={minSalary}
                  max={maxSalary}
                  step={500}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-[#10519E]"
                  disabled={loadingSalary}
                />
              </div>
            )}

            {/* Min/Max labels */}
            <div className="mb-4 flex justify-between text-xs text-gray-500">
              <span>{desiredCurrencySymbol}{fmt.format(minSalary)}</span>
              <span>{desiredCurrencySymbol}{fmt.format(maxSalary)}</span>
            </div>

            {/* Amount input */}

            <div className="mb-4 flex items-center gap-3">
              <div className="flex-1">
                {/* <input
                  type="number"
                  min={minSalary}
                  max={maxSalary}
                  value={amount}
                  onChange={(e) => {
                    const v = Number(e.target.value || 0);
                    setAmount(v);
                  }}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                  disabled={loadingSalary}
                /> */}
                <p className="text-sm text-gray-600 mt-1">
                  Monthly Salary: {desiredCurrencySymbol}{fmt.format(amount)}
                </p>
              </div>
            </div>

            {/* Calculate button */}
            <div className="flex flex-col items-center gap-3 mt-4">
              <button
                onClick={handleSubmit}
                disabled={submitting || !!validationError || loadingCountries || loadingSalary || !desiredCurrency}
                className="inline-flex items-center justify-center gap-2 bg-[#10519E] hover:bg-[#0b3b76] text-white px-2 py-2 rounded-full w-full disabled:opacity-60 font-semibold text-lg"
              >
                {submitting && (
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="3"
                      strokeOpacity="0.25"
                      fill="none"
                    />
                    <path
                      d="M22 12a10 10 0 0 1-10 10"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                )}
                <span>Calculate</span>
              </button>
            </div>

            {submitError && (
              <div className="mt-3 text-sm text-red-600">{submitError}</div>
            )}
          </div>

          {/* Right: results */}
          <div className="md:col-span-3 border-l md:border-l-0 md:pl-6 md:p-6 p-4">
            <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-100 rounded-lg mb-6 px-4 py-4">
              {/* Semicircular chart */}
              <div className="w-full md:w-[60%] flex items-center justify-center">
                <div className="relative w-[350px] md:h-[250px] h-[200px]">
                  <svg viewBox="0 0 320 160" className="w-full h-full">
                    {/* Background semicircle */}
                    <path
                      d="M20 150 A140 140 0 0 1 300 150"
                      fill="none"
                      stroke="#e6eefb"
                      strokeWidth="30"
                      strokeLinecap="round"
                    />

                    {/* Colored segments - FIXED */}
                    {segments.map((seg) => (
                      <path
                        key={seg.category}
                        d={describeArc(160, 150, 140, seg.startAngle, seg.endAngle)}
                        fill="none"
                        stroke={seg.color}
                        strokeWidth="30"
                        strokeLinecap="round"  // Changed from "butt" to "round"
                      />
                    ))}
                  </svg>

                  {/* Center text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center top-20">
                    <div className="md:text-3xl text-xl font-bold">
                      {pppResult?.result ? (
                        <span>
                          {desiredCurrencySymbol}
                          {fmt.format(animatedTotal)}
                        </span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </div>
                    <div className="md:text-base text-sm text-gray-600 mt-1 md:max-w-[8rem] max-w-[7rem] text-center">
                      Total Estimated Monthly Expense
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated split */}
              <div className="w-full md:w-[40%]">
                <h4 className="font-semibold text-base mb-3">Estimated split</h4>
                {pppResult?.result?.estimated_monthly_breakup ? (
                  <div className="space-y-2">
                    {(["HOUSING", "FOOD", "UTILITIES", "MISCELLANEOUS", "TRAVEL", "SAVINGS"] as const).map((cat) => {
                      const value = pppResult.result!.estimated_monthly_breakup[cat];
                      const Icon = CATEGORY_ICONS[cat];
                      return (
                        <div key={cat} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded flex items-center justify-center"
                              style={{ backgroundColor: CATEGORY_COLORS[cat] }}
                            >
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-700">{CATEGORY_LABELS[cat]}</span>
                          </div>
                          <span className="font-semibold">
                            {desiredCurrencySymbol}{fmt.format(value)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-sm text-gray-500">
                    Click &quot;Calculate&quot; to see expense breakdown
                  </div>
                )}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-[#f0f9ff] border border-[#E0F2FE] rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
                    <LucideMessageCircleMore className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="font-semibold text-lg">
                    Need expert guidance?
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Our counsellors can help you plan your next step with confidence
                  </div>
                  <button
                    className="md:block hidden bg-gray-50 text-gray-800 border border-gray-400 px-3 py-2 rounded-full text-sm mt-3 font-semibold"
                    onClick={scrollToForm}
                  >
                    Speak to counsellor
                  </button>
                </div>
              </div>
              <button
                className="md:hidden block bg-gray-50 text-gray-800 border border-gray-400 px-3 py-2 rounded-full text-sm mt-3 font-semibold mx-auto"
                onClick={scrollToForm}
              >
                Speak to counsellor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
