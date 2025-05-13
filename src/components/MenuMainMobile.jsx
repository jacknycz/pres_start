import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import classNames from "classnames";

function MobileMenu({ isOpen, onClose }) {
    if (!isOpen) return null;
    const navLinkClass = ({ isActive }) =>
            classNames(
                "ml-2 pl-2 dark:text-white p-3 hover:text-p-500 transition-colors duration-300 text-left border-l-4 border-transparent rounded",
                {
                    "text-p-500 bg-gray-100 dark:bg-[#0A1330] font-semibold hover:text-p-500 dark:text-p-60 dark:hover:text-p-60 border-l-p-40":
                        isActive,
                }
            );

    return createPortal(
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-900 p-6 rounded-md w-[calc(100vw-4em)] max-h-[calc(100vh-4rem)] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
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

                <h3 className={`py-3 dark:text-white text-lg font-medium border-t border-gray-100 dark:border-p-800 transition-opacity duration-500 ease-out`}>Components</h3>
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

            <button
                    onClick={onClose}
                    className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center bg-gray-950 text-gray-500 dark:text-gray-400"
                    aria-label="Close menu"
                >
                    <span className="text-2xl">×</span>
                </button>
        </div>,
        document.body
    );
}

export default MobileMenu;
