import React from "react";
import hero from "./Images/h1_hero.jpg";
import service_1 from "./Images/servicess1.png.webp";
import service_2 from "./Images/servicess2.png.webp";
import service_3 from "./Images/servicess3.png.webp";

function Home() {
  return (
    <>
      <div
        className="h-1/4 lg:h-screen bg-cover bg-center"
        style={{
          background: `linear-gradient(to right,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" w-full lg:h-screen h-1/4  ">
          <div className="lg:w-[80%]  w-full lg:mx-auto px-2 py-40 ">
            <div className="py-2">
              <p className="uppercase text-[15px] font-semibold text-white">
                <span className="inline-block w-8 h-[3px] bg-red-500"></span>{" "}
                hand car wash and detailing service
              </p>
              <h1 className=" ml-6 text-4xl lg:text-9xl uppercase font-bold text-red-500 lg:pb-3">
                Advanced
              </h1>
              <h1
                className=" ml-6 lg:ml-20 text-4xl lg:text-9xl uppercase font-bold pb-4"
                style={{
                  WebkitTextStroke: "1px white", // outline thickness & color
                  WebkitTextFillColor: "transparent", // keeps inside hollow
                }}
              >
                Construction
              </h1>
              <p className="uppercase text-[15px] font-semibold text-white">
                <span className="inline-block w-8 h-[3px] bg-red-500"></span>{" "}
                our service
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section heading   */}
      <div className="w-full lg:w-5/6 lg:mx-auto my-32">
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* Back text */}
          <span
            className="absolute top-0 left-0 text-7xl lg:text-[120px] font-[1000] z-10 opacity-10 uppercase"
            style={{
              WebkitTextStroke: "1px black", // outline thickness & color
              WebkitTextFillColor: "transparent",
            }}
          >
            Services
          </span>

          {/* Front text */}
          <span className="relative  lg:top-14 top-8 text-[35px] lg:text-[50px] font-[1000] z-20 uppercase text-black">
            our Services
          </span>
        </div>
      </div>
      {/* Services Section  cards   */}

      <div className="main flex lg:flex-row flex-col gap-y-8 justify-center items-center lg:gap-x-8  w-5/6  mx-auto lg:h-screen">
        <div className="card bg-[#F5F5F5] w-[400px] h-[500px] relative overflow-hidden border-b-2 border-red-500 border-solid">
          <div className="image w-full h-3/5">
            <img
              src={service_1}
              alt=""
              className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110"
            />
          </div>

          <div className="text">
            <h2
              className="w-[90%] mx-auto text-[25px] font-bold py-4 
               hover:text-red-500 hover:cursor-pointer 
               transition-colors duration-300 ease-in-out"
            >
              Engineering techniques & implementation
            </h2>
            <span className="capitalize  ml-8 text-[20px] font-semibold">read more</span>
            <button className=" ml-4 text-[25px]  hover:bg-red-500 px-2 hover:text-white">+</button>
          </div>
        </div>
        <div className="card bg-[#F5F5F5] w-[400px] h-[500px] relative overflow-hidden border-b-2 border-red-500 border-solid">
          <div className="image w-full h-3/5">
            <img
              src={service_2}
              alt=""
              className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110"
            />
          </div>

          <div className="text">
            <h2
              className="w-[90%] mx-auto text-[25px] font-bold py-4 
               hover:text-red-500 hover:cursor-pointer 
               transition-colors duration-300 ease-in-out"
            >
              Engineering techniques & implementation
            </h2>
            <span className="capitalize  ml-8 text-[20px] font-semibold">read more</span>
            <button className=" ml-4 text-[25px]  hover:bg-red-500 px-2 hover:text-white">+</button>
          </div>
        </div>
        <div className="card bg-[#F5F5F5] w-[400px] h-[500px] relative overflow-hidden border-b-2 border-red-500 border-solid">
          <div className="image w-full h-3/5">
            <img
              src={service_3}
              alt=""
              className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110"
            />
          </div>

          <div className="text">
            <h2
              className="w-[90%] mx-auto text-[25px] font-bold py-4 
               hover:text-red-500 hover:cursor-pointer 
               transition-colors duration-300 ease-in-out"
            >
              Engineering techniques & implementation
            </h2>
            <span className="capitalize  ml-8 text-[20px] font-semibold">read more</span>
            <button className=" ml-4 text-[25px]  hover:bg-red-500 px-2 hover:text-white">+</button>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Home;
