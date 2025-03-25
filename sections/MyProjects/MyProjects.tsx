import Image from "next/image";
import { PROJECTS } from "@/data/data";
import "./MyProjects.css";
export default function MyProjects() {
  return (
    <div id="section2" className="mywork">
      <h3>My work</h3>
      <div className="projects">
        {PROJECTS.map((project) => (
          <div key={project.id} className="project">
            <Image
              className="project-img"
              src={project.image}
              alt={project.name}
            />
            <p className="project-title">{project.name}</p>
            <div className="content">
              {project.description.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </div>
            <div className="git-vercel">
              <a href={project.github} target="_blank">
                github
              </a>
              {project.vercel ? (
                <a href={project.vercel} target="_blank">
                  vercel
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="project-message">
        Exciting Projects on the Way! 🚀 Stay tuned for more updates!
      </div>
    </div>
  );
}
