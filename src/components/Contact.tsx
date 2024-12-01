import React, { useState } from "react";

const Contact: React.FC = () => {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // New state for submission status

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state

    try {
      const response = await fetch(
        "https://ts-node-express-3b23e7f144da.herokuapp.com/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Response Data:", data);
      } else {
        const text = await response.text();
        console.log("Response Text:", text);
      }

      setSubmitted(true); // Set submission status
      setEmailData({ name: "", email: "", message: "" }); // Clear the form
    } catch (error: any) {
      console.error("Error sending email:", error);
      setError("Message failed to send. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    // Display success message
    return (
      <section id="contact" className="contact">
        <div className="contact-box text-center">
          <h2>Thank You!</h2>
          <p>Your message has been sent successfully.</p>
          <p>I will get back to you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-box">
        <div className="form-container">
          <div className="left-form">
            <h2>
              Let's Chat.
              <br />
              Tell me about your project.
            </h2>
            <p>Let's build something beautiful 🤘</p>
            <div className="mail-box">
              <div className="mail-left">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="mail-right">
                <h5>Mail me at</h5>
                <p>
                  <a href="mailto:jraygoodall@gmail.com">
                    jraygoodall@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <h2>Send me a message 🚀</h2>
            <div className="top-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  id="name"
                  name="name"
                  value={emailData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={emailData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Message"
                rows={5}
                id="message"
                name="message"
                value={emailData.message}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? "Sending..." : "Send Email"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
