
import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hi, I'm Ankit Kumar.  </h1>
           <br className="hidden lg:inline-block" /> <h3 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">  I am always ready to have new experiences, meet new people and learn new things.</h3>
        
          <p className="mb-8 leading-relaxed">
          I am pursuing Bachelor of Technology in Computer Science (B.tech in CSE) from Centurion University of Technology and Management ( HTTPS://WWW.CUTM.AC.IN ), Paralakhemundi, Odisha.
          I find the idea of creating value for people and impacting the world through my work gratifying. <br/>

I am a part of different companies campus ambassador program like #HackerEarth, #Internshala, #LearnVern, #IMNU, which helps me to develop my leadership skills and many other things. As these Programming club has on my campus, it will help people upgrade themselves and provide a powerful platform for all the tech enthusiasts and me to collaborate to work on creative ideas and learn new concepts about web developments and all the latest technologies.
<br/>
Apart from this I recently started a coding club on my campus with my respected teachers and seniors. We are very curious to help, teach and learn from others, and currently, we are working on three real-world problem projects. Being a part of this club, I am very excited to learn new technologies and help my fellow mates know what it takes to develop an application.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}