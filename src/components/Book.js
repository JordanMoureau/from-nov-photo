import NavLogo from "./NavLogo";
import ContactForm from "./ContactForm";
import BookOne from "../booktwo.jpg";
import BookThree from "../backlitcouple.jpg";

export default function Book() {
  return (
    <div className="other-app">
      <NavLogo />

      <div className="booking">
        <div className="portfolio-head">
          <h1>Book a Photoshoot</h1>
          <p>
            Don't hesitate to contact me, I'm always excited to chat
            photoshoots. <br /> A little info: The average photoshoot runs
            between 45-60 minutes depending on what we need. The end product is
            20-30 professionally shot and edited photos. I do mainly color shots
            with a sprinkling of black and white (they are a favorite of mine,
            but if they aren't a favorite of yours feel free to let me know).
          </p>
          <h2>
            "Jordan made us comfortable stepping out of our comfort zone. And
            the results were magical!" - Brie
          </h2>

          <p>
            Editing turn around varies, typically two weeks you'll have your
            photos and I deliver sneak peaks within a few days! So get excited!
          </p>
          <SmallCol />

          <h2>
            "The photos turned out beautiful and Jordan was exceptionally kind,
            patient, even sang to our baby to calm her. It was incredibly sweet
            and it's now her favorite lullaby!" - Sarah
          </h2>
          <p>
            I highly recomend reading{" "}
            <a
              className="link"
              href="https://www.ashleysrokosz.com/biz-blog/professional-photo-shoot"
              target="_blank"
            >
              how to prep for a professional photoshoot
            </a>{" "}
            and{" "}
            <a
              className="link"
              href="https://carrieallen.com/what-to-wear-to-a-photoshoot/"
              target="_blank"
            >
              how to dress for a professional photoshoot{" "}
            </a>
            before coming to a shoot with me (or anybody). Great information to
            make the experience worth while for you.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

function SmallCol() {
  return (
    <div className="small-duo-container">
      <img src={BookOne} />
      <img src={BookThree} />
    </div>
  );
}
