import React, { useState } from "react";
// ------------------------------React images------------------
import logo from "./Images/logo.png";

// --------------------------React Icons-----------------------
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

function Header() {
  const [open, setopen] = useState(false);
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to left, #213448, #3e4160)",
          color: "white",
          padding: "10px 0",
        }}
      >
        <div className="hidden lg:flex lg:justify-between px-20 py-1 ">
          <div className="flex justify-between gap-x-10">
            <p className="text-[14px] font-semibold">+(123) 1234-567-8901</p>
            <p className="text-[14px] font-semibold"> info@domain.com</p>
            <p className="text-[14px] font-semibold">
              Mon - Sat 8:00 - 17:30, Sunday - CLOSED
            </p>
          </div>

          <div className="social flex justify-center items-center gap-x-8">
            <IoLogoTwitter className="text-1xl hover:text-red-400 cursor-pointer duration-700 hover:scale-x-[-1]" />
            <FaFacebookF className="text-1xl hover:text-red-400 cursor-pointer duration-700 hover:scale-x-[-1]" />
            <FaLinkedinIn className="text-1xl hover:text-red-400 cursor-pointer duration-700 hover:scale-x-[-1]" />
            <FaGooglePlusG
              className="text-2xl hover:text-red-400 cursor-pointer duration-700 hover:scale-x-[-1]
"
            />
          </div>
        </div>
        <hr className="my-3 opacity-15 hidden lg:block" />
      
          <div className="header-nav flex justify-between  px-2 lg:px-20 py-1 relative">
            <div className="logo">
              <img src={logo} alt="" className="w-40 lg:w-60" />
            </div>
            <div className="navbar flex items-center">
              <ul className=" hidden lg:flex lg:justify-center gap-x-6 items-center">
                <li>
                  <a
                    href="#"
                    className="text-[14px] tracking-wide font-semibold text-red-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] tracking-wide font-semibold hover:text-red-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] tracking-wide font-semibold hover:text-red-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] tracking-wide font-semibold hover:text-red-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] tracking-wide font-semibold hover:text-red-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] tracking-wide font-semibold hover:text-red-300"
                  >
                    Pages
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[14px] tracking-wide font-semibold hover:text-red-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex items-center">
              <button className="px-4 py-3 uppercase text-[14px]  tracking-wide font-semibold bg-[#ff5f13] rounded-lg">
                Contact Now
              </button>
            </div>
            <div className="w-3/4 bg-[#44444E] p-2  absolute top-8 my-2 right-2 lg:hidden">
              <div className="flex justify-end items-end">
                <button
                  onClick={() => setopen(!open)}
                  className="flex uppercase justify-center items-center bg-black p-2 gap-x-1"
                >
                  menu <TiThMenu />{" "}
                </button>
              </div>
              {open && (
                <ul className=" ">
                  <li>
                    <a
                      href="#"
                      className="text-[14px] tracking-wide font-semibold"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[14px] tracking-wide font-semibold"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[14px] tracking-wide font-semibold"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[14px] tracking-wide font-semibold"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[14px] tracking-wide font-semibold"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[14px] tracking-wide font-semibold"
                    >
                      Pages
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[14px] tracking-wide font-semibold"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
     
    </>
  );
}

export default Header;
