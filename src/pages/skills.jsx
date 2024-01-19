import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import * as styles from "../styles/skills.module.css"
import { StaticImage } from "gatsby-plugin-image";
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
    <section id="skills" className={styles.skill}>
      <div>
        <h1>Here are my skills</h1>
        {skills.map(skill => (
          <div key={skill.language}>
            <h3>{skill.language}</h3>
            <Img fluid={skill.image.childImageSharp.fluid} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills;

