import React from "react";
import { projectData } from "../data/ProjectData";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  height: 100vh;
  width: auto;
  background-color: #fff;
`;
const ProjectLink = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Projectsdata = styled.div``;
const Image = styled.img`
 height: 50vh;
 width: auto;
 cursor: pointer;
`;

const Projects = () => {
  return (
    <Section>
      <h1>Projects</h1>
      <Projectsdata>
        {projectData.map((item, index) => (
          <ProjectLink key={index}>
            <Image src={item.image} to={item.link}/>
            <p>{item.title}</p>
          </ProjectLink>
        ))}
      </Projectsdata>
    </Section>
  );
};

export default Projects;
