import { Spinner } from "@fluentui/react";
import React from "react";
import {logo} from '../../logo'

export const Loading: React.FC<{}> = (props) => {
    return (
      <div>
          <Spinner label="Laoding..."/>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
};

//export default Loading;