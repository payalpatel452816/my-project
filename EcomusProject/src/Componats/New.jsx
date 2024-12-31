import React, { useState } from "react";
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

const New = () => {
  const [currentImage, setCurrentImage] = useState(); 

  const handleImageChange = (newImage) => {
    setCurrentImage(newImage);
  };

  return (
    <div>
      <div className="bg-custom-gradient text-center h-40 mt-20 pt-14 w-full">
        <h1 className="text-4xl">New Arrival</h1>
        <p>Shop through our latest selection of Fashion</p>
      </div>
      <div className="main-container">
        <div className="container">
          <div className="list-grid">
            <div className="list-item">
              <div className="list-img">
                <img src={currentImage} alt="Product" />
                <img src={list14} alt="Back" className="rear" />
              </div>
              <div className="list-info">
                <h3>Ribbed Tank Top</h3>
                <p>Price: $99.99</p>
              </div>
              <div className="flex gap-2">
                {/* Color buttons with hover effect */}
                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                    onMouseEnter={() => handleImageChange(list11)} // Change image on hover
                    onMouseLeave={() => handleImageChange(list14)} // Revert image on hover leave
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Orange
                  </div>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-black rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                    onMouseEnter={() => handleImageChange(list1)} // Change image on hover
                    onMouseLeave={() => handleImageChange(list11)} // Revert image on hover leave
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Black
                  </div>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    className="w-5 h-5 bg-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-500"
                    onMouseEnter={() => handleImageChange(list14)} // Change image on hover
                    onMouseLeave={() => handleImageChange(list14)} // Revert image on hover leave
                  ></button>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 text-sm text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    White
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default New;
