import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar bg-dark">
        <div className="container">
          <a className="navbar-brand text-light " href="#">
            <img
              src="https://camo.githubusercontent.com/c40e00e1393b55a618dcf5b338f8e4a05db954fa879d67ea0784ab89e4eef261/68747470733a2f2f63646e2e69636f6e2d69636f6e732e636f6d2f69636f6e73322f323432392f504e472f3531322f6769746875625f6c6f676f5f69636f6e5f3134373238352e706e67"
              className="logo pe-2"
            />
            Github Finder
          </a>
        </div>
      </nav>
    );
  }
}
