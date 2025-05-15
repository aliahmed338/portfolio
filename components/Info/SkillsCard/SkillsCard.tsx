import { SKILLS } from "@/data/data";
import Skill from "@/ui/Skill/Skill";
import style from "./SkillsCard.module.scss";

export default function SkillsCard() {
  return (
    <article className={style.Skillscard}>
      <h2>see some of my skills</h2>
      <div className={style.Skillscontent}>
        {SKILLS.map((skill) => (
          <Skill key={skill.id}>{skill.children}</Skill>
        ))}
      </div>
    </article>
  );
}
