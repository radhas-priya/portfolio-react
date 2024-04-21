import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-full bg-gradient-to-b from-black to-gray-800
     p-4 text-white ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p  className='py-6 mt-10 text-xl text-center font-medium'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center'>
          <form action=" https://getform.io/f/lajkdokb" method="POST" className="flex   flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name" className="p-2 
            bg-transparent
             border-2 rounded-md
             text-white focus:outline-none" />
             <input type="text" name="email" placeholder="Enter your email" className="p-2 my-6 
            bg-transparent
             border-2 rounded-md 
             text-white focus:outline-none" /> 

             <textarea name="message"  rows="10" className=" bg-transparent
             border-2 rounded-md
             text-white focus:outline-none" placeholder="Enter your message "></textarea>
             <button className="text-white mt-6 bg-gradient-to-b from-cyan-500 to-blue-500 px-9 py-2 mx-auto
             flex items-center rounded-md hover:scale-110 duration-300 ">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact