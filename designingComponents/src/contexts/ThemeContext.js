import { createContext, useContext, useState } from "react"


export const ThemeContext = createContext();

export const ThemeProvider = ( { children, startingTheme }) => {

    const [ theme, setTheme ] = useState(startingTheme);
    
    return (
        <ThemeContext.Provider value={
            {theme, setTheme}
        }>

        { children }    
        </ThemeContext.Provider>
    )

}