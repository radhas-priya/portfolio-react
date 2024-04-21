import React from "react";
import Todopng from "../assets/Todopng.png";
import notesApp from "../assets/notesAppPng.png";
import blogapp from "../assets/blogapp.png";
import textspeech from "../assets/textspeech.png";
const Portfolio = () => {
  const portfolios=[

    {id:1,src:Todopng,para:"User can store his daily or some important tasks that are to be done.",
    demoLink:'https://vite-todoreact-2esgbuuml-priya-aryas-projects.vercel.app/',codeLink:'https://github.com/radhas-priya/vite-todoreact-app'},

    {id:2,src:notesApp,para:"User can create,delete or add notes.",
    demoLink:'https://notes-41zvxsb13-priya-aryas-projects.vercel.app/',codeLink:'https://github.com/radhas-priya/notes-app'},

    {id:3,src:blogapp ,para:"An app in which authenticated user can add,delete or modify his own blog.",
   demoLink:'https://github.com/radhas-priya/Blog-app', codeLink:'https://github.com/radhas-priya/Blog-app'},

    {id:4,src:textspeech,para:"A text to speech convertor app where you type and it will speak.",
    demoLink:'https://github.com/radhas-priya/textspeechapp',codeLink:"https://github.com/radhas-priya/textspeechapp"}
    
  ]
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-[600px]">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline-border-b-4 border-gray-500">
            Portfolio
          </h1>
          <p className="py-6 text-center text-2xl">Check out some of my work here </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
          portfolios.map(({id,src,para,demoLink,codeLink})=>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img className="rounded-md duration-200 hover:scale-105" src={src} alt="" />
              <p className="font-sans text-2xl ml-1 px-2 text-center">{para}</p> 
              <div className="flex items-center justify-center">
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 shadow-white-500 hover:scale-105 cursor-pointer">Demo</a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 shadow-white-500 hover:scale-105 cursor-pointer">Code</a>
              </div>
            </div>
          ))
        }
          </div>
    </div>
    </div>
  );
};

export default Portfolio;
