import React, { Component } from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import spyScrolling from "./js/spyScrolling";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

class App extends Component {
  state = { data: {} };

  componentDidMount = () => {
    fetch("resumeData.json")
      .then((res) => res.json())
      .then((result) => this.setState({ data: result }));
  };

  render() {
    spyScrolling();

    return (
      <div>
        <Header data={this.state.data.main} />
        <About data={this.state.data.main} />
        <Resume data={this.state.data.resume} />
        <Projects data={this.state.data.projects} />
        <Contact data={this.state.data.main} />
        <Footer data={this.state.data.main} />
      </div>
    );
  }
}

export default App;
