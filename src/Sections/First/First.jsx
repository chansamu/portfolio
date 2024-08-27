import styles from './FirstStyle.module.css';
import profilePhoto from '../../assets/Image.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import phoneLight from '../../assets/phone-light.svg';
import phoneDark from '../../assets/phone-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../Common/ThemeContext';


function First() {
    const { theme, toggleTheme } = useTheme();

    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const phoneIcon = theme === 'light' ? phoneLight : phoneDark;

    return (
        <section id='first' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.first}
                    src={profilePhoto}
                    alt="Profile picture" 
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Sam U Chan
                </h1>
                <h2>Aspiring Developer</h2>
                <span>
                    <a href="https://github.com/chansamu" target="_blank">
                        <img src={githubIcon} alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/sam-u-chan-471697248" target="_blank">
                        <img src={linkedinIcon} alt="linkedIn icon" />
                    </a>
                    <a href="#footer">
                        <img src={phoneIcon} alt="phone icon" />
                    </a>
                </span>
                <p className={styles.description}>
                Committed to mastering software development with a focus on creating user-friendly solutions.
                </p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}

export default First;