import React from 'react'
import Paryabw from "../assets/Paryabw.png"
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';
function Home() {
  
  return (
    <>
    <div name="home " className=" h-[150vh] w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-xl font-bold text-white ">A Full Stack Web Developer 
          <p className="text-gray-500 py-2 max-w-md">
          A Cse graduate,A fresher and a passionate web developer who is learning and enhancing with 
            superlative new technologies.
          </p>
          </h2>
          <div>
            <Link  to ="portfolio" smooth duration={500} className='group text-white w-fit px-2 py-1 my-2 flex items-center
             rounded-lg bg-gradient-to-r 
            from-gray to-slate-400
             cursor-pointer text-4xl shadow-md'>
              Portfolio
              <span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight size={30}/>
              </span>
            </Link>
          </div>
        </div>

        <div className="h-[400px] w-[400px] rounded-full p-[10px 11px] overflow-hidden">
          <img className=" object-cover object-center h-full w-full md:w-full" src={Paryabw} alt="" /></div>

      </div>
    </div>

    </>

  )
}

export default Home