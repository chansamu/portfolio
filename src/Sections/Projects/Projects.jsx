import styles from './ProjectsStyles.module.css';
import alien from '../../assets/alien-invasion.png';
import api from '../../assets/api.png';
import portfolio from '/rainbow.png';
import langi from '../../assets/langi.png';
import ProjectCard from '../../Common/ProjectCard';

function project() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
            src={alien}
            link="https://github.com/chansamu/alien_invasions"
            h3="Alien Invasion"
            p="2D Game"
          />
        <ProjectCard
          src={api}
          link="https://cortex.marketplace.pan.dev/marketplace/details/Hoxhunt/"
          h3="Hoxhunt API"
          p="XSOAR Integration"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/chansamu/portfolio.git"
          h3="Portfolio"
          p="Personal Website"
        />
        <ProjectCard
          src={langi}
          link="https://www.figma.com/design/h3SROUQBoGgk0PcUbPlQz0/Langi-App?node-id=0-1&m=dev&t=w04kCGymvvaHdHYB-1"
          h3="Langi"
          p="Language App"
        />
      </div>
    </section>
  )
}

export default project