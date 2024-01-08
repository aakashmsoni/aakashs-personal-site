import * as React from "react"
import { Header } from "./header";
import Layout from "../components/Layout";

function Index() {
  return (
    <Layout>
    <div>
      <Header />
      <h1>
        Aakash Soni
      </h1>
    </div>
    </Layout>
  )
}

export default Index

export const Head = () => <title>Aakash Soni</title>
