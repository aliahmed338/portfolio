import style from "./AboutMe.module.scss";
import GameCard from "@/components/GameCard/GameCard";
import HelloCard from "@/components/HelloCard/HelloCard";
export default function AboutMe() {
  return (
    <div className={style.AboutMe}>
      <HelloCard />
      <GameCard />
    </div>
  );
}
