import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import img4 from "../images/banner-collection-3.jpg";
import img5 from "../images/shop-6.jpg";
import img6 from "../images/electronic-7.jpg";
import img7 from "../images/collection-72.jpg";
import ShopByCategory from "../Componats/ShopByCategory";
import Trendig from "../Componats/Trending";
import { FiBox } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { HiMiniArrowTurnDownLeft } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import WhiteFooter from "../Componats/WhiteFooter";
import Review from "../Componats/Review";
import BlogPost from "../Componats/BlogPost";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    slickNext: false,
    arrows: false,
  };
  return (
    
    <div>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" className="" />
          <div className="relative">
            <p className="absolute bottom-96 left-20 font-sans text-[20px]">
              UP TO 40% OFF CHARGERS AND MORE.
            </p>
            <h1 className="absolute bottom-32 left-20  font-sans text-[80px]">
              Saving for
              <br />
              dads and grads.
            </h1>
            <a
              href="#_"
              class="absolute bottom-20 left-20 rounded px-5 py-2.5 overflow-hidden group bg-black  hover:bg-gradient-to-r hover:from-black hover:to-black text-white  transition-all ease-out duration-300"
            >
              <span class="absolute  top-10 left-24  w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span>Shop Collection</span>
            </a>
          </div>
        </div>
        <div>
          <img src={img2} alt />
          <div className="relative">
            <p className="absolute bottom-96 left-20 font-sans text-[20px]">
              UP TO 40% OFF CHARGERS AND MORE.
            </p>
            <h1 className="absolute bottom-60 left-20  font-sans text-[80px]">
              Modern design
            </h1>
            <a
              href="#_"
              class="absolute bottom-40 left-20 rounded px-5 py-2.5 overflow-hidden group bg-black  hover:bg-gradient-to-r hover:from-black hover:to-black text-white  transition-all ease-out duration-300"
            >
              <span class="absolute  top-10 left-24  w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span>Shop Collection</span>
            </a>
          </div>
        </div>
        <div>
          <img src={img3} alt />
          <div className="relative">
            <p className="absolute bottom-96 left-20 font-sans text-[20px]">
              UP TO 40% OFF CHARGERS AND MORE.
            </p>
            <h1 className="absolute bottom-60 left-20  font-sans text-[80px]">
              Fast charging
            </h1>
            <a
              href="#_"
              class="absolute bottom-40 left-20 rounded px-5 py-2.5 overflow-hidden group bg-black  hover:bg-gradient-to-r hover:from-black hover:to-black text-white  transition-all ease-out duration-300"
            >
              <span class="absolute  top-10 left-24  w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span>Shop Collection</span>
            </a>
          </div>
        </div>
      </Slider>

      {/* SHOP BY CATEGORY */}
      <section>
        <ShopByCategory />
      </section>

      {/* img with best deal section */}
      <div className="relative m-20">
        <img
          src={img4}
          alt="Sale Image"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-start items-start my-20 text-center  p-8">
          <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
            SALE UP TO 30% OFF TODAY
          </h4>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Best Deals Discounts
          </h1>
          <p className="text-lg text-white mb-6">
            Fast wireless charging on-the-go.
          </p>
          <a
            href="#_"
            class=" rounded-full px-5 py-2.5 overflow-hidden group bg-[#93f859] relative hover:bg-gradient-to-r hover:from-[#93f859] hover:to-[#93f859] text-white  transition-all ease-out duration-300"
          >
            <span class="absolute right-0 w-8  h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative">Shop Collection</span>
          </a>
        </div>
      </div>
      {/* end this section */}

      {/* SOME PRODUCT */}
      <div className="demo">
        <div className="demo1">
          <img src={img5} alt="" />
          <h2>HOT ACCESSORIES</h2>
          <h1>Smart Assistant</h1>
          <button>Shop Now</button>
        </div>
        <div className="demo2">
          <img src={img6} alt="" className="" />
          <h2>FAST AND FREE SHIPPING</h2>
          <h1>True Earbuds</h1>
          <button>Shop Now</button>
        </div>
      </div>

      {/* ADD FOR SHOP */}
      <div className=" grid grid-cols-2  m-20">
        <div className="h-fit  my-6">
          <img src={img7} alt="Banner Image" />
        </div>
        <div className="justify-center h-fit text-start px-24 bg-[#93f859] items-center  py-[76px] my-6">
          <h5 className="text-xs font-sans uppercase tracking-wider text-black mb-2">
            ULTIMATE APPLE ACCESSORY.
          </h5>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            60% Discount
          </h1>
          <p className="text-gray-600 text-xs  mb-4">
            Find the latest and greatest gadgets to enhance your electronic
            devices
          </p>
          <p className="text-lg font-medium mb-6">
            <b>Hurry up!</b> Deals end in:
          </p>
          <div className="flex justify-center  gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <span className="text-3xl font-bold block text-white text-center">
                00
              </span>
              <p className="text-sm font-semibold text-gray-300">Days</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <span className="text-3xl font-bold block  text-white text-center">
                00
              </span>
              <p className="text-sm font-semibold text-gray-300">Hours</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <span className="text-3xl font-bold block text-white text-center">
                00
              </span>
              <p className="text-sm font-semibold text-gray-300">Minutes</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <span className="text-3xl font-bold block text-white text-center">
                00
              </span>
              <p className="text-sm font-semibold text-gray-300">Seconds</p>
            </div>
          </div>
          
        </div>
      </div>
      {/* TENDING PRODUCT */}
      <section>
        <Trendig />
      </section>
      {/* REVIEW */}
      <section>
        <Review />
      </section>
      {/* BLOGPOST */}
      <section>
        <BlogPost />
      </section>

      {/* shop policy */}
      <section className="bg-slate-200 w-full flex justify-around items-center h-60 mt-10 p-6">
        <div className="flex items-center space-x-4">
          {/* icon */}
          <FiBox className="h-16 w-16 border  bg-white  p-4 rounded-full" />
          <div>
            <h1>Free Shipping</h1>
            <p>Free shipping over order $120</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FiCreditCard className="h-16 w-16 border  bg-white  p-4 rounded-full" />
          <div>
            <h1>Flexible Payment</h1>
            <p>Pay with Multiple Credit Cards</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <HiMiniArrowTurnDownLeft className="h-16 w-16 border  bg-white  p-4 rounded-full" />
          <div>
            <h1>14 Day Returns</h1>
            <p>Within 30 days for an exchange</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <BiSupport className="h-16 w-16 border  bg-white  p-4 rounded-full" />
          <div>
            <h1>Premium Support</h1>
            <p>Outstanding premium support</p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <section>
        <WhiteFooter />
      </section>
    </div>
  );
};

export default Home;
