/* eslint-disable no-unused-vars */
import React from "react";
import ProjectCards from "../components/ProjectCards";
import BackButton from "../components/BackButton";
import { styles } from "../styles";

export default function Projects() {
  return (
    <>
      <BackButton />
      <div className="flex justify-center mb-5">
        <h1 className={`${styles.subTitle} mt-3`}>My projects</h1>
      </div>
      <ProjectCards />
    </>
  );
}
