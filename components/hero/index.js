import { AppWrap, MotionWrap } from "../wrapper";

const FavTools = ['/flutter.png', '/node.png', '/react.png', '/cpp.png'];

const Hero = () => {

  return (
    <div className="app__hero app__flex">

      <div className="p-text">Hi<span>👋</span>, I am</div>
      <div className="head-text">Alhai Ahmed Alhameli</div>
      <div className="sub-text">Ethical Hacker / Pentration Tester</div>

      <div className="detail-text">
        <p>I am a <span>Cyber security Student</span> specialized in both <span>Ethical Hacking</span> and <span>Web application</span> testing</p>
        <br />
        <p>Currently, I am exploring C/C++ for software development and Node.js to build front-stack applications.</p>
      </div>

      <a className="filled-btn"
        href="mailto:alhay.7@gmail.com" target="_blank" rel="noreferrer">
        Contact Me
      </a>

      <div className="fav__techs">
        {
          FavTools.map((tool, index) => {
            return (
              <div className="fav__tech" key={index}>
                <img src={tool} alt="tool" />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default AppWrap(MotionWrap(Hero, "home"), "home");
