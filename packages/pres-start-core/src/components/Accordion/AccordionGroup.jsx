import React, { createContext, useContext, useState, useCallback } from "react"

const AccordionGroupContext = createContext()

export function AccordionGroup({ children, allowMultiple = false, className, variant = "default", ...props }) {
    const [openItems, setOpenItems] = useState([])

    const toggleItem = useCallback((key) => {
        setOpenItems((prev) => {
            if (prev.includes(key)) {
                return prev.filter((k) => k !== key)
            } else {
                return allowMultiple ? [...prev, key] : [key]
            }
        })
    }, [allowMultiple])

    const isItemOpen = useCallback((key) => openItems.includes(key), [openItems])

    // Determine styles based on variant
    const groupClass = variant === "custom" ? className : className ? `pres-accordion-group ${className}` : "pres-accordion-group";

    return (
        <AccordionGroupContext.Provider value={{ toggleItem, isItemOpen }}>
            <div className={groupClass} {...props}>{children}</div>
        </AccordionGroupContext.Provider>
    )
}

export function useAccordionGroupItem(key) {
    const context = useContext(AccordionGroupContext)
    if (!context) return { isOpen: undefined, toggle: undefined }

    return {
        isOpen: context.isItemOpen(key),
        toggle: () => context.toggleItem(key),
    }
} 