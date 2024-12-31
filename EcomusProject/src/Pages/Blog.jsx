import React from "react";
import img1 from "../images/blog-2.jpg";
import img2 from "../images/blog-3.jpg";
import img3 from "../images/blog-4.jpg";
import img4 from "../images/blog-5.jpg";
import img5 from "../images/blog-6.jpg";
import img6 from "../images/blog-7.jpg";
import img7 from "../images/blog-8.jpg";
import img8 from "../images/blog-9.jpg";
import BlackFooter from "../Componats/BlackFooter";

const Blog = () => {
  const blogPosts = [
    {
      img: img1,
      title: "The next generation of leather alternatives",
      link: "blog-detail",
    },
    {
      img: img2,
      title: "An Exclusive Clothing Collaboration",
      link: "blog-detail",
    },
    {
      img: img3,
      title: "Hello Fashion by Colombian-American",
      link: "blog-detail",
    },
    { img: img4, title: "Christine Is A True Style Icon", link: "blog-detail" },
    {
      img: img5,
      title: "Effortlessly Blends The Carefree Style",
      link: "blog-detail",
    },
    {
      img: img6,
      title: "The Variety Of Styles And Prices Are Endless",
      link: "blog-detail",
    },
    {
      img: img7,
      title: "Something About This Style Of Jeans",
      link: "blog-detail",
    },
    {
      img: img8,
      title: "One Of The Most Iconic Fashion Bloggers",
      link: "blog-detail",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="bg-custom-gradient text-center h-40 text-4xl mt-20 pt-14 w-full">Blog Grid</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 p-5 md:p-20 gap-6">
        {blogPosts.map((post, index) => (
          <div className="relative overflow-hidden" key={index}>
            <img
              className="h-auto max-w-96 rounded-lg  duration-[3s] ease-in-out transform hover:scale-110"
              src={post.img}
              alt={`Blog post`}
            />
            <button className="absolute bottom-20 left-3 w-40 h-10 flex items-center justify-center bg-white text-black text-[14px] font-sans hover:bg-gray-200 transition-colors">
              ACCESORIES
            </button>
            <div>
              <a
                href={post.link}
                className="text-lg sm:text-base md:text-lg pt-6 font-sans text-gray-800 hover:text-gray-600"
              >
                {post.title}
              </a>
            </div>
            <div className="artical-btn mt-2">
              <a href="btn" className="text-sm text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <center>
     <hr className="my-8 w-[90%]  border-gray-700" />
     </center>
     <div>
      <BlackFooter/>
     </div>
    </div>
  );
};

export default Blog;
