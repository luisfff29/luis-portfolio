import React, { Component } from "react";
import { Grid, Icon, Input, TextArea, Form, Button } from "semantic-ui-react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="Section">
        <div className="Row">
          <Grid stackable divided="vertically">
            <Grid.Row className="contactTitle">
              <Icon name="mail" size="huge" />
              <h3>GET IN TOUCH.</h3>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={12}>
                <Grid stackable>
                  <Grid.Column width={4}>
                    <h4>
                      <span>Name</span>
                    </h4>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Input className="InputColor" />
                  </Grid.Column>
                </Grid>
                <Grid stackable>
                  <Grid.Column width={4}>
                    <h4>
                      <span>Email</span>
                    </h4>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Input className="InputColor" />
                  </Grid.Column>
                </Grid>
                <Grid stackable>
                  <Grid.Column width={4}>
                    <h4>
                      <span>Subject</span>
                    </h4>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Input className="InputColor" />
                  </Grid.Column>
                </Grid>
                <Grid stackable>
                  <Grid.Column width={4}>
                    <h4>
                      <span>Message</span>
                    </h4>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Form>
                      <TextArea rows={12} className="InputColor" />
                    </Form>
                  </Grid.Column>
                </Grid>
                <Grid stackable>
                  <Grid.Column width={12} floated="right">
                    <Button color="black">S U B M I T</Button>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column width={4} id="contactMe">
                <h2>Contact me</h2>
                <p>Luis Fuentes</p>
                <p>Wylie, TX - 75098</p>
                <p>(214)-721-2378</p>
                <p>luisfff29@gmail.com</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Contact;
