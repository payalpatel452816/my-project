import React from "react";
import img1 from "../images/shop-1.jpg";
import img2 from "../images/shop-2.jpg";
import img3 from "../images/shop-3.jpg";
import img4 from "../images/shop-4.png";
import img5 from "../images/shop-5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopByCategory = () => {
  const settings2 = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h1 className="text-3xl mx-6 mb-10">Shop by category.</h1>
      <div className="mx-20 py-10">
        <Slider {...settings2}>
          <div className="relative max-w-72 mx-auto h-auto overflow-hidden ">
            <img
              src={img1}
              alt="shop-1"
              className="  rounded-lg transition-all duration-[3s] hover:scale-105"
          />
            <div className="absolute top-2   flex flex-col items-start justify-start p-4 text-white text-center">
              <h4 className="  text-black font-semibold mb-2">
                Screen Protection
              </h4>
              <p className="mb-4 text-black">6 items</p>
              <button className="bg-white hover:bg-black hover:text-white text-black text-sm py-2 my-40 px-4 rounded-md shadow-md">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative  max-w-72 mx-auto h-auto overflow-hidden">
            <img src={img2} alt="shop-2" className=" rounded-lg transition-all duration-[3s] hover:scale-105 " />
            <div className="absolute top-2   flex flex-col items-start justify-start p-4 text-white text-center">
              <h4 className="  text-black font-semibold mb-2">
                Screen Protection
              </h4>
              <p className="mb-4 text-black">6 items</p>
              <button className="bg-white hover:bg-black hover:text-white text-black text-sm py-2 my-40 px-4 rounded-md shadow-md">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative  max-w-72 mx-auto h-auto overflow-hidden">
            <img src={img3} alt="shop-3" className="rounded-lg transition-all duration-[3s] hover:scale-105" />
            <div className="absolute top-2  flex flex-col items-start justify-start p-4 text-white text-center">
              <h4 className="  text-black font-semibold mb-2">Cables</h4>
              <p className="mb-4 text-black">6 items</p>
              <button className="bg-white hover:bg-black hover:text-white text-black text-sm py-2 my-40 px-4 rounded-md shadow-md">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative max-w-72 mx-auto h-auto overflow-hidden ">
            <img src={img4} alt="shop-4" className="rounded-lg transition-all duration-[3s] hover:scale-105" />
            <div className="absolute top-2   flex flex-col items-start justify-start p-4 text-white text-center">
              <h4 className="  text-black font-semibold mb-2">Adopters</h4>
              <p className="mb-4 text-black">6 items</p>
              <button className="bg-white hover:bg-black hover:text-white text-black text-sm py-2 my-40 px-4 rounded-md shadow-md">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative max-w-72 mx-auto h-auto overflow-hidden">
            <img src={img5} alt="shop-5" className="rounded-lg transition-all duration-[3s] hover:scale-105" />
            <div className="absolute top-2 flex flex-col items-start justify-start p-4 text-white text-center">
              <h4 className="  text-black font-semibold mb-2">
                Docks and hubs.
              </h4>
              <p className="mb-4 text-black">6 items</p>
              <button className="bg-white hover:bg-black hover:text-white text-black text-sm py-2 my-40 px-4 rounded-md shadow-md">
                Shop Now
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ShopByCategory;
