import React from "react";
import { Link } from "react-router-dom";
import BlackFooter from '../Componats/BlackFooter';
const Error = () => {
  return (
    <div>
      <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
        <div className="container flex flex-col items-center">
          <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl md:text-3xl dark:text-gray-300">
              Sorry, we couldn't find this page.
            </p>
          </div>
            <Link
              to="/"
              className="relative rounded  my-8 px-5 py-2.5 overflow-hidden group bg-black hover:bg-gradient-to-r hover:from-black hover:to-black text-white  transition-all ease-out duration-300">
              <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span class="relative"> Shop Now</span>
            </Link>
        </div>
      </section>
      <center>

<hr className="my-8 w-[90%]  border-gray-700" />
 </center>
 <section>
  <BlackFooter/>
 </section>
    </div>
  );
};

export default Error;
