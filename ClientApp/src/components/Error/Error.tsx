import React from "react";
import "./Error.module.css";

type ErrorProps = {
  outputMessage?: string;
};

export default function Error({ outputMessage = "Default Error Message" }: ErrorProps) {
    //alert("Error");

  return <h1>⚠️{outputMessage}⚠️</h1>;
}
