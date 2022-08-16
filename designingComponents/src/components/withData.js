import react from "react";

const withData = (maxSpeakersToShow) => {

    //withData(2)(Speakers);
    //this component is parameter for argument to second function
    return (Component) => {
        const speakers = [
            { imageSrc: "speaker-1124", name: "Douglas Crockford" },
            { imageSrc: "speaker-1530", name: "Tamara Baker" },
            { imageSrc: "speaker-10803", name: "Eugene Chuvyrov" },
          ];
    
        return () => {
            const maxSpeaker = speakers.slice(0,maxSpeakersToShow);
            return <Component speakers={maxSpeaker}></Component>
        };
    }
}

/* const withData = (Component) => {

    const speakers = [
        { imageSrc: "speaker-1124", name: "Douglas Crockford" },
        { imageSrc: "speaker-1530", name: "Tamara Baker" },
        { imageSrc: "speaker-10803", name: "Eugene Chuvyrov" },
      ];

    return () => {
        return <Component speakers={speakers}></Component>
    };

} */



export default withData;