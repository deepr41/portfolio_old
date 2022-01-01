import React, { Component } from "react";
import { Link } from "react-router-dom";

type navItemProps = {
  children: string;
  link: string;
  active?: boolean;
};

export default class NavItem extends Component<navItemProps> {
  render() {
    return (
      <li className="nav-item">
        <Link
          className={this.props.active ? "nav-link active" : "nav-link"}
          to={this.props.link}
        >
          {this.props.children}
        </Link>
      </li>
    );
  }
}
