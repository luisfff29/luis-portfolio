import React, { Component } from "react";
import { Icon, Loader } from "semantic-ui-react";
import "./Footer.css";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var medias = this.props.data.social.map((media) => (
        <li key={media.name}>
          <a href={media.url}>
            <Icon name={media.name} size="big" />
          </a>
        </li>
      ));
    }

    return (
      <section id="footer">
        <div id="arrow_up">
          <a href="#home">
            <Icon name="chevron circle up" id="#arrow_up" size="big" />
          </a>
        </div>
        <ul className="social">
          {this.props.loading ? <Loader active size="small" /> : medias}
        </ul>
        <div id="credits">
          <p>
            Modified by{" "}
            {this.props.loading ? (
              ""
            ) : (
              <a href="https://www.linkedin.com/in/luisfff29/">{name}</a>
            )}
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
