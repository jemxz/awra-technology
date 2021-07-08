// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: false,
  // animation playing duration
  duration: 10,
  // if true, animation plays only once when element comes on screen
  once: true,
};
// Change your display name on tha landing display
const header = {
  name: "a Human",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Us";
const about = {
  paragraph:
    "We are a technology company made with the intent of Building Buitiful and attractive websites",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "Building Websites",
    faClass: "fab fa-html5",
  },
  {
    name: "Buidling Mobile Apps",
    faClass: "fab fa-css3",
  },
  {
    name: "Building Marketing strategety ",
    faClass: "fab fa-js",
  },

];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Project 1",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Project 2",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Project 3",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Project 4",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com",
  },
]
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Miscellaneous 1",
    url: "https://github.com",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "https://github.com",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://github.com",
  },
];
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
