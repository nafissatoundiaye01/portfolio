import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useState } from 'react'; 
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => {
  const [hovered, setHovered] = useState(false); 

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col
            ${hovered ? 'rotate-y-180' : ''} transition-transform duration-700`} 
          onMouseEnter={() => setHovered(true)} 
          onMouseLeave={() => setHovered(false)} 
        >
          <div className='front-side'>
            <img
              src={icon}
              alt='developpement'
              className='w-16 h-16 object-contain'
            />
            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h3>
          </div>
          <div className='back-side absolute inset-0 flex justify-center items-center bg-gray-800 opacity-90 rounded-[20px] text-white p-4'>
            <p className='text-center'>{description}</p> 
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Qui Suis-je ?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Je suis une développeuse spécialisée en développement mobile et web, avec une expérience solide en Dart, Java et JavaScript, ainsi qu’une expertise dans des frameworks variés tels que React, Node.js, Spring Boot, Java Spark, Angular, et Laravel. Je maîtrise également des bases de données comme MySQL, Oracle DB, PostgreSQL, ainsi que de nombreux autres langages et frameworks. Créative et efficace, je suis à l'écoute pour concevoir des solutions performantes, évolutives et adaptées aux besoins réels. Ensemble, donnons vie à vos projets !
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
