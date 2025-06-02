import React from "react"
import Button from "../Button/Button"
import IconButton from "../IconButton/IconButton"
import { MenuContext } from "./Menu"

/**
 * MenuButton component that can render as either a Button or IconButton
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content (text for Button, icon for IconButton)
 * @param {string} [props.as] - Component to use: 'button' (default) or 'icon-button'
 * @param {Object} props - Additional props to pass to the underlying component
 */
export default function MenuButton({ 
    children, 
    as = 'button', 
    ...props 
}) {
    const { toggleOpen } = React.useContext(MenuContext)
    
    // Common props for both button types
    const commonProps = {
        onClick: toggleOpen,
        'aria-haspopup': 'menu',
        'aria-expanded': props['aria-expanded'],
        ...props
    }

    if (as === 'icon-button') {
        return (
            <IconButton {...commonProps}>
                {children}
            </IconButton>
        )
    }

    return (
        <Button {...commonProps}>
            {children}
        </Button>
    )
}