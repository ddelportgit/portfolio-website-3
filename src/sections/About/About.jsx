import styles from "./AboutStyles.module.css";

function About() {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.smallTitle}>About Me</h2>
      <h1 className={styles.largeTitle}>The Person Behind the Code</h1>
      <p className={styles.description}>
        I am a passionate front-end developer with a love for creating beautiful and functional user
        experiences. With a strong foundation in HTML, CSS, and JavaScript, I enjoy turning ideas
        into reality and building responsive, user-friendly websites. I thrive on challenges and am
        always eager to learn new technologies and improve my skills.
      </p>
    </section>
  );
}

export default About;
