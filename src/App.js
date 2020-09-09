import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Works from "./Components/Works/Works";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Works />
    </div>
  );
}

export default App;
