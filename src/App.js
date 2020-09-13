import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import spyScrolling from "./js/spyScrolling";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  spyScrolling();

  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
