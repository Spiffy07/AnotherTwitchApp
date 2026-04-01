import React, { Component } from "react";
import MultiworldForm from "@/components/Forms/Multiworld/MultiworldForm";

export class Multiworld extends Component {
    render() {
        return (
            <div className="flex flex-col items-center h-screen">
                <br />
                <p className="text-center">
                    Coming soon! 
                    <br />
                </p>
                <p className="text-center">
                    This page is for the multiworld participants to
                    join in and submit their .yaml files to join in my
                    multiworld sessions!
                </p>
                <br />
                <MultiworldForm />
            </div>
        );
    }
}
