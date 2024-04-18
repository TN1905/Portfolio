import { DownloadOutlined } from "@ant-design/icons";
import "./about.scss";
import {
  htmlLogo,
  cssLogo,
  javaLogo,
  springbootLogo,
  thymeleafLogo,
  bootstrapLogo,
  SQLLogo,
  CV,
} from "../../index";
const About = () => {
  return (
    <>
      <div id="about" className="About">
        <h1 className="AboutTitle">Get to know me</h1>
        <div className="AboutLayout">
          <div className="AboutSkill">
            <h5 className="AboutSkillTitle">My Skills</h5>
            <div className="contentBodySkills">
              <div className="contentBodySkill reveals">
                <div className="contentBodyLogo">
                  <img
                    src={javaLogo}
                    alt="IMAGE"
                    style={{ width: "40%", height: "40%" }}
                  />
                </div>
                <h3>Java</h3>
              </div>
              <div className="contentBodySkill reveals">
                <div className="contentBodyLogo">
                  <img
                    src={springbootLogo}
                    alt="IMAGE"
                    style={{ width: "40%", height: "40%" }}
                  />
                </div>
                <h3>Spring Boot</h3>
              </div>
              <div className="contentBodySkill reveals">
                <div className="contentBodyLogo">
                  <img
                    src={thymeleafLogo}
                    alt="IMAGE"
                    style={{ width: "40%", height: "40%" }}
                  />
                </div>
                <h3>Thymeleaf</h3>
              </div>
              <div className="contentBodySkill reveals">
                <div className="contentBodyLogo">
                  <img
                    src={SQLLogo}
                    alt="IMAGE"
                    style={{ width: "40%", height: "40%" }}
                  />
                </div>
                <h3>SQL Server</h3>
              </div>
              <div className="contentBodySkill reveals">
                <div className="contentBodyLogo">
                  <img
                    src={htmlLogo}
                    alt="IMAGE"
                    style={{ width: "40%", height: "40%" }}
                  />
                </div>
                <h3>HTML</h3>
              </div>
              <div className="contentBodySkill reveals">
                <div className="contentBodyLogo">
                  <img
                    src={cssLogo}
                    alt="IMAGE"
                    style={{ width: "40%", height: "40%" }}
                  />
                </div>
                <h3>CSS</h3>
              </div>
              <div className="contentBodySkill reveals">
                <div className="contentBodyLogo">
                  <img
                    src={bootstrapLogo}
                    alt="IMAGE"
                    style={{ width: "40%", height: "40%" }}
                  />
                </div>
                <h3>Bootstrap 5</h3>
              </div>
            </div>
          </div>

          <div className="AboutContent">
            <h5 className="AboutHeader">Personal Info</h5>
            <ul className="AboutList">
              <li className="AboutDesc">
                Name: <strong>Chiêm Nguyễn Trí Nguyên</strong>
              </li>
              <li className="AboutDesc">
                Birthday: <strong>29-04-2001</strong>
              </li>
              <li className="AboutDesc">
                National: <strong>Việt Nam</strong>
              </li>
              <li className="AboutDesc">
                Phone: <strong>0779696443</strong>
              </li>
              <li className="AboutDesc">
                Github:
                <a href="https://github.com/TN1905?tab=repositories">
                  https://github.com/TN1905
                </a>
              </li>
              <li>Email: cntringuyen1905@gmail.com</li>
            </ul>
            <div className="contentHeaderButton">
              <a className="contentHeaderMyCV" download={CV} href={CV}>
                <DownloadOutlined className="contentHeaderButtonIcon" />
                <span className="contentHeaderButtonLayout">download cv</span>
                <span className="contentHeaderButtonTitle">download cv</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
