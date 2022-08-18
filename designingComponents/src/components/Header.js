
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { withAuth } from "./withAuth";

const Header  = ({ loggedInUser, setLoggedInUser }) => {

  //const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  console.log(`Header loggedInUser = ${loggedInUser}`)

  const LoggedIn = ({ loggedInUser, setLoggedInUser }) => {

    console.log(`LoggedIn loggedInUser = ${loggedInUser}`)

    return (
      <div>
        <span>Logged in as {loggedInUser}</span>&nbsp;&nbsp;
        <button
          className="btn btn-secondary"
          onClick={() => {
            setLoggedInUser("");
          }}
        >
          Logout
        </button>
      </div>
    );
  }


  const NotLoggedIn = ( { loggedInUser, setLoggedInUser}) => {

    console.log(`NotLoggedIn loggedInUser = ${loggedInUser}`)

    return (
      <button
        className="btn-secondary"
        onClick={(e) => {
          e.preventDefault();
          const username = window.prompt("Enter Login Name:", "");
          setLoggedInUser(username);
        }}
      >
        Login
      </button>
    );
  
  }


  const { theme } = useContext(ThemeContext);

    return (
        <div className="padT4 padB4">
          <div className="container mobile-container">
            <div className="d-flex justify-content-between">
              <div>
                <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
              </div>
              <div className="light">
                <h4 className="header-title">Silicon Valley Code Camp</h4>
              </div>
              <div className={theme === "light" ? " " : "text-dark" }>
              {
                loggedInUser && loggedInUser.length > 0 ? 
                ( <LoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/> ) : 
                ( <NotLoggedIn loggedInUser={loggedInUser}  setLoggedInUser={setLoggedInUser} /> )
              }
              
                { /* Hello Mr. Smith &nbsp;&nbsp;
                <span>
                  <a href="#">sign-out</a>
                </span>
                */}


              </div>
            </div>
          </div>
        </div>
      );
}

export default withAuth(Header);