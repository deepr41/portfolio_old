import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavItem from "./Navitem";

type NavbarProps = {};
type NavbarState = {};

export default class Navbar extends Component<NavbarProps, NavbarState> {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <NavItem link="/" active={true}>
                Home
              </NavItem>
              <NavItem link="/about" active={false}>
                About
              </NavItem>
              <NavItem link="/contact" active={false}>
                Contact
              </NavItem>
              <NavItem link="/projects" active={false}>
                Projects
              </NavItem>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
