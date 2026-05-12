// src/components/ui/DisclosureList.tsx
"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { cn } from "./cn";

export type DisclosureItem = {
    id: string;
    title: string;
    defaultOpen?: boolean;
    panel?: {
        title: string;
        body: string;
    }[];
};

export type DisclosureListProps = {
    items: DisclosureItem[];
    firstTitleOverride?: string; // optional: replace the first item’s title
    className?: string;
    buttonClassName?: string;
    panelClassName?: string;
};

export default function DisclosureList({
    items,
    firstTitleOverride,
    className,
    buttonClassName,
    panelClassName,
}: DisclosureListProps) {
    return (
        <div className={cn("space-y-4", className)}>
            {items.map((item, idx) => (
                <Disclosure key={item.id} defaultOpen={item.defaultOpen}>
                    {({ open }) => (
                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
                            <DisclosureButton
                                className={cn(
                                    "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
                                    buttonClassName
                                )}
                            >
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {idx === 0 && firstTitleOverride ? firstTitleOverride : item.title}
                                </h3>
                                <ChevronDown
                                    className={cn(
                                        "h-5 w-5 text-gray-500 transition-transform",
                                        open ? "rotate-180" : ""
                                    )}
                                    aria-hidden="true"
                                />
                            </DisclosureButton>
                            <DisclosurePanel
                                className={cn("px-6 pb-5 pt-0 text-base text-gray-700", panelClassName)}
                            >
                                {item.panel?.map((panelItem, index) => (
                                    <ul className="list-disc list-outside ms-5 space-y-3" key ={index}>
                                        <li>
                                            <div className="gap-2 text-base font-semibold text-gray-800">
                                                <strong className=" font-bold">   {panelItem.title}: </strong>
                                                {panelItem.body}
                                            </div>
                                        </li>
                                    </ul>
                                ))}
                            </DisclosurePanel>
                        </div>
                    )}
                </Disclosure>
            ))}
        </div>
    );
}
