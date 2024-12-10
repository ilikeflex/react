import React from "react";
import { SpeakersRenderProps } from "../src/components/SpeakerRenderProps";

export const Speakers = () => {
      return (
        <SpeakersRenderProps>
            {({speakers, newArray})=>{
                console.log(` newArray = `, newArray);
                return (
                    <div>
                        {
                            speakers.map(({imageSrc,name})=>{
                                return <img src={`images/${imageSrc}.jpg`} alt={name} key={imageSrc}/>
                            })
                        }
                    </div>
                )
            }}
        </SpeakersRenderProps>
      )
}

export default Speakers