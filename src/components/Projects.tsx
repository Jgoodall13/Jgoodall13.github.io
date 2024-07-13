import overture from "../images/overture.png";

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
      image: "project-image.jpg",
      title: "Project Title",
      description: "Project description...",
      link: "project-link",
    },
    {
      image: "project-image.jpg",
      title: "Project Title",
      description: "Project description...",
      link: "project-link",
    },
    {
      image: "project-image.jpg",
      title: "Project Title",
      description: "Project description...",
      link: "project-link",
    },
    {
      image: "project-image.jpg",
      title: "Project Title",
      description: "Project description...",
      link: "project-link",
    },
    {
      image: "project-image.jpg",
      title: "Project Title",
      description: "Project description...",
      link: "project-link",
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
                <p>{project.description}</p>
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
