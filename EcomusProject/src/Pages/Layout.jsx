import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Componats/Navbar";

// Lazy load pages
const Home = lazy(() => import("./Home"));
const Shop = lazy(() => import("./Shop"));
const Products = lazy(() => import("./Products"));
const Pages = lazy(() => import("./Pages"));
const Blog = lazy(() => import("./Blog"));
const Search = lazy(() => import("./Search"));
const Login = lazy(() => import("./Login"));
const Cart = lazy(() => import("./Cart"));
const Wishlist = lazy(() => import("./Wishlist"));
const CheckOut = lazy(() =>import("./CheckOut"));
const ContactUs =lazy (()=>import("./ContactUs"));
const Error = lazy (() => import("./Error"));
const Aboutus= lazy(()=>import("./Aboutus"));

const Layout = () => {
  return (
    <Router>
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="*" element={<Error />} />
          <Route path="/aboutus"  element={<Aboutus/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Layout;
