import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState("Send");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [sent, setSent] = useState(false);
  const form = useRef();

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setSent(true);
  }

  function onSubmit(e) {
    e.preventDefault();
    setFormStatus("Sent!");
    emailjs
      .sendForm(
        "service_pu67tab",
        "template_8e9h1oq",
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
    resetForm();
  }

  return (
    <form onSubmit={onSubmit} ref={form}>
      <input
        aria-label="Your first and last name"
        value={name}
        name="name"
        type="text"
        id="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="First and last name..."
        required
      />
      <input
        aria-label="your email address"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
        placeholder="Your email address..."
        required
      />
      <input
        aria-label="your phone number"
        value={phone}
        name="phone"
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        id="number"
        placeholder="Phone number..."
        required
      />
      <textarea
        aria-label="your message to the photographer"
        value={message}
        name="message"
        onChange={(e) => setMessage(e.target.value)}
        id="message"
        placeholder="Tell me about what you're thinking for a photoshoot..."
        required
      />
      <button type="submit" disabled={sent}>
        {formStatus}
      </button>
    </form>
  );
}
