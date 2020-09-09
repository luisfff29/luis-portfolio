import React, { Component } from "react";
import { Grid, Image, Button } from "semantic-ui-react";
import Project_Kwitter from "../../images/project_kwitter.png";
import Project_Kenziegram from "../../images/project_kenziegram.png";
import Project_Signup_Form from "../../images/project_signup_form.png";
import Project_Overdrive from "../../images/project_overdrive.png";
import "./Works.css";

class Works extends Component {
  render() {
    function project(image, title, framework, url) {
      return (
        <Grid.Column mobile={16} tablet={8} computer={4} className="Container">
          <Image fluid src={image} />
          <div className="Project">
            <h3>{title}</h3>
            <p>{framework}</p>
            <Button color="teal" as="a" href={url} target="_blank">
              Check project
            </Button>
          </div>
        </Grid.Column>
      );
    }
    return (
      <section id="works">
        <div className="Row">
          <h2>Check out some of my projects!</h2>
          <Grid>
            {project(
              Project_Kenziegram,
              "KenzieGram",
              "Node.js",
              "https://super-kenziegram.herokuapp.com/"
            )}
            {project(
              Project_Signup_Form,
              "Signup Form",
              "Node.js",
              "https://signup-form-app.herokuapp.com/"
            )}
            {project(
              Project_Kwitter,
              "Kwitter",
              "React.js",
              "https://kwitter-frontend.herokuapp.com/"
            )}
            {project(
              Project_Overdrive,
              "Overdrive Library",
              "Django",
              "https://django-overdrive.com/"
            )}
          </Grid>
        </div>
      </section>
    );
  }
}

export default Works;
