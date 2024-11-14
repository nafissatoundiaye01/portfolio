import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
 
  php,
  angular,
  laravel,
  langageC,
  cpp,
  qt,
  python,
  django,
  mysql,
  oracle,
  postgresql,
  sqlite,
  java,
  flutter,
  spark,
  springboot,
  kotlin,
  kerjeex,
  mastercloud,
  shopping,
  cafetariat,
  sante,
  shoppingVideo,
  mastercloudVideo,
  cafetariatVideo,
  medicVideo,
  biblioVidéo
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "À Propos",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeuse Web",
    icon: web,
    description: "Développeuse web spécialisée dans la création de sites dynamiques."
  },
  {
    title: "Développeuse Mobile",
    icon: mobile,
    description: "Développeuse mobile experte dans la création d'applications Android et iOS."
  },
  {
    title: "Développeuse Backend",
    icon: backend,
    description: "Développeuse backend, compétente en gestion des bases de données et API."
  },
  {
    title: "Développeuse Frontend",
    icon: creator,
    description: "Développeuse frontend, passionnée par les interfaces utilisateur captivantes."
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Oracle DB",
    icon: oracle,
  },
  {
    name: "PostGreSQL",
    icon: postgresql,
  },
  {
    name: "SQLite",
    icon: sqlite,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Java Spark",
    icon: spark,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaEE",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "C",
    icon: langageC,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Qt",
    icon: qt,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
];





const projects = [
  {
    name: "Bibliothèque Kërjeex",
    description:
"Application desktop qui permet aux utilisateurs autorisés d'une bibliothèque de gérer efficacement les emprunts, les membres inscrits, ainsi que les livres en stock. Elle offre également une vue d'ensemble détaillée de l'ensemble de la structure, facilitant ainsi le suivi des ressources et des activités quotidiennes au sein de la bibliothèque. Grâce à son interface intuitive, les gestionnaires peuvent facilement accéder aux informations essentielles pour assurer une gestion fluide et organisée de l'établissement.",    realisation: "Tout",
    date : "Août 2024",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "Qt",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: kerjeex,
    video_link: biblioVidéo,
  },
  {
    name: "Gestion de rendez-vous et dossiers médicaux",
    description:
      "Projet en équipe: plateforme composée d'une application mobile destinée aux patients pour qu'ils puissent prendre rendez-vous directement au niveau de la structure de santé souhaitée, communiquer avec celle-ci, voir ses rendez-vous à venir ou encore voir les détails des différents établissements et d'une application web qui permet aux médecins de suivre leurs patients et leur planning, aux secrétaires de gérer les informations et rendez-vous de leur établissement, tout cela superviser par un administrateur pour une bonne gestion de l'utilisation de la plateforme.",
      date : "Novembre 2023",
      realisation: "Frontend Mobile , Backend Mobile et Web, Intégration APIs",
      tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "java spark",
        color: "pink-text-gradient",
      },
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
    ],
    image: sante,
    video_link: medicVideo,
  },
  {
    name: "Cafétariat en ligne",
    description:
      "Projet en équipe: plateforme composée d'une application mobile destinée aux étudiants pour qu'ils puissent passer leurs commandes à la cafétariat de leur université depuis leur smartphone et d'une application desktop qui permet aux managers de la cafétariat de gérer les commandes et leurs stocks.",
      realisation: "Frontend Mobile , Backend Mobile et Desktop, Intégration APIs",
      date : "Juillet 2023",
      tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "java spark",
        color: "pink-text-gradient",
      },
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "sceneBuilder",
        color: "pink-text-gradient",
      },
      {
        name: "visualSC",
        color: "blue-text-gradient",
      },
      {
        name: "javafx",
        color: "green-text-gradient",
      },
    ],
    image: cafetariat,
    video_link: cafetariatVideo,
  },
  
  {
    name: "MasterCloud",
    description:
    "Petite application mobile permettant de connaitre la météo en temps réel de 5 villes différentes.",
    realisation: "Tout",
    date : "Mai 2023",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: mastercloud,
    video_link: mastercloudVideo,
  },
  {
    name: "Shopping en ligne",
    description:
    "Site Web dynamique et performant conçu pour vous offrir une expérience d'achat optimale. Avec une navigation fluide et rapide, un design intuitif et des fonctionnalités avancées, il facilite le parcours d'achat et de livraison pour le rendre aussi agréable que pratique..",
    realisation: "Tout",
    date : "Mars 2023",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javaEE",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: shopping,
    video_link: shoppingVideo,
  },
];

export { services, technologies, projects };
