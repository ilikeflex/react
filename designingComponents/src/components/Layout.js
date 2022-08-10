import { createContext, useContext, useState } from "react"
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext"


export const Layout = ({startingTheme, children}) => {

    return (
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
        </ThemeProvider>
    )

}

export const LayoutNoThemeProvider = ({children}) => {

    const { theme } = useContext(ThemeContext);
    return (
        
        <div
        className={
          theme === "light" ? "container-fluid light" : "container-fluid dark"
        }
        >
            {children}
        </div>
        
    )
}