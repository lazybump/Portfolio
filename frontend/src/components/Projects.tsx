import data from "../data.json";
import { FiChevronRight } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="py-16 lg:py-28" id="Projects">
      <h2 className="text-white text-3xl md:text-4xl">Projects</h2>
      <p className="text-gray-400 mt-4 mb-8 lg:text-lg">
        Some of the work I've done
      </p>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {data.projects.map((project) => (
          <li className="relative" key={project.id}>
            <div className="absolute inset-0 border-4 border-primary blur-sm"></div>
            <div className="border-2 border-primary flex flex-col max-w-[280px] relative h-full bg-background">
              <img
                src={project.imgUrl}
                alt={project.title}
                className="w-full h-40 object-cover object-top grayscale-[50%]"
              />
              <div className="p-4 grow flex flex-col items-start">
                <h3 className="text-white">{project.title}</h3>
                <p className="text-gray-400 mt-3 grow">{project.description}</p>
                <a
                  href={project.siteUrl}
                  className="inline-flex items-center text-sm text-white mt-6 hover:text-primary duration-200"
                >
                  View project
                  <FiChevronRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
