import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import classNames from "classnames";
import { motion, AnimatePresence } from "motion/react";

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
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 flex justify-center items-center"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className="bg-white dark:bg-gray-900 rounded-xl absolute left-8 right-8 top-8 bottom-20 overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
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
                                        onClose();
                                    }}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}

export default MobileMenu;
