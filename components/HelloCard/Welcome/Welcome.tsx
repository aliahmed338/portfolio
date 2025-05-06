import ProfileImage from "@/ui/Profile/ProfileImage";
import style from "./Welcome.module.scss";
export default function Welcome() {
  return (
    <div className={style.profilecontent}>
      <h1>Hi there! I&rsquo;m Ali.</h1>
      <ProfileImage />
    </div>
  );
}
