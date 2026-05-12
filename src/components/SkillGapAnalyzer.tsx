"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { SkillItem, RoleItem, AnalyzeRequest, AnalyzeResponse } from '@/types/api';
import { Link, SearchIcon } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

type DropdownOpen = 'skill' | 'role' | null;
type NameUrl = { name: string; url?: string };

type Certification = { name: string; url?: string };
type RequiredSkill = {
  courses?: string | string[] | null;
  certifications?: Certification | Certification[] | null;
};

const SKILLS_API = 'https://api.careers.edept.co/v1/skills';
const ROLES_API = 'https://api.careers.edept.co/v1/roles';
const ANALYZE_API = 'https://api.careers.edept.co/v1/roles/analyze-skill-gap';

export default function SkillRoleAnalyzer() {
  // data lists
  const [allSkills, setAllSkills] = useState<SkillItem[]>([]);
  const [allRoles, setAllRoles] = useState<RoleItem[]>([]);

  // dropdown and search states
  const [open, setOpen] = useState<DropdownOpen>(null);
  const [skillQuery, setSkillQuery] = useState('');
  const [roleQuery, setRoleQuery] = useState('');

  // selected values
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedRole, setSelectedRole] = useState<{ role_id: string; title: string } | null>(null);

  // analyze
  const [loadingAnalyze, setLoadingAnalyze] = useState(false);
  const [analyzeResult, setAnalyzeResult] = useState<AnalyzeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const requiredSkillsFromRole = analyzeResult?.result?.required_skills ?? [];


  // fetch lists on mount
  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const [sRes, rRes] = await Promise.all([
          fetch(SKILLS_API),
          fetch(ROLES_API),
        ]);

        if (!sRes.ok) throw new Error(`Skills fetch failed: ${sRes.status}`);
        if (!rRes.ok) throw new Error(`Roles fetch failed: ${rRes.status}`);

        const sJson = await sRes.json();
        const rJson = await rRes.json();

        if (!mounted) return;
        // Expecting array results (if API wraps differently adapt here)
        setAllSkills(Array.isArray(sJson) ? sJson : sJson?.result ?? []);
        setAllRoles(Array.isArray(rJson) ? rJson : rJson?.result ?? []);
      } catch (err: unknown) {
        if (mounted) {
          const message =
            err instanceof Error
              ? err.message
              : typeof err === "string"
                ? err
                : JSON.stringify(err);
          setError(message);
        }
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  // filtered options (letter-by-letter searching)
  const filteredSkills = useMemo(() => {
    const q = skillQuery.trim().toLowerCase();
    if (!q) return allSkills;
    return allSkills.filter((s) => s.skill_name.toLowerCase().includes(q));
  }, [allSkills, skillQuery]);

  const filteredRoles = useMemo(() => {
    const q = roleQuery.trim().toLowerCase();
    if (!q) return allRoles;
    return allRoles.filter((r) => (r.title ?? '').toLowerCase().includes(q));
  }, [allRoles, roleQuery]);

  // add selected skill (prevent duplicates)
  function addSkill(name: string) {
    if (!name) return;
    if (selectedSkills.includes(name)) return;
    setSelectedSkills((s) => [...s, name]);
    setSkillQuery('');
    setOpen(null);
  }

  function removeSkill(name: string) {
    setSelectedSkills((s) => s.filter((x) => x !== name));
  }

  function chooseRole(role: RoleItem) {
    setSelectedRole({ role_id: role.role_id, title: role.title });
    setRoleQuery('');
    setOpen(null);
  }

  // handle analyze click
  async function handleAnalyze() {
    setError(null);
    setAnalyzeResult(null);

    if (!selectedRole) {
      setError('Please select a role.');
      return;
    }
    // allow empty skills but okay to warn
    setLoadingAnalyze(true);
    const payload: AnalyzeRequest = {
      role_id: selectedRole.role_id,
      current_skills: selectedSkills,
    };

    try {
      const res = await fetch(ANALYZE_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Analyze failed ${res.status}: ${txt}`);
      }
      const json: AnalyzeResponse = await res.json();
      setAnalyzeResult(json);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "string"
            ? err
            : JSON.stringify(err);
      setError(message);
    } finally {
      setLoadingAnalyze(false);
    }
  }

  // compute progress percentage
  // const percentage = useMemo(() => {
  //   const existing = analyzeResult?.result?.existing_skills ?? [];
  //   const required = analyzeResult?.result?.required_skills ?? [];
  //   // Formula: existing / (existing + required) * 100
  //   // This assumes existing and required are disjoint sets returned by API.
  //   const denom = existing.length + required.length;
  //   if (!denom) return 0;
  //   return Math.round((existing.length / denom) * 100);
  // }, [analyzeResult]);

  // aggregated resources from required_skills (courses and certifications)

  const isRecord = (v: unknown): v is Record<string, unknown> =>
    typeof v === "object" && v !== null;

  const isCertification = (v: unknown): v is Certification =>
    isRecord(v) &&
    typeof v.name === "string" &&
    (v.url === undefined || typeof v.url === "string");

  const isRequiredSkill = (v: unknown): v is RequiredSkill => {
    if (!isRecord(v)) return false;

    const { courses, certifications } = v;

    const coursesOk =
      courses === undefined ||
      courses === null ||
      typeof courses === "string" ||
      (Array.isArray(courses) && courses.every((c) => typeof c === "string"));

    const certsOk =
      certifications === undefined ||
      certifications === null ||
      isCertification(certifications) ||
      (Array.isArray(certifications) && certifications.every(isCertification));

    return coursesOk && certsOk;
  };

  const toCourseName = (courses: RequiredSkill["courses"]): string | null => {
    if (!courses) return null;
    return Array.isArray(courses) ? courses.filter(Boolean).join(", ") : courses;
  };

  const recommendedResources = useMemo<NameUrl[]>(() => {
    const raw = analyzeResult?.result?.required_skills;

    if (!Array.isArray(raw)) return [];

    const list: NameUrl[] = [];

    for (const item of raw) {
      if (!isRequiredSkill(item)) continue;

      // courses -> name
      const cName = toCourseName(item.courses);
      if (cName && cName.trim().length > 0) {
        list.push({ name: cName.trim() });
      }

      // certifications -> name/url (single or array)
      const certs = item.certifications;
      if (Array.isArray(certs)) {
        for (const cert of certs) {
          if (isCertification(cert) && cert.name.trim()) {
            list.push({ name: cert.name.trim(), url: cert.url });
          }
        }
      } else if (isCertification(certs) && certs.name.trim()) {
        list.push({ name: certs.name.trim(), url: certs.url });
      }
    }

    // dedupe by name+url, keep non-empty
    const seen = new Set<string>();
    return list
      .filter((r) => r.name && (r.url === undefined || r.url))
      .filter((r) => {
        const key = `${r.name.trim().toLowerCase()}__${(r.url ?? "").trim().toLowerCase()}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
  }, [analyzeResult]);

  // utility: close other dropdown when one opens
  function toggleOpen(which: DropdownOpen) {
    setOpen((cur) => (cur === which ? null : which));
  }

  // derive compact display state
  const latestSkill = selectedSkills[selectedSkills.length - 1] ?? null;
  const overflowCount = Math.max(0, selectedSkills.length - 1);

  const norm = (s: string) => s.trim().toLowerCase();

  const selectedSet = useMemo(
    () => new Set(selectedSkills.map((n) => n.trim().toLowerCase())),
    [selectedSkills]
  );

  // const existingFromResult = analyzeResult?.result?.existing_skills ?? [];
  // const requiredFromResult = analyzeResult?.result?.required_skills ?? [];


  const existingFinal = useMemo(() => {
    return requiredSkillsFromRole.filter((skill) => selectedSet.has(skill.skill_name.toLowerCase()));
  }, [requiredSkillsFromRole, selectedSet]);

  const requiredFinal = useMemo(() => {
    return requiredSkillsFromRole.filter((skill) => !selectedSet.has(skill.skill_name.toLowerCase()));
  }, [requiredSkillsFromRole, selectedSet]);

  // Calculate progress percentage dynamically
  const percentage = useMemo(() => {
    const total = requiredSkillsFromRole.length;
    if (!total) return 0;
    const covered = existingFinal.length;
    return Math.round((covered / total) * 100);
  }, [existingFinal.length, requiredSkillsFromRole.length]);


  return (
    <div className="max-w-7xl mx-auto xl:px-0 md:px-12 px-6 md:py-20 py-12 section" id='skill-gap'>
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-1">
          Bridge Your Skill Gap to Go Global
        </h2>
        <span className="text-base md:text-lg text-gray-500 ">
          Enter your current skillset and target role. We’ll analyze the gap and suggest skills to acquire, courses to take, and the ideal learning pathway.
        </span>
      </div>

      {/* Inputs */}
      <div className="flex flex-col md:flex-row gap-4 mb-4 max-w-5xl mx-auto">
        {/* Skills multi-select */}

        <div className="flex-1 relative w-full md:w-[45%]">
          <label className="block text-sm font-medium mb-1">Current skills</label>
          <div className="bg-white border rounded-md shadow-sm p-2">
            <div className="flex flex-wrap gap-2 items-center">
              <SearchIcon className="w-4 h-4 text-gray-400" />

              {/* Show only the most recently added skill + a compact counter */}
              {latestSkill && (
                <div className="flex items-center gap-2 bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm">
                  <span>{latestSkill}</span>
                  <button
                    onClick={() => removeSkill(latestSkill)}
                    className="text-green-700 hover:text-green-900"
                    aria-label={`remove ${latestSkill}`}
                    type="button"
                  >
                    ×
                  </button>
                </div>
              )}

              {overflowCount > 0 && (
                <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                  +{overflowCount} more
                </span>
              )}

              <div className="flex-1 min-w-[150px]">
                <input
                  type="text"
                  value={skillQuery}
                  onChange={(e) => { setSkillQuery(e.target.value); toggleOpen('skill'); }}
                  onFocus={() => toggleOpen('skill')}
                  placeholder="Type / Click to add a skill"
                  className="w-full border-0 outline-none focus:ring-0 text-sm"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const exact = filteredSkills.find((x) => norm(x.skill_name) === norm(skillQuery));
                      addSkill(exact ? exact.skill_name : skillQuery.trim());
                    } else if (e.key === 'Escape') {
                      setOpen(null);
                    }
                  }}
                />
              </div>

              <div className="ml-2">
                <button
                  type="button"
                  onClick={() => toggleOpen('skill')}
                  className="px-2 py-1 rounded-md bg-gray-100 text-sm"
                  aria-label="open skill dropdown"
                >
                  ▾
                </button>
              </div>
            </div>

            {/* dropdown */}
            {open === 'skill' && (
              <div className="absolute z-40 left-0 mt-1 w-full bg-white border rounded-md shadow-lg max-h-64 overflow-auto">
                {filteredSkills.length === 0 ? (
                  <div className="p-3 text-sm text-gray-500">No skills found</div>
                ) : (
                  filteredSkills.map((s) => {
                    const isSelected = selectedSkills.some((n) => norm(n) === norm(s.skill_name));
                    return (
                      <button
                        key={s.id}
                        type="button"
                        aria-selected={isSelected}
                        disabled={isSelected}
                        onClick={() => {
                          if (!isSelected) addSkill(s.skill_name);
                        }}
                        className={[
                          "w-full text-left px-3 py-2 text-sm flex items-center justify-between",
                          isSelected
                            ? "bg-green-50 text-green-800 cursor-not-allowed"
                            : "hover:bg-gray-50"
                        ].join(" ")}
                      >
                        <span>{s.skill_name}</span>
                        {isSelected && <span className="font-bold">✔</span>}
                      </button>
                    );
                  })
                )}
              </div>
            )}
          </div>
        </div>

        {/* Role single select */}
        <div className="w-full md:w-[35%] relative">
          <label className="block text-sm font-medium mb-1">Target Role</label>
          <div className="bg-white border rounded-md shadow-sm p-2">
            <div className="flex items-center gap-2">
              <SearchIcon className="w-4 h-4 text-gray-400" />
              <div className="flex-1">
                <input
                  type="text"
                  value={selectedRole?.title ?? roleQuery}
                  onChange={(e) => { setRoleQuery(e.target.value); toggleOpen('role'); }}
                  onFocus={() => toggleOpen('role')}
                  placeholder="Search role by title"
                  className="w-full border-0 outline-none focus:ring-0 text-sm"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setOpen(null);
                  }}
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => toggleOpen('role')}
                  className="px-2 py-1 rounded-md bg-gray-100 text-sm"
                >
                  ▾
                </button>
              </div>
            </div>

            {open === 'role' && (
              <div className="absolute z-40 left-0 mt-1 w-full bg-white border rounded-md shadow-lg max-h-64 overflow-auto">
                {filteredRoles.length === 0 ? (
                  <div className="p-3 text-sm text-gray-500">No roles found</div>
                ) : (
                  filteredRoles.map((r) => (
                    <button
                      key={r.role_id}
                      type="button"
                      onClick={() => chooseRole(r)}
                      className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm"
                    >
                      {r.title}
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
        {/* Analyze button */}
        <div className="flex md:items-end justify-center md:mt-0 mt-4">
          <button
            onClick={handleAnalyze}
            disabled={loadingAnalyze}
            className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-full bg-[#10519E] hover:bg-[#0b3b76]  disabled:opacity-60"
          >
            {loadingAnalyze && (
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" strokeOpacity="0.2" fill="none" />
                <path d="M22 12a10 10 0 0 1-10 10" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"></path>
              </svg>
            )}
            <span>Analyze</span>
          </button>
          {error && <div className="text-red-600 mt-2 text-sm">{error}</div>}
        </div>
      </div>



      {/* Results area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-10 border border-gray-200 rounded-3xl md:p-6 p-2">
        {/* Left: radial progress */}
        <div className="flex items-center justify-center my-auto">
          <RadialProgress
            percentage={percentage} // dynamically computed from existingFinal and requiredFinal
            roleTitle={selectedRole?.title ?? ""}
            className="md:h-[28rem] md:w-[28rem] my-auto"
            currentSkills={existingFinal.length} // use dynamically computed existingFinal
            requiredSkills={requiredFinal.length + existingFinal.length}
          />

        </div>

        {/* Right: skills list and resources */}
        <div className="space-y-4 my-auto">
          <div className="bg-[#F4F3FF] border border-[#EBE9FE] rounded-md p-4 shadow-sm">
            <h3 className="font-semibold mb-3 text-[#4A1FB8]">Required Skills</h3>

            <div className="flex flex-row flex-wrap gap-3">
              {/* existing skills (green) */}
              {existingFinal.map((s) => (
                <div
                  key={`existing-${s.id ?? s.skill_name}`}
                  className="flex items-center justify-between w-max gap-2 px-4 py-1 bg-[#ECFDF3] border border-[#ABEFC6] rounded-full"
                >
                  <div>
                    <div className="font-medium text-[#067647]">{s.skill_name}</div>
                  </div>
                  <div className="text-[#067647] font-bold">✔</div>
                </div>
              ))}

              {/* required skills (red) */}
              {requiredFinal.map((s) => (
                <div
                  key={`required-${s.id ?? s.skill_name}`}
                  className="flex items-center justify-center w-max px-4 py-1 bg-[#FEF3F2] border border-[#FECDCA] rounded-full"
                >
                  <div className="font-medium text-[#B42318]">{s.skill_name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended resources */}
          <div className="bg-[#F5FBEE] border border-[#E6F4D7] rounded-md p-4 shadow-sm">
            <h3 className="font-semibold mb-3 text-[#335015]">Recommended Resources</h3>
            {recommendedResources.length === 0 ? (
              <div className="text-sm text-gray-500">No recommended resources found.</div>
            ) : (
              <ul className="space-y-2 text-sm">
                {recommendedResources.map((resource, index) => (

                  <a href={resource.url} target="_blank" rel="noopener noreferrer" key={index}>

                    <li key={index} className='cursor-pointer hover:underline'>
                      <div className="flex items-start mb-2">
                        {/* Icon box: fixed size, no shrink, aligned to first line */}
                        <span className="shrink-0 w-4 h-4 mt-1 inline-flex items-center justify-center">
                          {/* replace with actual icon/svg */}
                          <Link aria-hidden className="block w-4 h-4" />
                        </span>

                        {/* Text: will wrap as needed */}
                        <span className="ml-2">
                          {resource.name}
                        </span>
                      </div>

                    </li>
                  </a>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================
   RadialProgress internal component
   Renders circular progress with a gradient stroke that fades along the path.
   ============================ */

type Props = {
  percentage: number;
  roleTitle: string;
  className?: string;
  currentSkills: number;
  requiredSkills: number;
};

// Simple lightener: interpolates towards white by `t` (0–1)
function lightenHex(hex: string, t: number = 0.75): string {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);

  if (Number.isNaN(num) || (clean.length !== 6 && clean.length !== 3)) {
    return hex;
  }

  // Support short hex (#abc)
  let r: number, g: number, b: number;
  if (clean.length === 3) {
    r = parseInt(clean[0] + clean[0], 16);
    g = parseInt(clean[1] + clean[1], 16);
    b = parseInt(clean[2] + clean[2], 16);
  } else {
    r = (num >> 16) & 0xff;
    g = (num >> 8) & 0xff;
    b = num & 0xff;
  }

  const mix = (ch: number) => Math.round(ch + (255 - ch) * t);

  const lr = mix(r);
  const lg = mix(g);
  const lb = mix(b);

  return (
    "#" +
    [lr, lg, lb]
      .map((c) => c.toString(16).padStart(2, "0"))
      .join("")
  );
}

export function RadialProgress({
  percentage,
  roleTitle,
  className,
  currentSkills,
  requiredSkills,
}: Props) {
  // Normalize to a 100x100 coordinate system for easy responsiveness
  const CENTER = 50;
  const STROKE = 10; // in viewBox units
  const RADIUS = CENTER - STROKE / 2;
  const CIRC = 2 * Math.PI * RADIUS;

  const progress = Math.max(
    0,
    Math.min(100, Number.isFinite(percentage) ? percentage : 0)
  );

  const offset = useMemo(
    () => CIRC - (progress / 100) * CIRC,
    [CIRC, progress]
  );

  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const gid = useMemo(
    () => `gradient-${progress}-${Math.random().toString(36).substr(2, 9)}`,
    [progress]
  );

  // Get gradient colors based on progress
  const getGradientColors = () => {
    if (progress < 30) {
      return {
        start: "#E04F16",
        end: "#E04F16",
      };
    } else if (progress >= 30 && progress <= 70) {
      return {
        start: "#6366f1",
        end: "#6366f1",
      };
    } else {
      return {
        start: "#10b981",
        end: "#10b981",
      };
    }
  };

  const colors = getGradientColors();

  // Lighter background stroke based on current progress color
  const backgroundStroke = lightenHex(colors.start, 0.85); // 0.85 => very light

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={["relative", className].filter(Boolean).join(" ")}
      role="img"
      aria-label={`Readiness for role ${roleTitle}`}
    >
      {/* Square box that scales with width; height follows automatically */}
      <div
        className="relative w-full"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onMouseMove={handleMouseMove}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-auto block"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id={gid}
              x1="0"
              y1="50"
              x2="100"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={colors.start} stopOpacity="0.1" />
              <stop offset="100%" stopColor={colors.end} stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* background ring */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            stroke={backgroundStroke}
            strokeWidth={STROKE}
            fill="none"
          />

          {/* progress ring */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            stroke={`url(#${gid})`}
            strokeWidth={STROKE}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${CIRC} ${CIRC}`}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${CENTER} ${CENTER})`}
          />
        </svg>

        {/* Tooltip Popover */}
        {showTooltip && (
          <div
            className="absolute z-50 pointer-events-none"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y - 60}px`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="bg-gray-900 text-white px-4 py-3 rounded-xl shadow-lg relative">
              <p className="text-sm font-medium whitespace-nowrap">
                You have {currentSkills}/{requiredSkills} required skills
              </p>
              {/* Tooltip arrow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900" />
            </div>
          </div>
        )}

        {/* 100% Celebration Animation */}
        {progress === 100 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <DotLottieReact
              src="https://lottie.host/8894ed2b-7574-464a-bde7-b7fb85f8a15b/SCFI3FO09y.lottie"
              loop={false}
              autoplay
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* overlay content; scales with container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
          {Math.round(progress)}%
        </h3>
        <div className="text-sm sm:text-xl md:text-2xl text-gray-600 mt-1 max-w-[16rem] sm:max-w-[18rem] font-medium">
          Readiness
        </div>
      </div>
    </div>
  );
}
