import React from "react";

const About = () => {
  return (
    <div
      name="about "
      className="w-full h-[120vh] bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <h1 className="text-3xl font-bold inline border-b-4  border-gray-500 text-white">
            About me
          </h1>
          
          <p className="text-xl mt-14 text-center">
         A  Web Developer with expertise of React.js, Redux, HTML CSS and schemaless Database like mongodb ,
           currently trying my best in sharpning the skills with engaging augmentations.
           <br />
              <p className="text-xl mt-6 text-center">I remain curious for  learning about new technologies.
              i have also worked with python and java languages but i love javascript more beacuse of its huge hype
             and awesome frameworks.
            I aspires to be a consistently successfull Full stack developer who keeps on working on the skills so 
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
