import React, { Component } from "react";
import {
  Grid,
  Image,
  Button,
  Placeholder,
  Reveal,
  Modal,
  Card,
} from "semantic-ui-react";
import "./Projects.css";

class Projects extends Component {
  render() {
    const extra = (website, repository) => (
      <div className="ui two buttons">
        <Button
          as="a"
          href={website}
          target="_blank"
          basic
          color="teal"
          content="Check website"
        />
        <Button
          as="a"
          href={repository}
          target="_blank"
          basic
          color="grey"
          content="Check repository"
        />
      </div>
    );

    if (this.props.data) {
      var projects = this.props.data.map((project) => (
        <Grid.Column
          computer={4}
          tablet={8}
          key={project.title}
          className="Container"
        >
          <Reveal animated="move up">
            <Reveal.Content visible>
              <Image src={project.image} />
            </Reveal.Content>
            <Reveal.Content hidden>
              <div className="Project">
                <h5>
                  <u>{project.title}</u>
                </h5>
                <p>{project.category}</p>
                <Button.Group vertical className="More">
                  <Button
                    as="a"
                    href={project.url.website}
                    target="_blank"
                    color="teal"
                    content="Check website"
                  />
                  <Button
                    as="a"
                    href={project.url.repository}
                    target="_blank"
                    color="grey"
                    content="Check repository"
                  />
                </Button.Group>
                <Modal
                  dimmer="blurring"
                  size="tiny"
                  trigger={
                    <Button basic inverted icon="plus" className="Plus" />
                  }
                >
                  <Card
                    style={{ width: "100%" }}
                    image={project.image}
                    header={project.title}
                    description={project.description}
                    extra={extra(project.url.website, project.url.repository)}
                  />
                </Modal>
              </div>
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
      ));
    }

    var placeholder = (
      <Grid.Row>
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
