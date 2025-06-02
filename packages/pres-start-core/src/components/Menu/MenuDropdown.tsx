import React from "react"
import { MenuContext } from "./Menu"

interface MenuDropdownProps {
  children: React.ReactNode;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ children }) => {
    const { open } = React.useContext(MenuContext);

    return (
        <>
            {open ? (
                <div
                    className="absolute z-30 left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-600 rounded-md"
                >
                    {children}
                </div>
            ) : null}
        </>
    );
};

export default MenuDropdown;