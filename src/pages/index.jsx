import * as React from "react"
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

function Index() {
  return (
    <Layout>
    <div>
      <h1>
        Aakash Soni
      </h1>
      <StaticImage src="../images/profile_pic3(ring).png" width={400}/>
    </div>
    </Layout>
  )
}

export default Index

export const Head = () => <title>Aakash Soni</title>
