import React from "react";
import { useState, useId } from "react";

export default function TabGroup({ children, className = "" }) {
    const tabs = [];
    const panels = [];

    children.forEach((child) => {
        if (child.type.displayName === "Tab") tabs.push(child);
        else panels.push(child);
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const id = useId();

    const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % tabs.length);
        else if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + tabs.length) % tabs.length);
        else if (e.key === "Home") setActiveIndex(0);
        else if (e.key === "End") setActiveIndex(tabs.length - 1);
    };

    return (
        <div className={`w-full ${className}`}>
            <div
                role="tablist"
                aria-label="Tabs"
                className="flex flex-wrap sm:flex-nowrap overflow-x-auto border-b border-gray-200 dark:border-gray-700"
                onKeyDown={handleKeyDown}
            >

                {tabs.map((tab, index) =>
                    React.cloneElement(tab, {
                        key: index,
                        isActive: index === activeIndex,
                        onSelect: () => setActiveIndex(index),
                        id: `${id}-tab-${index}`,
                        panelId: `${id}-panel-${index}`,
                    })
                )}
            </div>
            <div className="mt-4">
                {panels.map((panel, index) =>
                    index === activeIndex
                        ? React.cloneElement(panel, {
                            key: index,
                            labelledBy: `${id}-tab-${index}`,
                            id: `${id}-panel-${index}`,
                        })
                        : null
                )}
            </div>
        </div>
    );
}
