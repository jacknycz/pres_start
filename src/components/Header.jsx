import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Pres from "../assets/Pres";
import classNames from "classnames";
import useToggle from "../hooks/useToggle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header(props) {
    const navLinkClass = ({ isActive }) =>
        classNames(
            "ml-2 pl-2 p-4 hover:text-p-50 transition-colors duration-300 text-left border-l-4 border-transparent rounded opacity-0 translate-y-2 md:opacity-100 md:translate-y-0",
            {
                "text-p-50 bg-gray-100 dark:bg-[#0A1330] font-semibold hover:text-p-50 dark:text-p-60 dark:hover:text-p-60 border-l-p-40":
                    isActive,
            }
        );

    const [isOpen, toggleOpen, setOpen] = useToggle();

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isOpen) {
                setOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, setOpen]);

    return (
        <header className={`relative z-30 ${props.className}`}>
            <div className="flex flex-col w-full items-start">
                <div className="flex justify-between items-center w-full p-2 md:p-4">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="flex p-2 bg-white rounded-full shadow">
                            <Pres size="48" fill="#000" />
                        </span>
                        <span className="text-3xl font-light dark:text-white">
                            Pres Start
                        </span>
                    </Link>

                    <button
                        onClick={toggleOpen}
                        className="text-gray-800 dark:text-white focus:outline-none flex md:hidden items-center justify-center p-3 rounded-lg bg-gray-100 dark:bg-[#0A1330] hover:bg-gray-200 dark:hover:bg-[#0A1330] transition-colors duration-300"
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav"
                    >
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>

                {/* Mobile Backdrop */}
                {/* <div
                    className={classNames(
                        "fixed inset-0 bg-black/50 backdrop-blur-sm z-20 transition-opacity duration-300 md:hidden",
                        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                    onClick={toggleOpen}
                /> */}

                {/* Navigation */}
                <div
                    className={classNames(
                        `
                        absolute top-full left-0 right-0 z-40 flex flex-col
                        md:relative md:top-auto md:left-auto md:right-auto md:z-auto
                        overflow-y-scroll
                        w-full bg-white dark:bg-[#0A1330]/80 shadow-lg md:shadow-none
                        transition-all duration-300 ease-in-out
                        md:height-auto
                    `,
                        isOpen ? "max-h-dvh opacity-100" : "max-h-0 md:max-h-dvh md:opacity-100 md:translate-y-0"
                    )}
                    style={{
                        transition: "max-height 0.4s ease-in-out",
                    }}
                >
                    {/* <h3 className="py-4 px-2 text-lg font-medium border-t-2 border-gray-200 dark:border-gray-700">Getting Started</h3> */}
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
                                    classNames(
                                        navLinkClass({ isActive }),
                                        "transition-opacity duration-500 ease-out",
                                        isOpen
                                            ? `opacity-100 translate-y-0 delay-${index * 100}`
                                            : "opacity-0 translate-y-2 delay-0"
                                    )
                                }
                                onClick={() => {
                                    if (isOpen) toggleOpen(); 
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}

                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                    <h3 className="py-4 px-2 text-lg font-medium border-t-2 border-gray-200 dark:border-gray-700">Components</h3>
                    <nav className="flex flex-col w-full space-y-2 md:space-y-0 p-4 md:p-0">
                        {[
                            { to: "/exampleaccordions", label: "Accordions" },
                            { to: "/exampleavatars", label: "Avatars" },
                            { to: "/examplebuttons", label: "Buttons" },
                            { to: "/examplebadges", label: "Badges" },
                            { to: "/examplecheckbox", label: "Checkbox" },
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
                                    classNames(
                                        navLinkClass({ isActive }),
                                        "transition-opacity duration-500 ease-out",
                                        isOpen
                                            ? `opacity-100 translate-y-0 delay-${index * 100}`
                                            : "opacity-0 translate-y-2 delay-0"
                                    )
                                }
                                onClick={() => {
                                    if (isOpen) toggleOpen();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}

                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
