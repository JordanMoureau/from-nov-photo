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
        backgroundImage: `url(https://lh3.googleusercontent.com/pw/AP1GczN5IiVg_BdfQK-wxOIktFuVZ90_jOZqBLWZeZj53D5eeLSts7scHeUr5LguNXSbNGeE70BerkmP8VA22y6WzWrQSCbeNZlFAC_WMsYoH1ldB4wM_0dsJNBxPSlJkzp67j7NmWXTyQ4ikDTvh4ZlYh-vOPe7c6dxqje3T32BxknBlFUrOMe6dpaH1NlirJcWk7bcYo7FPdSaft2IKnAfAECT76-cFJHAkOAG64QpNxavrWDmLBn0DnaFPrnStMV6e1OAZabqheVUtHApylJOJuQ2kWeprNMeATw2IkYyvOW1CKKXGoVMxmt6p2rb2yoTnG8WqILD9heb87FLQ8WOAYR1TLjD_RJYTVstWOfxnwemcSRIq64Z_3GNYbgttSF_M60Ik2MjNHSBm6PocHNnz1orcgaFqDJlLiSyHdnRr0Te6FA7cbRDbsK9WzcPmrjrLm32h4KamHbBE-S6WjyqWEOj3TsUB1s2CBrRYt2L68-RYdxsckT0jBMOEoymAyy5gMrwES_EKpvX4vCgZKsjeCvu59h4uKm7MtbWPXbPqomz5HZrcpp6ZYI-mZ3pm85EVV5mtE-pcWXPIbW3CiIrbn_0Vl0Cg7f_NILG88qUNQWuBlBRd-R1LY9iaDTYLFK5A8zL6ymz0akNDPJdHzfzHgY2mIbbwEfIGfHxfwRrS9O6zPdNwI2MB9596CKoiDpg8WCKI23icCJ7GzvdLPutNLhFYaWHE0Z0W0DL0K6YTC1S_QIzWcMmBN7ixyPoIda8l3oU_TbeoAPbzQFXRGDJjJIJbScnTNeJgx82x79MBaXasG-UGop2Y1KwbnpTBJleNDSyxq4s2oWulW96_t2WvCPMwj-Q-3hWWa9CTJ4N949QCHOyAV29GDAyG2AGuABKPmvtLiWFTiH_dG4ThCvT8Ac=w1446-h964-s-no-gm?authuser=0)`,
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
