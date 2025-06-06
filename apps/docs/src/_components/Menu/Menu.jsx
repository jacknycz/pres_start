import React, { useState, useEffect } from "react"

const MenuContext = React.createContext()
export { MenuContext }

export default function Menu({ children, onOpen }) {
    const [open, setOpen] = useState(false)
    
    const toggleOpen = () => {
        setOpen(prev => !prev)
    }

    useEffect(() => {
        if (onOpen) {
            onOpen(open)
        }
    }, [open, onOpen])

    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div className="menu relative">
                {children}
            </div>
        </MenuContext.Provider>
    )
}
