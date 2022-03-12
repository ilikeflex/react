import { Spinner } from "@fluentui/react";
import React from "react";
import logo from '../../logo.svg'
import { IAppError, IPropertyAppError } from "../../models/Error";

export type ErrorProps = IPropertyAppError

export const AppError: React.FC<ErrorProps> = (props:ErrorProps) => {
    return (
      <div>
          <label htmlFor="story">Tell us your story:</label>
          <p><label>Status:</label>{props.error.status}</p>
          <p><label>StatusText:</label>{props.error.statusText}</p>
          <p><label>ErrorMessage:</label>{props.error.message}</p>
          {/*
            <textarea id="story" name="story" rows={5} cols={33}>
                Status : {props.error.status} , StatusText : {props.error.statusText} , ErrorMessage : {props.error.message}
            </textarea>
         */} 
      </div>
    );
};