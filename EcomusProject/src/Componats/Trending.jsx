import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tred1 from "../images/electronic-8.png";
import Tred2 from "../images/electronic-9.jpg";
import Tred3 from "../images/electronic-10.png";
import Tred4 from "../images/electronic-11.png";
import Tred5 from "../images/electronic-12.png";
import Tred6 from "../images/electronic-13.png";
import Tred7 from "../images/electronic-14.png";
import Tred8 from "../images/electronic-15.png";
import Tred9 from "../images/electronic-16.jpg";
import Tred10 from "../images/electronic-17.jpg";
import Tred11 from "../images/electronic-18.jpg";
import Tred12 from "../images/electronic-19.jpg";

const Trendig = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
    };

    const products = [
        { img1: Tred1, img2: Tred2, title: "UltraGlass 2 Treated Screen Protectore for iphone 15 Pro", price: "$99.99" },
        { img1: Tred3, img2: Tred4, title: "Smart Light Switch with Thred", price: "$49.99" },
        { img1: Tred5, img2: Tred6, title: "SoundForm Rise", price: "$99.99" },
        { img1: Tred7, img2: Tred8, title: "Wireless on-Ear Headphones for kids", price: "$99.99" },
        { img1: Tred9, img2: Tred10, title: "3-in-1 Wireless Charger with official MagSafe Charging 15W", price: "$99.99" },
        { img1: Tred11, img2: Tred12, title: "3-in-1 Wireless Charger For Apple Device", price: "$99.99" },
    ];

    return (
        <div className="container mx-auto max-w-screen-xl px-4">
            <h1 className=" text-4xl mb-12">Trending Products</h1>
            <Slider {...settings}>
                {products.map((product, index) => (
                    <div className="tred-item  mt-5 rounded-lg overflow-hidden  relative group" key={index}>
                        <div className="tred-img m-4 relative overflow-hidden rounded-2xl h-96">
                            <img src={product.img1} alt={product.title} />
                            <img src={product.img2} alt="" className="back absolute top-0 left-0 w-full h-full  opacity-0  ease-in-out group-hover:opacity-100 group-hover:scale-110" />
                        </div>
                        <div className="tred-info text-[16px] font-sans absolute left-2 bottom-4">
                            <h3>{product.title}</h3>
                            <p>Price: {product.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Trendig;

