"use client";

import React, { useState } from "react";
import Image from "next/image";
import style from "./projectDetails.module.scss";
import Skill from "@/ui/Skill/Skill";
import type { Project } from "@/interface/Interface"; // Update path if needed

type Props = {
  project: Project;
};

const ProjectDetails: React.FC<Props> = ({ project }) => {
  const [image, setImage] = useState<string>(project?.images[0]?.src || "");

  return (
    <section className={style.projectDetails}>
      <div className={style.titlegithub}>
        <h1>{project.name}</h1>
        <ul className={style.gitvercel}>
          {project.github && (
            <li>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </li>
          )}

          {project.vercel && (
            <li>
              <a
                href={project.vercel}
                target="_blank"
                rel="noopener noreferrer"
              >
                live
              </a>
            </li>
          )}
        </ul>
      </div>

      <div className={style.container}>
        <div className={style.imageContainer}>
          <Image
            src={image}
            alt={project.name}
            layout="responsive"
            width={400}
            height={400}
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            loading="lazy"
          />
        </div>

        <div className={style.containerinfo}>
          <div className={style.images}>
            {project.images.map((img) => (
              <Image
                onClick={() => setImage(img.src)}
                key={img.src}
                src={img.src}
                alt={img.alt ?? "project image"}
                width={92}
                height={80}
                style={{ objectFit: "cover", cursor: "pointer" }}
                loading="lazy"
              />
            ))}
          </div>
          <div className={style.tech}>
            <ul className={style.Skillscontent}>
              {project.tech.map((tech) => (
                <li className={style.list} key={tech}>
                  <Skill>{tech}</Skill>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={style.description}>
        <article className={style.descriptioncontent}>
          <h2 className={style.projecttitle}>Description</h2>
          <p>{project.description}</p>
        </article>
      </div>
    </section>
  );
};

export default ProjectDetails;
