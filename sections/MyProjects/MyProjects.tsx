import Image from "next/image";
import { PROJECTS } from "@/data/data";
import style from "./MyProjects.module.scss";
export default function MyProjects() {
  return (
    <div id="section2" className={style.mywork}>
      <h3>My work</h3>
      <div className={style.projects}>
        {PROJECTS.map((project) => (
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
            <div className={style.gitvercel}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              {project.vercel ? (
                <a
                  href={project.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vercel
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={style.projectmessage}>
        Exciting Projects on the Way! 🚀 Stay tuned for more updates!
      </div>
    </div>
  );
}
