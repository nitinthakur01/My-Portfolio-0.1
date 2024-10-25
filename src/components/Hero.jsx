import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants/index";
import ProfilePic from "../assets/Profile.png";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-32">
      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div
          className="order-1 w-full lg:mt-0 lg:w-1/2 lg:p-8 lg:order-2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center">
            <motion.img
              className="h-[20rem] lg:h-[25rem] w-[30rem]"
              src={ProfilePic}
              alt="Profile Picture"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>
        <motion.div
          className="order-2 w-full lg:w-1/2 lg:order-1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              className="pb-8 text-3xl font-thin tracking-tight text-white lg:ml-4 lg:mt-16 lg:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Nitin Thakur
            </motion.h1>
            <motion.span
              className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 bg-clip-text lg:ml-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Mern Stack Developer
            </motion.span>
            <motion.p
              className="max-w-xl px-2 py-6 mx-1 my-2 font-light text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
