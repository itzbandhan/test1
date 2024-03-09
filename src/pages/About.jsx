import React from "react";
import "../css/pages/About.css";

function About() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-2/3 mx-auto">
            <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center  absolute inset-0"
                src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/419705627_18015404738106366_4371420958235081662_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=H0zhDn7FckkAX-pUpMX&_nc_ht=scontent.fktm8-1.fna&oh=00_AfC5R5INKE68QoA_EFCS3CLLuF3nGB0iVG7NuS1aPZiFxg&oe=65F1BB99"
              />
            </div>
            <h1 className="custom_text font-bold custom_text_main">Hi again,
            <br/>
             I am Bandhan</h1>
          </div>
          <p className="leading-relaxed text-justify select-none py-32 px-10 text-lg md:mx-48">
            From the vibrant heart of Kathmandu, Nepal, I bring a passion for
            Front End Web Development, blending web design and graphic artistry.
            Over the past couple of years, I've immersed myself in coding,
            refining my skills amidst the ever-changing tech landscape. Fueled
            by a desire to innovate, my goal is to reimagine digital experiences
            with fresh designs and intuitive interfaces. With a sharp eye for
            detail and a knack for creativity, I strive to inject individuality
            into each project. But my talents don't stop there. Alongside web
            development, I'm also a proficient video editor, weaving stories and
            visuals seamlessly. Whether it's crafting captivating websites or
            editing compelling videos, my aim is to leave a lasting impact.
            <br />
            <span className="p-4 md:block"></span>
            As I journey forward, I eagerly anticipate exploring new horizons,
            challenging myself, and leaving my mark on the digital design world.
            With a thirst for learning and a drive for excellence, I
            continuously seek to expand my skill set and stay ahead of emerging
            trends in both web development and video editing. Moreover, I am
            passionate about leveraging my expertise to contribute to the growth
            of the IT sector in Nepal, aiming to build my skills further and
            make a meaningful impact for my country's technological advancement.
            Embarking on this journey fills me with excitement to explore new
            possibilities, push my limits, and fulfill my vision of contributing
            to the development of my country's IT industry.
          </p>
        <div className="items-center justify-center flex w-full h-10 custom_text custom_text_second" >HAAPY CODING!</div>
        </div>
      </section>
    </div>
  );
}

export default About;
