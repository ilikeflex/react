import { useState , memo , useContext} from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { SpeakerContext, SpeakerProvider } from "../contexts/SpeakerContext";
import { SpeakerDelete } from "./SpeakerDelete";

const Session = ({ title, room }) =>{
    return (
      <span className="session w-100">
        {title} <strong>Room: {room.name}</strong>
      </span>
    );
  }
  
  const Sessions = () => {
    const { eventYear } = useContext(SpeakerFilterContext);
    const { speaker : { sessions }} = useContext(SpeakerContext);
    return (
      <div className="sessionBox card h-250">
        {
          sessions.filter((session)=>{
            return session.eventYear === eventYear
          })
          .map((session) => {
            return (
              <div className="session w-100" key={session.id}>
              <Session {...session} />
            </div>
            )
          })
        }
        
      </div>
    );
  }
  
  const SpeakerImage = () => {
    const { speaker : { id, first, last }} = useContext(SpeakerContext);

    return (
      <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
        <img
          className="contain-fit"
          src={`/images/speaker-${id}.jpg`}
          width="300"
          alt={`${first} ${last}`}
        />
      </div>
    );
  }


  const SpeakerFavorite = () => {

    const [ inTransition , setInTransition ] = useState(false);

    const { updateRecord, speaker  } = useContext(SpeakerContext);

    const { favorite } = speaker;

    function doneCallBack() {
      setInTransition(false);
      console.log(`In SpeakerFavorite:doneCallback  ${new Date().getMilliseconds()}`)
    }

    return (
      <div className="action padB1">
        <span onClick={() => { 
                setInTransition(true);
                return updateRecord({ ...speaker, favorite: !speaker.favorite},doneCallBack) }}>
          <i
            className={
              favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
            }
          />{" "}
          Favorite{" "}
          {inTransition ? (
            <span className="fas fa-circle-notch fa-spin"></span>
          ) : null }
        </span>
      </div>
    );
  }
  
  const SpeakerDemographics = () => {

    const { speaker : {first,
      last,
      bio,
      company,
      twitterHandle}  } = useContext(SpeakerContext);

    return (
      <div className="speaker-info">
        <div className="d-flex justify-content-between mb-3">
          <h3 className="text-truncate w-200">
            {first} {last}
          </h3>
        </div>

        <SpeakerFavorite></SpeakerFavorite>

        <div>
          <p className="card-description">{bio}</p>
          <div className="social d-flex flex-row mt-4">
            <div className="company">
              <h5>Company</h5>
              <h6>{company}</h6>
            </div>
            <div className="twitter">
              <h5>Twitter</h5>
              <h6>{twitterHandle}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const areEqualSpeaker = (prevProps, nextProps) => {
    const result = prevProps.speaker.favorite === nextProps.speaker.favorite
    //console.log(` areEqualSpeaker Prev=${prevProps.speaker.favorite}, Next=${nextProps.speaker.favorite} , Result=${result}`)
    return result;
  }

  //https://stackoverflow.com/questions/49470037/how-to-pass-several-props-in-spread-operator-in-react
  //How to pass the multiple objects using spread operator
  const Speaker = memo(function Speaker({ speaker, updateRecord, insertRecord, deleteRecord }) {
    console.log(`speaker=${speaker.first} ${speaker.last}`);
    const {  showSessions } = useContext(SpeakerFilterContext)
    return (
      <SpeakerProvider speaker={speaker} 
      updateRecord={updateRecord} 
      insertRecord={insertRecord}
      deleteRecord={deleteRecord}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <SpeakerImage />
          { /*<SpeakerDemographics {...speaker} {...onFavoriteToggle} /> */}
          <SpeakerDemographics />
        </div>
        {/*showSessions && <Sessions sessions={sessions} />*/}
        {showSessions === true ? <Sessions/> : null}
        <SpeakerDelete/>
      </div>
      </SpeakerProvider>
    );
  }, areEqualSpeaker);
  
  

  export default Speaker;