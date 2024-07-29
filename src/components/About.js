import NavLogo from "./NavLogo";
import jordanone from "../jordanone.jpg";
import jordantwo from "../jordantwo.jpg";
import jordanthree from "../jordanthree.jpg";
import desktop from "../desktop.jpg";

export default function About() {
  return (
    <div className="other-app">
      <NavLogo />
      <div className="services">
        <div className="about-me">
          <h1>About The Photographer</h1>

          <p>
            I grew up on a small hobby farm in Northern Georgia, surrounded by
            goats, dogs, cats, horses, and the occasional cow. Many lazy summer
            afternoons were spent wandering the woods, daydreaming and exploring
            creeks, getting as lost as I could.
          </p>
          <h2>
            My name is Jordan. I'm a Mother, an Artist, a Dreamer and a Hopeless
            Romantic.
          </h2>
          <p>
            When I was thirteen, my best friend’s sister introduced both of us
            to photography. We would gather around her computer at the local
            coffee shop, learning how to use cameras and critiquing each other’s
            work. We were captivated by the magic of capturing a unique
            perspective—arranging a frame to reveal a world only we saw, and
            then finding a way to share it with everyone.
          </p>
          <div className="column-shots">
            <img
              alt="wedding photographer"
              src={jordanone}
              className="hidden-col"
            />
            <img alt="a portrait photographer" src={jordantwo} />
            <img
              alt="a family photographer"
              src={jordanthree}
              className="hidden-col"
            />
          </div>
          <p>
            In college, I was honored with a scholarship to a photography
            program, where I studied alongside many talented artists and
            transformed my teenage passion into a professional career. Today,
            I've had the privilege of practicing my craft in seven states and
            two countries, and I look forward to expanding that list even
            further.
          </p>
          <h2>Where does From November come from...</h2>
          <p>
            Although I spent most of my childhood in Georgia, I was born in
            Florida and moved when I was seven, which left me feeling a bit
            disconnected in terms of regional belonging. Moving around a bit in
            my late teens only amplified this feeling of not quite being "from"
            anywhere. However, I've always felt a strong connection to my
            identity as a fall baby, with my birthday in late November. I
            embraced this sense of self by thinking of myself as "from
            November," and it has stuck ever since.
          </p>
          <img
            src={desktop}
            alt="from a wedding photographer desk"
            style={{ width: "80%" }}
          />
          <h2>Everything, all at once. Always.</h2>
          <p>
            I'm a single mom of three fantastic kids, and we live in a cozy
            apartment surrounded by the mountains of Liberty Lake, Washington. I
            have a major soft spot for chubby cheeks and furbabies. My hobbies
            are charcoal drawing, writing, and collecting too many library
            books. I still love wandering the woods and dreaming up new
            adventures, but now I get to share those moments with my kids.
          </p>
        </div>
      </div>
    </div>
  );
}
