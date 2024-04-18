import "./project.scss";
import { apartmentImg, tikiImg, posImg } from "../../index";
const Project = () => {
  return (
    <>
      <div id="project" className="Project">
        <h1 className="ProjectHeader">Project</h1>
        <div className="ProjectList">
          <div className="ProjectListItem reveals">
            <img className="ProjectListItemImg" src={tikiImg} alt="TikiImg" />
            <p className="ProjectListItemTitle">Demo Tiki</p>
            <div className="ProjectListItemSource">
              <p>
                <a
                  href="https://www.youtube.com/watch?v=WJZdxkJMg2Q"
                  className="ProjectListItemSourceWatch"
                >
                  Watch Demo
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/TN1905/DemoTiki"
                  className="ProjectListItemSourceGithub"
                >
                  View Github Code
                </a>
              </p>
            </div>
            <div className="ProjectListItemLang">
              <p>HTML</p>
              <p>CSS</p>
              <p>Bootstrap 5</p>
              <p>AngularJS</p>
            </div>
          </div>
          <div className="ProjectListItem reveals">
            <img className="ProjectListItemImg" src={posImg} alt="PosIMG" />
            <p className="ProjectListItemTitle">POS SYSTEM DESTOP</p>
            <div className="ProjectListItemSource">
              <p>
                <a
                  href="https://www.youtube.com/watch?v=aFfZj6byagE"
                  className="ProjectListItemSourceWatch"
                >
                  Watch Demo
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/TN1905/POSSYSTEM"
                  className="ProjectListItemSourceGithub"
                >
                  View Github Code
                </a>
              </p>
            </div>
            <div className="ProjectListItemLang">
              <p>JAVA</p>
              <p>SQL Server</p>
              <p>Jasper Report</p>
            </div>
          </div>
          <div className="ProjectListItem reveals">
            <img
              className="ProjectListItemImg"
              src={apartmentImg}
              alt="ApartmentIMG"
            />
            <p className="ProjectListItemTitle">RENT APARTMENT SYSTEM</p>
            <div className="ProjectListItemSource">
              <p>
                <a
                  href="https://www.youtube.com/watch?v=FvkDJu6C1fw"
                  className="ProjectListItemSourceWatch"
                >
                  Watch Demo
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/TN1905/ApartmentSystem"
                  className="ProjectListItemSourceGithub"
                >
                  View Github Code
                </a>
              </p>
            </div>
            <div className="ProjectListItemLang">
              <p>JAVA Spring Boot</p>
              <p>SQL Server</p>
              <p>Thymeleaf</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>AngularJS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
