import React, { createContext, useContext, useState, useCallback } from "react"

interface AccordionGroupContextType {
    toggleItem: (key: string) => void;
    isItemOpen: (key: string) => boolean;
}

const AccordionGroupContext = createContext<AccordionGroupContextType | undefined>(undefined);

interface AccordionGroupProps {
    children: React.ReactNode;
    allowMultiple?: boolean;
}

export function AccordionGroup({ children, allowMultiple = false }: AccordionGroupProps) {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = useCallback((key: string) => {
        setOpenItems((prev) => {
            if (prev.includes(key)) {
                return prev.filter((k) => k !== key)
            } else {
                return allowMultiple ? [...prev, key] : [key]
            }
        })
    }, [allowMultiple])

    const isItemOpen = useCallback((key: string) => openItems.includes(key), [openItems])

    return (
        <AccordionGroupContext.Provider value={{ toggleItem, isItemOpen }}>
            <div>{children}</div>
        </AccordionGroupContext.Provider>
    )
}

export function useAccordionGroupItem(key: string) {
    const context = useContext(AccordionGroupContext);
    if (!context) return { isOpen: undefined, toggle: undefined };

    return {
        isOpen: context.isItemOpen(key),
        toggle: () => context.toggleItem(key),
    }
}
