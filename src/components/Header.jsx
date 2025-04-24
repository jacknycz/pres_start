import React from "react";
import { NavLink } from "react-router-dom";
import Pres from "../assets/Pres";
import classNames from "classnames";
import useToggle from "../hooks/useToggle";

export default function Header(props) {
    const navLinkClass = ({ isActive }) =>
        classNames(
            'ml-2 pl-2 p-4 hover:text-p-50 transition-colors duration-300 text-left border-l-4 border-transparent rounded',
            { 
                'text-p-50 bg-gray-100 dark:bg-[#0A1330] font-semibold hover:text-p-50 dark:text-p-60 dark:hover:text-p-60 border-l-p-40': isActive 
            }
        )

    const [isOpen, toggleOpen] = useToggle();

    return (
        <header className={`relative z-30 ${props.className}`}>
            <div className="flex flex-col w-full items-start">
                <div className="flex justify-between items-center w-full mb-4 p-2 md:p-4">
                    <NavLink to="/" className="flex items-center gap-2">
                        <span className="flex p-2 bg-white rounded-full">
                            <Pres width="48" fill="#000" />
                        </span>
                        <span className="text-3xl font-light">Pres Start</span>
                    </NavLink>
                    
                    <button
                        onClick={toggleOpen}
                        className="text-gray-800 dark:text-white focus:outline-none flex md:hidden items-center justify-center p-3 rounded-lg bg-gray-100 dark:bg-[#0A1330] hover:bg-gray-200 dark:hover:bg-[#0A1330] transition-colors duration-300"
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? "Close" : "Menu"}
                    </button>
                </div>

                {/* Mobile Navigation Overlay */}
                <div className={`
                    absolute top-full left-0 right-0 z-40
                    md:relative md:top-auto md:left-auto md:right-auto md:z-auto
                    w-full bg-white dark:bg-gray-900 shadow-lg md:shadow-none
                    transition-all duration-300 ease-in-out
                    ${isOpen 
                        ? 'max-h-96 opacity-100 translate-y-0' 
                        : 'max-h-0 opacity-0 -translate-y-2 md:opacity-100 md:translate-y-0'
                    }
                    overflow-hidden md:overflow-visible md:max-h-full
                `}>
                    <nav className="flex flex-col w-full space-y-4 md:space-y-0 p-4 md:p-0">
                        <NavLink to="/exampleaccordions" className={navLinkClass} onClick={() => isOpen && toggleOpen()}>Accordions</NavLink>
                        <NavLink to="/exampleavatars" className={navLinkClass} onClick={() => isOpen && toggleOpen()}>Avatars</NavLink>
                        <NavLink to="/examplebuttons" className={navLinkClass} onClick={() => isOpen && toggleOpen()}>Buttons</NavLink>
                        <NavLink to="/examplebadges" className={navLinkClass} onClick={() => isOpen && toggleOpen()}>Badges</NavLink>
                        <NavLink to="/examplemenus" className={navLinkClass} onClick={() => isOpen && toggleOpen()}>Menus</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}