// Credits to Yago Estevez for ScrollSpy With Vanilla JS
// link: https://codepen.io/yagoestevez/pen/VGBqJW

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
        if (document.querySelector(".active")) {
          document.querySelector(".active").classList.remove("active");
        }
        document.querySelector(`a[href*=${id}]`).classList.add("active");
      }
  };
};

export default spyScrolling;
