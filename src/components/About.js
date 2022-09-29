import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function About() {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-xl mt-5">
          I have started my career in web development from May-2021 and
          completed MERN stack course in Guvi Geeks Pvt Ltd, Where i get more
          explore about frontend,backend and database technologies.
        </p>
        <p className="text-xl my-5">
          Coding, its make me more interest to learn more technologies, and
          looking for the right place to gain strong knowledge on full stack.
        </p>
        <div>
          <p className="text-2xl font-bold inline border-b-4 border-gray-500">
            Qualification
          </p>
        </div>

        <p className="text-xl my-5">
          I have completed BE-Mechanical Engineering in 2015 and have around 5
          year Non-IT experience in different companies and different role like
          production supervisor, customer care executive,operation officer.
        </p>
        
        <div>
            <Link
              to="Contact"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Know More
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default About;
