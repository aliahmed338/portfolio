import { SKILLS } from "@/data/data";
import Skill from "@/ui/Skill/Skill";
import style from "./SkillsCard.module.scss";

export default function SkillsCard() {
  return (
    <article className={style.Skillscard}>
      <h2>see some of my skills</h2>
      <ul className={style.Skillscontent}>
        {SKILLS.map((skill) => (
          <li className={style.list} key={skill.id}>
            <Skill>{skill.children}</Skill>
          </li>
        ))}
      </ul>
    </article>
  );
}
