import React, { Component } from "react";
import { Grid, Container, Progress, Icon } from "semantic-ui-react";
import "./Resume.css";

class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <Container text className="rows">
          <Grid stackable divided="vertically">
            <Grid.Row columns={2} stretched>
              <Grid.Column width={3}>
                <h4>
                  <span>EDUCATION</span>
                </h4>
              </Grid.Column>
              <Grid.Column width={13}>
                <h3>Kenzie Academy</h3>
                <p>
                  <em>Software Engineering Certification Program</em>
                  &emsp;•&nbsp; August 2019 - July 2020
                </p>
                <p>
                  Gratuated with <strong>Front-End</strong> and{" "}
                  <strong>Full-Stack Web Development</strong> certifications.
                </p>
                <h3>My Computer Career</h3>
                <p>
                  <em>Technical Systems and Security Certification Program</em>
                  &emsp;•&nbsp; November 2018 - June 2019
                </p>
                <p>
                  CompTIA A+, Server+, Network+, and Security+ certified.
                  <br />
                  Microsoft and Linux certifications.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} stretched>
              <Grid.Column width={3}>
                <h4>
                  <span>WORK</span>
                </h4>
              </Grid.Column>
              <Grid.Column width={13}>
                <h3>Global Asset, LLC</h3>
                <p>
                  <em>Associate</em>
                  &emsp;•&nbsp; August 2019
                </p>
                <p>
                  Staffing support helping out campus technicians to assist them
                  installing Chromebooks in Rockwall, TX high schools.
                </p>
                <h3>Wal-Mart Stores, Inc.</h3>
                <p>
                  <em>Overnight Stocker</em>
                  &emsp;•&nbsp; April 2016 - Current
                  <br />
                  <em>Department Manager</em>
                  &emsp;•&nbsp; August 2018 - January 2019
                </p>
                <p>
                  Consulting inventory reports, unpacking merchandise, arranging
                  items on shelves, updating activity records, taking safety
                  precautions, collaborating with watchmen, and reporting to
                  managers.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column width={3}>
                <h4>
                  <span>SKILLS</span>
                </h4>
              </Grid.Column>
              <Grid.Column width={13}>
                <Progress percent={100} color="blue" active inverted progress>
                  <Icon name="python" />
                  Python
                </Progress>
                <Progress percent={95} color="yellow" active inverted progress>
                  <Icon name="js" />
                  Javascript
                </Progress>
                <Progress percent={100} color="green" active inverted progress>
                  dj Django
                </Progress>
                <Progress percent={95} color="violet" active inverted progress>
                  <Icon name="react" />
                  React
                </Progress>
                <Progress percent={100} color="red" active inverted progress>
                  <Icon name="html5" />
                  HTML5
                </Progress>
                <Progress percent={90} color="blue" active inverted progress>
                  <Icon name="css3" />
                  CSS3
                </Progress>
                <Progress percent={95} color="grey" active inverted progress>
                  <Icon name="git" />
                  Git
                </Progress>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </section>
    );
  }
}

export default Resume;
