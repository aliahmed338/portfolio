import { SKILLS } from "@/data/data";
import Skill from "@/ui/Skill/Skill";
import "./SkillsCard.css";

export default function SkillsCard() {
  return (
    <div className="Skills-card">
      <h3>see some of my skills</h3>
      <div className="Skills-content">
        {SKILLS.map((skill) => (
          <Skill key={skill.id}>{skill.children}</Skill>
        ))}
      </div>
    </div>
  );
}
