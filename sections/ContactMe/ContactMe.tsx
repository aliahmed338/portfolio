import { SOCIAL_MEDIA } from "../../data/data";
import Skill from "@/ui/Skill/Skill";
import style from "./ContactMe.module.scss";
export default function ContactMe() {
  return (
    <footer
      id="contactme"
      className={style.page}
      aria-label="Contact Me Section"
    >
      <h2>Contact Me</h2>
      <ul className={style.sociallayout}>
        {SOCIAL_MEDIA.map((SOCIAL) => (
          <li key={SOCIAL.name} className={style.list}>
            <Skill href={SOCIAL.href}>{SOCIAL.name}</Skill>
          </li>
        ))}
      </ul>
    </footer>
  );
}
