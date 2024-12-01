import React, { useState } from "react";

const Form: React.FC = () => {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
    setError(null);
    setLoading(true);
    console.log("Event target name:", e);

    try {
      console.log("Payload being sent:", JSON.stringify(emailData));

      const response = await fetch("http://localhost:3000/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        alert("Message Sent.");
        setEmailData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setError(data.message || "Failed to send the message.");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Send Email</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={emailData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={emailData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={emailData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Email"}
        </button>
      </form>
    </div>
  );
};

export default Form;
