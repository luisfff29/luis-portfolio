import React, { Component } from "react";
import { Grid, Image, Button } from "semantic-ui-react";
import Project_Kwitter from "../../images/project_kwitter.png";
import Project_Kenziegram from "../../images/project_kenziegram.png";
import Project_Signup_Form from "../../images/project_signup_form.png";
import Project_Overdrive from "../../images/project_overdrive.png";
import "./Works.css";

class Works extends Component {
  render() {
    function project(image, title, framework, url_website, url_github) {
      return (
        <Grid.Column mobile={16} tablet={8} computer={4} className="Container">
          <Image fluid src={image} />
          <div className="Project">
            <h5>
              <u>{title}</u>
            </h5>
            <p>{framework}</p>
            <Button.Group vertical>
              <Button color="teal" as="a" href={url_website} target="_blank">
                Check website
              </Button>
              <Button color="grey" as="a" href={url_github} target="_blank">
                Check repository
              </Button>
            </Button.Group>
          </div>
        </Grid.Column>
      );
    }
    return (
      <section id="works" className="Section">
        <div className="Row">
          <h2>Check out some of my projects!</h2>
          <Grid>
            {project(
              Project_Kenziegram,
              "KenzieGram",
              "Node.js",
              "https://super-kenziegram.herokuapp.com/",
              "https://github.com/luisfff29/super-kenziegram/"
            )}
            {project(
              Project_Signup_Form,
              "Signup Form",
              "Node.js",
              "https://signup-form-app.herokuapp.com/",
              "https://github.com/luisfff29/signup-form/"
            )}
            {project(
              Project_Kwitter,
              "Kwitter",
              "React.js",
              "https://kwitter-frontend.herokuapp.com/",
              "https://github.com/luisfff29/kwitter-frontend/"
            )}
            {project(
              Project_Overdrive,
              "Overdrive Library",
              "Django",
              "https://django-overdrive.com/",
              "https://github.com/luisfff29/overdrive-library/"
            )}
          </Grid>
        </div>
      </section>
    );
  }
}

export default Works;
