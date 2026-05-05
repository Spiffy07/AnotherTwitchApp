import React, { Component } from "react";
import LoginForm from "@/components/Auth/LoginForm";
import MyNavMenu from "@/components/MyNavMenu/MyNavMenu";

export class LoginUser extends Component {
    render() {
        return (
            <>
                <MyNavMenu />
                <LoginForm />
            </>
        );
    }
}
