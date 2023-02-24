import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";

const ExperienceList = [
  {
    title: "Technology Forensics",
    company: "AD Judcaial Court",
    duration: "Aug 2022 - Oct 2022",
    desc: "Worked on tools used on computers and drones for forensics, Used FTK for data wiping and computer forensics.",
    tags: ["Celibrite", "FTK", "FTK imager", "Wireshark"],
  },
  {
    title: "IT support and Inoformation security",
    company: "Abu Dhabi Early Childhood Authority",
    duration: "Oct 2022 - Jan 2023",
    desc: "Configuring and servicing networks and servers IT infrastructure IS policy and governance, Supported the IT department on their tasks.Creating application interface and database using Microsoft PowerApp.",
    tags: ["IS/IT poilicy", "microsoft PowerBI", "Routers and switches", "Microsoft PowerAPP",],
  }
];

const Reflections = () => {

  return (
    <>
      <h2>Reflections</h2>

      <div className="app__experiences">
        <p>As I reviewed my e-portfolio, several key themes emerged. One of the most prominent themes was the importance of staying up-to-date with the latest technologies and trends in cyber security. From exploring emerging technologies to analyzing the impact of data breaches, my work reflects my desire to stay ahead of the curve and be a leader in the field of cyber security.

            My journey as a 42 student  towards becoming a skilled and knowledgeable software developer. Through the rigorous and challenging curriculum at 42, I have developed a deep understanding of computer science and programming that has prepared me for a career in technology. One of the most prominent themes was the importance of collaboration and peer learning in the 42 community. I have included several examples of group projects and team challenges that demonstrate my ability to work effectively with others to develop and implement complex software solutions. From learning new programming languages to collaborating with fellow students on software projects, I have learned the importance of communication, collaboration, and teamwork

            Overall, my e-portfolio reflects my growth and development as a cyber security and as a software developer. Through my coursework and practical experiences through my internships , I have developed a strong foundation of knowledge and skills that I will carry with me throughout my career. As I continue to pursue my passion for cyber security, I am excited to see where this journey will take me and the impact that I will be able to make in this vital and ever-evolving field.</p>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Reflections, "app__skills"), "experiences");
