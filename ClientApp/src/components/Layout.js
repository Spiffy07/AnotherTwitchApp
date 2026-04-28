import React, { Component } from "react";
import { Container } from "reactstrap";

import MyNavMenu from "./MyNavMenu/MyNavMenu";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <>
        <div className="flex flex-col items-center justify-center mx-auto">
          {/* <NavMenu /> */}
          <MyNavMenu />
          <Container tag="main">{this.props.children}</Container>
        </div>
        <div
          className="col-span-12 w-[full] text-center text-sm pt-6 pb-12 -mx-4 -mb-4
                   bg-linear-to-r from-gray-950/0 via-slate-900/80 to-gray-950/0 backdrop-blur-sm"
        >
          <p>Copyright © 2026 Thomas T.</p>
          <p>All Rights Reserved</p>
        </div>
      </>
    );
  }
}
