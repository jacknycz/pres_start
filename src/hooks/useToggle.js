import React from "react"
import useEffectOnUpdate from "./useEffectOnUpdate"

export default function useToggle({
    initialValue = false,
    onToggle = () => { },
    onEnable,
    onDisable,
} = {}) {
    const [on, setOn] = React.useState(initialValue)

    const toggle = () => {
        setOn(prev => !prev)
    }

    const reset = () => {
        setOn(initialValue)
    }

    useEffectOnUpdate(() => {
        onToggle(on)
        if (on && onEnable) onEnable()
        if (!on && onDisable) onDisable()
    }, [on])

    return [on, toggle, setOn, reset]
}

// const [isOpen, toggleOpen, setOpen, resetOpen] = useToggle({
//     initialValue: true,
//     onToggle: (state) => console.log("Toggled:", state),
//     onEnable: () => console.log("Enabled!"),
//     onDisable: () => console.log("Disabled!"),
// })

// ✨ Features:
// toggle: flips the value
// setOn: direct control
// reset: returns to initial state
// onToggle: callback on every toggle
// onEnable / onDisable: optional lifecycle-style hooks