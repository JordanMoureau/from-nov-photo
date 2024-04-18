import NavLogo from "./NavLogo";
import JordanThree from "../jordanone.jpg";
import JordanTwo from "../jordantwo.jpg";
import JordanOne from "../jordanthree.jpg";

import desktop from "../portfolioimages/desktop.jpg";

export default function About() {
  return (
    <>
      <NavLogo />
      <div className="services">
        <div className="about-me">
          <h1>About The Photographer</h1>

          <p>
            I grew up in Northern Georgia on a small hobby farm where at any
            point in time you could find goats, dogs, cats, horses and the
            occasional cow. I spent many lazy summer afternoons wandering the
            woods thinking dreamy, romantic thoughts, fjording creeks and
            getting as lost as I possibly could.
          </p>
          <h2>
            My name is Jordan. I'm a Mother, an Artist, a Dreamer and a Hopeless
            Romantic.
          </h2>
          <p>
            When I was thirteeen my best friend's sister got both of us into
            photography. We'd sit around her computer a the local coffee shop
            learning how to use the cameras and critiquing eachother's work. We
            were caught up, spellbound by a feeling. Arranging a frame to show a
            world only we knew, only we saw. Then finding a way to show it to
            everybody.
          </p>
          <div className="column-shots">
            <img src={JordanOne} className="hidden-col" />
            <img src={JordanTwo} />
            <img src={JordanThree} className="hidden-col" />
          </div>
          <p>
            In college I was honored with a scholarship to photography school
            where I studied with many great artists and honed a teenage daydream
            into a professional career. Now I can say I've practiced my craft in
            seven states and two countries. A list I hope to continue to grow.
          </p>
          <h2>Where does From November come from...</h2>
          <p>
            While I spent most of my childhood in Georgia I was born in Florida
            and moved when I was seven so I've felt a little out of step in
            terms of regional belonging. That combined with moving around a lot
            in my late teens left me feeling like maybe I wasn't "from" anywhere
            at all. I've always felt pretty deeply connected to my identity as a
            fall baby, my birthday in late November, so I thought 'I'm from
            November.' And it stuck.
          </p>
          <img src={desktop} />
          <h2>Everything, all at once. Always.</h2>
          <p>
            I'm a single mom of three fantastic kids. We live in a cozy
            apartment surrounded by mountains in Liberty Lake, Washington. I
            have a MAJOR soft spot for chubby cheeks and furbabies. My hobbies
            are charcoal drawing, writing, and bringing home too many library
            books. I still wander the woods dreaming up new dreams, we just do
            it together now.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
