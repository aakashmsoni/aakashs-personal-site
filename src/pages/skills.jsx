import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

function Skills() {
  const data = useStaticQuery(graphql`
  query SkillsQuery {
    skills: allMarkdownRemark(filter: {frontmatter: {type: {in: "skill"}}}) {
      nodes {
        frontmatter {
          type
          skills
        }
      }
    }
  }`)
  
  const skills = data.skills.nodes[0].frontmatter.skills
  console.log(skills)

  return (
    <section id="skills">
      <div>
        <p>Here are my skills</p>
        {skills.map(skill => (
          <div key={skill}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills;

