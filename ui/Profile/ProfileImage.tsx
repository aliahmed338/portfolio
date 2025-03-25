import Image from "next/image";
import profileImage from "@/public/Ali.png";
import "./ProfileImage.css";
export default function ProfileImage() {
  return (
    <div className="profile">
      <Image src={profileImage} alt="Ali Image" />
    </div>
  );
}
