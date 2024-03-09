import React from "react";
import Button from "../components/Button";


function Home() {


  return (
    <div className="md:mx-48">
      
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded select-none"
              alt="hero"
              src="/hero.svg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <span className="custom_text custom_text_second">HEYY</span> !! &nbsp;
              <br className="hidden lg:inline-block" />
              I'm <span className="custom_text custom_text_second">Bandhan</span> 
            </h1>
            <p className="mb-8 leading-relaxed text-justify select-none">
              I'm a Kathmandu-based Front End Web Developer passionate about web
              development, video editing and graphic design, with two years of coding
              experience. I aim to bring innovation to projects by redefining
              digital experiences through seamless UIs and captivating designs,
              blending technical skills with creative vision to craft unique
              digital experiences.
            </p>
            <div className="flex justify-center">
              <button className="py-2 px-6 bg-black dark:bg-dark-2 border-dark dark:border-dark-2 border inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color">
                <a href="https://youtube.com/@ItzBandhan/" target="_blank"> Watch Now</a>
                
              </button>
              <button className="py-2 px-6 ml-3 md:ml-8 bg-gray-300 dark:bg-dark-2 border-dark dark:border-dark-2 border inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-black hover:bg-body-color hover:border-body-color">
                <a href="/projects">Projects</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
