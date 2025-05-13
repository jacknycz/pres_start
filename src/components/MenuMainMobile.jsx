import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import classNames from "classnames";

function MobileMenu({ isOpen, onClose }) {
    if (!isOpen) return null;
    const navLinkClass = ({ isActive }) =>
            classNames(
                "dark:text-white p-4 transition-colors duration-300 text-left border-l-4 border-transparent",
                {
                    "text-p-500 bg-gray-100 dark:bg-gray-800 font-semibold hover:text-p-500 dark:text-p-500 dark:hover:text-p-60 border-l-p-500":
                        isActive,
                }
            );

    return createPortal(
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-900 absolute left-8 right-8 top-8 bottom-8 overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
            >
                <nav className="flex flex-col w-full space-y-2">
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
                                onClose();
                            }}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <h3 className={`p-3 dark:text-white text-lg font-medium border-t border-gray-100 dark:border-p-800 transition-opacity duration-500 ease-out`}>Components</h3>
                <nav className="flex flex-col w-full space-y-2">
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
                                onClose();
                            }}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* <button
                onClick={onClose}
                className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center bg-gray-950 text-gray-500 dark:text-gray-400"
                aria-label="Close menu"
            >
                <span className="text-2xl">×</span>
            </button> */}
        </div>,
        document.body
    );
}

export default MobileMenu;
