import React, { Component } from "react";
import { Grid, Image, Button, Icon } from "semantic-ui-react";
import "./About.css";

class About extends Component {
  render() {
    if (this.props.data) {
      var bio = this.props.data.bio;
      var name = this.props.data.name;
      var address = `${this.props.data.address.city}, ${this.props.data.address.state} - ${this.props.data.address.zip}`;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about" className="Section">
        <div className="Row">
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image
                  src="images/profile_picture.png"
                  size="medium"
                  centered
                  circular
                />
              </Grid.Column>
              <Grid.Column width={12}>
                <div id="aboutMe">
                  <h3>About Me</h3>
                  <p>{bio}</p>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column floated="right" width={6}>
                <h3>Contact Details</h3>
                <p>{name}</p>
                <p>{address}</p>
                <p>{phone}</p>
                <p>{email}</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button
                  as="a"
                  href="documents/resume.pdf"
                  fluid
                  target="_blank"
                  color="grey"
                >
                  <Icon name="download" /> Open Resume
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}

export default About;
