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
    <footer
      style={{
        backgroundImage: `url(https://lh3.googleusercontent.com/pw/AP1GczNkYB3f0wL_qGK2NWnvzVEzVwyA2vcswda18bO6ZrojGKDEd7x4R3QBtUMeMjml8qfQgIXsGdE9u70pSCxxxRx1ZNHp2dx85HN_wdL6u9ASI80oaxHhMF-2y4YRkpJFFrjmZlkkYC_fI6YVxrbu_x_cCdFWte5qpyDS5KBws3A85AFlD62XhqoT86ReyJWXIgVkmBvunTSZV1lSDbyXiIWr7eJSEM3wiqZt1BbUua7W-J39MVf35AbjKNxHj-wYSoEPrFYzhnzz_rqP4YikpVSTSq6uE9TvA7QnTR7JzXUqLkccBz8SFHaQHHWYpd7FqDeTM2g1m0R335NUuwaLsTVBQnNTJ5PdVn63jiHK4k6yh81MpaFaeWkeOn10scsh_l9jQ2lwHa9Y0UI0-wbN8yKi6Knd8ZGyHI4WwEaTQvegic5d-dXWCigTKq54ZMz3cQqVndea23ygeejSbzlMgJcXSUkrwzh_dtSfbZuiK6lCzPDThMI1GUR4dWLaD1jCCr6vWSKWcZxzZeKgTl9PBg9lQgoX8oJf56rNVysVchj_6ahNgWSJabE_Z2TitaSJWpzOIkbocKsWM57Fh2RPL4Pz--Z1RP3zjutiHHWlBzP-aKnlEq71gu8vIbOrL1v1hwTT-5zRyuisK26_XP0sl3f4xaDSM6qYbw93hVFLA2opRbmUJvgWio2nYDpKJljbWQue2Ct8lGhikEj0KoFfddLW1MsMjk28M-xGIPrBAB9Au5-zvP6jv692u8Dqb1SDWriLETEA05jpRB_SSkVNOiwcN8IXOFNZGUOOnGvxhrCWUnLyPWd2mgcWuTXzgNfr1P8uYchnD0QLAKmF6SEvPrV_V_clxD02GaekWPbvz1Jq4em5Ti68DRFTaDSI9wb9WPGDtL55oUgpWpC-Lfm_K4A=w1446-h964-s-no-gm?authuser=0)`,
      }}
    >
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
