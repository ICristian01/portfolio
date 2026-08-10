import React from "react";

function Intro() {
  return (
    <div
      className="flex items-center
        justify-center flex-col text-center pt-20 pb-6"
    >
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Cristian
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Backend Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I am a software engineer having recently attained a Diploma in Cybersecurity on the Gold Coast, Australia. Within the past year, I’ve expanded my work experience across multiple areas, including food production, direct sales, and customer relations, while also developing my technical knowledge and ability to learn. My current focus is on back-end development and taking advantage of opportunities to become a full-stack developer.
      </p>
    </div>
  );
}

export default Intro;
