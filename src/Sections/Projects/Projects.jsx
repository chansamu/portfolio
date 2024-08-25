import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function project() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
            src={viberr}
            link="https://github.com/chansamu/alien_invasions"
            h3="Alien Invasion"
            p="2D Game"
          />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/chansamu/alien_invasions"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/chansamu/alien_invasions"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://www.figma.com/design/h3SROUQBoGgk0PcUbPlQz0/Langi-App?node-id=0-1&m=dev&t=w04kCGymvvaHdHYB-1"
          h3="Langi"
          p="Language App"
        />
      </div>
    </section>
  )
}

export default project