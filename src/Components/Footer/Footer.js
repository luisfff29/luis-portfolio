import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <div id="arrow_up">
          <a href="#home">
            <Icon name="chevron circle up" id="#arrow_up" size="big" />
          </a>
        </div>
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
        <div id="credits">
          <p>
            Modified by{" "}
            <a href="https://www.linkedin.com/in/luisfff29/">Luis Fuentes</a>
          </p>
          <ul className="copyright">
            <li>&copy; Copyright 2014 Ceeve</li>
            <li>
              Design by{" "}
              <a
                title="Styleshout"
                href="http://www.styleshout.com/demo/?theme=ceevee"
              >
                Styleshout
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Footer;
