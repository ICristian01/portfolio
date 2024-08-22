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
        I am a software engineer currently studying in Australia. From past experiences, I have grown to appreciate my
        ability to adapt to new situations and people while also developing my
        technical knowledge and ability to learn. My current focus is on
        back-end development while taking on  projects with the aim of transitioning to a
        full-stack developer.
      </p>
    </div>
  );
}

export default Intro;
