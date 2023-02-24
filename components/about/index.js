import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="flex__row">

        <div className="profile__img">
          <Image src="/image/alhai.jpg"
            alt="profile"
            width={1080}
            height={1080}
            layout="intrinsic"
            priority
          />
        </div>

        <div className="spacer" />

        <div className="details">
          <h1 className="head-text">I am Alhai Ahmed Alhameli.</h1>
          <p className="p-text"><span>•</span> Graduated with Bachelor of Technology in IT Security and Forensics.</p>
          <p className="p-text"><span>•</span> I have worked on various projects using kali linux, SEIM solution, and OWASP tools..</p>
          <p className="p-text"><span>•</span> I am Currently learning C/C++ programming for software development and node.js for front-end web application.</p>

          <p className='p-text-head'>My Preferred Tools and Technologies are 👇</p>

          <div className="preferred__skills">
            {
              ["Kali linux, Security onion", "OWASP, NMAP, Wire shark.", "JavaScript, C++", "Node.js, react.js",].map((item, index) => {
                return (
                  <div key={index} className="profile__skill">
                    <span><BsFillCheckCircleFill /></span>
                    <p className="p-text">{item}</p>
                  </div>
                )
              })
            }
          </div>

          <a className="outlined-btn"
            href='https://github.com/Alhay97' target="_blank" rel="noreferrer"
          >
            My GitHub
          </a>

        </div>

      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about");
