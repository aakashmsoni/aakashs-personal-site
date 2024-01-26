import * as React from "react";
import Layout from "../components/Layout";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Profile from "./profile";
import "../styles/index.css"

function Index() {
  return (
    <Layout>
      <Profile id="profile" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
    </Layout>
  );
}

export default Index;

export const Head = () => <title>Aakash Soni</title>;
