import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Jacob Goodall</h1>
        <p>Fullstack Software Engineer</p>
      </div>
      <div className="arrow-container">
        <span
          className="arrow"
          onClick={() => window.location.replace("/#about")}
        >
          &#x25BC;
        </span>
      </div>
    </div>
  );
};

export default Landing;
