import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import { CiShoppingCart, CiHeart, CiUser, CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  // const cartDataLength = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-[14px]">
      <nav>
        <div className="w-full py-3">
          <div className="flex justify-between px-4 md:px-20 items-center font-semibold">
            {/* LOGO */}
            <div>
              <img src={logo} alt="logo" className="w-32" />
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-2xl"
              >
                <span className="block w-6 h-0.5 bg-black mb-1"></span>
                <span className="block w-6 h-0.5 bg-black mb-1"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
              </button>
            </div>

            {/* MAIN NAVIGATION */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:flex xl:gap-10 md:gap-8 gap-2`}
            >
              <NavLink to="/" exact activeClassName="text-blue-500">
                Home
              </NavLink>
              <NavLink to="/shop" activeClassName="text-blue-500">
                Shop
              </NavLink>
              <NavLink to="/products" activeClassName="text-blue-500">
                Products
              </NavLink>

              {/* Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 hover:text-blue-500">
                  <span>Pages</span>
                  <IoMdArrowDropdown />
                </button>

                {/* Dropdown Menu */}
                <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 opacity-0 group-hover:opacity-100 group-hover:block invisible group-hover:visible transition-all ease-in-out">
                  <li>
                    <NavLink
                      to="/checkout"
                      activeClassName="text-blue-500"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      Checkout
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/aboutus"
                      activeClassName="text-blue-500"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      Aboutus
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      activeClassName="text-blue-500"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/faq"
                      activeClassName="text-blue-500"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/error"
                      activeClassName="text-blue-500"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      Error Page
                    </NavLink>
                  </li>
                </ul>
              </div>

              <NavLink to="/blog" activeClassName="text-blue-500">
                Blog
              </NavLink>
            </div>

            {/* ICONS WITH NAVLINK */}
            <div className="flex gap-8 text-2xl">
              <NavLink to="/search" activeClassName="text-blue-500">
                <CiSearch />
              </NavLink>
              <NavLink to="/login" activeClassName="text-blue-500">
                <CiUser />
              </NavLink>
              <NavLink to="/cart" activeClassName="text-blue-500">
                {/* <span className="absolute top-[-10px] right-[-9px] bg-red-600 rounded-full h-4 w-4 text-xs text-white flex justify-center items-center border border-white">
                  {cartDataLength.length}
                </span> */}
                <CiShoppingCart />
              </NavLink>
              <NavLink to="/wishlist" activeClassName="text-blue-500">
                <CiHeart />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
