import * as React from "react"
import { Header } from "../components/Header";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

function Index() {
  return (
    <Layout>
    <div>
      <h1>
        Aakash Soni
      </h1>
      <StaticImage src="../images/profile_pic2.jpeg" />
    </div>
    </Layout>
  )
}

export default Index

export const Head = () => <title>Aakash Soni</title>
