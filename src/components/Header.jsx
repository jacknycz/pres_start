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
            "ml-2 pl-2 dark:text-white p-3 hover:text-p-50 transition-colors duration-300 text-left border-l-4 border-transparent rounded opacity-0 translate-y-2 md:opacity-100 md:translate-y-0",
            {
                "text-p-50 bg-gray-100 dark:bg-[#0A1330] font-semibold hover:text-p-50 dark:text-p-60 dark:hover:text-p-60 border-l-p-40":
                    isActive,
            }
        );

    const [isOpen, toggleOpen, setOpen] = useToggle();

    // Close w/ escape (this is how I used to do it so there's probably a new way?)
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
        <header className={`relative z-30 flex flex-col md:h-full ${!isOpen ? 'overflow-hidden' : ''} ${props.className}`}>
            
            {/* Fixed logo and mobile toggle */}
            <div className="flex justify-between items-center w-full p-3 md:p-4 md:sticky md:top-0 md:z-10 bg-white dark:bg-[#081028] shrink-0 border-b-4 shadow border-gray-100 dark:border-p-20">
                <Link to="/" className="flex items-center gap-1">
                    <span className="flex p-2 dark:bg-p-50 rounded-full">
                        <Pres size="36" fill="#000" />
                    </span>
                    <span className="text-2xl font-bold dark:text-white">
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

            {/* Navigation that I should probably rethink since I broke it in two 
            rather hastily for cool points, but it's fixed and scrolls on md+ */}
            <div
                className={classNames(
                    `
                    absolute top-full left-0 right-0 z-40 flex flex-col
                    md:relative md:top-auto md:left-auto md:right-auto md:z-auto
                    md:flex-1 md:overflow-y-auto
                    w-full bg-white dark:bg-[#0A1330]/80 shadow-lg md:shadow-none
                    transition-all duration-300 ease-in-out
                `,
                    isOpen ? "max-h-dvh opacity-100" : "max-h-0 md:max-h-full md:opacity-100"
                )}
                style={{
                    transition: "max-height 0.4s ease-in-out",
                }}
            >
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
                                        : "opacity-0 translate-y-2 md:opacity-100 md:translate-y-0 delay-0"
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

                <h3 className={`px-4 py-3 text-lg font-medium border-t border-gray-100 dark:border-p-30 transition-opacity duration-500 ease-out ${
                    isOpen ? 'opacity-100' : 'opacity-0 md:opacity-100'
                }`}>Components</h3>
                <nav className="flex flex-col w-full space-y-1 md:space-y-0 px-4 pb-4 md:p-0">
                    {[
                        { to: "/exampleaccordions", label: "Accordions" },
                        { to: "/exampleavatars", label: "Avatars" },
                        { to: "/examplebadges", label: "Badges" },
                        { to: "/examplebuttons", label: "Buttons" },                        
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
                                        : "opacity-0 translate-y-2 md:opacity-100 md:translate-y-0 delay-0"
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
        </header>
    );
}