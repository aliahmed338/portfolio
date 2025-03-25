import { SOCIAL_MEDIA } from "../../data/data";
import Skill from "@/ui/Skill/Skill";
import "./ContactMe.css";
export default function ContactMe() {
  return (
    <div id="section-3" className="page">
      <h3>Contact Me</h3>
      <div className="social-layout">
        {SOCIAL_MEDIA.map((SOCIAL) => (
          <Skill href={SOCIAL.href} key={SOCIAL.name}>
            {SOCIAL.name}
          </Skill>
        ))}
      </div>
    </div>
  );
}
