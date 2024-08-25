import React, { useState } from 'react';
import styles from './NavbarStyles.module.css';
import logo from '/rainbow.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../Common/ThemeContext';

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? moon : sun;
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <span className={styles.title}>Portfolio</span>
            </div>
            <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
                <a href="#first">Main</a>
                <a href="#projects">Project</a>
                <a href="#skills">Skill</a>
                <a href="#contact">Contact</a>
            </div>
            <div className={styles.themeToggle}>
                <img 
                    src={themeIcon} 
                    alt="Toggle Theme" 
                    onClick={toggleTheme} 
                />
            </div>

            <div className={styles.hamburger} onClick={handleToggle}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </nav>
    );
}

export default Navbar;
