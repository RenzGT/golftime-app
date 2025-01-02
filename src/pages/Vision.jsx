import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SideNav } from "@/components/SideNav";

function Vision() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Breadcrumbs
        home="home"
        previousPages={[{ name: "about us", link: "/about" }]}
        current="our vision"
      />
      <div className="flex flex-grow justify-center flex-wrap my-10">
        <div className="container flex flex-wrap">
          <SideNav currentPage="our vision" />
          <div className="flex flex-col w-full lg:w-4/5">
            <div className="container w-full lg:mx-5 py-4 border shadow">
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold capitalize leading-8">Our Vision</h1>
                <p className="text-sm leading-8 text-justify text-pretty my-2">
                  At Golf Time Corp., our vision is to inspire confidence and pride in golfers of
                  all levels, fostering a community where our brand is celebrated for its commitment
                  to quality, sustainability, and continuous innovation. By staying at the forefront
                  of design and technology, we aim to create a lasting impact on the golfing world,
                  shaping the future of the sport with our iconic and purposeful apparel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Vision;
