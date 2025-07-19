import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () =>{
    return useContext(ThemeContext);
}

export const ThemeProvider = ({children})=>{
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () =>{
        setIsDark(prev=>!prev);
    }

    const theme = isDark ? "dark" : "light";

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme);
    },[theme])

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}