import { useState } from "react";

export default function MailChimpForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      "https://getreau.us22.list-manage.com/subscribe/post-json?u=c11d44c8a3315835fb3f23716&id=f819b3bfc4&f_id=00fbd2e1f0&c=?";

    const params = new URLSearchParams({
      u: "c11d44c8a3315835fb3f23716",
      id: "f819b3bfc4",
      f_id: "00fbd2e1f0",
      EMAIL: email,
      FNAME: firstName,
      tags: "12872",
      c: "callback", // This parameter can be used to set the callback function name
    });

    try {
      const response = await fetch(`${url}&${params.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        mode: "cors",
      });

      const data = await response.text();

      // Extract JSON from response
      const jsonString = data.replace(/^.*?\({/, "{").replace(/\}\);?$/, "}");
      const json = JSON.parse(jsonString);

      console.log(json.result);

      if (json.result === "success") {
        setMessage("Thank you for subscribing! We promise we won't spam you.");
      } else {
        setMessage("Thank you for subscribing! We promise we won't spam you.");
      }
    } catch (error) {
      setMessage("Thank you for subscribing! We promise we won't spam you.");
    }
  };
  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form
          onSubmit={handleSubmit}
          action="https://getreau.us22.list-manage.com/subscribe/post?u=c11d44c8a3315835fb3f23716&amp;id=f819b3bfc4&amp;f_id=00fbd2e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_self"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>READY, BEAUTIFUL?</h2>
            <p>Join to our email list for a special $90 summer mini-session.</p>
            <div className="indicates-required hide">
              <span className="asterisk ">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <input
                placeholder="Drop in an email"
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                defaultValue=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mc-field-group">
              <input
                placeholder="And a name"
                type="text"
                name="FNAME"
                className="text"
                id="mce-FNAME"
                defaultValue=""
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div hidden>
              <input type="hidden" name="tags" value="12872" />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-5000px" }}
            >
              <input
                type="text"
                name="b_c11d44c8a3315835fb3f23716_f819b3bfc4"
                tabIndex="-1"
                defaultValue=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value="Subscribe"
              />
            </div>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
