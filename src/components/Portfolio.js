import NavLogo from "./NavLogo";
import { PortfolioImages } from "./PortfolioData";

export default function Portfolio() {
  return (
    <div className="other-app">
      <NavLogo />

      <div className="portfolio">
        <div className="portfolio-head">
          <h1>My Work</h1>

          <p>
            Every photoshoot is an experience. From clothes to location, to
            lighting. It's all a mood. I'll take you step by step through each
            stage to make your dream shoot come true.
          </p>
          <h2>
            "Your photos are so whimsical. I want to live in them." -Becca
          </h2>
          <p>
            I think about your photoshoot as more like setting the stage for
            memories than posing and laughing and trying to make it look
            natural. We float and flow through the location. See what it has to
            offer together.
          </p>
        </div>
        {PortfolioImages.map((images) => (
          <img
            src={images.image}
            alt={images.alt}
            width={images.width}
            key={images.image}
          />
        ))}
        <div className="portfolio-head" style={{ marginTop: "90px" }}>
          <h2>Thanks so much for coming this far!</h2>
          <p>
            Send me a message to book a photoshoot. I have a variety of
            availability, mainly in the evenings to catch the pretty light, but
            if you're very adventurous I have a special love for dawn
            photoshoots. Evening light is geat but dawn light is something else
            entirely.
          </p>
        </div>
      </div>
    </div>
  );
}
