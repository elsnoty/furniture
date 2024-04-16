import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Create a context for managing dark mode
const DarkModeContext = createContext();

// Provider component to wrap your entire app
export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

// Validate prop types
DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// Custom hook to consume the dark mode context
export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};
