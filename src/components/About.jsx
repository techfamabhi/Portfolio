import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-lg mt-10 font-signature sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Hello, I'm Abhishek Gouda, a computer science B.Tech student who is passionate about Web Development. During my studies, I became interested in Full stack Web Development.
        </p>
        <br />
        <p className="text-lg font-signature sm:text-sm md:text-base lg:text-xl xl:text-2xl">
          I had 1 year Experience in Web Developement . I worked on several types of Web Development Project during my education. I have also worked FrontEnd and Backend Developer in vertex technosys.
        </p>
        <br />

        <p className="text-lg font-signature sm:text-sm md:text-base lg:text-xl xl:text-2xl">
          My ultimate goal as a Full Stack Web Developer engineer is to Design and Develop End - To - End Application that support security, trust, and transparency. In my opinion, Full Stack Web Development technology has the power to revolutionise a lot of industries and create new opportunities for people all over the world.
        </p>
      </div>
    </div>
  );
};

export default About;
