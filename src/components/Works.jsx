import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { loupe } from "../assets";
import { fadeIn } from "../utils/motion";
import { projects } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({
  index,
  name,
  description,
  date,
  tags,
  image,
  realisation,
  video_link,  
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Modal pour video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative w-[80%] max-w-[800px] h-[450px] p-5 bg-white rounded-lg flex flex-col justify-center items-center">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-[red] text-2xl"
            >
              &times;
            </button>
            <video
              className="w-full h-full rounded-lg"
              controls
              controlsList="nodownload" 
              src={video_link}
            >
              Votre navigateur ne prend pas en charge la lecture de vidéos.
            </video>
          </div>
        </div>
      )}

      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full"
        >
          <div
            className="relative w-full h-[230px]"
            onClick={openModal} 
          >
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl cursor-pointer" 
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
                <img
                  src={loupe}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
            <p className="mt-2 text-secondary text-[14px]"><strong>{date}</strong></p>
            <p className="mt-2 text-secondary text-[14px]">
              <strong>Participation : </strong>
              {realisation}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};



const Works = () => {
  return (
    <>
      <motion.div variants={fadeIn()}>
        <p className={styles.sectionSubText}>Mes travaux</p>
        <h2 className={styles.sectionHeadText}>Projets.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Les projets présentés ci-dessous illustrent mes compétences et mon expertise à travers des exemples pratiques de mon travail. Ils démontrent ma capacité à résoudre des défis complexes, à utiliser diverses technologies et à gérer efficacement des projets.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
