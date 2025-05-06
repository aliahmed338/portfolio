import { SOCIAL_MEDIA } from "../../data/data";
import Skill from "@/ui/Skill/Skill";
import style from "./ContactMe.module.scss";
export default function ContactMe() {
  return (
    <section id="contactme" className={style.page}>
      <h3>Contact Me</h3>
      <div className={style.sociallayout}>
        {SOCIAL_MEDIA.map((SOCIAL) => (
          <Skill href={SOCIAL.href} key={SOCIAL.name}>
            {SOCIAL.name}
          </Skill>
        ))}
      </div>
    </section>
  );
}
