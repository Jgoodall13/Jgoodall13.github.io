const Footer = () => {
  return (
    <footer className="footer">
      <div className="container is-narrow">
        <div className="columns is-centered">
          <div className="column is-one-third">
            <h1 className="title is-size-4-touch has-text-weight-normal">
              no regrets and everybody wang chung tonight
            </h1>
          </div>
        </div>
        <div className="social-icons">
          <p className="field">
            <a className="button is-medium" href="mailto:jraygoodall@gmail.com">
              <span className="icon is-small">
                <i className="far fa-envelope fa-fw"></i>
              </span>
            </a>
            <a
              className="button is-medium"
              href="https://www.linkedin.com/in/jacobraygoodall/"
              target="_blank"
            >
              <span className="icon is-small">
                <i className="fab fa-linkedin-in fa-fw"></i>
              </span>
            </a>
            <a
              className="button is-medium"
              href="https://github.com/Jgoodall13"
              target="_blank"
            >
              <span className="icon is-small">
                <i className="fab fa-github fa-fw"></i>
              </span>
            </a>
          </p>
        </div>
        <div className="copyright">
          Handcrafted by me
          <span style={{ margin: "0 5px" }} className="icon has-white-text">
            <i className="far fa-copyright"></i>
          </span>
          Jacob Goodall
        </div>
      </div>
    </footer>
  );
};

export default Footer;
