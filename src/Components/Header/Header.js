import React, { Component } from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header id="#home">
        <Segment className="menu" inverted>
          <Menu inverted pointing secondary>
            <Menu.Item name="HOME" active />
            <Menu.Item name="ABOUT" />
            <Menu.Item name="RESUME" />
            <Menu.Item name="WORKS" />
            <Menu.Item name="CONTACT" />
          </Menu>
        </Segment>

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
      </header>
    );
  }
}

export default Header;
