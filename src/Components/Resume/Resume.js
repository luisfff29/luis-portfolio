import React, { Component } from "react";
import { Grid, Icon, Placeholder } from "semantic-ui-react";
import "./Resume.css";

class Resume extends Component {
  renderSwitch = (icon) => {
    const skillsWithoutIcon = [
      "Django",
      "Bootstrap",
      "Semantic UI",
      "MongoDB",
      "jQuery",
    ];

    const styleFontFamily = {
      fontFamily: "'Catamaran', sans-serif",
      fontWeight: "700",
    };

    if (skillsWithoutIcon.includes(icon.name)) {
      return (
        <Icon
          color={icon.color}
          size="big"
          circular
          inverted={!icon.inverted}
          style={styleFontFamily}
        >
          {icon.icon}
        </Icon>
      );
    } else {
      return (
        <Icon
          color={icon.color}
          name={icon.icon}
          size="big"
          circular
          inverted={!icon.inverted}
          className={icon.inverted ? "BgWhite" : ""}
        />
      );
    }
  };

  render() {
    if (this.props.data && !this.props.loading) {
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

      var skills = this.props.data.skills.map((skill) => (
        <Grid.Column
          computer={2}
          tablet={3}
          mobile={5}
          key={skill.name}
          className="Skill"
        >
          {this.renderSwitch(skill)}
          <br />
          {skill.name}
        </Grid.Column>
      ));
    }

    var placeholder = (
      <Placeholder inverted className="lighter">
        {[...Array(2)].map((_, i) => (
          <Placeholder.Paragraph key={i}>
            {[...Array(4)].map((_, j) => (
              <Placeholder.Line key={j} />
            ))}
          </Placeholder.Paragraph>
        ))}
      </Placeholder>
    );

    var placeholderSkills = (
      <>
        {[...Array(16)].map((_, i) => (
          <Grid.Column key={i} computer={2} tablet={3} mobile={5}>
            <Placeholder
              inverted
              className="lighter"
              style={{ height: "5rem", width: "5rem" }}
            >
              <Placeholder.Image square />
            </Placeholder>
          </Grid.Column>
        ))}
      </>
    );

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
                {this.props.loading ? placeholder : education}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} stretched>
              <Grid.Column width={3}>
                <h4>
                  <span>WORK</span>
                </h4>
              </Grid.Column>
              <Grid.Column width={13}>
                {this.props.loading ? placeholder : work}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column width={3}>
                <h4>
                  <span>SKILLS</span>
                </h4>
              </Grid.Column>
              <Grid.Column width={13}>
                <Grid centered>
                  {this.props.loading ? placeholderSkills : skills}
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Resume;
