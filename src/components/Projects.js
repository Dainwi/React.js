import React from "react";
import { projectData } from "../data/ProjectData";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
//   color: #fff;
  height: 100vh;
  width: auto;
  background-color: #fff;
`;
const ProjectData = styled.div`
 display: flex;
 flex-wrap: wrap;
`;
const Projectsdata = styled.div``;

const Projects = () => {
  return (
    <Section>
      <h1>Projects</h1>
      <Projectsdata>
        {projectData.map((item, index) => (
          <ProjectData key={index}>{item.title}</ProjectData>
        ))}
      </Projectsdata>
    </Section>
  );
};

export default Projects;
