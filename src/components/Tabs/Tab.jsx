import React from "react";

export default function Tab({ children, icon, isActive, onSelect, id, panelId }) {
    return (
        <button
            id={id}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls={panelId}
            tabIndex={isActive ? 0 : -1}
            onClick={onSelect}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200
          ${isActive
                    ? 'border-p-50 text-p-50 dark:text-white'
                    : 'border-transparent text-gray-600 dark:text-p-90 dark:hover:text-white hover:border-p-60'}
        `}
        >
            {icon && <span className="material-icons text-base">{icon}</span>}
            {children}
        </button>
    );
}

Tab.displayName = "Tab";
