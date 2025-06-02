import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Pres from "../assets/Pres.svg";
import MobileMenu from "./MenuMainMobile";
import classNames from "classnames";
import { IconButton } from "pres-start-core";
import { Menu } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import AstroPres from "../assets/AstroPres.svg";

export default function Header(props) {
    const navLinkClass = ({ isActive }) =>
        classNames(
            "pl-4 dark:text-white p-3 hover:text-p-500 transition-colors duration-300 text-left border-l-4 border-transparent opacity-0 translate-y-2 lg:opacity-100 lg:translate-y-0",
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
                <div className="flex justify-between items-center w-full p-3 lg:p-4 z-20 bg-white dark:bg-[#081028] border-b-4 border-gray-100 dark:border-p-900 shadow">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={AstroPres} alt="Pres" className="h-20 w-20" />
                        <span className="text-4xl font-300 dark:text-white tracking-widest">
                            Pres Start
                        </span>
                    </Link>

                    <IconButton
                        variant="ghost"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-nav"
                        className="lg:hidden z-50 fixed right-4 top-4 bg-white dark:bg-[#081028]"
                    >
                        {isMenuOpen ? <Close /> : <Menu />}
                    </IconButton>

                    {/* Mobile Menu */}
                    <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                </div>
            </div>

            {/* Navigation that I should probably rethink since I broke it in two 
            rather hastily for cool points, but it's fixed and scrolls on lg+ */}
            <div className="hidden lg:flex lg:flex-col overflow-y-scroll">
                <nav className="flex flex-col w-full space-y-2 lg:space-y-0 p-4 lg:p-0">
                    {[
                        { to: "/", label: "Getting Started" },
                        // { to: "/colors", label: "Colors" },
                        // { to: "/typography", label: "Typography" },
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
                <nav className="flex flex-col w-full space-y-1 lg:space-y-0 px-4 pb-4 lg:p-0">
                    {[
                        { to: "/exampleaccordions", label: "Accordions" },
                        { to: "/exampleavatars", label: "Avatars" },
                        { to: "/examplebadges", label: "Badges" },
                        { to: "/examplebuttongroup", label: "Button Group" },
                        { to: "/examplebuttons", label: "Buttons" },
                        { to: "/examplecheckbox", label: "Checkbox" },
                        { to: "/exampleheading", label: "Heading" },
                        { to: "/exampleiconbuttons", label: "Icon Buttons" },
                        { to: "/examplelink", label: "Link" },
                        { to: "/examplemenus", label: "Menus" },
                        { to: "/examplemodals", label: "Modals" },
                        { to: "/exampleprogress", label: "Progress" },
                        { to: "/exampleradiogroup", label: "Radio Group" },
                        { to: "/examplerangeslider", label: "Range Slider" },
                        { to: "/exampleselectinput", label: "Select Input" },
                        { to: "/examplespinner", label: "Spinner" },
                        { to: "/exampletabs", label: "Tabs" },
                        { to: "/exampletag", label: "Tag" },
                        { to: "/exampletextinput", label: "Text Input" },
                        { to: "/exampletoast", label: "Toast" },
                        { to: "/exampletoggleswitch", label: "Toggle Switch" },
                        { to: "/exampletooltip", label: "Tooltip" },
                        { to: "/examplechatbot", label: "Chatbot" },
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