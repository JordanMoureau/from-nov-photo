import Nav from "./Nav";
import hero from "../herotwo.jpg";
import couple from "../couple.jpg";
import aboutme from "../jordanmain.jpg";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="hero-container">
        <div className="hidden">
          <Hero>
            <h1>From November Photo&shy;graphy</h1>
          </Hero>
        </div>

        <Hero>
          {" "}
          <h1>From November Photo&shy;graphy</h1>
        </Hero>

        <div className="hidden">
          <Hero margin={0}>
            {" "}
            <h1>From November Photo&shy;graphy</h1>
          </Hero>
        </div>
      </div>
      <Blurb />
      <Whimsy />
      <MiniMe />
      <Booking />
    </>
  );
}

function Hero({ children }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {children}
    </div>
  );
}

function Blurb() {
  return (
    <div className="blurb">
      <h2>It's a tender, sweet, warm love. </h2>
      <h3> That's my vibe. That's what I'm here to capture.</h3>

      <button>Read More About What We do</button>
    </div>
  );
}

function Whimsy() {
  return (
    <div className="whimsy">
      <img src={couple} />
      <h2>A touch of whimsy for your everyday.</h2>
    </div>
  );
}

function MiniMe() {
  return (
    <div className="mini-me">
      <img src={aboutme} />
      <p>
        My name is Jordan and I've been looking at the world through my rose
        colored lens since I was thirteen years old. I studied at a liberal arts
        university in deep southern South Carolina, on a schoarship to be part
        of their photography program.
        <br />
        <br /> Travel and lovers and friends and family were captured in the
        years to come until I found myself here. In the same place I feel I've
        always been, doing what I always have. <br />
        <br />
        <em>Surrounded with love.</em>
      </p>
    </div>
  );
}

function Booking() {
  return (
    <div className="book-home">
      <h2>
        Families | Maternity | Newborns | Weddings | Couples | Events |
        Portraits
      </h2>

      <p>
        From November Photography is a professional, (very glamorous)
        photography service home based in Liberty Lake, Washington, but
        photographing all over Northern Idaho, Eastern Washington and even
        ocassionally Seattle. Families are my bread and butter from
        weddings/elopements to maternity, newborn and on. I also cover every
        kind of event with photography and HiDef videography. <br /> <br />
        So reach out, tell me about what you're thinking and lets make it
        happen.
      </p>

      <Link to="/book">
        <button>Lets Make Some Magic</button>
      </Link>
    </div>
  );
}
