import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
// Create a context
const GlobalStateContext = createContext();

export function GlobalStateProvider({ children }) {
    // Define all shared states here
    const [guest, setGuest] = useState(false);
    const [buttonText, updateButton] = useState(false);
    const [noInput, lastInput] = useState(false);

    return (
        <GlobalStateContext.Provider value={{ guest, setGuest, buttonText, updateButton, noInput, lastInput }}>
            {children}
        </GlobalStateContext.Provider>
    );
}

// Custom hook to use the global state
export function useGlobalState() {
    return useContext(GlobalStateContext);
}
