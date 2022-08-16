import React from "react";

export const Speakers = () => {

    const speakers = [
        { imageSrc: "speaker-1124", name: "Douglas Crockford" },
        { imageSrc: "speaker-1530", name: "Tamara Baker" },
        { imageSrc: "speaker-10803", name: "Eugene Chuvyrov" },
      ];

      /*
      const SpeakersRenderProps = (props) => {
        return (
            <>
            {props.children}
            </>
        )
      }
      */
     
      const SpeakersRenderProps = ({children}) => {
        return (
            <>
            {children}
            </>
        )
      }

      return (

        <SpeakersRenderProps>
            <div>
                {
                    speakers.map(({imageSrc,name})=>{
                        return <img src={`images/${imageSrc}.jpg`} alt={name} key={imageSrc}/>
                    })
                }
            </div>
        </SpeakersRenderProps>

      )
}


export default Speakers