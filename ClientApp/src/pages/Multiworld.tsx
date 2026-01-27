
import React, { Component } from "react";
import MultiworldForm from "@/components/Forms/Multiworld/MultiworldForm";
import RegisterForm from "@/components/Auth/RegisterForm";

export class Multiworld extends Component {


  render() {
    return (
      <>
        <div>
          Coming soon! This page is for the multiworld participants to join in
          and submit their .yaml files to join in my multiworld sessions!
        </div>
        <MultiworldForm />
        <br/>
        <br/>
        <br/>
        <RegisterForm />
      </>
    );
  }
}
