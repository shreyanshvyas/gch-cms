"use client";

import { ChevronDownIcon } from "lucide-react";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Role = {
  id: number;
  role_id: string;
  title: string;
  level: string;
  next_role_path?: string[];
};

type CountryItem = {
  id?: number | string;
  country_name: string;
  currency_code: string;
  country_code: string;
  [k: string]: unknown;
};

type TitleMap = Record<string, string>;
type RectLike = { x: number; y: number; width: number; height: number };

const levelColors: Record<string, string> = {
  "0": "bg-green-50 -green-600 border-green-500",
  "1": "bg-purple-50 -purple-600 border-purple-500",
  "2": "bg-fuchsia-50 -fuchsia-600 border-fuchsia-500",
  "3": "bg-blue-50 -blue-600 border-blue-500",
};

const COUNTRIES_API = "https://api.careers.edept.co/v1/countries";

export default function CareerPath() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [titleMap, setTitleMap] = useState<TitleMap>({});
  const [hoveredRole, setHoveredRole] = useState<Role | null>(null);
  const [salary, setSalary] = useState<string | null>(null);
  const [currencyCode, setCurrencyCode] = useState<string>("");

  const [countries, setCountries] = useState<CountryItem[]>([]);
  const [loadingCountries, setLoadingCountries] = useState<boolean>(true);
  const [countriesError, setCountriesError] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState<string>("");

  // Clicked role to show connections for
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [positions, setPositions] = useState<Record<string, RectLike>>({});
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const [selectedRoleForCard, setSelectedRoleForCard] = useState<Role | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const roleForSalary = isMobile ? selectedRoleForCard : hoveredRole;

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch("https://api.careers.edept.co/v1/roles")
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) setRoles(json.result ?? []);
      })
      .catch(() => { });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch("https://api.careers.edept.co/v1/roles/titles")
      .then((res) => res.json())
      .then((json) => {
        if (cancelled) return;
        const map: TitleMap = {};
        (json.result ?? []).forEach((r: { role_id: string; title: string }) => {
          map[r.title] = r.role_id;
        });
        setTitleMap(map);
      })
      .catch(() => { });
    return () => {
      cancelled = true;
    };
  }, []);

 useEffect(() => {
    let mounted = true;
    (async () => {
      setLoadingCountries(true);
      setCountriesError(null);
      try {
        const res = await fetch(COUNTRIES_API);
        if (!res.ok) throw new Error(`Countries fetch failed: ${res.status}`);
        const json = await res.json();
        const list: CountryItem[] = Array.isArray(json) ? json : json?.result ?? [];
        if (mounted) {
          const seen = new Map<string, CountryItem>();
          list
            .filter(c => c.country_code !== "IND")
            .forEach((c) => {
              const key = `${c.country_name}__${c.country_code}`;
              if (!seen.has(key)) seen.set(key, c);
            });
          setCountries(Array.from(seen.values()));
          setCountryCode("USA")
        }
      } catch (err: unknown) {
        if (!mounted) return;
        const message =
          err instanceof Error
            ? err.message
            : typeof err === "string"
              ? err
              : JSON.stringify(err, null, 0);
        setCountriesError(message);
      }
      finally {
        if (mounted) setLoadingCountries(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const countryOptions = useMemo(
    () =>
      countries.map((c) => ({
        label: c.country_name,
        value: c.country_code,
        original: c,
      })),
    [countries]
  );

  useEffect(() => {
    if (!hoveredRole || !countryCode) return;
    let cancelled = false;
    (async () => {
      try {
        const encodedRoleId = encodeURIComponent(hoveredRole.role_id);
        const res = await fetch(
          `https://api.careers.edept.co/v1/role-salaries/summary/${countryCode}?role_id=${encodedRoleId}`
        );
        const data = await res.json();
        if (!cancelled) {
          const row = data?.result?.summary?.[0];
          setSalary(row?.avg_salary ?? null);
          setCurrencyCode(row?.currency_code ?? "");
        }
      } catch {
        if (!cancelled) {
          setSalary(null);
          setCurrencyCode("");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [hoveredRole, countryCode]);

  useEffect(() => {
    if (!roleForSalary || !countryCode) {
      setSalary(null);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const encodedRoleId = encodeURIComponent(roleForSalary.role_id);
        const res = await fetch(
          `https://api.careers.edept.co/v1/role-salaries/summary/${countryCode}?role_id=${encodedRoleId}`
        );
        const data = await res.json();
        if (!cancelled) {
          const row = data?.result?.summary?.[0];
          setSalary(row?.avg_salary ?? null);
          setCurrencyCode(row?.currency_code ?? "");
        }
      } catch {
        if (!cancelled) {
          setSalary(null);
          setCurrencyCode("");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [roleForSalary, countryCode]);

  // Group roles by level
  const grouped = useMemo(() => {
    const g: Record<string, Role[]> = {};
    roles.forEach((r) => {
      if (!g[r.level]) g[r.level] = [];
      g[r.level].push(r);
    });
    return g;
  }, [roles]);

  const sortedLevels = useMemo(
    () => Object.keys(grouped).sort((a, b) => Number(a) - Number(b)),
    [grouped]
  );

  // Map role_id to numeric level to check connections
  const levels: Record<string, number> = useMemo(() => {
    const out: Record<string, number> = {};
    Object.entries(grouped).forEach(([lvl, arr]) =>
      arr.forEach((role) => {
        out[role.role_id] = Number(lvl);
      })
    );
    return out;
  }, [grouped]);

  // Map role_id for quick lookup
  const roleMap = useMemo(() => {
    const map: Record<string, Role> = {};
    roles.forEach((r) => {
      map[r.role_id] = r;
    });
    return map;
  }, [roles]);

  // Compute reverse map: role_id -> Set of previous role_ids
  const reverseMap = useMemo(() => {
    const map: Record<string, Set<string>> = {};


    roles.forEach((role) => {
      if (role.next_role_path) {
        role.next_role_path.forEach((nextTitle) => {
          const nextId = titleMap[nextTitle];
          if (!nextId) return;
          if (!map[nextId]) map[nextId] = new Set();
          map[nextId].add(role.role_id);
        });
      }
    });

    return map;
  }, [roles, titleMap]);

  // Traverse graph forward from selected node ignoring same level connections
  const traverseForward = (startId: string, visited: Set<string>) => {
    if (visited.has(startId)) return;
    visited.add(startId);
    const role = roleMap[startId];
    if (role?.next_role_path) {
      role.next_role_path.forEach((title) => {
        const nextId = titleMap[title];
        if (
          nextId &&
          levels[nextId] !== undefined &&
          levels[nextId] > levels[startId]
        ) {
          traverseForward(nextId, visited);
        }
      });
    }
  };

  // Traverse graph backward from selected node ignoring same level connections
  const traverseBackward = (startId: string, visited: Set<string>) => {
    if (visited.has(startId)) return;
    visited.add(startId);
    const prevSet = reverseMap[startId];
    if (prevSet) {
      prevSet.forEach((prevId) => {
        if (
          prevId &&
          levels[prevId] !== undefined &&
          levels[prevId] < levels[startId]
        ) {
          traverseBackward(prevId, visited);
        }
      });
    }
  };

  // Combine both forward/backward sets for active nodes
  const activeRoleIds = useMemo(() => {
    if (!selectedRoleId) return new Set<string>();


    const forwardVisited = new Set<string>();
    const backwardVisited = new Set<string>();

    traverseForward(selectedRoleId, forwardVisited);
    traverseBackward(selectedRoleId, backwardVisited);

    // Union sets: nodes reachable from and leading to selectedRoleId
    const combined = new Set<string>([...forwardVisited, ...backwardVisited]);
    return combined;
  }, [selectedRoleId, roleMap, titleMap, reverseMap, levels]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const measure = () => {
      // Get scrollable content size for overlay
      setCanvasSize({
        width: container.scrollWidth,
        height: container.scrollHeight,
      });


      const cRect = container.getBoundingClientRect();
      const next: Record<string, RectLike> = {};
      for (const id of Object.keys(nodeRefs.current)) {
        const el = nodeRefs.current[id];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        next[id] = {
          x: r.left - cRect.left + container.scrollLeft,
          y: r.top - cRect.top + container.scrollTop,
          width: r.width,
          height: r.height,
        };
      }
      setPositions(next);
    };
    const raf = requestAnimationFrame(measure);
    container.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    const ro = new ResizeObserver(() => measure());
    ro.observe(container);
    Object.values(nodeRefs.current).forEach((n) => {
      if (n) ro.observe(n);
    });
    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [roles]);

  const getCurrencySymbol = (currencyCode: string) => {
    if (!currencyCode) {
      return ""; // Return empty string if no code is provided
    }


    try {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0, // Ensure no trailing zeros clutter the output
        maximumFractionDigits: 0,
      });

      const formatted = formatter.format(0);

      const symbol = formatted.replace(/\d/g, '').trim();

      if (symbol.length > 2) {
        return currencyCode;
      }

      return symbol;

    } catch (error) {
      console.error(`Failed to get symbol for ${currencyCode}:`, error);
      return currencyCode;
    }
  };

  const cardVisibleRole = isMobile ? selectedRoleForCard : hoveredRole;

  const handleNodeClick = (role: Role) => {
    if (isMobile) {
      setSelectedRoleForCard((prev) => (prev?.id === role.id ? null : role));
    }
    setSelectedRoleId(role.role_id);
    // Scroll node into view for user and to force layout update
    const el = nodeRefs.current[role.role_id];
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }
  };

  return (
    <div className="flex flex-col w-full gap-4 max-w-7xl mx-auto py-12 md:pb-20 md:pt-10 xl:px-0 md:px-12 px-6 section" id="career-path">
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center mb-6 px-4">
        <div className="-center md:-left md:mb-0 mb-4">
          <h2 className="-2xl sm:-4xl font-bold mb-1">Career Path</h2>
          <p className="-base md:-lg -gray-600">Explore the path to your dream job</p>
        </div>
        <div className="md:my-4 w-max rounded-full ">
          <div className="md:mb-4">
            {loadingCountries ? (
              <div className="p-3 bg-gray-50 rounded -sm -gray-500">
                Loading countries…
              </div>
            ) : countriesError ? (
              <div className="p-3 bg-red-50 rounded -sm -red-600">{countriesError}</div>
            ) : (
              <div className="relative w-full">
                <select
                  className="w-full border border-gray-200 rounded-full py-2 -sm pl-3 pr-8 appearance-none"
                  value={countryCode}
                  onChange={(e) => {
                    const code = e.target.value;
                    setCountryCode(code);
                  }}
                >
                  {countryOptions.map((opt) => (
                    <option key={opt.value + opt.label} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>


      {/* Tree container: always horizontally scrollable, minimum padding on mobile */}
      <div
        ref={containerRef}
        className="relative flex items-center lg:justify-center gap-x-28 lg:gap-x-32 px-10 overflow-x-scroll lg:overflow-x-auto min-h-[29rem] border border-gray-300 rounded-3xl"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {sortedLevels.map((lvl) => (
          <div key={lvl} className="flex flex-col items-center gap-4 sm:gap-6">
            {grouped[lvl].map((role) => {
              // role is "active" only if it's in the click-traced path (transitive closure)
              const isActive =
                !selectedRoleId || (selectedRoleId && activeRoleIds.has(role.role_id));

              const nodeClass =
                !selectedRoleId
                  ? levelColors[lvl] ?? "bg-slate-500"
                  : isActive
                    ? levelColors[lvl] ?? "bg-slate-500"
                    : "bg-gray-100 border-gray-200 cursor-pointer";

              const Class = !selectedRoleId
                ? ""
                : isActive
                  ? ""
                  : "-gray-400";

              return (
                <div
                  key={role.id}
                  ref={(el) => { if (el) nodeRefs.current[role.role_id] = el; }}
                  className={
                    `relative min-w-[150px] sm:min-w-[180px] rounded-full border font-semibold selection:bg-fuchsia-100 px-4 py-3 md:px-5 md:py-4 text-center shadow-sm transition-colors duration-150 ${isActive || !selectedRoleId ? "" : Class
                    } ${nodeClass}`
                  }
                  onClick={() => handleNodeClick(role)}
                  onMouseEnter={() => !isMobile && setHoveredRole(role)}
                  onMouseLeave={() => !isMobile && setHoveredRole(null)}
                >
                  <span >{role.title}</span>
                  {cardVisibleRole?.id === role.id && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white -black rounded-lg shadow-lg p-3 z-20">
                      <p className="font-semibold">{role.title}</p>
                      <p className="-sm -gray-600">
                        Average Salary :{" "}
                        <span className="font-bold">
                          {salary ? `${getCurrencySymbol(currencyCode)} ${Intl.NumberFormat('en-US').format(Number(salary))}` : "Loading..."}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* Connector lines as dashed Bézier with dots (render only if node is selected) */}
        {selectedRoleId && (
          <svg className="pointer-events-none absolute inset-0 w-full h-full z-0"
            style={{
              width: canvasSize.width,
              height: canvasSize.height,
              minWidth: canvasSize.width,
              minHeight: canvasSize.height,
              zIndex: 0,
            }}
          >
            {roles.map((role) =>
              role.next_role_path?.map((nextTitle, i) => {
                const from = positions[role.role_id];
                const nextRoleId = titleMap[nextTitle];
                const to = nextRoleId ? positions[nextRoleId] : undefined;

                if (
                  !from ||
                  !to ||
                  !levels[nextRoleId] ||
                  levels[nextRoleId] <= levels[role.role_id] ||
                  !activeRoleIds.has(role.role_id) ||
                  !activeRoleIds.has(nextRoleId)
                )
                  return null;

                const startX = from.x + from.width;
                const startY = from.y + from.height / 2;
                const endX = to.x;
                const endY = to.y + to.height / 2;
                const path = `M ${startX} ${startY} C ${startX + 50} ${startY}, ${endX - 50} ${endY}, ${endX} ${endY}`;
                const dotRadius = 4;

                return (
                  <g key={`${role.role_id}-${i}`}>
                    <path
                      d={path}
                      stroke="gray"
                      strokeWidth={2}
                      fill="none"
                      strokeDasharray="6,6"
                    />
                    <circle
                      cx={startX}
                      cy={startY}
                      r={dotRadius}
                      fill="gray"
                      stroke="gray"
                      strokeWidth={2}
                    />
                    <circle
                      cx={endX}
                      cy={endY}
                      r={dotRadius}
                      fill="gray"
                      stroke="gray"
                      strokeWidth={2}
                    />
                  </g>
                );
              })
            )}
          </svg>
        )}
      </div>
      <span className="lg:hidden block -gray-500 -sm -center"> Note: Drag to view full Career Tree.</span>
    </div>
  );
}