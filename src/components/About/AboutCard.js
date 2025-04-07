import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sarthak Raj</span> from{" "}
            <span className="purple">India</span>.
            <br />
            I’m currently a student in Class 12th at Holy Cross Public School.
            <br />
            I'm a passionate Full Stack Developer with experience in both
            frontend and backend technologies like React, Node.js, PHP, HTML,
            CSS, and Java.
            <br />
            <br />
            Apart from coding, here are a few things I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech & Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Web Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech & Coding Videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Mobile Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose. Build with passion. Grow with curiosity."
          </p>
          <footer className="blockquote-footer">Sarthak Raj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
