const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
        <div className="social-links">
          <a href="https://github.com/yourusername">GitHub</a>
          <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
