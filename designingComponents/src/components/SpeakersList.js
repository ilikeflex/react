import Speaker from "./Speaker";
import useRequestDelay from "../hooks/useRequestDelay";
import { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data as initialData } from "../../SpeakerData";
import ReactPlaceholder from "react-placeholder/lib";

//Java Destructuring
//https://dmitripavlutin.com/javascript-object-destructuring/#:~:text=The%20object%20destructuring%20is%20a%20useful%20JavaScript%20feature,a%20default%20value%20if%20the%20property%20doesn%27t%20exist
export const SpeakerLists = ({showSessions }) => {

  const {
    data, requestStatus,
    error,
    updateRecord
  } = useRequestDelay(2000, initialData);
 
  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR: <b>loading Speaker Data Failed {error}</b>
      </div>
    );
  }

  /* 
  Replaced by ReactPlaceholder
  if( isLoading === true)  
    return <div> Loading...</div> */


  return (
      <div className="container speakers-list">
        <ReactPlaceholder
        type="media"
        row={15}
        className="speakerlist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}>

          <div className="row">
            {data.map(function (speaker) {
              return <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions}
              onFavoriteToggle = { (doneCallBack) => updateRecord({ ...speaker, favorite: !speaker.favorite},doneCallBack)}/>
            })}
          </div>
      </ReactPlaceholder>
    </div>
  )
}


/*
  This function got removed because of spread operator.
  const onFavoriteToggleIntermediate = ( id ) => {

    console.log(`onFavoriteToggleIntermediate = ${id}`)
    const selectedSpeaker = data.filter(speaker => { 
      //console.log(`Check array element = ${speaker.id} and asked = ${id}`)
      return speaker.id === id 
    })

    //console.log(`Before Length selectedSpeaker = ${selectedSpeaker.length} and selectedSpeaker = ${ JSON.stringify(selectedSpeaker)}`)

    selectedSpeaker[0].favorite = !!!selectedSpeaker[0].favorite;

    updateRecord(selectedSpeaker[0]);
  }
  */