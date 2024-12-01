import React from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Landing />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
