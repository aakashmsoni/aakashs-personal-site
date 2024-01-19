import * as React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/projects.module.css"
import { graphql } from 'gatsby'


function Projects({ data }) {
  const projects = data.projects.nodes
  console.log(projects)

 

  return (
    <Layout>
      <section id="projects">
      <div className={styles.portfolio}>  
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => {
            if(project.frontmatter.type.includes('project')) {
              return (
              <div key={project.id}>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
                <a href={project.frontmatter.github.frontend}>
                  <button value="Github">Github</button>
                </a>
              </div>
              )} else {
                return null
              }})}
        </div>
      </div>
      </section>
    </Layout>
  )
}
export default Projects;

export const query = graphql`
query ProjectsQuery {
  projects: allMarkdownRemark {
    nodes {
      frontmatter {
        title
        stack
        slug
        github {
          frontend
          backend
        }
        type
      }
      id
    }
  }
}
`