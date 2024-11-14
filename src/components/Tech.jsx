import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Quelles sont mes compétences ?
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 pt-8">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="rounded-lg p-[2px] bg-gradient-to-b from-purple-800 to-transparent"
          >
            <div className="w-28 h-28 flex flex-col items-center justify-center bg-gray-900 rounded-lg shadow-md p-2">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-12 h-12"
              />
              <p className="text-white mt-2 text-sm text-center">
                {technology.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
