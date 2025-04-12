import styles from "./HeroStyles.module.css";
import CV from "../../assets/cv.pdf";
import { useEffect, useState } from "react";

function Hero() {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={`${styles.container} ${styles.hero}`}>
      <div className={styles.notification}>
        <div className={`${styles.blinkingLight} ${isBlinking ? styles.blink : ""}`}></div>
        <span>Available for opportunities</span>
      </div>
      <div className={styles.info}>
        <h1>
          Hi I'm Donovan - <br /> a front-end developer.
        </h1>
        <p className={styles.description}>
          With a passion for developing websites, I enjoy coding and designing user-friendly
          interfaces that enhance the online experience.
        </p>
        <div className={styles.buttonContainer}>
          <a href="#projects">
            <button className="hover">View Projects</button>
          </a>
          <a href={CV} download>
            <button className="hover">Download Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
