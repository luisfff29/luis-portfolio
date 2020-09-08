import React, { Component } from "react";
import { Grid, Image, Container, Button, Responsive } from "semantic-ui-react";
import Picture from "../../images/profile.png";
import "./About.css";

class About extends Component {
  render() {
    return (
      <section id="about">
        <Container text className="rows">
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image src={Picture} size="medium" fluid centered circular />
              </Grid.Column>
              <Grid.Column width={12}>
                <div id="aboutMe">
                  <h3>About Me</h3>
                  <p>
                    My name is Luis Fuentes, I'm a Full Stack Web Developer from
                    Kenzie Academy and I'm really excited to start a new job as
                    a Software Developer.
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column floated="right" width={6}>
                <h3>Contact Details</h3>
                <p>Luis Fuentes</p>
                <p>Wylie, TX - 75098</p>
                <p>(214) 721-2378</p>
                <p>luisfff29@gmail.com</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <a href="https://docs.google.com/document/d/1IOlHH50MSvf5EsfdLWzZzfOZOJ33MDyBQF7gZTepQd0">
                  <Button
                    content="Resume Online"
                    icon="download"
                    size="large"
                    color="grey"
                  />
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </section>
    );
  }
}

export default About;
