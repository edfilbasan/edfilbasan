import React from "react";
import OrangeHeader from "./OrangeHeader.js";
import ProjectCard from "./ProjectCard.js";

const projectGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  marginTop: "0px",
  marginBottom: "8px",
  rowGap: "16px",
  columnGap: "16px"
};

const viewProjects = {
  color: "#CC0000",
  marginLeft: "auto",
  textAlign: "right"
};

const projects = {
  "Google UI": ["Google Project", "http://tinyurl.com/y636zf9o"],
  Blastars: ["Blastars Project", "http://tinyurl.com/y6szejuu"],
  "Look Around": ["Look Around Project", "http://tinyurl.com/y4hb73kj"],
  "Daily UI": ["Daily UI Challenge Project", "http://tinyurl.com/yy5kotmc"],
  Upcomer: ["Upcomer Project", "http://tinyurl.com/yy5kotmc"],
  Warmer: ["Warmer Project", "http://tinyurl.com/y4ds8v8l"],
  Myspace: [
    "Myspace Project",
    "https://www.hypebot.com/.a/6a00d83451b36c69e201bb08985ade970d-800wi"
  ],
  Vermeer: ["Vermeer", "https://bit.ly/2X8M9td"]
};

const Projects = () => {
  return (
    <div className="orangeContentContainer">
      <OrangeHeader> Edfil's Top 8 Projects</OrangeHeader>
      <pre className="strongRedGroup">
        <strong>Edfil has </strong> <p className="redNumber">8</p>
        <strong> projects.</strong>
      </pre>
      <div style={projectGrid}>
        {Object.keys(projects).map((key, i) => {
          return (
            <ProjectCard
              key={i}
              title={key}
              alt={Object.values(projects)[i][0]}
              src={Object.values(projects)[i][1]}
            />
          );
        })}
      </div>

      <a
        href="https://www.edfilbasan.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ float: "right" }}
      >
        <strong style={viewProjects}> View All of Edfil 's Projects</strong>
      </a>
    </div>
  );
};

export default Projects;