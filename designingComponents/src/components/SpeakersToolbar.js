import { useContext } from "react";
import { ThemeContext } from "./Layout";

export const SpeakersToolbar = ( { showSessions, setShowSessions } ) =>{

    const { theme, setTheme } = useContext(ThemeContext);
    
    const showSessionsChanged = (event) => {
        console.log(`!event.target.checked ${!event.target.checked}`)
        let result = event.target.checked;
        setShowSessions(result);
        return     
    }

    const themeChanged = ( event ) => {
        let newValue = event.target.value;
        setTheme(newValue);
        return 
    }

    return (
        <section className="toolbar dark-theme-header">
          <div className="container">
            <div className="justify-content-between">
              <ul className="toolrow d-flex flex-column flex-lg-row">
                <li className="d-flex flex-column flex-md-row">
                  <b>Show Sessions&nbsp;&nbsp;</b>
                  <label className="fav">
                    <input 
                    type="checkbox"  
                    checked={showSessions}
                    onChange={(event) => { showSessionsChanged(event) }}/>
                    <span className="switch"></span>
                  </label>
                </li>
                <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
                  <strong>Theme</strong>
                  <label className="dropdown">
                    <select className="form-control theme" 
                        value={theme} 
                        onChange={(event) => { themeChanged(event) }}>
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )

}