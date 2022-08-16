import { useState } from "react";

export const useTheme = ({startingTheme}) => {

    console.log(`Before useTheme Hook input startingTheme = ${startingTheme}`)

    const [ theme, setTheme ] = useState(startingTheme);

    console.log(`After useTheme Hook input startingTheme = ${startingTheme}, output = ${theme}`)

    const validateTheme = (themeValue) => {

        if( themeValue === "dark"){
            setTheme("dark")
        }
        else {
            setTheme("light")
        }

    }

    return {
        theme,
        setTheme: validateTheme
    }

}