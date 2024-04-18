import "./contact.scss";
import { twitterImg, linkedinImg, githubImg, faceImg } from "../../index";
const Contact = () => {
  return (
    <>
      <div id="contact" className="Contact">
        <h1 className="ContactMe">Contact Me</h1>
        <h1 className="ContactEmail">cntringuyen1905@gmail.com</h1>
        <div className="ContactEnd">
          <h2>TNguyen</h2>
          <div className="ContactEndIcons">
            <a href="https://www.facebook.com/profile.php?id=100009311996151">
              <img className="ContactEndIconsIcon" src={faceImg} alt="" />
            </a>
            <a href="https://twitter.com/ChiemFpl">
              <img className="ContactEndIconsIcon" src={twitterImg} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/nguyen-chiem-nguyen-tri-210472209/">
              <img className="ContactEndIconsIcon" src={linkedinImg} alt="" />
            </a>
            <a href="https://github.com/TN1905?tab=repositories">
              <img className="ContactEndIconsIcon" src={githubImg} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
