import React, { useState, useEffect } from "react";

const Contact: React.FC = () => {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {}, []);

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

    try {
      //   https://ts-node-express-3b23e7f144da.herokuapp.com/send-email
      //   http://localhost:3000/send-email
      const response = await fetch(
        "https://ts-node-express-3b23e7f144da.herokuapp.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Message Sent." + data[0].from);
        resetForm();
      } else {
        alert("Message failed to send.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Message failed to send.");
    }
  };

  const resetForm = () => {
    setEmailData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-box">
        <h2>Contact Me</h2>
        <p>
          Got any questions or suggestions? Fill out this form to reach out.
        </p>
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
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
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                value={emailData.email}
                onChange={handleChange}
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
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
