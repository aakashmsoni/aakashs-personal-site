import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "../styles/skills.module.css"
import Img from "gatsby-image"

function Skills() {
  const data = useStaticQuery(graphql`
  query SkillsQuery {
    skills: allMarkdownRemark(filter: {frontmatter: {type: {in: "skill"}}}) {
      nodes {
        frontmatter {
          type
          skills {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            language
          }
        }
      }
    }
  }`)
  
  const skills = data.skills.nodes[0].frontmatter.skills
  console.log(skills)

  return (
    <section id="skills" className={styles.skillsection}>
      <h1>Here are my skills</h1>

      <div className={styles.box}>
        <div className={styles.btn}>
          <span>HOVER ME</span>
        </div>
      </div>


      <div className={styles.skillgrid}>
        {skills.map(skill => (
          <div key={skill.language} className={styles.banner}>
            <Img fluid={skill.image.childImageSharp.fluid} className={styles.image} />
            <h3>{skill.language}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills;

