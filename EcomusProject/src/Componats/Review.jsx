import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import review1 from '../images/electronic-16.jpg';
import review2 from '../images/electronic-8.png';
import review3 from '../images/electronic-10.png';
import review4 from '../images/electronic-12.png';

const reviews = [
  {
    title: 'Best Online Fashion Site',
    name: 'Robert Smith',
    country: 'USA',
    review: 'I always find something stylish and affordable on this web fashion site.',
    product: '3-in-1 Wireless Charger with Official MagSafe Charging 15G',
    price: '$105.95',
    image: review1,
  },
  {
    title: 'Great Selection and Quality',
    name: 'Allen Lyn',
    country: 'France',
    review: 'I love this variety of styles and the high-quality clothing on this web fashion site.',
    product: 'SoundForm Rise',
    price: '$7.95',
    image: review2,
  },
  {
    title: 'Best Customer Service',
    name: 'Peter Rope',
    country: 'USA',
    review: 'I finally found a web fashion site with stylish and flattering options in my size.',
    product: 'UltraGlass 2 Treated Screen protector for iPhone 15 pro',
    price: '$18.95',
    image: review3,
  },
  {
    title: 'Great Selection and Quality',
    name: 'Robert Smith',
    country: 'USA',
    review: 'I love this variety of styles and the high-quality clothing on this web fashion site.',
    product: '3-in-1 Wireless Charger with Official MagSafe Charging 15W',
    price: '$16.95',
    image: review4,
  },
];

const Review = () => {
  useEffect(() => {
    new Splide('#image-slider', {
      perPage: 3,
      breakpoints: {
        640: {
          perPage: 1,
        },
      },
    }).mount();
  }, []);

  return (
    <div className="bg-slate-200 h-fit m-20">
      <div className="text-center font-sans p-4">
        <h1 className="text-4xl">Happy Clients</h1>
        <p className='mt-4'>See what our satisfied customers have to say about our electronic accessories.</p>
      </div>

      <div id="image-slider" className="splide p-4">
        <div className="splide__track">
          <ul className="splide__list">
            {reviews.map((review, index) => (
              <li className="splide__slide" key={index}>
                <div className="flex rounded-lg h-auto  m-10 w-80 dark:bg-gray-800 bg-white p-8 flex-col">
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 fill-current ${i < 4 ? 'text-[#93f859]' : 'text-gray-400'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  
                  <div className="flex flex-col justify-between flex-grow">
                    {/* Title of the Review */}
                    <h2 className="text-xl font-sans text-black dark:text-gray-300">{review.title}</h2>
                    <p className="leading-relaxed  p-5 text-[14px] text-black dark:text-gray-300">"{review.review}"</p>
                    <h6 className='text[14px] font-sans font-bold'>{review.name}</h6>
                    <p className='text-[14px] font-sans'>Customer from {review.country}</p>
                    <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div className="flex">
                      <div>
                        <img src={review.image} alt={review.product} className="w-16" />
                      </div>
                      <p>{review.product}</p>
                    </div>
                    <p className="ml-10">{review.price}</p>
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

export default Review;
