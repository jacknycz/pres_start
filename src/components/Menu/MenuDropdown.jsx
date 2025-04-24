import React from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {
    const { open } = React.useContext(MenuContext)

    return (
        <>
            {open ? (
                <div
                    className="absolute left-0 mt-2 bg-white border border-gray-400 rounded-md"
                >
                    {children}
                </div>
            ) : null
            }
        </>
    )
}