import NavLogo from "./NavLogo";
import { PortfolioImages } from "./PortfolioData";

export default function Portfolio() {
  return (
    <>
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
            "Your photos are so whimsical. I want to live in them." - Client
            Becca
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
            If you'd like to see more examples of my work, shoot me a message,
            and let’s set up a time to meet. I'll pull out my super secret
            photography album stash of memories.
          </p>
        </div>
      </div>
    </>
  );
}
