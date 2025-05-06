import Image from "next/image";
import { UXCASESTUDY } from "@/data/data";
import style from "./UxCaseStudy.module.scss";
export default function UxCaseStudy() {
  return (
    <div id="section3" className={style.myworkux}>
      <h3>Case Studies</h3>
      <div className={style.projectsux}>
        {UXCASESTUDY.map((project) => (
          <div key={project.id} className={style.projectux}>
            <Image
              className={style.projectimgux}
              src={project.image}
              alt={project.name}
            />
            <p className={style.projecttitleux}>{project.name}</p>
            <div className={style.contentux}>
              {project.description.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </div>
            <div className={style.Behance}>
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
      <div className={style.projectmessageux}>
        If you want to see more, check out my{" "}
        <a href="https://www.behance.net/3ea1f0ee" target="_blank">
          Behance
        </a>{" "}
        for more case studies!
      </div>
    </div>
  );
}
