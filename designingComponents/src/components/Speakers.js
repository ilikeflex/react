import { useState } from "react";
import { SpeakerLists } from "./SpeakersList"
import { SpeakersToolbar } from "./SpeakersToolbar"
import { ThemeContext } from "./App";
import { useContext } from "react";

export const Speakers = () => {

    const [ showSessions, setShowSessions ] = useState(true);
    
    return (
    <div>
            <SpeakersToolbar showSessions={showSessions} setShowSessions={setShowSessions}></SpeakersToolbar>
            <SpeakerLists showSessions={showSessions}></SpeakerLists>
    </div>
    )
}