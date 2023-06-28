import React, { useEffect, useRef, useState } from "react";
import projects from "../data/projects.json";
import { FiChevronRight } from "react-icons/fi";

const Projects = () => {
  const [visibleProjectIndex, setVisibleProjectIndex] = useState<number>(-1);
  const projectsRef = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        const index = projectsRef.current.indexOf(target as HTMLLIElement);

        if (isIntersecting) {
          setVisibleProjectIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    projectsRef.current.forEach((project) => {
      if (project) {
        observer.observe(project);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section>
      <h2 className="mb-4">Projects</h2>
      <p className="mb-12">Some of the work I've done</p>
      <ul>
        {projects.map((project, index) => {
          const isActive = index === visibleProjectIndex;

          return (
            <li
              ref={(el) => (projectsRef.current[index] = el)}
              key={index}
              className={`text-white bg-black mb-16 transition-all duration-500 ${
                isActive
                  ? "border-2 border-primary"
                  : "border-0 border-transparent"
              }`}
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

              {/* These divs are for the glowing borders */}
              {/* <div
                className={`bg-primary h-1 absolute bottom-full ${
                  isActive ? "w-full" : "w-0"
                } transition-all duration-500`}
              ></div>
              <div
                className={`bg-orange-500 h-1 absolute top-full ${
                  isActive ? "w-full" : "w-0"
                } transition-all duration-500`}
              ></div>
              <div
                className={`bg-blue-500 w-1 absolute left-full ${
                  isActive ? "h-full" : "h-0"
                } transition-all duration-500`}
              ></div>
              <div
                className={`bg-purple-500 w-1 absolute right-full ${
                  isActive ? "h-full" : "h-0"
                } transition-all duration-500`}
              ></div> */}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
