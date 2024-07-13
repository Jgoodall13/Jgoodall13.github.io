import overture from "../images/overture.png";
import coreswag from "../images/coreswag.png";
import rusvm from "../images/rsuvm.png";
import bluetique from "../images/bluetique.png";
import dd from "../images/dd.png";
import nielsen from "../images/nielsen.png";
import acu from "../images/acu.png";
import erm from "../images/ERM.png";
import sikich from "../images/sikich.png";

const Projects = () => {
  const projectList = [
    // Add your projects here
    {
      image: overture,
      title: "Overture",
      description: "Site built with React, and Node.js",
      link: "https://www.overturepromotions.com/",
    },
    {
      image: coreswag,
      title: "CoreSwag",
      description: "Site built with .NET and C#",
      link: "https://coreswag.overturestore.com/",
    },
    {
      image: rusvm,
      title: "Ross University",
      description: "Site built with .NET and C#",
      link: "https://rusvm.overturestore.com/",
    },
    {
      image: bluetique,
      title: "BCBS",
      description: "Site built with .NET and C#",
      link: "https://bluetique.overturestore.com/",
    },
    {
      image: dd,
      title: "DoorDash",
      description: "Project description...",
      link: "https://doordashstore.com/",
    },
    {
      image: nielsen,
      title: "Nielsen",
      description: "Project description...",
      link: "https://nielsen.overturestore.com/",
    },
    {
      image: acu,
      title: "ACU Med",
      description: "Project description...",
      link: "https://aucmed.overturestore.com/",
    },
    {
      image: erm,
      title: "ERM",
      description: "Project description...",
      link: "https://erm.overturestore.com/",
    },
    {
      image: sikich,
      title: "Sikich",
      description: "Project description...",
      link: "https://sikichshowroom.overtureshops.com/pages/pastprojects",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>My Recent Work</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <a href={project.link} target="blank" className="btn">
                  View Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
