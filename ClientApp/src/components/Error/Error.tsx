import React from "react";
import errorStyles from "./Error.module.css";

type ErrorProps = {
  outputMessage?: string;
};

export default function Error({ outputMessage = "Default Error Message" }: ErrorProps) {
    //alert("Error");

return <h1 className={errorStyles.error}>⚠️{outputMessage}⚠️</h1>;
}
