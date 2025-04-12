import React, { useState } from "react";
import styles from "./HeaderStyles.module.css";
import moon from "../../assets/moon.svg"; // Ensure the path is correct
import sun from "../../assets/sun.svg"; // Ensure the path is correct

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>Donovan Delport</h1>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        </div>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "light" ? (
            <img src={sun} alt="Switch to dark mode" className={styles.themeIcon} />
          ) : (
            <img src={moon} alt="Switch to light mode" className={styles.themeIcon} />
          )}
        </button>
      </div>
      {isOpen && (
        <nav className={styles.navMenu}>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
