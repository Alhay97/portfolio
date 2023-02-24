import { BsFillCheckCircleFill, BsGithub } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';

const projects = [
  {
    title: "LIBFT",
    desc: "A social media app using Flutter, Dart, GetX, and REST API that allows users to share their photos and videos.",
    coverUrl: "/mobile-dev.png",
    githubLink: "https://github.com/Alhay97/myLibft",
    demoLink: "https://github.com/nixrajput/social-media-app-flutter/releases",
    tags: ["Shell", "C",],
  },
  {
    title: "Fract-ol",
    desc: "An open-source RESTful API using Node.js, Express.js and MongoDB to integrate backend and frontend with ease.",
    coverUrl: "/crypto-dev.png",
    githubLink: "https://github.com/Alhay97/fract-ol",
    demoLink: "https://social-api.nixlab.co.in",
    tags: ["Shell", "C",],
  },
  {
    title: "Minishell",
    desc: "A video call app using Flutter, Dart, and Agora SDK that allows users to call each other face to face.",
    coverUrl: "/mobile-dev.png",
    githubLink: "https://github.com/Alhay97/Minishell",
    demoLink: "https://github.com/nixrajput/video-calling-app-flutter/releases",
    tags: ["Shell", "C",],
  },
  {
    title: "Deep leanrnig Malware Analyzer",
    desc: "An e-commerce app using MERN stack, and Redux that allows users to buy and checkout products with ease.",
    coverUrl: "/web-dev.png",
    // githubLink: "https://github.com/nixrajput/ecommerce-mern",
    // demoLink: "https://nixlab-shop.herokuapp.com",
    tags: ["Python", "Shell", "pyTorch"],
  }
];

const Projects = () => {

  return (
    <>
      <h2> My Projects </h2>

      <div className="project__works">
        {
          projects.map((project, index) => {
            return (
              <div key={index} className="project__work">
                <div className="project__work__img">
                  <Image src={project.coverUrl}
                    alt={project.title}
                    layout="fill"
                    priority
                  />
                </div>
                <div className="project__work__details">
                  <h3 className="project__work__title">{project.title}</h3>
                  <p className="project__work__desc">{project.desc}</p>

                  <a className="text-btn" href={project.githubLink} target="_blank" rel="noreferrer">
                    <BsGithub />
                    <span>GitHub repo</span>
                  </a>

                  <div className="project__work__tags">
                    {
                      project.tags.map((tag, index) => {
                        return (
                          <div key={index} className="project__work__tag">
                            <span><BsFillCheckCircleFill /></span>
                            <p className="p-text">{tag}</p>
                          </div>
                        )
                      })
                    }
                  </div>

                  {/* <a className="outlined-btn" href={project.demoLink} target="_blank" rel="noreferrer">
                    Demo
                  </a> */}

                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Projects, "app__projects"), "projects");
