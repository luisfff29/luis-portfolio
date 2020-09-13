import React, { Component } from "react";
import { Grid, Image, Button, Placeholder } from "semantic-ui-react";
import "./Projects.css";

class Projects extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.map((project) => (
        <Grid.Column
          key={project.title}
          mobile={16}
          tablet={8}
          computer={4}
          className="Container"
        >
          <Image fluid src={project.image} />
          <div className="Project">
            <h5>
              <u>{project.title}</u>
            </h5>
            <p>{project.category}</p>
            <Button.Group vertical>
              <Button
                color="teal"
                as="a"
                href={project.url.website}
                target="_blank"
              >
                Check website
              </Button>
              <Button
                color="grey"
                as="a"
                href={project.url.repository}
                target="_blank"
              >
                Check repository
              </Button>
            </Button.Group>
          </div>
        </Grid.Column>
      ));
    }

    var placeholder = (
      <Grid.Row centered columns={4}>
        {[...Array(4)].map((_, i) => (
          <Grid.Column key={i}>
            <Placeholder inverted className="darker">
              <Placeholder.Image rectangular />
            </Placeholder>
          </Grid.Column>
        ))}
      </Grid.Row>
    );

    return (
      <section id="projects" className="Section">
        <div className="Row">
          <h2>Check out some of my projects!</h2>
          <Grid stackable>{this.props.loading ? placeholder : projects}</Grid>
        </div>
      </section>
    );
  }
}

export default Projects;
