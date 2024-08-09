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
        <div className="portfolio-image-container">
          {PortfolioImages.map((images) => (
            <img
              src={images.image}
              alt={images.alt}
              width={images.width}
              key={images.image}
            />
          ))}

          <div
            className="portfolio-head centering"
            style={{ marginTop: "90px" }}
          >
            <h2>Thanks so much for coming this far!</h2>
            <p>
              If you're thinking about booking a photoshoot, just send me a
              message. I usually have availability in the evenings, which is
              great for catching that soft, pretty light. But if you're up for
              something different, I have a real love for dawn photoshoots.
              Evening light is nice, but there's something really special about
              the way the world looks at dawn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
