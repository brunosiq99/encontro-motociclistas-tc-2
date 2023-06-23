import React, {useState, createContext} from "react";


export const ColorModeContext = createContext({
    mode:"",
    toggleMode:() => {alert("config first")}
});

export const ColorModeProvider = ({children, initialMode}) => {
    const [mode, setMode] = useState(initialMode)
    const toggleMode = () => {
        mode === "dark" ? setMode("light"): setMode("dark")
    }
    return(
        <ColorModeContext.Provider value={{mode: mode, toggleMode: toggleMode}}>
            {children}
        </ColorModeContext.Provider>     
    )
}
