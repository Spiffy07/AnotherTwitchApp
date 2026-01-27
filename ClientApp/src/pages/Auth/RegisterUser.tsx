

import React, { Component } from "react";
import RegisterForm from "@/components/Auth/RegisterForm";

export class RegisterUser extends Component {
    render() {
        return (
            <>  
                <div> Register a new user here!</div>
                <RegisterForm />
            </>
        );
    }
}
