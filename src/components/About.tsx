const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="pleasure">
            <h1 className="">Hi, I'm Jacob Goodall. Pleasure to meet you.</h1>
            <h2 className="">
              With over six years of experience in the tech industry, I
              specialize in developing fullstack e-commerce websites and
              building seamless integrations. My mission is to deliver
              exceptional solutions that drive business success. I am dedicated
              to bringing diverse perspectives and experiences that support
              organizational goals and core values. My work includes building
              user-friendly e-commerce sites and robust integrations both
              internally and externally for a wide range of clients.
            </h2>
          </div>
        </div>
      </section>
      <section className="section skils">
        <div className="container">
          <div className="box-holder">
            <div className="box-card">
              <span className="fa-stack fa-2x">
                <i className="fa-solid fa-circle fa-stack-2x has-text-success"></i>
                <i
                  className="fa-light fa-computer fa-stack-1x has-text-dark"
                  style={{ color: "green" }}
                ></i>
              </span>
              <h1 className="card-title bg-margin-bottom">
                Frontend Developement
              </h1>
              <p className="bg-margin-bottom">
                I value simple content structure, clean design patterns, and
                creating engaging, intuitive user experiences.
              </p>
              <p className="bold-green">Things I develop</p>
              <p className="sm-margin-top bg-margin-bottom">
                Web, Mobile, Apps
              </p>
              <p className="bold-green">Languagues and Tools:</p>
              <ul className="tools">
                <li>HTML/CSS</li>
                <li>Javascript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="box-card">
              <span className="fa-stack fa-2x">
                <i className="fa-solid fa-circle fa-stack-2x has-text-success"></i>
                <i
                  className="fa-light fa-database fa-stack-1x has-text-dark"
                  style={{ color: "green" }}
                ></i>
              </span>
              <h1 className="card-title bg-margin-bottom">
                Backend Developement
              </h1>
              <p className="bg-margin-bottom">
                I focus on building robust and scalable backend systems,
                ensuring seamless integrations and efficient performance.
              </p>
              <p className="bold-green">What I focus on</p>
              <p className="sm-margin-top bg-margin-bottom">
                RESTful APIs, Robust Servers
              </p>
              <p className="bold-green">Languagues and Tools:</p>
              <ul className="tools">
                <li>Node.js</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>AWS</li>
              </ul>
            </div>
            <div className="box-card">
              <span className="fa-stack fa-2x">
                <i className="fa-solid fa-circle fa-stack-2x has-text-success"></i>
                <i
                  className="fa-light fa-square-terminal fa-stack-1x has-text-dark"
                  style={{ color: "green" }}
                ></i>
              </span>
              <h1 className="card-title bg-margin-bottom">
                Ingegrations Developement
              </h1>
              <p className="bg-margin-bottom">
                I create seamless integrations that enhance system functionality
                and improve workflow efficiency.
              </p>
              <p className="bold-green">Types of Integrations</p>
              <p className="sm-margin-top bg-margin-bottom">
                Internal, External, Automations
              </p>
              <p className="bold-green">Languagues and Tools:</p>
              <ul className="tools">
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>SuiteScript</li>
                <li>RESTlets</li>
                <li>POSTman</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
