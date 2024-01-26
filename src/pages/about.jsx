import * as React from "react";
import * as styles from "../styles/about.module.css";

function About () {
  return (
    <section id="about" >
      <div className={styles.about}>
        <h2>About Me</h2>
        <div className={styles.descriptionContainer}>
        <p> I'm a Software Engineer based out of Chicago and a graduate of Actualize Coding Bootcamp. I began learning about code at a young age but it wasn't until recently that I decided to develop my passion into a career in technology. I've always had an affinity for problem-solving and there's no better feeling than when a solution comes together! My motto is that every new problem leads to a new lesson and I love applying those lessons in my personal projects.</p><br />
        <p>When I'm not coding, you can find me playing volleyball (indoor and beach), snowboarding in Wisconsin or camping out under the stars. I'm a big sports fan and after having been to championship parades for both the Cubs and the Blackhawks, I'm hoping the next one will be for the Chicago Bulls 🤞</p>
        </div>
      </div>
    </section>
  )
}

export default About;