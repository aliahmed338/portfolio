import "./Info.css";
import SkillsCard from "@/components/Info/SkillsCard/SkillsCard";
import UiuxCard from "@/components/Info/UiuxCard/UiuxCard";
import VideoCard from "@/components/Info/VideoCard/VideoCard";
export default function Info() {
  return (
    <div className="layout-uiux">
      <UiuxCard />
      <SkillsCard />
      <VideoCard />
    </div>
  );
}
