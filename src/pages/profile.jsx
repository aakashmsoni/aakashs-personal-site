import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from '../styles/profile.module.css';

function Profile() {
  return (
    <section id="profile" className={styles.profile}>
        <div className={styles.profileText}>
          <h2>Aakash Soni</h2>
          <h3>Software Engineer</h3>
          <h3>Web Developer</h3>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/aakashmsoni/">
              <StaticImage src="../images/linkedin.png" alt="linkedin" className="icons" layout="constrained" style={{ width: "40px",
              height: "40px", margin: "10px", overflow: "visible" }}/>
            </a>
            <a href="https://www.github.com/aakashmsoni/">
              <StaticImage src="../images/github.png" alt="github" className="icons" layout="constrained" style={{ width: "40px",
              height: "40px", margin: "10px", overflow: "visible" }}/>
            </a>
          </div>
        </div>
        <div className={styles.profilePicContainer}>
        <StaticImage src="../images/profile_pic6.png" className="profile_pic" alt="pic" /> 
        </div>
      </section>
  )
}

export default Profile;