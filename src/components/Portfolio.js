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
            Every photoshoot is a unique experience, carefully crafted from the
            clothes to the location and lighting—it's all about setting the
            perfect mood. I'll guide you step by step through each stage to make
            your dream shoot a reality.
          </p>
          <h2>
            "Your photos are so whimsical. I want to live in them." -Becca
          </h2>
          <p>
            I approach your photoshoot as setting the stage for memories, rather
            than just posing and laughing. We float and flow through the
            location, discovering together what it has to offer. My goal is to
            make you feel comfortable and confident, creating photos that you'll
            cherish forever.
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
