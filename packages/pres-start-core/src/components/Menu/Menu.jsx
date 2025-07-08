import React, { useState, useEffect } from "react"

const MenuContext = React.createContext()
export { MenuContext }

export default function Menu({ children, onOpen, className, variant = 'default', ...props }) {
    const [open, setOpen] = useState(false)
    
    const toggleOpen = () => {
        setOpen(prev => !prev)
    }

    useEffect(() => {
        if (onOpen) {
            onOpen(open)
        }
    }, [open, onOpen])

    const menuClass = variant === 'custom' ? className : `pres-menu menu relative ${className}`;

    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div className={menuClass} {...props}>
                {children}
            </div>
        </MenuContext.Provider>
    )
} 