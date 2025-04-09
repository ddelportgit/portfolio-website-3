import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://www.github.com"
          name="Viberr"
          description="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://www.github.com"
          name="Fresh Burger"
          description="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://www.github.com"
          name="Hipsster"
          description="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://www.github.com"
          name="FitLift"
          description="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
