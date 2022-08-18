
import { Speakers } from "./Speakers";

import { Layout } from "./Layout";
import { AuthProvider } from "../contexts/AuthContext";
import Header from "./Header";



export const App = () => {
    return ( 
        <AuthProvider initialLoggedInUser="Ronald">
        <Layout startingTheme='light'>
            <Header></Header>
            <Speakers></Speakers>
        </Layout>
        </AuthProvider>       
    )

}

/*
Before createContext
<div
        className={
          theme === "light" ? "container-fluid light" : "container-fluid dark"
        }
        >
            <Header theme={theme}></Header>   
            <Speakers theme={theme} setTheme={setTheme}></Speakers>
        </div>
*/