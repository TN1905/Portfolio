import { Link } from "react-router-dom";
import "./home.scss";
const Home = () => {
  return (
    <>
      <div id="home" className="Home">
        <div className="HomeContent">
          <h5 className="HomeName">CHIÊM NGUYỄN TRÍ NGUYÊN</h5>
          <h2 className="HomePosition">Intern Java Developer</h2>
          <p className="HomeIntroduce">
            I'm a Software Development major at FPT Polytechnic. Over 6 terms,
            I've accumulated vital skills for a Java programmer, covering Java
            Core & OOP, SQL & Database, Spring Boot, HTML, CSS, JSP, Servlet &
            Hibernate, Thymeleaf, RESTful API, AngularJS and Bootstrap 5.
          </p>
          <Link to="#contact" className="HomeButton">
            Contact me
          </Link>
        </div>
        <div className="HomeImage"></div>
      </div>
    </>
  );
};

export default Home;
