/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCards from "../components/ProjectCards";
import { styles } from "../styles";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className={`${styles.subTitle} mt-6 mb-6 ml-5`}>My projects</h1>
      <ProjectCards />
    </div>
  );
}
