import { AppWrap, MotionWrap } from "../wrapper";
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook, BsEnvelopeFill, BsCup } from "react-icons/bs";

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Let&lsquo;s work together 🤝</h2>

      <div className="contact__info">
        <p>Mail me at 👇</p>
        <div className="email">
          <BsEnvelopeFill />
          <a
            href="mailto:alhay.7@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            alhay.7@gmail.com
          </a>
        </div>

      </div>

      <div className="app__Social">
        <p>Follow me here 👇</p>

        <div className="app__social__links">
          <a
            href="https://www.linkedin.com/in/alhai-ahmed-alhameli/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://instagram.com/alhay.97?igshid=ZDdkNTZiNTM="
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>

          <a
            href="https://twitter.com/a_alhamely?t=YpIG3N9WcuxLZigxIHDgFw&s=08"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
        </div>
      </div>

    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
