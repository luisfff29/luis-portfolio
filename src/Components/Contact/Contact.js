import React, { Component } from "react";
import {
  Grid,
  Icon,
  TextArea,
  Form,
  Button,
  Placeholder,
} from "semantic-ui-react";
import "./Contact.css";

class Contact extends Component {
  state = { name: "", subject: "", message: "" };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    window.open(
      `mailto:luisfff29@gmail.com?subject=${this.state.subject}&body=${this.state.message}%0d%0aBest regards, ${this.state.name}%0d%0a%0d%0aSent from your Portfolio`
    );
    this.setState({ name: "", subject: "", message: "" });
  };

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
                      <Form.Input
                        required
                        className="InputColor"
                        name="name"
                        placeholder="Your name"
                        onChange={(e) => this.handleChange(e)}
                      />
                    </Grid.Column>
                  </Grid>
                  <Grid stackable>
                    <Grid.Column width={4}>
                      <h4>
                        <span>
                          To<span className="asterisk">*</span>
                        </span>
                      </h4>
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <Form.Input
                        className="InputColor"
                        value={email}
                        readOnly
                      />
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
                      <Form.Input
                        required
                        className="InputColor"
                        name="subject"
                        onChange={(e) => this.handleChange(e)}
                      />
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
                      <TextArea
                        required
                        rows={12}
                        className="InputColor"
                        name="message"
                        onChange={(e) => this.handleChange(e)}
                      />
                    </Grid.Column>
                  </Grid>
                  <Grid stackable>
                    <Grid.Column width={12} floated="right">
                      <Button
                        disabled={this.props.loading}
                        color="black"
                        onClick={this.handleSubmit}
                        type="submit"
                      >
                        S U B M I T
                      </Button>
                    </Grid.Column>
                  </Grid>
                </Form>
              </Grid.Column>
              <Grid.Column width={4} id="contactMe">
                <h2>Contact me</h2>
                {this.props.loading ? (
                  <Placeholder inverted className="lighter">
                    {[...Array(4)].map((_, i) => (
                      <Placeholder.Line length="medium" key={i} />
                    ))}
                  </Placeholder>
                ) : (
                  <div>
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>
                      <a href="tel:+12147212378">{phone}</a>
                    </p>
                    <p>
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  </div>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Contact;
