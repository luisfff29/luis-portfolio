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

    if (this.props.data) {
      var education = this.props.data.education.map((edu) => (
        <div key={edu.school} className="division">
          <h3>{edu.school}</h3>
          <p>
            <em>{edu.program}</em>&emsp;• {edu.graduation}
          </p>
          <p>{edu.description}</p>
        </div>
      ));

      var work = this.props.data.work.map((job) => (
        <div key={job.company} className="division">
          <h3>{job.company}</h3>
          {job.position.map((pos) => (
            <p key={pos.title}>
              <em>{pos.title}</em>&emsp;• {pos.years}
            </p>
          ))}
          <p>{job.description}</p>
        </div>
      ));

      var skills = this.props.data.skills.map((lang) => (
        <Progress
          percent={lang.level}
          color={lang.color}
          active
          inverted
          progress
        >
          {lang.icon !== "dj" ? <Icon name={lang.icon} /> : lang.icon}{" "}
          {lang.name}
        </Progress>
      ));
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
              <Grid.Column width={13}>{education}</Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} stretched>
              <Grid.Column width={3}>
                <h4>
                  <span>WORK</span>
                </h4>
              </Grid.Column>
              <Grid.Column width={13}>{work}</Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column width={3}>
                <h4>
                  <span>SKILLS</span>
                </h4>
              </Grid.Column>
              <Grid.Column width={13}>{skills}</Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Resume;
