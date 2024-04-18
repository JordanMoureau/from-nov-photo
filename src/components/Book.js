import NavLogo from "./NavLogo";
import ContactForm from "./ContactForm";

export default function Book() {
  return (
    <>
      <NavLogo />

      <div className="booking">
        <div className="portfolio-head">
          <h1>Book a Photoshoot</h1>

          <p>
            I'm always excited to talk about projects and photoshoots so don't
            hesitate to contact me. I'm able to work with lots of different
            kinds of budgets. The average photoshoot runs between 45-60 minutes
            depending on what we need. The end product is 12-18 professionally
            shot and edited photos. I do mainly color shots with a sprinkling of
            black and white (they are a favorite of mine, but if they aren't a
            favorite of yours feel free to let me know).
            <br />
            <br /> Editing turn around varies, typically two weeks you'll have
            your photos and I deliver sneak peaks within a few days! So get
            excited!
          </p>
          <h2>Reach out, lets chat photoshoots</h2>
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
    </>
  );
}
