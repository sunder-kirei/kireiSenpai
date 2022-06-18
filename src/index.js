import React from "react";
import ReactDOM from "react-dom";
import email from "./images/email.jpg";
import linkedIn from "./images/linkedIn.jpg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import github from "./images/github.svg";
import dp from "./images/dp.jpg";
import "./style.css"
function Image() {
  return (
    <div className="image">
      <img src={dp} alt="profile-picture" />
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="contactInfo">
      <h1 className="name">Kirei Senpai</h1>
      <h3 className="focus">Frontend Developer</h3>
      <h5 className="website">GitHub</h5>
      <div className="contactButtons">
        <button className="email">
          <img src={email} alt="email" />
          Email
        </button>
        <button className="linkedIn">
          <img src={linkedIn} alt="linkedIn" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <h2>About</h2>
      <div className="about">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </div>
      <h2>Interests</h2>
      <div className="about">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <a href="twitter.com">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="facebook.com">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="instagram.com">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="github.com">
        <img src={github} alt="github" />
      </a>
    </nav>
  );
}

ReactDOM.render(
  <div className="container">
    <Image />
    <ContactInfo />
    <Main />
    <Nav />
  </div>,
  document.getElementById("root")
);
