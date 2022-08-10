import { useEffect, useState } from "react";


export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
}


const useRequestDelay = (delayTime = 1000, initialRecords = []) =>{

    const [data, setData ]  = useState([]);
    const [requestStatus, setRequestStatus ] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");
  

    const delay = ( ms ) => new Promise(( resolve, reject ) => { setTimeout(() => {
      resolve(true)
    }, ms)});

    useEffect(()=>{

      async function delayFunc() {

        try {
          await delay(delayTime);
          //throw "Has Error";
          setRequestStatus(REQUEST_STATUS.SUCCESS)
          setData(initialRecords);  
        }
        catch(e){
          setRequestStatus(REQUEST_STATUS.FAILURE)
          setError(e);
        }
        
      }

      delayFunc();

    },[]);


    const updateRecord = (recordUpdated,doneCallBack) => {

      const originalRecords = [...data];

      const speakersDataNew = data.map(function (rec) {
        return rec.id === recordUpdated.id ? recordUpdated : rec;
      });


      async function delayFunction () {
        try {
          //optimistic UI -> Assuming function will return data successfully from server
          setData(speakersDataNew);
          await delay(delayTime);
          if(doneCallBack)
            doneCallBack();
        }
        catch(e){
          
          if(doneCallBack)
            doneCallBack();

          setData(originalRecords);  

          console.log(`Error in updating record = ${e} ` )
          setError(e);
        }
      }
  
      return delayFunction();

    }

      return {
        data, requestStatus,
        error,
        updateRecord
    }
}

//Notice while method is exported the input parameters are not included
export default useRequestDelay;

  /*
    const onFavoriteToggle = (id) => {

      //console.log(`onFavorite Clicked for speaker = ${id}`);

      const selectedSpeaker = speakersData.filter(speaker => { 
        //console.log(`Check array element = ${speaker.id} and asked = ${id}`)
        return speaker.id === id 
      })

      //console.log(`Before Length selectedSpeaker = ${selectedSpeaker.length} and selectedSpeaker = ${ JSON.stringify(selectedSpeaker)}`)

      selectedSpeaker[0].favorite = !!!selectedSpeaker[0].favorite;

      //console.log(`After Length selectedSpeaker = ${selectedSpeaker.length} and selectedSpeaker = ${ JSON.stringify(selectedSpeaker)}`)

      const speakersDataNew = speakersData.map(function (rec) {
        return rec.id === id ? selectedSpeaker[0] : rec;
      });
  
      setSpeakersData(speakersDataNew);

      return;
    }
*/