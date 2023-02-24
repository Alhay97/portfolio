import { BsFillCheckCircleFill, BsGithub } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';

const projects = [
  {
    title: "LIBFT",
    desc: "Libft is an individual project at 42 that requieres us to re-create some standard C library functions for future projects, and have a deeper understanding of data structures and basic algorithms. At 42 we are not allowed to use some standard libraries on our projects, so we have to keep growing this libary with our own functions as we go farther in the program.s.",
    coverUrl: "/mobile-dev.png",
    githubLink: "https://github.com/Alhay97/myLibft",
    demoLink: "https://github.com/nixrajput/social-media-app-flutter/releases",
    tags: ["Shell", "C",],
  },
  {
    title: "Fract-ol",
    desc: "fractol is a 42 Project aimed at exploring fractals; mathematical sets that exhibit a repeating pattern displayed at every scale..",
    coverUrl: "/image/fractal.png",
    githubLink: "https://github.com/Alhay97/fract-ol",
    demoLink: "https://social-api.nixlab.co.in",
    tags: ["Shell", "C",],
  },
  {
    title: "Minishell",
    desc: "minishell is miniture recreation of bash where we learn how each command is parsed and executed",
    coverUrl:'/image/bash.png',
    githubLink: "https://github.com/Alhay97/Minishell",
    demoLink: "https://github.com/nixrajput/video-calling-app-flutter/releases",
    tags: ["Shell", "C",],
  },
  {
    title: "Deep leanrnig Malware Analyzer",
    desc: "Is a final year college project, where any program or exe. file is analyzed to check if its a malware through deep learn AI",
    coverUrl: "/image/malware.jpg",
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
