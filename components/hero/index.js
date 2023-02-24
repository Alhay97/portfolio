import { AppWrap, MotionWrap } from "../wrapper";

const FavTools = [ 'image/kali.png', 'image/owasp2.png', '/node.png',  '/cpp.png'];

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

      <div style={{
        display:"flex",
        gap:"30px",
        textTransform:"uppercase !important"
      }}>
      <a className="filled-btn"
        href="mailto:alhay.7@gmail.com" target="_blank" rel="noreferrer">
        Contact Me
      </a>
      <a className="filled-btn"
        href="https://drive.google.com/file/d/1L3CEyfMGwAxFyp9QvDEa_0s5qRzvAk5f/view?usp=sharing" target="_blank" rel="noreferrer">
        My Cv
      </a>

      </div>

     
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
