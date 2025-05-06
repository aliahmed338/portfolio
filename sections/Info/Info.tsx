import style from "./Info.module.scss";
import SkillsCard from "@/components/Info/SkillsCard/SkillsCard";
import UiuxCard from "@/components/Info/UiuxCard/UiuxCard";
import VideoCard from "@/components/Info/VideoCard/VideoCard";
export default function Info() {
  return (
    <div className={style.layoutuiux}>
      <UiuxCard />
      <SkillsCard />
      <VideoCard />
    </div>
  );
}
