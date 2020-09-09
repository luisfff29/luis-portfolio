import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Resume />
    </div>
  );
}

export default App;
