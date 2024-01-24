import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/home.module.css";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";

function Index() {
  return (
    <Layout>
      <section id="profile" className={styles.profile}>
        <div className={styles.profileText}>
          <h2>Aakash Soni</h2>
          <h3>Software Engineer</h3>
          <h3>Web Developer</h3>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/aakashmsoni/">
              <StaticImage src="../images/linkedin.png" alt="linkedin" className="icons" />
            </a>
            <a href="https://www.github.com/aakashmsoni/">
              <StaticImage src="../images/github.png" alt="linkedin" className="icons" />
            </a>
          </div>
        </div>
        <div className={styles.profilePicContainer}>
        <StaticImage src="../images/profile_pic6.png" className="profile_pic" alt="pic" /> 
        </div>
      </section>
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
    </Layout>
  );
}

export default Index;

export const Head = () => <title>Aakash Soni</title>;
