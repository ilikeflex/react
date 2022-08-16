import { createContext } from "react";
import { useTheme } from "../hooks/useTheme";


export const ThemeContext = createContext();

export const ThemeProvider = ( { startingTheme, children }) => {

    console.log(`ThemeProvider theme = ${startingTheme}`)
    const { theme, setTheme } = useTheme(startingTheme);

    return (
        <ThemeContext.Provider value={
            {theme, setTheme}
        }>
        { children }    
        </ThemeContext.Provider>
    )

}