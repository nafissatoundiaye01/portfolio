import React, { useState, useEffect } from "react";
import { projects } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";


const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = () => setMatches(media.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

// Composant ProjectCard
const ProjectCard = ({
  name,
  description,
  date,
  image,
  realisation,
  tags,
  video_link,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Désactiver le scroll du body quand le modal est ouvert
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Empêche le scroll
    } else {
      document.body.style.overflow = ""; // Réactive le scroll
    }

    return () => {
      document.body.style.overflow = ""; // Nettoyage au démontage du composant
    };
  }, [isModalOpen]);

  return (
    <div className="w-full bg-tertiary p-4 rounded-lg shadow-md">
      <div className="w-full h-48 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover cursor-pointer"
          onClick={openModal} // Ouvrir le modal lors du clic
        />
      </div>

      <h3 className="text-white text-[20px] mt-4 font-bold">{name}</h3>
      <p className="text-gray-300 mt-2 text-sm">{description}</p>
      <p className="text-gray-300 mt-2 text-sm">
        <strong>Date :</strong> {date}
      </p>
      <p className="text-gray-300 mt-2 text-sm">
        <strong>Participation :</strong> {realisation}
      </p>

      <div className="flex flex-wrap mt-3 gap-2">
        {tags.map((tag, index) => (
          <span
            key={`${name}-tag-${index}`}
            className={`text-sm ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>

      {/* Modal pour la vidéo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Conteneur du modal */}
          <div className="relative w-[90%] max-w-[800px] h-auto p-5 bg-white rounded-lg flex flex-col justify-center items-center shadow-lg">
            {/* Bouton pour fermer */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-[red] text-2xl"
            >
              &times;
            </button>

            {/* Vidéo */}
            <video
              className="w-full max-h-[400px] rounded-lg"
              controls
              controlsList="nodownload"
              src={video_link}
            >
              Votre navigateur ne prend pas en charge la lecture de vidéos.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

// Composant Works
const Works = () => {
  
  return (
    <div className="w-full">
      <p className={styles.sectionSubText}>Mes travaux</p>
      <h2 className={styles.sectionHeadText}>Projets.</h2>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
          Les projets présentés ci-dessous illustrent mes compétences et mon
          expertise à travers des exemples pratiques de mon travail. Ils
          démontrent ma capacité à résoudre des défis complexes, à utiliser
          diverses technologies et à gérer efficacement des projets.
        </p>
      </div>


      {/* Conteneur principal */}
      <div className="flex flex-col gap-6 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
