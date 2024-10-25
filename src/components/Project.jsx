import { PROJECTS } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="pb-4">
      <h2 className="my-16 text-4xl text-center text-white">Projects</h2>
      <div ref={ref}>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-wrap mb-8 lg:justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt="projectimg"
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl text-white lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 font-light">{project.description}</p>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 mr-2 font-bold text-black bg-yellow-400 rounded-md cursor-pointer hover:text-white hover:bg-yellow-600"
              >
                Source Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 ml-2 font-bold text-black bg-yellow-400 rounded-md cursor-pointer hover:text-white hover:bg-yellow-600"
              >
                View Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
