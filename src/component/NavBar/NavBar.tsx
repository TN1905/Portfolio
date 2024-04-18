import { useEffect } from "react";
import "./NavBar.scss";

const NavBar = () => {
  useEffect(() => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const about = $("#about") as HTMLElement;
    const contact = $("#contact") as HTMLElement;
    const project = $("#project") as HTMLElement;

    const navLink = $$(".navLink") as unknown as HTMLElement;
    const navBarListHome = $(".navBarListHome") as HTMLElement;
    const navBarListAbout = $(".navBarListAbout") as HTMLElement;
    const navBarListProjects = $(".navBarListProjects") as HTMLElement;
    const navBarListContact = $(".navBarListContact") as HTMLElement;

    const elementVisible = 90;

    const progressBar = $("#progress-bar") as HTMLElement;
    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    function updateProgressBar() {
      const scrollTop = document.documentElement.scrollTop;

      const scrollPercent =
        (scrollTop / (documentHeight - window.innerHeight)) * 100;
      console.log(scrollPercent);
      progressBar.style.width = scrollPercent + "%";
    }

    const scrollActive = () => {
      const windowScrollY = window.scrollY;
      if (windowScrollY > contact.offsetTop - elementVisible) {
        checkAttributeNav(navLink);
        setAttributeCurrent(navBarListContact);
      } else if (windowScrollY > project.offsetTop - elementVisible) {
        checkAttributeNav(navLink);
        setAttributeCurrent(navBarListProjects);
      } else if (windowScrollY > about.offsetTop - elementVisible) {
        checkAttributeNav(navLink);
        setAttributeCurrent(navBarListAbout);
      } else {
        checkAttributeNav(navLink);
        setAttributeCurrent(navBarListHome);
      }
      updateProgressBar();
      reveals();
    };

    window.addEventListener("scroll", scrollActive);

    function checkAttributeNav(name) {
      name.forEach((item) => {
        if (item.hasAttribute("aria-current")) {
          item.removeAttribute("aria-current");
        }
      });
    }

    function setAttributeCurrent(name) {
      name["setAttribute"]("aria-current", "page");
    }

    function reveals() {
      const reveals = $$(".reveals");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight + 50) {
          handlerAddClassList(reveals[i], "active");
        }
      }
    }

    function handlerAddClassList(name, nameClass) {
      name.classList.add(nameClass);
    }

    return () => window.removeEventListener("scroll", scrollActive);
  }, []);
  return (
    <>
      <div id="progress-bar"></div>
      <div className="navBar">
        <div className="navBarContainer">
          <h5>TNguyen</h5>
          <ul className="navBarList">
            <a href="#" className="navLink navBarListHome" aria-current="page">
              Home
            </a>
            <a href="#about" className="navLink navBarListAbout">
              About
            </a>
            <a href="#project" className="navLink navBarListProjects">
              Project
            </a>
            <a href="#contact" className="navLink navBarListContact">
              Contact
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
