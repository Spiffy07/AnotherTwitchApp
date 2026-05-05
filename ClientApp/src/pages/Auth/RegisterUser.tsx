import React, { Component } from "react";
import RegisterForm from "@/components/Auth/RegisterForm";
import MyNavMenu from "@/components/MyNavMenu/MyNavMenu";

export class RegisterUser extends Component {
    render() {
        return (
            <>
                <MyNavMenu />
                <RegisterForm />
            </>
        );
    }
}
