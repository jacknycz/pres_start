import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState('#718096'); // Default grey-500
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  // Load saved theme from localStorage on initial render
  useEffect(() => {
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
      setPrimaryColor(savedColor);
    }
  }, []);

  // Update CSS variables when primaryColor changes
  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', primaryColor);
    localStorage.setItem('primaryColor', primaryColor);
  }, [primaryColor]);

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor, isPickerOpen, setIsPickerOpen }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
