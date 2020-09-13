import React, { Component } from "react";
import { Grid, Icon, Input, TextArea, Form, Button } from "semantic-ui-react";
import "./Contact.css";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var address = `${this.props.data.address.city}, ${this.props.data.address.state} - ${this.props.data.address.zip}`;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }

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
                <Form>
                  <Grid stackable>
                    <Grid.Column width={4}>
                      <h4>
                        <span>
                          Name<span className="asterisk">*</span>
                        </span>
                      </h4>
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <Input required className="InputColor" />
                    </Grid.Column>
                  </Grid>
                  <Grid stackable>
                    <Grid.Column width={4}>
                      <h4>
                        <span>
                          Email<span className="asterisk">*</span>
                        </span>
                      </h4>
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <Input required className="InputColor" type="email" />
                    </Grid.Column>
                  </Grid>
                  <Grid stackable>
                    <Grid.Column width={4}>
                      <h4>
                        <span>
                          Subject<span className="asterisk">*</span>
                        </span>
                      </h4>
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <Input required className="InputColor" />
                    </Grid.Column>
                  </Grid>
                  <Grid stackable>
                    <Grid.Column width={4}>
                      <h4>
                        <span>
                          Message<span className="asterisk">*</span>
                        </span>
                      </h4>
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <TextArea required rows={12} className="InputColor" />
                    </Grid.Column>
                  </Grid>
                  <Grid stackable>
                    <Grid.Column width={12} floated="right">
                      <Button color="black">S U B M I T</Button>
                    </Grid.Column>
                  </Grid>
                </Form>
              </Grid.Column>
              <Grid.Column width={4} id="contactMe">
                <h2>Contact me</h2>
                <p>{name}</p>
                <p>{address}</p>
                <p>{phone}</p>
                <p>{email}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Contact;
