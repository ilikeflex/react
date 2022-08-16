import React from "react";
import { createContext } from "react";
import { useSpeakerFilter } from "../hooks/useSpeakerFilter";

export const SpeakerFilterContext = createContext();

export const SpeakerFilterProvider = ({children, startingshowSessions = false, startingEventYear = '2008'}) => {

    const { showSessions, setShowSessions,
    eventYear, setEventYear,
    searchQuery, setSearchQuery,
    EVENT_YEARS } = useSpeakerFilter(startingshowSessions,startingEventYear);

    return (
        <SpeakerFilterContext.Provider value = { { showSessions, setShowSessions,
            eventYear, setEventYear,
            searchQuery, setSearchQuery,
            EVENT_YEARS } }>
            {children}
        </SpeakerFilterContext.Provider>   
    )
}