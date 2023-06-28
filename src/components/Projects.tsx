import projects from "../data/projects.json";
import { FiChevronRight } from "react-icons/fi";

const Projects = () => {
  return (
    <section>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="text-white border-2 border-primary mb-6">
            <img src={project.imgUrl} alt="" />
            <div className="px-3 py-4 space-y-4">
              <h3>{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <p className="flex items-center justify-between w-1/2">
                View project
                <FiChevronRight />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
