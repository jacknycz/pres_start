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
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-400'}
        `}
        >
            {icon && <span className="material-icons text-base">{icon}</span>}
            {children}
        </button>
    );
}

Tab.displayName = "Tab";
