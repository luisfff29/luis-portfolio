import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  /* Credits to Yago Estevez for ScrollSpy With Vanilla JS
     link: https://codepen.io/yagoestevez/pen/VGBqJW */
  const spyScrolling = () => {
    const sections = document.getElementsByClassName("Section");

    window.onscroll = () => {
      const scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;
      for (let s in sections)
        if (
          sections.hasOwnProperty(s) &&
          sections[s].offsetTop <= scrollPos + 1
        ) {
          const id = sections[s].id;
          document.querySelector(".active").classList.remove("active");
          document.querySelector(`a[href*=${id}]`).classList.add("active");
        }
    };
  };
  spyScrolling();

  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
