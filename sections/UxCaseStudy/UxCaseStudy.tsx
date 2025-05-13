import Image from "next/image";
import { UXCASESTUDY } from "@/data/data";
import style from "./UxCaseStudy.module.scss";
export default function UxCaseStudy() {
  return (
    <div id="section3" className={style.mywork}>
      <h3>Case Studies</h3>
      <div className={style.projects}>
        {UXCASESTUDY.map((project) => (
          <div key={project.id} className={style.project}>
            <Image
              className={style.projectimg}
              src={project.image}
              alt={project.name}
              height={216}
              width={600}
              style={{ objectFit: "cover", objectPosition: "top" }}
              loading="lazy"
            />
            <p className={style.projecttitle}>{project.name}</p>
            <div className={style.content}>
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
      <div className={style.projectmessage}>
        If you want to see more, check out my{" "}
        <a href="https://www.behance.net/3ea1f0ee" target="_blank">
          Behance
        </a>{" "}
        for more case studies!
      </div>
    </div>
  );
}
