import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./Header.css";

class Header extends Component {
  render() {
    window.onscroll = function () {
      myFunction();
    };
    function myFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        console.log("Azucar");
      } else {
        console.log("salado");
      }
    }
    return (
      <header id="home">
        <div className="Navbar">
          <Menu inverted pointing secondary>
            <div>
              <a href="#home">
                <Menu.Item name="HOME" active />
              </a>
              <a href="#about">
                <Menu.Item name="ABOUT" />
              </a>
              <a href="#resume">
                <Menu.Item name="RESUME" />
              </a>
              <a href="#works">
                <Menu.Item name="WORKS" />
              </a>
              <a href="#contact">
                <Menu.Item name="CONTACT" />
              </a>
            </div>
          </Menu>
        </div>

        <div className="banner">
          <div className="banner-text">
            <h1>I'm Luis Fuentes.</h1>
            <h3>
              I'm a <strong>Software Developer</strong> based on{" "}
              <strong>Dallas, Texas</strong>. Let's start scrolling and learn
              more about me
            </h3>
            <ul className="social">
              <li>
                <a href="https://linkedin.com/in/luisfff29">
                  <Icon name="linkedin" size="big" />
                </a>
              </li>
              <li>
                <a href="https://github.com/luisfff29">
                  <Icon name="github" size="big" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="#about">
          <Icon name="chevron circle down" size="big" id="arrow_down" />
        </a>
      </header>
    );
  }
}

export default Header;
