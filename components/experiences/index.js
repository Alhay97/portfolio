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

const Experiences = () => {

  return (
    <>
      <h2>Experiences</h2>

      <div className="app__experiences">
        {
          ExperienceList.map((item, index) => (
            <div key={index} className="app__experiences__item">

              <h3 className="app__experiences__item__title">
                {item.title}
              </h3>

              <div className="app__experiences__item__company">
                {item.company}
              </div>

              <div className="app__experiences__item__duration">
                {item.duration}
              </div>

              <div className="app__experiences__item__description">
                {item.desc}
              </div>

              <div className="app__experiences__item__tags">
                {
                  item.tags.map((tag, index) => {
                    return (
                      <div key={index} className="app__experiences__item__tag">
                        <span><BsFillCheckCircleFill /></span>
                        <p className="p-text">{tag}</p>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          ))
        }
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Experiences, "app__skills"), "experiences");
