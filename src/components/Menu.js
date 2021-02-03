import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="navbar navbar-dark bg-dark" expand="lg">
          <Link className="navbar-brand" to="/homepage">Film Sitesi</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Link className="nav-link" to="homepage">Anasayfa</Link>
              <Link className="nav-link" to="/">Filmleri Listele</Link>          
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}