import { useState } from "react";
import { BiLogoFacebookSquare, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { CiFacebook, CiInstagram, CiLocationOn, CiMail, CiPhone, CiTwitter } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  function changeLocation(placeToGo) {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  }
  return (
    <>
      <div className="flex flex-wrap justify-center w-full capitalize bg-green-950 py-10">
        <div className="w-full container px-10 flex flex-wrap justify-around">
          <div className="flex content-start lg:content-center flex-wrap flex-col w-1/2 lg:w-1/4 my-4 lg:my-1">
            <span className="text-white text-xl font-bold">Navigation</span>
            <Link
              to="/"
              onClick={() => changeLocation("/")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => changeLocation("/about")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              About us
            </Link>
            <Link
              to="/products"
              onClick={() => changeLocation("/products")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              Products
            </Link>
            <Link
              to="/events"
              onClick={() => changeLocation("/events")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              News & Events
            </Link>
            <Link
              to="/contact"
              onClick={() => changeLocation("/contact")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              Contact us
            </Link>
          </div>
          <div className="flex content-start lg:content-center flex-wrap flex-col w-1/2 lg:w-1/4 my-4 lg:my-1">
            <span className="text-white text-xl font-bold">Products</span>
            <Link
              to="/products/men"
              onClick={() => changeLocation("/products/men")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              Men
            </Link>
            <Link
              to="/products/women"
              onClick={() => changeLocation("/products/women")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              Women
            </Link>
            <Link
              to="/products/kids"
              onClick={() => changeLocation("/products/kids")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              Kids
            </Link>
            <Link
              to="/products/bags"
              onClick={() => changeLocation("/products/bags")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              Bags
            </Link>
            <Link
              to="/products/accessories"
              onClick={() => changeLocation("/products/accessories")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              Accessories
            </Link>
          </div>
          <div className="flex content-start lg:content-center flex-wrap flex-col w-1/2 lg:w-1/4 my-4 lg:my-1">
            <span className="text-white text-xl font-bold">About Us</span>
            <Link
              to="/about"
              onClick={() => changeLocation("/about")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              Company Profile
            </Link>
            <Link
              to="/about/mission"
              onClick={() => changeLocation("/about/mission")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              Our Mission
            </Link>
            <Link
              to="/about/vision"
              onClick={() => changeLocation("/about/vision")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              Our Vision
            </Link>
            <Link
              to="/contact"
              onClick={() => changeLocation("/contact")}
              className="text-sm text-white my-1 focus:outline-none"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex content-start lg:content-center flex-wrap flex-col w-1/2 lg:w-1/4 my-4 lg:my-1">
            <span className="text-white text-xl font-bold">Social Media</span>
            <div className="flex flex-col my-3 text-sm-center">
              <div className="flex items-center my-1">
                <div className="flex-1 text-3xl text-white">
                  <Link
                    className="focus:outline-none"
                    to="https://www.facebook.com/p/Golf-Time-PH-100072516006235/"
                  >
                    <BiLogoFacebookSquare />
                  </Link>
                </div>
                <div className="flex-1 text-3xl text-white">
                  <Link className="focus:outline-none" to="https://www.instagram.com/golftimeph/">
                    <BiLogoInstagram />
                  </Link>
                </div>
                <div className="flex-1 text-3xl text-white">
                  <Link className="focus:outline-none" to="/">
                    <BiLogoTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center py-2 bg-green-950 border-t text-white text-xs">
        <p>Copyright © Golf Time PH</p>
      </div>
    </>
  );
}

export default Footer;
