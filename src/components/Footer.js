import tank from "../tank.jpg";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Submit");

  function emailSubscription(e) {
    e.preventDefault();
    console.log(email);
    setMessage("Sent!");

    emailjs
      .sendForm(
        "service_pu67tab",
        "template_gttuujm",
        e.target,
        "p7oN8NqSYov4ZfxyP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmail("");
  }

  function handleEmailChange(e) {
    const { value } = e.target;
    setEmail(value);
  }

  return (
    <footer style={{ backgroundImage: `url(${tank})` }}>
      <div className="mailer-container">
        <h1>Get updates on the fun things we're up to</h1>
        <form onSubmit={emailSubscription}>
          <input
            aria-label="Your email address"
            value={email}
            onChange={handleEmailChange}
            type="email"
            name="email"
            placeholder="Email goes here..."
            required
          />
          <button type="submit" value="send">
            {message}
          </button>
        </form>
        <p> © 2024. All Rights Reserved. </p>
      </div>
      <div className="footer-column">
        <div className="footer-menu">
          <h2>Menu</h2>
          <p>
            <a href="/"> Home</a> | <a href="portfolio">Portfolio</a> |{" "}
            <a href="about">About</a> | <a href="book">Contact</a>
          </p>
        </div>
        <div className="get-in-touch">
          <h2>Get In Touch</h2>
          <p>Phone: (206) 715-7980</p>
          <p>Email: jordanfromnovember@gmail.com</p>
          <br />
          <h3>Located in Liberty Lake, Washington</h3>
        </div>
      </div>
    </footer>
  );
}
