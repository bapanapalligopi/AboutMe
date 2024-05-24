import Aboutcertifications from "./Aboutcertifications";
import Aboutsection from "./Aboutsection";
import styles from "./about.module.css";
import about from "../images/about.png";
import theme from "../assets/theme_pattern.svg";
export default function About() {
  return (
    <div className={`container ${styles.aboutcontainer}`} id="aboutsec">
      <div className={styles.aboutheading}>
        <h1>About Me</h1>
      </div>
      <div className={styles.about}>
        <div className={styles.imageandtheory}>
          <div className={styles.aboutimage}>
            <img src={about} alt="aboutphoto" className={styles.aboutphoto} />
          </div>
          <div className={styles.abouttheory}>
            <Aboutsection />
            <Aboutcertifications />
          </div>
        </div>
      </div>
    </div>
  );
}
