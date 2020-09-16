import React, { Component } from "react";
import { Menu, Icon, Sidebar, Button, Loader } from "semantic-ui-react";
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
    if (this.props.data) {
      var name = this.props.data.name;
      var description = this.props.data.description;
      var medias = this.props.data.social.map((media) => (
        <li key={media.name}>
          <a href={media.url}>
            <Icon name={media.name} size="big" />
          </a>
        </li>
      ));
    }

    let sidebarOpen = "Sidebar";
    if (this.state.open) {
      sidebarOpen = "Sidebar sidebarOpen";
    }

    const menus = [
      { title: "home", icon: "home" },
      { title: "about", icon: "user" },
      { title: "resume", icon: "file alternate" },
      { title: "projects", icon: "code" },
      { title: "contact", icon: "phone" },
    ];

    return (
      <header id="home" className="Section">
        <div className="Navbar">
          <Menu inverted pointing fixed="top" secondary id="menuTop">
            {menus.map((menu) => (
              <Menu.Item
                key={menu.title}
                as="a"
                href={`#${menu.title}`}
                name={menu.title.toUpperCase()}
              />
            ))}
          </Menu>
        </div>

        <div className={sidebarOpen}>
          <Button
            className="sidebarButton"
            icon
            onClick={this.handleSidebar}
            color="black"
          >
            <Icon name="sidebar" size="large" />
          </Button>

          <Sidebar
            as={Menu}
            inverted
            icon="labeled"
            vertical
            visible
            id="menuRight"
          >
            {menus.map((menu) => (
              <Menu.Item
                key={menu.title}
                as="a"
                href={`#${menu.title}`}
                onClick={this.sidebarClose}
              >
                <Icon name={menu.icon} />
                {menu.title.toUpperCase()}
              </Menu.Item>
            ))}
          </Sidebar>
        </div>

        <div className="banner">
          {this.props.loading ? (
            <Loader active content="Loading" size="massive" />
          ) : (
            <div className="banner-text">
              <h1>I'm {name}</h1>
              <h3>{description}</h3>
              <ul className="social">{medias}</ul>
            </div>
          )}
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
