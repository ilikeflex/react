import { useState } from "react";
import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";
import { SpeakerLists } from "./SpeakersList";
import { SpeakersToolbar } from "./SpeakersToolbar";

export const Speakers = () => {
    
    return (
        <SpeakerFilterProvider startingshowSessions={false}>
            <div>
                <SpeakersToolbar></SpeakersToolbar>
                <SpeakerLists></SpeakerLists>
            </div>
        </SpeakerFilterProvider>
    )
}