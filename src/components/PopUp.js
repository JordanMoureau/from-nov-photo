import React, { useState, useEffect } from "react";
import MailChimpForm from "./MailChimpForm.js"; // Assuming the MailchimpForm component is in the same directory
import "./popup.css";
import LaurenMia from "../portfolioimages/LaurenMia.jpg";

function PopUp() {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  function closePopUp() {
    setShowPopUp(false);
  }

  return (
    showPopUp && (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={closePopUp}>
            &times;
          </button>
          <div className="Pop-Image">
            <img alt="family photo session" src={LaurenMia} />
          </div>
          <div className="form-container">
            <MailChimpForm />
          </div>
        </div>
      </div>
    )
  );
}

export default PopUp;
