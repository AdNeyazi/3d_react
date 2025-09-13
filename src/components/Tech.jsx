import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tools
        </h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-4'>
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className='bg-tertiary p-3 rounded-xl flex items-center justify-center'
          style={{ height: '5rem', width: '5rem' }}
          title={technology.name}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className='object-contain'
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");