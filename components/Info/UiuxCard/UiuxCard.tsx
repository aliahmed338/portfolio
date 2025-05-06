import style from "./UiuxCard.module.scss";

export default function UiuxCard() {
  return (
    <div className={style.carduiux}>
      <h3>What I Do</h3>
      <p>
        I’m a Front-End Developer specializing in React.js, working with both
        TypeScript and JavaScript to build dynamic and interactive web
        applications. I focus on creating smooth, responsive, and
        high-performing user interfaces. Beyond coding,
        <br />
        <br />I have a strong passion for UI/UX design. I’ve worked on case
        studies to craft meaningful user experiences, from research to
        prototyping, ensuring intuitive and visually appealing interfaces. My
        goal is to merge design and development to create seamless digital
        experiences. You can check out my work on{" "}
        <a href={"https://www.behance.net/3ea1f0ee"} target="_blank">
          Behance
        </a>
      </p>
    </div>
  );
}
