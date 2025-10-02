import React from "react";
import hero from "./Images/h1_hero.jpg"

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
              <h1 className=" ml-6 text-4xl lg:text-9xl uppercase font-bold text-red-500 lg:pb-3">Advanced</h1>
              <h1 className=" ml-6 lg:ml-20 text-4xl lg:text-9xl uppercase font-bold pb-4"
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
    </>
  );
}

export default Home;
