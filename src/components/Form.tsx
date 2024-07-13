import React, { useState } from "react";

const Form: React.FC = () => {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };
  //   https://ts-node-express-3b23e7f144da.herokuapp.com/send-email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });
      console.log(response);
      const data = await response.json();

      if (response.ok) {
        alert("Message Sent.");
      } else {
        alert("Message failed to send.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Message failed to send.");
    }
  };

  return (
    <div className="App">
      <h1>Send Email</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>To:</label>
          <input
            type="email"
            name="to"
            value={emailData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={emailData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="text"
            value={emailData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default Form;
