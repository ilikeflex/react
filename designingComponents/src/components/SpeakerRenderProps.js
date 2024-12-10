import React from "react";

export const SpeakersRenderProps = (props) => {

    const speakers = [
        { imageSrc: "speaker-1124", name: "Douglas Crockford" },
        { imageSrc: "speaker-1530", name: "Tamara Baker" },
        { imageSrc: "speaker-10803", name: "Eugene Chuvyrov" },
      ];

    const newArray = [
      { imageSrc: "speaker-1124", name: "Douglas Crockford2" },
      { imageSrc: "speaker-1530", name: "Tamara Baker2" },
      { imageSrc: "speaker-10803", name: "Eugene Chuvyrov2" },
    ];

    return props.children({
            speakers:speakers,
            newArray
    });

  }