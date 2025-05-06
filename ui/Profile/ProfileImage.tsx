import Image from "next/image";
import profileImage from "@/public/Ali.webp";
import style from "./ProfileImage.module.css";
export default function ProfileImage() {
  return (
    <div className={style.profile}>
      <Image src={profileImage} alt="Ali Image" />
    </div>
  );
}
