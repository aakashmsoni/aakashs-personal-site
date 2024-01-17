import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/home.module.css";

function Index() {
  return (
    <Layout>
      <section id="profile" className={styles.profile}>
        <div className={styles.profileText}>
          <h2>Aakash Soni</h2>
          <h3>Software Engineer</h3>
          <h3>Web Developer</h3>
        </div>
        <div className={styles.profilePicContainer}>
        <StaticImage src="../images/profile_pic6.png" className="profile_pic" alt="pic" /> 
        </div>
      </section>
    </Layout>
  );
}

export default Index;

export const Head = () => <title>Aakash Soni</title>;
