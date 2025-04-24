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
        <header className={props.className}>
            <div className="flex flex-col w-full items-start">
                <div className="text-lg font-bold mb-4 p-2 md:p-4">
                    <NavLink to="/" className="flex items-center gap-2">
                        <span className="flex p-2 bg-white rounded-full">
                            <Pres width="48" fill="#000" />
                        </span>
                        <span className="text-3xl font-light">Pres Start</span>
                    </NavLink>
                </div>

                <button
                    onClick={toggleOpen}
                    className="text-gray-800 dark:text-white focus:outline-none flex md:hidden items-center justify-center w-full p-4 rounded-lg bg-gray-100 dark:bg-[#0A1330] hover:bg-gray-200 dark:hover:bg-[#0A1330] transition-colors duration-300"
                    aria-label="Toggle navigation"
                >
                    {isOpen ? "Close" : "Open"}
                </button>

                <nav className={`
                    flex flex-col w-full mt-4 md:mt-0 space-y-4 md:space-y-0 
                    ${isOpen ? "flex" : "hidden"} md:flex
                `}
                >
                    <NavLink to="/exampleaccordions" className={navLinkClass}>Accordions</NavLink>
                    <NavLink to="/exampleavatars" className={navLinkClass}>Avatars</NavLink>
                    <NavLink to="/examplebuttons" className={navLinkClass}>Buttons</NavLink>
                    <NavLink to="/examplebadges" className={navLinkClass}>Badges</NavLink>
                    <NavLink to="/examplemenus" className={navLinkClass}>Menus</NavLink>
                </nav>
            </div>
        </header>
    );
}