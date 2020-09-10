import React, { Component } from "react";
import { Grid, Progress, Icon } from "semantic-ui-react";
import "./Resume.css";

class Resume extends Component {
  render() {
    function bar(name, icon, percentage, color) {
      if (icon === "dj") {
        icon = "dj";
      } else {
        icon = <Icon name={icon} />;
      }
      return (
        <Progress percent={percentage} color={color} active inverted progress>
          {icon} {name}
        </Progress>
      );
    }

    return (
      <section id="resume" className="Section">
        <div className="Row">
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
                {bar("Python", "python", 100, "blue")}
                {bar("Javascript", "js", 95, "yellow")}
                {bar("Django", "dj", 100, "green")}
                {bar("React", "react", 95, "violet")}
                {bar("HTML5", "html5", 100, "red")}
                {bar("CSS3", "css3", 90, "blue")}
                {bar("Git", "git", 95, "grey")}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Resume;
