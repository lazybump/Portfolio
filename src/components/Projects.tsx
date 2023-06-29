import React, { useEffect, useRef, useState } from "react";
import projects from "../data/projects.json";
import { FiChevronRight } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="py-12">
      <h2 className="mb-4 text-white text-4xl">Projects</h2>
      <p className="mb-12 text-gray-400">Some of the work I've done</p>
      <ul className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => {
          return (
            <li
              key={index}
              className="text-white bg-black transition-all duration-500 border-2 border-primary relative"
            >
              <img src={project.imgUrl} alt={project.title} />
              <div className="px-3 py-4 space-y-4">
                <h3>{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <p className="flex items-center justify-between w-1/2">
                  View project
                  <FiChevronRight />
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
