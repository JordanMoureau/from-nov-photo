import hero from "../hero.jpg";
import couple from "../couple.jpg";
import aboutme from "../jordanmain.jpg";

import DanceOne from "../danceone.jpg";
import DanceTwo from "../dancetwo.jpg";
import DanceThree from "../dancethree.jpg";

import logoFNP from "../fnplogo.png";

import { NavLink, Link } from "react-router-dom";
import { useState, useRef } from "react";
import {
  RecentPhotosSetOne,
  RecentPhotosSetThree,
  RecentPhotosSetTwo,
} from "./RecentPhotoshoots";

import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <Hero>
        <Social />
        <div className="hero-logo">
          <img alt="liberty lake photography" src={logoFNP} />
          <Nav />
        </div>
      </Hero>
      <div className="other-app">
        <div style={{ marginTop: "-20px" }}></div>
        <Blurb />
        <SmallCol />

        <BlurbTwo />
        <Whimsy />
        <MiniMe />

        <Booking />
      </div>
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
      <h2>It's a tender, sweet love. </h2>
      <h3> That's my vibe. That's what I'm here to capture.</h3>
    </div>
  );
}

function Whimsy() {
  return (
    <div className="whimsy">
      <img alt="couple portrait session" src={couple} />
    </div>
  );
}

function MiniMe() {
  return (
    <div className="mini-me">
      <img src={aboutme} alt="a wedding photographer" />
      <p>
        My name is Jordan, and I've been looking at the world through my
        rose-colored lens since I was thirteen years old. As professional
        photographer I get to see the whole life cycle.
        <br />
        <br />
        From weddings to maternity portraits. Newborn sessions to catching
        backlit baby yawns and the first whole family photos when a new addition
        comes along. All the way to high school graduation portraits.
        <br />
        <br />
        I've photographed all over the US, capturing the essence of lovers,
        friends, and family along the way. Every snapshot tells a story, and I
        strive to bring out the unique beauty in every subject I photograph. My
        journey has brought me back to where it all began, doing what I've
        always loved.
        <br />
        <br />
        Today, I find myself surrounded by love, immersed in the passion that
        has driven me for years. Photography is more than just a profession for
        me; it's a way of life. I capture the essence of love between people,
        creating cherished memories that last a lifetime.
      </p>
    </div>
  );
}

function SmallCol() {
  return (
    <div className="small-col-container">
      <img alt="wedding photograpy" src={DanceOne} />
      <img alt="affordable wedding photography" src={DanceTwo} />
      <img alt="wedding photography in liberty lake" src={DanceThree} />
    </div>
  );
}

function BlurbTwo() {
  return (
    <div className="blurb">
      <h3 style={{ marginBottom: "0" }}>
        {" "}
        Welcome to From November Photography
      </h3>
      <p style={{ marginTop: "0" }}>
        <br /> <br />A photographer out of Liberty Lake serving Washington and
        Northern Idaho as well as parts of Oregon. We make weddings special,
        tease kiddos into big smiles for family photos and sing for babies at
        newborn sessions. Anything to get that perfect shot, freezing forever
        this moment in time.
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
        photography service home based in Liberty Lake, Washington. From 10
        photos to 100+ depending on the length of your photoshoot. We do
        mini-sessions, full-day sessions for wedding photography and everything
        in between.
        <br />
        <br />
        Our photography sessions are an experience and we come highly
        recommended by our clients. You'll receive a mixture of black and white
        and color photos high quality, high resolution and professionally
        edited.
        <br />
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

function Nav() {
  return (
    <div className="nav">
      <NavLink to="/">
        <button>home</button>
      </NavLink>
      <NavLink to="/portfolio">
        <button>portfolio</button>
      </NavLink>
      <NavLink to="/about">
        <button>about me</button>
      </NavLink>
      <NavLink to="/book">
        <button>book</button>
      </NavLink>
    </div>
  );
}

function Social() {
  return (
    <div className="social">
      <a
        href="https://www.instagram.com/fromnovphoto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram size={23} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61560491293257"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoFacebook size={23} />
      </a>
    </div>
  );
}
