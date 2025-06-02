import React, { useState, useEffect } from "react"

interface MenuContextType {
  open: boolean;
  toggleOpen: () => void;
}

const MenuContext = React.createContext<MenuContextType>({
  open: false,
  toggleOpen: () => {},
});
export { MenuContext };

interface MenuProps {
  children: React.ReactNode;
  onOpen?: (open: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ children, onOpen }) => {
    const [open, setOpen] = useState(false)
    
    const toggleOpen = () => {
        setOpen(prev => !prev)
    }

    useEffect(() => {
        if (onOpen) {
            onOpen(open)
        }
    }, [open, onOpen])

    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div className="menu relative">
                {children}
            </div>
        </MenuContext.Provider>
    );
};

export default Menu;
