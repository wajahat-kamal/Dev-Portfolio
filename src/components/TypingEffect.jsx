import React from "react";
import Typewriter from "typewriter-effect";

const TypingEffect = () => (
  <Typewriter
    options={{
      strings: [
        "JavaScript Developer",
        "React JS Developer",
        "Tailwind CSS Specialist",
      ],
      autoStart: true,
      loop: true,
      cursor: "|",
      delay: 75,
      deleteSpeed: 50,
      pauseFor: 2000,
    }}
    onInit={(typewriter) => {
      typewriter
        .changeDelay(75)
        .typeString("JavaScript Developer")
        .pauseFor(2000)
        .deleteAll()
        .typeString("React JS Developer")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Tailwind CSS Specialist")
        .pauseFor(2000)
        .deleteAll()
    }}
  />
);

export default TypingEffect;
