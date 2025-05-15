import AboutMe from "@/sections/AboutMe/AboutMe";
import ContactMe from "@/sections/ContactMe/ContactMe";
import Info from "@/sections/Info/Info";
import MyProjects from "@/sections/MyProjects/MyProjects";
import NavBar from "@/sections/NavBar/NavBar";
import UxCaseStudy from "@/sections/UxCaseStudy/UxCaseStudy";

export default function Home() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Info />
      <MyProjects />
      <UxCaseStudy />
      <ContactMe />
    </>
  );
}
