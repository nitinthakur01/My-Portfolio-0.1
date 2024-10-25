import { useState, useRef } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMongoose,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";

const technologies = {
  frontend: [
    {
      icon: <FaJs size={48} color="#F7DF1E" />,
      name: "JavaScript",
    },
    {
      icon: <FaReact size={48} color="#61DBFB" />,
      name: "React",
    },
    {
      icon: <TbBrandRedux size={48} color="#7952B3" />,
      name: "Redux",
    },
    {
      icon: <SiTailwindcss size={48} color="#38B2AC" />,
      name: "Tailwind",
    },

    {
      icon: <FaHtml5 size={48} color="#E34F26" />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt size={48} color="#1572B6" />,
      name: "CSS3",
    },
  ],
  backend: [
    {
      icon: <FaNodeJs size={48} color="#68A063" />,
      name: "Node.js",
    },
    {
      icon: <SiExpress size={48} color="#FFFF00" />,
      name: "Express",
    },
  ],
  databases: [
    {
      icon: <SiMongodb size={48} color="#4DB33D" />,
      name: "MongoDB",
    },
    {
      icon: <SiMongoose size={48} color="#8B0000" />,
      name: "Mongoose",
    },
  ],
};

const WebTechnologies = () => {
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const renderTechnologies = () => {
    return technologies[selectedCategory].map((tech, index) => (
      <motion.div
        key={index}
        className="p-6 m-6 w-[6rem] rounded-lg shadow-md flex flex-col items-center transition duration-300 transform hover:shadow-2xl hover:shadow-yellow-400"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: index * 0.1 }}
      >
        <div className="mb-4">{tech.icon}</div>
        <div className="text-lg font-semibold text-center text-white">
          {tech.name}
        </div>
      </motion.div>
    ));
  };

  return (
    <div className="container py-8 mx-auto">
      <h2 className="my-8 text-4xl text-center text-white">
        Technologies
        <span className="text-yellow-400"> Known </span>
      </h2>
      <div className="flex justify-center mb-12">
        <button
          onClick={() => setSelectedCategory("frontend")}
          className="p-4 mx-2 font-bold text-black bg-yellow-400 rounded-md cursor-pointer hover:text-white hover:bg-yellow-600"
        >
          Frontend
        </button>
        <button
          onClick={() => setSelectedCategory("backend")}
          className="p-4 mx-2 font-bold text-black bg-yellow-400 rounded-md cursor-pointer hover:text-white hover:bg-yellow-600"
        >
          Backend
        </button>
        <button
          onClick={() => setSelectedCategory("databases")}
          className="p-4 mx-2 font-bold text-black bg-yellow-400 rounded-md cursor-pointer hover:text-white hover:bg-yellow-600"
        >
          Database
        </button>
      </div>
      <div ref={ref} className="flex flex-wrap justify-center gap-6">
        {renderTechnologies()}
      </div>
    </div>
  );
};

export default WebTechnologies;
