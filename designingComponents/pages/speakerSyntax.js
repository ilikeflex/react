import React from "react";

export const Speakers = () => {

    const SpeakersRenderProps = (props) => {

        const speakers = [
            { imageSrc: "speaker-1124", name: "Douglas Crockford" },
            { imageSrc: "speaker-1530", name: "Tamara Baker" },
            { imageSrc: "speaker-10803", name: "Eugene Chuvyrov" },
          ];
    
        return props.children(
                speakers
        );

      }

      return (

        <SpeakersRenderProps>
            {(speakers)=>{
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