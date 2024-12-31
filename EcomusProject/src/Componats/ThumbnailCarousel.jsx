import React, { useEffect } from 'react';
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
// Import images
import image1 from "../images/product1.jpg";
import image2 from "../images/product2.jpg";
import image3 from "../images/product3.jpg";
import image4 from "../images/product4.jpg";
import image5 from "../images/product5.jpg";
import image6 from "../images/product6.jpg";
import image7 from "../images/product7.jpg";
import image8 from "../images/product8.jpg";
import image9 from "../images/product9.jpg";
import image10 from "../images/product10.jpg";
import image11 from "../images/product11.jpg";
import image12 from "../images/product12.jpg";
import image13 from "../images/product13.jpg";
import image14 from "../images/product14.jpg";
import image15 from "../images/product15.jpg";
import image16 from "../images/product16.jpg";
import image17 from "../images/product17.jpg";
import image18 from "../images/product18.jpg";

const ThumbnailCarousel = () => {
  useEffect(() => {
    // Initialize main slider
    const main = new Splide("#main-slider", {
      type: "fade",
      heightRatio: 0.5,
      pagination: false,
      fixedHeight: 1300,
      cover: true,
    });

    // Initialize thumbnail slider
    const thumbnails = new Splide("#thumbnail-slider", {
      rewind: true,
      fixedWidth: 100,
      fixedHeight: 150,
      isNavigation: true,
      gap: 10,
      focus: "center",
      pagination: false,
      cover: true,
      arrows: false,
      dragMinThreshold: {
        mouse: 4,
        touch: 10,
      },
      breakpoints: {
        640: {
          fixedWidth: 66,
          fixedHeight: 38,
        },
      },
    });

    // Sync main and thumbnail sliders
    main.sync(thumbnails);

    // Mount the sliders
    main.mount();
    thumbnails.mount();

    // Cleanup on component unmount
    return () => {
      main.destroy();
      thumbnails.destroy();
    };
  }, []);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
  ];

  return (
    <div>
    <div className="slider-container ">
      {/* Thumbnail Slider */}
      <div className="thumbnail-slider">
        <div id="thumbnail-slider" className="splide ">
          <div className="splide__track">
            <ul className="splide__list flex flex-col gap-2 ">
              {images.map((img, index) => (
                <li key={index} className="splide__slide">
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Slider */}
      <div className="main-slider">
        <div id="main-slider" className="splide ">
          <div className="splide__track">
            <ul className="splide__list">
              {images.map((img, index) => (
                <li key={index} className="splide__slide">
                  <img src={img} alt={`Image ${index + 1}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ThumbnailCarousel;
