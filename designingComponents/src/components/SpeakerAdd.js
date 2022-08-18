import React from "react"
import { AuthContext } from "../contexts/AuthContext";
import { withAuth } from "./withAuth";

const SpeakerAdd = ( { eventYear, insertRecord, loggedInUser }) => {

  //const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  console.log(`SpeakerAdd loggedInUser = ${loggedInUser}`)

   if( loggedInUser == null || loggedInUser == undefined || loggedInUser.length == 0 )
    return null;

    return (
        <a href="#" className="addSes">
        <i
          onClick={(e) => {
            e.preventDefault();
            const firstLast = window.prompt("Enter first and last name:", "");
            const firstLastArray = firstLast.split(" ");
            insertRecord({
              id: "99999",
              first: firstLastArray[0],
              last: firstLastArray[1],
              bio: "Bio not entered yet",
              sessions: [
                {
                  id: "88888",
                  title: `New Session For ${firstLastArray[0]}`,
                  room: {
                    name: "Main Ball Room",
                  },
                  eventYear,
                },
              ],
            });
          }}
        >
          +
        </i>
      </a>
    )

}

export default withAuth(SpeakerAdd);