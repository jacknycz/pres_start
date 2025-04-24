import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import classNames from 'classnames'
import useToggle from '../../hooks/useToggle'
import { useAccordionGroupItem } from './AccordionGroup'

export default function Accordion({
    id,
    title,
    children,
    defaultOpen = false,
    onToggle,
    onEnable,
    onDisable,
    className,
}) {
    const group = useAccordionGroupItem(id)

    const [isOpenLocal, toggleOpenLocal] = useToggle({
        initialValue: defaultOpen,
        onToggle,
        onEnable,
        onDisable,
    })

    const isOpen = group.isOpen ?? isOpenLocal
    const toggle = group.toggle ?? toggleOpenLocal

    return (
        <div className={classNames("border rounded-2xl shadow-sm overflow-hidden", className)}>
            <button
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-300 ease-in-out"
                onClick={toggle}
                aria-expanded={isOpen}
            >
                <span className="font-medium text-gray-800 dark:text-white">{title}</span>

                <KeyboardArrowDownIcon
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 300ms ease-in-out',
                    }}
                />

            </button>
            <div
                className={classNames(
                    'px-4 pt-2 pb-4 text-gray-600 transition-all duration-300 dark:text-white',
                    {
                        'max-h-96 opacity-100': isOpen,
                        'max-h-0 opacity-0 overflow-hidden': !isOpen
                    }
                )}
            >
                {children}
            </div>
        </div>
    )
}
