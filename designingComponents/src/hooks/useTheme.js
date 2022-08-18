import { useState } from "react";

export const useTheme = ({startingTheme}) => {

    const [ theme, setTheme ] = useState(startingTheme);
    
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