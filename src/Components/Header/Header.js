import React, { Component } from "react";
import { Menu, Icon, Sidebar, Button } from "semantic-ui-react";
import "./Header.css";

class Header extends Component {
  state = { open: false };

  sidebarClose = () => {
    this.setState({ open: false });
  };

  handleSidebar = () => {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  };

  render() {
    let sidebarRight = "Sidebar-button";
    if (this.state.open) {
      sidebarRight = "Sidebar-button sidebarOpen";
    }

    return (
      <header id="home" className="Section">
        <div className="Navbar">
          <Menu inverted pointing fixed="top" secondary>
            <Menu.Item as="a" href="#home" name="HOME" active />
            <Menu.Item as="a" href="#about" name="ABOUT" />
            <Menu.Item as="a" href="#resume" name="RESUME" />
            <Menu.Item as="a" href="#works" name="WORKS" />
            <Menu.Item as="a" href="#contact" name="CONTACT" />
          </Menu>
        </div>

        <div className="Sidebar">
          <Button
            className={sidebarRight}
            icon
            onClick={this.handleSidebar}
            color="black"
          >
            <Icon name="sidebar" size="big" />
          </Button>

          <Sidebar
            as={Menu}
            inverted
            icon="labeled"
            vertical
            visible={this.state.open}
            width="thin"
            direction="right"
          >
            <Menu.Item as="a" href="#home" onClick={this.sidebarClose}>
              <Icon name="home" />
              HOME
            </Menu.Item>
            <Menu.Item as="a" href="#about" onClick={this.sidebarClose}>
              <Icon name="user" />
              ABOUT
            </Menu.Item>
            <Menu.Item as="a" href="#resume" onClick={this.sidebarClose}>
              <Icon name="file alternate" />
              RESUME
            </Menu.Item>
            <Menu.Item as="a" href="#works" onClick={this.sidebarClose}>
              <Icon name="code" />
              WORKS
            </Menu.Item>
            <Menu.Item as="a" href="#contact" onClick={this.sidebarClose}>
              <Icon name="phone" />
              CONTACT
            </Menu.Item>
          </Sidebar>
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
        <span id="backgroundCredit">
          Photo by{" "}
          <a href="https://unsplash.com/@jakobkoerber?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Jakob Körber
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/yosemite-dark?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            {" "}
            Unsplash
          </a>
        </span>
      </header>
    );
  }
}

export default Header;
