import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Pres from "../assets/Pres";
import MobileMenu from "./MenuMainMobile";
import classNames from "classnames";
import IconButton from "./IconButton/IconButton";
import { Menu } from "@mui/icons-material";
import { Close } from "@mui/icons-material";

export default function Header(props) {
    const navLinkClass = ({ isActive }) =>
        classNames(
            "pl-4 dark:text-white p-3 hover:text-p-500 transition-colors duration-300 text-left border-l-4 border-transparent opacity-0 translate-y-2 md:opacity-100 md:translate-y-0",
            {
                "text-p-500 bg-gray-100 dark:bg-[#0A1330] font-semibold hover:text-p-500 dark:text-p-60 dark:hover:text-p-60 border-l-p-500":
                    isActive,
            }
        );

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMenuOpen, setIsMenuOpen]);

    return (
        <header className={`${props.className}`}>
            {/* Fixed logo and mobile toggle */}
            <div className="flex-shrink-0">
                <div className="flex justify-between items-center w-full p-3 md:p-4 z-20 bg-white dark:bg-[#081028] border-b-4 border-gray-100 dark:border-p-900 shadow">
                    <Link to="/" className="flex items-center gap-1">
                        <span className="flex p-2 dark:bg-p-500 rounded-full">
                            <Pres size="36" fill="#000" />
                        </span>
                        <span className="text-2xl font-bold dark:text-white">
                            Pres Start
                        </span>
                    </Link>

                    <IconButton
                        variant="ghost"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-nav"
                        className="md:hidden z-50 fixed right-4 top-4"
                    >
                        {isMenuOpen ? <Close /> : <Menu />}
                    </IconButton>

                    {/* Mobile Menu */}
                    <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                </div>
            </div>

            {/* Navigation that I should probably rethink since I broke it in two 
            rather hastily for cool points, but it's fixed and scrolls on md+ */}
            <div className="hidden md:flex md:flex-col">
                <nav className="flex flex-col w-full space-y-2 md:space-y-0 p-4 md:p-0">
                    {[
                        { to: "/", label: "Getting Started" },
                        { to: "/colors", label: "Colors" },
                        { to: "/typography", label: "Typography" },
                    ].map((item, index) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                navLinkClass({ isActive })
                            }
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <h3 className={`px-3 py-6 pb-3 text-lg font-medium border-t border-gray-100 dark:border-p-900 transition-opacity duration-500 ease-out`}>Components</h3>
                <nav className="flex flex-col w-full space-y-1 md:space-y-0 px-4 pb-4 md:p-0">
                    {[
                        { to: "/exampleaccordions", label: "Accordions" },
                        { to: "/exampleavatars", label: "Avatars" },
                        { to: "/examplebadges", label: "Badges" },
                        { to: "/examplebuttons", label: "Buttons" },
                        { to: "/examplecheckbox", label: "Checkbox" },
                        { to: "/exampleiconbuttons", label: "Icon Buttons" },
                        { to: "/examplemenus", label: "Menus" },
                        { to: "/examplemodals", label: "Modals" },
                        { to: "/exampleradiogroup", label: "Radio Group" },
                        { to: "/exampleselectinput", label: "Select Input" },
                        { to: "/exampletabs", label: "Tabs" },
                        { to: "/exampletextinput", label: "Text Input" },
                        { to: "/exampletoggleswitch", label: "Toggle Switch" },
                    ].map((item, index) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                navLinkClass({ isActive })
                            }
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}