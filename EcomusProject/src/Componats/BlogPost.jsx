import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import blog1 from "../images/electronic-1.jpg";
import blog2 from "../images/electronic-2.jpg";
import blog3 from "../images/electronic-3.jpg";
import blog4 from "../images/electronic-4.jpg";
import blog5 from "../images/electronic-5.jpg";
import blog6 from "../images/electronic-6.jpg";

const BlogPost = () => {
  useEffect(() => {
    new Splide("#blog-slider", {
      perPage: 3,
      perMove: 1,
      breakpoints: {
        640: {
          perPage: 1,
        },
      },
    }).mount();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Blog Post</h1>
      </div>
      <div id="blog-slider" className="splide mt-10">
        <div className="splide__track">
          <ul className="splide__list">
            {[ 
              { img: blog1, title: 'pop-punk is back in fashion' },
              { img: blog2, title: 'The next generation of leather alternatives' },
              { img: blog3, title: 'An Exclusive Clothing Collaboration' },
              { img: blog4, title: 'The next generation of leather alternatives' },
              { img: blog5, title: 'The next generation of leather alternatives' },
              { img: blog6, title: 'The next generation of leather alternatives' },
            ].map((blog, index) => (
              <li key={index} className="splide__slide">
                <div className="blog-item p-4">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Image with hover zoom effect */}
                    <img
                      className="w-full h-96 object-cover transition-all duration-[4s] hover:scale-125 "
                      src={blog.img}
                      alt={blog.title}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold">{blog.title}</p>
                    <button className="mt-2 text-black px-4 py-2 underline hover:text-green-600">
                      Read More
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
