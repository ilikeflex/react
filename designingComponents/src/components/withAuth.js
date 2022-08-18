import { Component, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


export const withAuth = (Component) => {

    return (props) => {

        console.log(`with Auth props = ${JSON.stringify(props)}`)
        const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

        return (
            <Component loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} { ...props}>
            </Component>
        )

    }

}
