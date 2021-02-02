import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="navbar navbar-dark bg-dark" expand="lg">
          <Navbar.Brand href="HomePage">Film Sitesi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="/homepage">Anasayfa</Nav.Link>
              <Nav.Link href="/">Filmleri Listele</Nav.Link>          
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
