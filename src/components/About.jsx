import React from "react";

const About = () => {
  return (
    <div
      name="about "
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <h1 className="text-6xl font-bold inline border-b-4  border-gray-500 text-white">
            About me
          </h1>
          
          <p className="text-2xl mt-20 text-center">
         A  Web Developer with expertise of React.js, Redux, HTML CSS and schemaless Database like mongodb ,
           currently trying my best in sharpning the skills with engaging augmentations.
              <p className="text-2xl mt-20 text-center">I remain curious for  learning about new technologies.
              i have also worked with python and java languages but
              I love javascript  more then other programming languages
               because of its super engaging behaviour.
           
            I aspires to be a consistent Full stack developer who keeps on working on the skills so 
            that i can deliever products that fulfills the requirements.
              </p>
            
          <br />
              </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
