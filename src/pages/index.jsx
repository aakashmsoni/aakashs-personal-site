import * as React from "react"
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from '../styles/home.module.css'


function Index() {
  return (
    <Layout>
    <section className={styles.header}>
        <h2>
          Aakash Soni
        </h2>
        <StaticImage src="../images/profile_pic6.png" className="profile_pic" alt="pic" />
    </section>
    </Layout>
  )
}

export default Index

export const Head = () => <title>Aakash Soni</title>
