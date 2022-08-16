import { createContext } from "react";

export const SpeakerContext = createContext();

export const SpeakerProvider = ({speaker, updateRecord, insertRecord, deleteRecord,  children}) => {

    return (

        <SpeakerContext.Provider value={ { speaker, updateRecord, insertRecord, deleteRecord }}>
            {children}
        </SpeakerContext.Provider>

    )
}