import { useState } from "react";

import { ShowProject } from "./ShowProject";
import { data } from "../dataProjects";
import { motion } from "framer-motion";

export function Table() {
  const [isHovered, setIsHovered] = useState(false);
  const [imageProject, setImageProject] = useState("");
  const [background, setBackground] = useState("")

  return (
    <ul
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className="table-project"
    >
    <ShowProject 
    className={isHovered ? "hovered" : "no-hovered"} 
    img={imageProject}
    background={background}
    desktop={true}
    />
      {data.map((project, index) => {
        return (
          <motion.li
            initial={{padding: `0 7%`}}
            whileHover={{padding: "0 3%"}}
            key={index} 
            onMouseEnter={() => {
            setImageProject(project.img)
            setBackground(project.background)
          }}
          >
            <a href={project.src} className="project-link" target="_blank">
              <div className="project-container">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
}