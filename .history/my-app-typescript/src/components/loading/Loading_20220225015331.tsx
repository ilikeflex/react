import { Spinner } from "@fluentui/react";
import React from "react";

export const Loading: React.FC<{}> = (props) => {
    return (
      <div>
          <Spinner label="Laoding..."/>
      </div>
    );
};

//export default Loading;