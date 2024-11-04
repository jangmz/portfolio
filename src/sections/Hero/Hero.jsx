import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import gitHubLight from "../../assets/github-light.svg";
import gitHubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
    // theme toggler
    const { theme, toggleTheme } = useTheme();

    // icons for light and dark theme
    const themeIcon = theme === "light" ? sun : moon;
    const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;
    const gitHubIcon = theme === "light" ? gitHubLight : gitHubDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img src={heroImg} alt="Profile picture of Jan Jankovič" className={styles.hero}/>
                <img src={themeIcon} alt="Color mode icon" className={styles.colorMode} onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h1>First <br /> Last</h1>
                <h2>Full Stack Developer</h2>
                <span>
                    <a href="https://linkedin.com/" target="_blank">
                        <img src={linkedInIcon} alt="LinkedIn icon" />
                    </a>
                    <a href="https://github.com/" target="_blank">
                        <img src={gitHubIcon} alt="GitHub icon" />
                    </a>
                </span>
                <p>
                    Something you are passionate about and that motivates you.
                </p>
                <a href={CV} target="_blank">
                    <button className="hover">View CV</button>
                </a>
            </div>
        </section>
    )
}

export default Hero;