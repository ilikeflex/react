import React from "react";

export const Speakers = () => {

    const speakers = [
        { imageSrc: "speaker-1124", name: "Douglas Crockford" },
        { imageSrc: "speaker-1530", name: "Tamara Baker" },
        { imageSrc: "speaker-10803", name: "Eugene Chuvyrov" },
      ];

      return (
        <div>
            {
                speakers.map(({imageSrc,name})=>{
                    return <img src={`images/${imageSrc}.jpg`} alt={name} key={imageSrc}/>
                })
            }
        </div>

      )
}

const withData = (Component) => {

    return () => {
        return <Component></Component>
    };

}

export default withData(Speakers);