"use client";
import Image from "next/image";
import style from "./projectDetails.module.scss";
import { PROJECT_DETAILS } from "@/data/data";
import { useState } from "react";
import Skill from "@/ui/Skill/Skill";
import { notFound } from "next/navigation";

// Import the correct type for dynamic route params
import type { NextPage } from "next";

interface Params {
  name: string;
}

// Use NextPage with params type
const Page: NextPage<{ params: Params }> = ({ params }) => {
  const { name } = params;
  const project = PROJECT_DETAILS.find((p) => p.name === name);
  const [image, setImage] = useState(project?.images[0]?.src || "");

  // Handle case where project or images are not found
  if (!project || !project.images[0]) {
    notFound(); // Use Next.js's notFound() for 404 handling
  }

  return (
    <section className={style.projectDetails}>
      <div className={style.titlegithub}>
        <h1>{project.name}</h1>
        <ul className={style.gitvercel}>
          <li>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              github
            </a>
          </li>
          <li>
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
      </div>

      <div className={style.container}>
        <div className={style.imageContainer}>
          <Image
            src={image}
            alt={project.name}
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
            {project.images.map((image) => (
              <Image
                onClick={() => setImage(image.src)}
                key={image.src}
                src={image.src}
                alt="project image"
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

export default Page;
