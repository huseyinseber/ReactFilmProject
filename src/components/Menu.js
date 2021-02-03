import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="navbar navbar-dark bg-dark" expand="lg">
          <Navbar.Brand href="homepage">Film Sitesi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Link to="homepage">Anasayfa</Link>
              <Link to="/">Filmleri Listele</Link>          
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}