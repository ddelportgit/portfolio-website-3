import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.smallTitle}>Get in Touch</h2>
        <h1 className={styles.largeTitle}>Let's Build Something Together</h1>
        <p className={styles.description}>
          I would love for you to contact me and connect. Whether you have a project in mind or just
          want to chat, feel free to reach out!
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:your-email@example.com" className={styles.button}>
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
