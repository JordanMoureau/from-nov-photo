import Nav from "./NavLogo";
import hero from "../portfolioimages/mbkisstall.jpg";
import couple from "../couple.jpg";
import aboutme from "../jordanmain.jpg";

import DanceOne from "../danceone.jpg";
import DanceTwo from "../dancetwo.jpg";
import DanceThree from "../dancethree.jpg";

import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import {
  RecentPhotosSetOne,
  RecentPhotosSetThree,
  RecentPhotosSetTwo,
} from "./RecentPhotoshoots";

import logo from "../logoFNPlong.png";

export default function Home() {
  return (
    <>
      <Hero>
        <div className="hero-logo">
          <p>est 2010</p>
          <img src={logo} />
          <div className="hero-logo-bottom">
            <p>You've got the love - We've got the vision</p>
          </div>
        </div>
      </Hero>

      <div style={{ marginTop: "-20px" }}>
        <Nav />
      </div>
      <Blurb />
      <SmallCol />

      <BlurbTwo />
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

function RecentPhotos() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={
        isOpen ? "recent-photos-container open" : "recent-photos-container"
      }
    >
      <div onClick={handleClick} className="recent-photos-button">
        <i className={isOpen ? "arrow down" : "arrow up"}></i>
        <p>Recent Photoshoots</p>
      </div>

      <div className={!isOpen ? "hidden-col recent-photos" : "recent-photos"}>
        <PhotoMap />
      </div>
    </div>
  );
}

function PhotoMap() {
  return (
    <div className="recent-photos">
      <div className="set">
        <div className="set-heading">
          <h2>Becca & Colin</h2>
          <p>A Disney perfect Wedding</p>
        </div>
        {RecentPhotosSetThree.map((images) => (
          <img src={images.image} alt={images.alt} key={images.image} />
        ))}
      </div>
      <div className="set">
        <div className="set-heading">
          <h2>Brie & Micah</h2>
          <p>A Wild Flower Elopement</p>
        </div>
        {RecentPhotosSetOne.map((images) => (
          <img src={images.image} alt={images.alt} key={images.image} />
        ))}
      </div>
      <div className="set">
        <div className="set-heading">
          <h2>Mandie & Mickey</h2>
          <p>A Backlit Romance</p>
        </div>
        {RecentPhotosSetTwo.map((images) => (
          <img src={images.image} alt={images.alt} key={images.image} />
        ))}
      </div>
    </div>
  );
}

function Blurb() {
  return (
    <div className="blurb">
      <h2>It's a tender, sweet love. </h2>
      <h3> That's my vibe. That's what I'm here to capture.</h3>
    </div>
  );
}

function Whimsy() {
  return (
    <div className="whimsy">
      <img src={couple} />
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

function SmallCol() {
  return (
    <div className="small-col-container">
      <img src={DanceOne} />
      <img src={DanceTwo} />
      <img src={DanceThree} />
    </div>
  );
}

function BlurbTwo() {
  return (
    <div className="blurb">
      <h3 style={{ marginBottom: "0" }}> A little shy, a little thoughtful.</h3>
      <p style={{ marginTop: "0" }}>
        <br /> <br />I like to find hidden things when I shoot. Secret feelings,
        wants, hopes. These aren't photos you can get just anywhere. We're all
        flawed. When I shoot, instead of hiding them away, I want to make them
        beautiful.
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
        kind of event, from weddings to work events and grand openings. <br />{" "}
        <br />
        So reach out, tell me about what you're thinking and lets make it
        happen.
      </p>

      <Link to="/book">
        <button>Lets Make Some Magic</button>
      </Link>
    </div>
  );
}
