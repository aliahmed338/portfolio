import Image from "next/image";
import { UXCASESTUDY } from "@/data/data";
import "./UxCaseStudy.css";
export default function UxCaseStudy() {
  return (
    <div id="section3" className="myworkux">
      <h3>Case Studies</h3>
      <div className="projectsux">
        {UXCASESTUDY.map((project) => (
          <div key={project.id} className="projectux">
            <Image
              className="project-imgux"
              src={project.image}
              alt={project.name}
            />
            <p className="project-titleux">{project.name}</p>
            <div className="contentux">
              {project.description.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </div>
            <div className="Behance">
              {project.Behance ? (
                <a href={project.Behance} target="_blank">
                  Behance
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="project-messageux">
        If you want to see more, check out my{" "}
        <a href="https://www.behance.net/3ea1f0ee" target="_blank">
          Behance
        </a>{" "}
        for more case studies!
      </div>
    </div>
  );
}
