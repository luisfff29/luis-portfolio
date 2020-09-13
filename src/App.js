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
  state = { data: {}, loading: true };

  componentDidMount = () => {
    fetch("resumeData.json")
      .then((res) => res.json())
      .then((result) => this.setState({ data: result, loading: false }));
  };

  render() {
    spyScrolling();

    return (
      <div>
        <Header data={this.state.data.main} loading={this.state.loading} />
        <About data={this.state.data.main} loading={this.state.loading} />
        <Resume data={this.state.data.resume} loading={this.state.loading} />
        <Projects
          data={this.state.data.projects}
          loading={this.state.loading}
        />
        <Contact data={this.state.data.main} loading={this.state.loading} />
        <Footer data={this.state.data.main} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
