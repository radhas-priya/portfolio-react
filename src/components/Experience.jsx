import React from "react";
import htmlpng from "../assets/html.png";
import csspng from "../assets/css.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import react from "../assets/react.js logo.png";
import nodejs from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import bootstrappng from "../assets/bootstrappng.png";

const Experience = () => {
  const techs = [
    { id: 1, src: htmlpng, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: csspng, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "Javascript", style: "shadow-yellow-500" },
    { id: 4, src: mongodb, title: "Mongo db", style: "shadow-green-500" },
    { id: 5, src: react, title: "React", style: "shadow-blue-600" },
    { id: 6, src: nodejs, title: "Node js", style: "shadow-green-500" },
    { id: 7, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 8, src: bootstrappng, title: "Bootstrap", style: "shadow-purple-700" },

  ];
  
  return (
    <>
      <div
        name="experience"
        className="bg-gradient-to-b  from-gray-800 to-black w-full h-[180vh]"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-[150vh] text-white">
            <div>
          <p className="text-3xl  mt-20  font-bold border-b-4  border-gray-500  p-2  inline">
            Experience
          </p>
          <p className="py-4 text-xl font-bold mt-2 text-center">These are the technologies I have worked on</p>
        </div>
        
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-6 px-10 sm:px-0">

        {techs.map(({ id, src, title, style }) => (
          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img className="w-20 mx-auto" src={src} alt={title} />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
      </div>
      </div>
    </>
  );
};

export default Experience;
