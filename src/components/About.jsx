import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AboutImg from "../assets/About.png";
import { ABOUT_TEXT } from "../constants";
import Resume from "../assets/NitinThakurResume.pdf";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="pb-4">
      <h2 className="my-16 text-4xl text-center text-white">
        About
        <span className="text-yellow-400"> Me </span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          ref={ref}
          className="w-full lg:w-1/2 lg:p-8"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center">
            <motion.img
              className="lg:w-[25rem]"
              src={AboutImg}
              alt=""
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center lg:justify-start">
            <motion.p
              className="max-w-xl px-2 py-6 my-2 font-light text-white lg:mt-[4rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
          <div className="flex justify-center mt-4 lg:justify-start">
            <motion.a
              href={Resume}
              download="resume.pdf"
              className="p-4 mx-2 font-bold text-black bg-yellow-400 rounded-md cursor-pointer hover:text-white hover:bg-yellow-600"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
