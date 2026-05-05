import React, { Component } from "react";
import { Container } from "reactstrap";
import Footer from "@/components/Footer";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <>
        <div className="flex flex-col items-center justify-center mx-auto">
          <Container tag="main">{this.props.children}</Container>
        </div>
        <Footer />
      </>
    );
  }
}
