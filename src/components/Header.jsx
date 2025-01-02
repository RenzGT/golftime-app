import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Header() {
  const { search: searchParam } = useParams();
  const [search, setSearch] = useState(searchParam || "");
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const url = search ? `/products/search/${search}` : "/products";
    navigate(url);
  };

  function changeLocation(placeToGo) {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  }
  return (
    <div className="flex justify-between w-full xl:justify-center py-4 md:py-8 uppercase bg-white">
      <div className="flex flex-wrap items-center mx-4">
        <Link
          to="/"
          onClick={() => changeLocation("/")}
          className="flex flex-wrap items-center w-full focus:outline-offset-4"
        >
          <img src="/images/GolfTimeLogo.png" alt="Golftime Logo" className="max-w-16 mx-1" />
          <span className="text-xl font-bold mx-1 uppercase">Golf time corp</span>
        </Link>
      </div>
      <div className="hidden xl:flex flex-wrap items-center mx-4">
        <Link
          to="/"
          onClick={() => changeLocation("/")}
          className="text-sm text-center mx-2 xl:mx-4 focus:outline-offset-4"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => changeLocation("/about")}
          className="text-sm text-center mx-2 xl:mx-4 focus:outline-offset-4"
        >
          About Us
        </Link>
        <Link
          to="/products"
          onClick={() => changeLocation("/products")}
          className="text-sm text-center mx-2 xl:mx-4 focus:outline-offset-4"
        >
          Products
        </Link>
        <Link
          to="/events"
          onClick={() => changeLocation("/events")}
          className="text-sm text-center mx-2 xl:mx-4 focus:outline-offset-4"
        >
          News & Events
        </Link>
        <Link
          to="/contact"
          onClick={() => changeLocation("/contact")}
          className="text-sm text-center mx-2 xl:mx-4 focus:outline-offset-4"
        >
          Contact Us
        </Link>
      </div>
      <div className="hidden xl:flex flex-wrap items-center mx-4">
        <div className="border p-1 rounded-l border-gray-300">
          <CiSearch className="m-[3px]" />
        </div>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="search"
            aria-label="Search"
            value={search}
            className="border-y border-e border-gray-300 rounded-r focus:outline-0 p-[5px] text-sm capitalize"
            placeholder="search products"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="flex xl:hidden flex-wrap items-center mx-4">
        <Sheet>
          <SheetTrigger>
            <CiMenuBurger className="text-3xl border rounded border-zinc-600 shadow-lg p-1 text-black" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="justify-start py-2 my-4 border-b uppercase">
              <SheetTitle className="text-3xl">Golf Time Ph</SheetTitle>
            </SheetHeader>
            <div className="flex flex-wrap flex-col uppercase text-xl py-2">
              <Link to="/" className="my-2 text-zinc-800 focus:outline-offset-4">
                Home
              </Link>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <Link
                      to="/about"
                      className="uppercase my-2 text-zinc-800 focus:outline-offset-4"
                    >
                      About Us
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap flex-col">
                      <Link
                        to="/about"
                        onClick={() => changeLocation("/about")}
                        className="my-1 focus:outline-offset-4"
                      >
                        Company Profile
                      </Link>
                      <Link
                        to="/about/mission"
                        onClick={() => changeLocation("/about/mission")}
                        className="my-1 focus:outline-offset-4"
                      >
                        Our Mission
                      </Link>
                      <Link
                        to="/about/vision"
                        onClick={() => changeLocation("/about/vision")}
                        className="my-1 focus:outline-offset-4"
                      >
                        Our Vision
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <Link
                      to="/products"
                      className="uppercase my-2 text-zinc-800 focus:outline-offset-4"
                    >
                      Products
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap flex-col">
                      <Link
                        to="/products/men"
                        onClick={() => changeLocation("/products/men")}
                        className="my-1 focus:outline-offset-4"
                      >
                        Men
                      </Link>
                      <Link
                        to="/products/women"
                        onClick={() => changeLocation("/products/women")}
                        className="my-1 focus:outline-offset-4"
                      >
                        Women
                      </Link>
                      <Link
                        to="/products/kids"
                        onClick={() => changeLocation("/products/kids")}
                        className="my-1 focus:outline-offset-4"
                      >
                        Kids
                      </Link>
                      <Link
                        to="/products/bags"
                        onClick={() => changeLocation("/products/bags")}
                        className="my-1 focus:outline-offset-4"
                      >
                        Bags
                      </Link>
                      <Link
                        to="/products/accessories"
                        onClick={() => changeLocation("/products/accessories")}
                        className="my-1 focus:outline-offset-4"
                      >
                        Accessories
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link to="/events" className="my-2 text-zinc-800 focus:outline-offset-4">
                News and Events
              </Link>
              <Link to="/contact" className="my-2 text-zinc-800 focus:outline-offset-4">
                Contact Us
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Header;
