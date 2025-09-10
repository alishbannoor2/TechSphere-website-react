import React, { createContext, useState, useEffect } from "react";

// Create the context
export const ModeContext = createContext();

// Create and export the Provider
export const ModeProvider = ({ children }) => {
    // State to manage dark mode
    const [darkMode, setDarkMode] = useState(() => {
        // Initialize dark mode from localStorage or default to false
        const savedMode = localStorage.getItem("dark-mode");
        return savedMode === "true" || false;
    });

    // Effect to handle dark mode class application and localStorage persistence
    useEffect(() => {
        document.body.className = darkMode ? "dark-mode" : "light-mode";
        localStorage.setItem("dark-mode", darkMode);
    }, [darkMode]);

    // Function to toggle dark mode
    const toggleMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    // Value to provide to children
    const contextValue = {
        darkMode,
        toggleMode,
    };

    return (
        <ModeContext.Provider value={contextValue}>
            {children}
        </ModeContext.Provider>
    );
};