import { EXPERIENCES } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="pb-4">
      <h2 className="my-16 text-4xl text-center text-white">Experience</h2>
      <div ref={ref}>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="flex flex-wrap mb-8 lg:justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-white">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-white">
                {experience.role} -{" "}
                <span className="text-sm text-white">
                  {" "}
                  {experience.company}{" "}
                </span>
              </h6>
              <p className="mb-4 font-light text-white">
                {experience.description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-2 mt-4 mr-4 text-sm font-bold text-black bg-yellow-400 rounded cursor-pointer hover:bg-yellow-600 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
