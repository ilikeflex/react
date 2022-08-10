import { Header } from "./Header";
import { Speakers } from "./Speakers";

import { Layout } from "./Layout";



export const App = () => {
    return (        
        <Layout startingTheme='light'>
            <Header></Header>   
            <Speakers></Speakers>
        </Layout>
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