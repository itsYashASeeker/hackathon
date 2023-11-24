import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const AppContext = createContext()

export default function AppProvider({ children }) {
    const fullLocation = useLocation();
    const flname = fullLocation.pathname;

    useEffect(() => {
        document.body.style.scrollBehavior = "none";
        window.scrollTo({ top: 0 });
        document.body.style.scrollBehavior = "smooth"
    }, [flname]);

    return (
        <AppContext.Provider value={{ userI: 1 }}>{children}</AppContext.Provider>
    )
}

export const AppState = () => {
    return useContext(AppContext)
}