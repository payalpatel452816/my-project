import React from "react";
import list1 from "../images/black-1.jpg";
import list2 from "../images/black-2.jpg";
import list3 from "../images/black-3.jpg";
import list4 from "../images/blue.jpg";
import list5 from "../images/brown-2.jpg";
import list6 from "../images/brown-3.jpg";
import list7 from "../images/brown.jpg";
import list8 from "../images/green.jpg";
import list9 from "../images/light-green-1.jpg";
import list10 from "../images/light-green-2.jpg";
import list11 from "../images/orange-1.jpg";
import list12 from "../images/pink-1.jpg";
import list13 from "../images/purple.jpg";
import list14 from "../images/white-1.jpg";
import list15 from "../images/white-2.jpg";
import list16 from "../images/white-3.jpg";
import list17 from "../images/white-4.jpg";
import list18 from "../images/white-5.jpg";
import list19 from "../images/white-6.jpg";
import BlackFooter from "./BlackFooter";

const NewArrival = () => {
  return (
    <div>
      <div className="bg-custom-gradient text-center h-40  mt-20 pt-14 w-full">
        <h1 className="text-4xl">New Arrival</h1>
        <p>Shop through our latest selection of Fashion</p>
      </div>
      <div className="main-container">
        <div className="container">
          <div className="list-grid">
            <div className="list-item">
              <div className="list-img">
                <img src={list11} alt=" " />
                <img src={list14} alt=" " className="rear" />
              </div>
              <div className="list-info">
                <h3>Ribbed Tank Top</h3>
                <p>Price: $99.99</p>
              </div>
              <div className="flex gap-2">
                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Orange
                  </div>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-black rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Black
                  </div>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    White
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item">
              <div className="list-img">
                <img src={list8} alt=" " />
                <img src={list13} alt=" " className="rear" />
              </div>
              <div className="list-info">
                <h3>Ribbed modal T-shirt</h3>
                <p>Price: $99.99</p>
              </div>
              <div className="flex gap-2">
                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-[#977945] rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Brown
                  </div>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-[#d966d9]  rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Light Perple
                  </div>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-[#caffd6] rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    light Green
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item">
              <div className="list-img">
                <img src={list16} alt=" " />
                <img src={list17} alt=" " className="rear" />
              </div>
              <div className="list-info">
                <h3>Oversized Printed T-shirt</h3>
                <p>Price: $99.99</p>
              </div>
            </div>
            <div className="list-item">
              <div className="list-img">
                <img src={list2} alt=" " />
                <img src={list12} alt=" " className="rear" />
              </div>
              <div className="list-info">
                <h3>Oversized Printed T-shirt</h3>
                <p>Price: $99.99</p>
              </div>
              <div className="flex gap-2">
                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    White
                  </div>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-[#d966d9] rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Pink
                  </div>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-black rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Black
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item">
              <div className="list-img">
                <img src={list5} alt=" " />
                <img src={list6} alt=" " className="rear" />
              </div>
              <div className="list-info">
                <h3>V-neck linen T-shirt</h3>
                <p>Price: $99.99</p>
              </div>
              <div className="flex gap-2">
                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-[#977945] rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Brown
                  </div>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    White
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item">
              <div className="list-img">
                <img src={list9} alt=" " />
                <img src={list10} alt=" " className="rear" />
              </div>
              <div className="list-info">
                <h3>Loose Fit Sweatshirt</h3>
                <p>Price: $99.99</p>
              </div>
              <div className="flex gap-2">
                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-[#caffd6] rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Light Green
                  </div>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-black rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Black
                  </div>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-[#a8bcd4] rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-black bg-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Blue
                  </div>
                </div>
                <div className="relative group">
    <button type="button" className="w-5 h-5 bg-[#00008b] rounded-full flex items-center justify-center cursor-pointer transition-all duration-500">
    </button>
    <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Dark Blue
    </div>
  </div>
  <div className="relative group">
    <button type="button" className="w-5 h-5 bg-White rounded-full flex items-center justify-center cursor-pointer transition-all duration-500">
    </button>
    <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      White
    </div>
  </div>
  <div className="relative group">
    <button type="button" className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500">
    </button>
    <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Orange
    </div>
  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <center>
        <hr className="my-8 w-[90%]  border-gray-700" />
      </center>
      <div>
        <BlackFooter />
      </div>
    </div>
  );
};

export default NewArrival;
