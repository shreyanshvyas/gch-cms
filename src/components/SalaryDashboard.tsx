"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    Tooltip,
    Bar,
    Cell,
} from "recharts";
import type { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";


type CountryItem = {
    country_code: string;
    country_name: string;
    [k: string]: unknown;
};

type SummaryItem = {
    level: string; // "1" | "2" | "3"
    currency_code: string;
    min_salary: number;
    max_salary: number;
    avg_salary: number;
    total_roles: number;
};

type ApiSummaryResponse = {
    status: string;
    result?: {
        country_code?: string;
        summary?: SummaryItem[];
    };
};

const COLORS_BY_TYPE = {
    min: "#F6D0FE", // light
    avg: "#E478FA", // medium
    max: "#9F1AB1", // dark
};

const GRAY_FILL = "#E5E7EB"; // when deactivated

const LEVEL_LABEL: Record<string, string> = {
    "1": "Junior Level",
    "2": "Mid Level",
    "3": "Senior Level",
};

const LEVEL_CARD_COLOR: Record<string, { bg: string; border: string; text: string }> = {
    "1": { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-800" },
    "2": { bg: "bg-fuchsia-50", border: "border-fuchsia-200", text: "text-fuchsia-800" },
    "3": { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800" },
};

export default function SalaryIntelligenceDashboard() {
    // Countries
    const [countries, setCountries] = useState<CountryItem[]>([]);
    const [countriesLoading, setCountriesLoading] = useState<boolean>(false);

    // Selected country code
    const [selectedCountry, setSelectedCountry] = useState<string>("");

    // Summary (for selected country)
    const [summary, setSummary] = useState<SummaryItem[]>([]);
    const [summaryLoading, setSummaryLoading] = useState<boolean>(false);
    const [summaryError, setSummaryError] = useState<string | null>(null);

    // Which level is selected (e.g., "1", "2", "3"). null => no selection / all active
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

    // Fetch countries on mount
    useEffect(() => {
        let mounted = true;
        async function load() {
            setCountriesLoading(true);
            try {
                const res = await fetch("https://api.careers.edept.co/v1/countries");
                const json = await res.json();
                let arr: CountryItem[] = Array.isArray(json)
                    ? json
                    : Array.isArray(json?.result)
                        ? json.result
                        : json?.data ?? [];

                arr = arr.filter(country => country.country_code !== "IND");

                if (!mounted) return;
                setCountries(arr);
                if (arr.length > 0) {
                    // default to first country if user hasn't chosen one
                    setSelectedCountry((prev) => prev || arr[0].country_code);
                }
            } catch (err: unknown) {
                console.error(err);
            } finally {
                if (mounted) setCountriesLoading(false);
            }
        }
        load();
        return () => {
            mounted = false;
        };
    }, []);

    // Fetch summary when selectedCountry changes
    useEffect(() => {
        if (!selectedCountry) return;
        let mounted = true;
        async function loadSummary() {
            setSummaryLoading(true);
            setSummaryError(null);
            try {
                const res = await fetch(
                    `https://api.careers.edept.co/v1/role-salaries/summary/${selectedCountry}`
                );
                const json: ApiSummaryResponse = await res.json();
                const arr = Array.isArray(json?.result?.summary)
                    ? json!.result!.summary!
                    : Array.isArray(json?.result)
                        ? json.result
                        : [];
                if (!mounted) return;
                // ensure sorting by numeric level
                const sorted = (arr as SummaryItem[]).slice().sort((a, b) => Number(a.level) - Number(b.level));
                setSummary(sorted);
                // default selection: choose mid (level "2") if present, otherwise first
                if (sorted.length > 0) {
                    const hasMid = sorted.find((s) => s.level === "2");
                    setSelectedLevel(hasMid ? "2" : sorted[0].level);
                } else {
                    setSelectedLevel(null);
                }
            }
            catch (err: unknown) {
                if (mounted) {
                    const message =
                        err instanceof Error
                            ? err.message
                            : typeof err === "string"
                                ? err
                                : JSON.stringify(err);
                    setSummaryError(message);
                }
            } finally {
                if (mounted) setSummaryLoading(false);
            }
        }
        loadSummary();
        return () => {
            mounted = false;
        };
    }, [selectedCountry]);

    // Build chart data: one object per level, with min/avg/max fields
    const chartData = useMemo(() => {
        return summary.map((s) => ({
            levelLabel: LEVEL_LABEL[s.level] ?? `Level ${s.level}`,
            level: s.level,
            min: s.min_salary,
            avg: s.avg_salary,
            max: s.max_salary,
        }));
    }, [summary]);

    const currencyCode = summary[0]?.currency_code ?? "USD";
    const currencyFormatter = useMemo(() => {
        try {
            return new Intl.NumberFormat(undefined, {
                style: "currency", currency: currencyCode,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            });
        } catch {
            // Fallback: still return a real NumberFormat so the type stays consistent
            return new Intl.NumberFormat(undefined, {
                style: "currency", currency: currencyCode,
            });
        }
    }, [currencyCode]);

        const currencyFormatter1 = useMemo(() => {
        try {
            return new Intl.NumberFormat(undefined, {
                style: "currency", currency: currencyCode,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        } catch {
            // Fallback: still return a real NumberFormat so the type stays consistent
            return new Intl.NumberFormat(undefined, {
                style: "currency", currency: currencyCode,
            });
        }
    }, [currencyCode]);

    const hourly = (annual: number) => {
        // 52 weeks * 40 hours assumption
        return annual / 52 / 40;
    };

    // Determine fill for a given level and type depending on selection
    function fillFor(level: string, type: "min" | "avg" | "max") {
        if (selectedLevel == null) return COLORS_BY_TYPE[type];
        return selectedLevel === level ? COLORS_BY_TYPE[type] : GRAY_FILL;
    }

    // Handler for clicking a bar segment (a specific level)
    function onSelectLevel(level: string) {
        setSelectedLevel((cur) => (cur === level ? null : level));
    }

   const formatTooltip = (value: any, name: any): [string, string] => [
  currencyFormatter.format(Number(value ?? 0)),
  String(name ?? ""),
];
    return (
        <div className="max-w-7xl mx-auto xl:px-0 md:px-12 px-6 md:py-20 py-12">
            <div className="flex md:flex-row flex-col items-center md:justify-between justify-center md:text-left text-center mb-6">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold">Salary Intelligence Dashboard</h2>
                    <p className="md:text-lg text-base text-gray-500">Global landscape of cybersecurity salaries</p>
                </div>

                {/* Country dropdown */}
                <div className="w-56 md:mt-0 mt-6">
                    <label className="block text-sm text-gray-600 mb-1 ml-2">Select Country</label>
                    <div className="relative">
                        <select
                            className="w-full border border-gray-200 rounded-full py-2 px-4 text-sm appearance-none pr-10"
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                        >
                            {countriesLoading && <option>Loading...</option>}
                            {!countriesLoading && countries.length === 0 && <option>No countries</option>}
                            {!countriesLoading &&
                                countries.map((c) => (
                                    <option key={c.country_code} value={c.country_code}>
                                        {c.country_name}
                                    </option>
                                ))}
                        </select>
                        {/* custom arrow */}
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left: Chart (approx 65%) */}
                    <div className="flex-1 md:min-w-[360px]">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="text-sm text-gray-500">Average Salary</div>
                                <h3 className="text-2xl font-bold">
                                    {summary.length ? currencyFormatter.format(summary.reduce((acc, s) => acc + s.avg_salary, 0) / summary.length) : "—"}
                                </h3>
                                <div className="text-xs text-gray-500">yearly</div>
                            </div>
                            <div className="text-sm text-gray-500">
                                {summaryLoading ? <span>Loading summary…</span> : null}
                                {summaryError ? <span className="text-red-600">{summaryError}</span> : null}
                            </div>
                        </div>

                        {/* CHART WRAPPER: isolated and clipped */}
                        <div className="w-full overflow-hidden">
                            {/* Horizontal scroll lives here, no padding here */}
                            <div className="overflow-x-auto overflow-y-hidden">
                                {/* A fixed min content width so we can scroll when screen is narrow */}
                                <div className="inline-block md:min-w-[720px] min-w-[360px] align-top">
                                    {/* This box MUST be the sizing and clipping context for the SVG */}
                                    <div className="relative w-full h-64 ">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart
                                                data={chartData}
                                                margin={{ top: 4, right: 8, left: 8, bottom: 12 }} // small, non-negative
                                                barCategoryGap="20%"
                                                barGap={6}
                                            >
                                                <XAxis dataKey="levelLabel" axisLine tickLine={false} />
                                                <Tooltip
                                                    formatter={formatTooltip}
                                                    contentStyle={{ borderRadius: "0.75rem", boxShadow: "0 2px 16px #0002", border: "1px solid #eee", padding: "0.75rem 1rem", background: "#fff" }}
                                                    wrapperStyle={{ zIndex: 30 }}
                                                />
                                                <Bar dataKey="min" name="Minimum" radius={[12, 12, 0, 0]}>
                                                    {chartData.map((entry) => (
                                                        <Cell
                                                            key={`min-${entry.level}`}
                                                            fill={fillFor(entry.level, "min")}
                                                            onClick={() => onSelectLevel(entry.level)}
                                                            style={{ cursor: "pointer" }}
                                                        />
                                                    ))}
                                                </Bar>
                                                <Bar dataKey="avg" name="Average" radius={[12, 12, 0, 0]}>
                                                    {chartData.map((entry) => (
                                                        <Cell
                                                            key={`avg-${entry.level}`}
                                                            fill={fillFor(entry.level, "avg")}
                                                            onClick={() => onSelectLevel(entry.level)}
                                                            style={{ cursor: "pointer" }}
                                                        />
                                                    ))}
                                                </Bar>
                                                <Bar dataKey="max" name="Maximum" radius={[12, 12, 0, 0]}>
                                                    {chartData.map((entry) => (
                                                        <Cell
                                                            key={`max-${entry.level}`}
                                                            fill={fillFor(entry.level, "max")}
                                                            onClick={() => onSelectLevel(entry.level)}
                                                            style={{ cursor: "pointer" }}
                                                        />
                                                    ))}
                                                </Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <span className="md:hidden block text-gray-500 text-sm text-center"> Note: Drag to view full chart, and tap for more details.</span>

                    </div>

                    {/* Right: Level cards (approx 35%) */}
                    <div className="w-full lg:w-96 flex flex-col gap-4">
                        {summary.map((s) => {
                            const lvl = s.level;
                            const isActive = selectedLevel === lvl || (selectedLevel === null && false);
                            const cardStyles = LEVEL_CARD_COLOR[lvl] ?? { bg: "bg-gray-50", border: "border-gray-200", text: "text-gray-800" };

                            return (
                                <div
                                    key={lvl}
                                    onClick={() => setSelectedLevel((cur) => (cur === lvl ? null : lvl))}
                                    className={`p-4 rounded-xl border ${isActive ? cardStyles.bg + " " + cardStyles.border : "bg-white border-gray-200"} cursor-pointer transition`}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className={`text-sm font-semibold ${isActive ? cardStyles.text : "text-gray-700"}`}>
                                            {LEVEL_LABEL[lvl] ?? `Level ${lvl}`}
                                        </h3>
                                        {/* <div className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{
                                            lvl === "1" ? "25th Percentile" : lvl === "2" ? "50th Percentile" : "75th Percentile"
                                        }</div> */}
                                    </div>

                                    <div className="flex md:flex-row flex-col items-center md:justify-between justify-center text-center mt-3">
                                        <div>
                                            <h3 className="text-lg font-bold">{currencyFormatter.format(Math.round(s.avg_salary))}</h3>
                                            <div className="text-xs text-gray-500">Yearly Salary</div>
                                        </div>

                                        <div className="md:text-right md:mt-0 mt-2">
                                            <h3 className="text-lg font-bold">{currencyFormatter1.format(Number((hourly(s.avg_salary)).toFixed(2)))}</h3>
                                            <div className="text-xs text-gray-500">Hourly Salary</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
