import { SOCIAL_MEDIA } from "../../data/data";
import Skill from "@/ui/Skill/Skill";
import style from "./ContactMe.module.scss";
export default function ContactMe() {
  return (
    <footer id="contactme" className={style.page}>
      <h2>Contact Me</h2>
      <div className={style.sociallayout}>
        {SOCIAL_MEDIA.map((SOCIAL) => (
          <Skill href={SOCIAL.href} key={SOCIAL.name}>
            {SOCIAL.name}
          </Skill>
        ))}
      </div>
    </footer>
  );
}
