import "./AboutMe.css";
import GameCard from "@/components/GameCard/GameCard";
import HelloCard from "@/components/HelloCard/HelloCard";
export default function AboutMe() {
  return (
    <div className="AboutMe">
      <HelloCard />
      <GameCard />
    </div>
  );
}
