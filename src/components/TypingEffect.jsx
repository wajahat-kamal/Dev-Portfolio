import React from "react";
import Typewriter from "typewriter-effect";

const TypingEffect = () => (
  <Typewriter
    options={{
      strings: [
        "Full Stack Developer",
        "JavaScript Coder",
        "NodeJS Developer",
      ],
      autoStart: true,
      loop: true,
      cursor: "|",
      delay: 65,
      deleteSpeed: 50,
      pauseFor: 2000,
    }}
    onInit={(typewriter) => {
      typewriter
        .changeDelay(65)
        .typeString("Full Stack Developer")
        .pauseFor(2000)
        .deleteAll()
        .typeString("JavaScript Coder")
        .pauseFor(2000)
        .deleteAll()
        .typeString("NodeJS Developer")
        .pauseFor(2000)
        .deleteAll()
    }}
  />
);

export default TypingEffect;
