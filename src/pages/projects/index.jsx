import * as React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/projects.module.css"
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

function Projects({ data }) {
  console.log(data)
  const projects = data.projects.nodes

  return (
    <Layout>
      <div className={styles.portfolio}>  
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link className="link" to={"/projects" + project.frontmatter.slug} key={project.id}>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export default Projects;

export const query = graphql`
query MyQuery {
  projects: allMarkdownRemark {
    nodes {
      frontmatter {
        title
        stack
        slug
      }
      id
    }
  }
}
`