import React, { Component } from "react";
import { Container } from "reactstrap";

import MyNavMenu from "./MyNavMenu/MyNavMenu";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className='flex flex-col items-center justify-center mx-auto'>
        {/* <NavMenu /> */}
        <MyNavMenu />
        <Container tag="main">{this.props.children}</Container>
      </div>
    );
  }
}
