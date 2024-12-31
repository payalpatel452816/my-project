import React from "react";
import footerlogo from "../images/logo-white.svg";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import add1 from "../images/add1.png";
import add2 from "../images/add2.png";
import add3 from "../images/add3.png";
import add4 from "../images/add4.png";
import add5 from "../images/add5.png";

const BlackFooter = () => {
  return (
    <div>
      <section className="bg-[#ffffff] text-[#000000] font-serif py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div>
            <img src={footerlogo} alt="Footer Logo" className="mb-4" />
            <div className="text-[14px] font-sans ">
              <p>
                Address: 1234 Fashion Street, Suite 567, <br />
                New York, NY 10001
              </p>
              <p>Email: info@fashionshop.com</p>
              <p>Phone: (212) 555-1234</p>
              <button className="underline text-white flex items-center gap-2 mt-4">
                Get Directions <MdArrowOutward />
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4  ">
              <FaFacebookF className=" h-9 w-10 text-xl p-2 m-1 border   rounded-full" />
              <BsTwitterX className=" h-9 w-10  text-xl p-2 m-1  border   rounded-full" />
              <FaTiktok className=" h-9 w-10  text-xl p-2 m-1 border   rounded-full" />
              <FaInstagram className=" h-9 w-10   text-xl p-2 m-1 border  rounded-full" />
              <FaPinterest className=" h-9 w-10   text-xl p-2 m-1 border  rounded-full" />
            </div>
          </div>
          <div>
            <h1 className="text-[18px] font-sans mb-4">Help</h1>
            <ul className="text-[14px] font-sans">
              <li>
                <h6>Privacy Policy</h6>
              </li>
              <li>
                <h6>Returns + Exchanges</h6>
              </li>
              <li>
                <h6>Shipping</h6>
              </li>
              <li>
                <h6>Terms & Conditions</h6>
              </li>
              <li>
                <h6>FAQ's</h6>
              </li>
              <li>
                <h6>My Wishlist</h6>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-[18px] font-sans  mb-4">About Us</h1>
            <ul className="text-[14px] font-sans">
              <li>
                <h6>Our Story</h6>
              </li>
              <li>
                <h6>Visit Our Store</h6>
              </li>
              <li>
                <h6>Contact Us</h6>
              </li>
              <li>
                <h6>Account</h6>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-[18px] font-sans mb-4">Sign Up for Email</h1>
            <p className="text-[14px]">
              Sign up to get first dibs on new arrivals,sales, exclusive
              content, events, and more!
            </p>
            <label
              class="mx-auto mt-10 py-1  relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border  px-1  gap-2  focus-within:border-gray-300"
              for="search-bar"
            >
              <input
                id="search-bar"
                placeholder=" Enter your email.."
                class=" w-full  flex-1  text-xs outline-none bg-white"
              />
              <a
                href="#_"
                class="relative px-2 py-2 overflow-hidden group text-xs bg-black  hover:bg-gradient-to-r hover:from-black hover:to-black text-white  transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">Subscribe</span>
              </a>
            </label>
          </div>
        </div>
        <center>
          <hr className="my-8 w-[90%]  border-gray-700" />
        </center>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-center sm:text-left">
              <p className="text-sm">
                Copyright © 2024 Ecomus Store. All Rights Reserved.
              </p>
            </div>
            <div className="flex gap-4 justify-center sm:justify-start">
              <img src={add1} alt="Ad 1" className="h-6" />
              <img src={add2} alt="Ad 2" className="h-6" />
              <img src={add3} alt="Ad 3" className="h-6" />
              <img src={add4} alt="Ad 4" className="h-6" />
              <img src={add5} alt="Ad 5" className="h-6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlackFooter;
