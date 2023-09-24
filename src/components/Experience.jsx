import React from "react";
import solidity from "../assets/solidity.png"
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import etherJS from "../assets/ethers-vector-logo-seeklogo.com/ethers-seeklogo.com.svg"
import hardhat from "../assets/hardhat-vector-logo-seeklogo.com/hardhat-seeklogo.com.svg"
import Web3JS from "../assets/web3js-vector-logo-seeklogo.com/web3js-seeklogo.com.svg"
import git from "../assets/git.png"
import github from "../assets/github.png"
import Tailwind from "../assets/tailwind.png"
import php from "../assets/php.png"
import laravel from "../assets/laravel.png"
import figma from "../assets/figma.png"
import postman from "../assets/postman-icon.png"
import redux from "../assets/redux2.png";
import cpp from "../assets/cpp.png";
import jquery from "../assets/jquery.png";
const Experience = () => {
  const techs = [
   
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: jquery,
      title: "Jquery",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: cpp,
      title: "C++",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },

    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: redux,
      title: "React-Redux",
      style: "shadow-blue-600",
    },
    {
      id: 12,
      src: php,
      title: "PHP",
      style: "shadow-blue-300",
    },
  
    {
      id: 12,
      src: laravel,
      title: "Laravel",
      style: "shadow-blue-300",
    },
   
   {
      id: 11,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    }, {
      id: 12,
      src: github,
      title: "Github",
      style: "shadow-gray-200",
    }, {
      id: 12,
      src: Tailwind,
      title: "TailwindCSS",
      style: "shadow-blue-300",
    },
   
    {
      id: 12,
      src: figma,
      title: "Figma",
      style: "shadow-blue-300",
    },
    {
      id: 12,
      src: postman,
      title: "Postman",
      style: "shadow-blue-300",
    },
    
    
    
  ];

  return (
    <div className="experience_Section">
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen" 
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-4 sm:grid-cols-5 gap-5 text-center py-8 px-5 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-12 mx-auto" />
              <p className="mt-4 text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">{title}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Experience;
