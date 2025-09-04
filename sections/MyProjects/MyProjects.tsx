import Image from "next/image";
import { PROJECTS } from "@/data/data";
import style from "./MyProjects.module.scss";
import Link from "next/link";
export default function MyProjects() {
  return (
    <section
      id="section2"
      className={style.mywork}
      aria-label="Projects Section"
    >
      <h2>My work</h2>
      <div className={style.projects}>
        {PROJECTS.map((project) => (
          <article key={project.id} className={style.project}>
            <Link href={`/${project.name}`}>
              <Image
                className={style.projectimg}
                src={project.image}
                alt={project.name}
                height={216}
                width={600}
                style={{ objectFit: "cover", objectPosition: "top" }}
                loading="lazy"
              />
            </Link>
            <h3 className={style.projecttitle}>{project.name}</h3>
            <div className={style.content}>
              {project.description.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </div>
            <ul className={style.gitvercel}>
              <li>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </li>
              <li>
                {" "}
                {project.vercel ? (
                  <a
                    href={project.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    live
                  </a>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </article>
        ))}
      </div>
      <p className={style.projectmessage}>
        Exciting Projects on the Way! 🚀 Stay tuned for more updates!
      </p>
    </section>
  );
}
