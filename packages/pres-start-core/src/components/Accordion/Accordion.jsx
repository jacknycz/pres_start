import React, { useRef, useEffect, useState, useCallback } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import classNames from 'classnames';
import { useAccordionGroupItem } from './AccordionGroup.jsx';

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
    const group = useAccordionGroupItem(id);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState("0px");
    const [isOpenLocal, setIsOpenLocal] = useState(defaultOpen);
    
    // Handle toggling the accordion
    const toggleOpenLocal = useCallback(() => {
        setIsOpenLocal(prev => !prev);
    }, []);

    // Handle callbacks when isOpenLocal changes
    useEffect(() => {
        if (onToggle) onToggle(isOpenLocal);
        if (isOpenLocal && onEnable) onEnable();
        if (!isOpenLocal && onDisable) onDisable();
    }, [isOpenLocal, onToggle, onEnable, onDisable]);

    const isOpen = group.isOpen ?? isOpenLocal;
    const toggle = group.toggle ?? toggleOpenLocal;
    
    // Update content height when visibility changes
    useEffect(() => {
        if (isOpen && contentRef.current) {
            setContentHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setContentHeight("0px");
        }
    }, [isOpen]);

    return (
        <div className={classNames("bg-white dark:bg-gray-800 border border-b last:border-b-2 border-p-70 dark:border-p-500 rounded shadow-sm overflow-hidden", className)}>
            <button
                className="w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-300 ease-in-out"
                onClick={toggle}
                aria-expanded={isOpen}
            >
                <span className="pr-4 ont-medium text-gray-800 dark:text-white">{title}</span>

                <KeyboardArrowDownIcon
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 300ms ease-in-out',
                    }}
                    className="color-p-500"
                />
            </button>
            
            <div 
                style={{ 
                    height: contentHeight,
                    transition: `height 200ms ${isOpen ? 'ease-in-out' : 'cubic-bezier(0, 1, 0, 1)'}`,
                    overflow: 'hidden'
                }}
            >
                <div 
                    ref={contentRef}
                    className="px-4 pt-2 pb-4 text-gray-600 dark:text-white"
                >
                    {children}
                </div>
            </div>
        </div>
    );
} 