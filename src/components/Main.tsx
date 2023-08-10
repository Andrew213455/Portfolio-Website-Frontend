import "./Main.css";
import me from "../images/me.jpg";
import contact from "../images/contact-me.png";
import magicBall from "../images/magic8ball.jpg";

const Main = () => {
  return (
    <div className="Main">
      <div className="main-container">
        <div className="about">
          <div className="border">
            <div className="title-container">
              <h2>Andrew Woodring</h2>
              <h2>Andrew Woodring</h2>
            </div>
            <div className="short-about">
              <p>Full Stack JavaScript Software Engineer</p>
              <p>
                Passionate software engineer with a proven ability to work
                collaboratively to build scalable and user-friendly web
                applications.
              </p>
            </div>
          </div>
        </div>
        <div className="headshot-container">
          <img className="headshot" src={me} alt="" />
        </div>
        <div className="gradient-border" id="box">
          <div className="form-container">
            <div className="contact-box">
              <img src={contact} alt="" />
              <div className="icon-links">
                <a href="https://github.com/Andrew213455">
                  <i className="fa-brands fa-github icon"></i>
                  <p>Git Hub</p>
                </a>
                <a href="https://www.linkedin.com/in/andrew-woodring/">
                  <i className="fa-brands fa-linkedin icon"></i>
                  <p>Linked In</p>
                </a>
                <a href="https://www.linkedin.com/in/andrew-woodring/overlay/1635532347779/single-media-viewer/?profileId=ACoAAEOVHicBt5QZBm427mlGGlZm6NG7TC66PeM">
                  <i className="fa-solid fa-file-lines icon"></i>
                  <p>Resume</p>
                </a>
              </div>
            </div>

            <div className="form-box">
              <h3>
                <span className="blue-letters">Send An Email</span>
              </h3>
              <form className="form">
                <label htmlFor="fullname"></label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Full Name"
                />
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <label htmlFor="subject"></label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="subject"
                />
                <label htmlFor="message"></label>
                <textarea
                  name="message"
                  cols={30}
                  rows={10}
                  placeholder="Message"
                ></textarea>
                <button>
                  Send <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
