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
            Hi! I'm thrilled you're considering booking with me. I love chatting
            photoshoots. <br />
            <br /> A little more about my service: I offer mini-sessions and
            full-sessions, depending on your specific needs. For a mini you can
            expect 10-15 professionally shot and edited photos as the final
            product. For a full 20-30 high quality shots. While I primarily
            provide color photos, I also include some black and white images,
            which are a personal favorite. If you prefer only color photos,
            please let me know.
          </p>
          <h2>
            "Jordan made us comfortable stepping out of our comfort zone. And
            the results were magical!" - Brie
          </h2>

          <p>
            The editing turnaround time varies, but you can typically expect to
            receive your photos within two weeks. I also provide sneak peeks
            within a few days, so you can start getting excited!
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
            before coming to your portrait session. Great information to make
            the experience worth while for you.
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
      <img alt="portrait photography" src={BookOne} />
      <img alt="couple portait session" src={BookThree} />
    </div>
  );
}
