import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SideNav } from "@/components/SideNav";

function Mission() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Breadcrumbs
        home="home"
        previousPages={[{ name: "about us", link: "/about" }]}
        current="our mission"
      />
      <div className="flex flex-grow justify-center flex-wrap my-10">
        <div className="container flex flex-wrap">
          <SideNav currentPage="our mission" />
          <div className="flex flex-col w-full lg:w-4/5">
            <div className="container w-full lg:mx-5 py-4 border shadow">
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold capitalize leading-8">Our Mission</h1>
                <p className="text-sm leading-8 text-justify text-pretty my-2">
                  At Golf Time Corp., our mission is to elevate the golfing experience by providing
                  high-quality, innovative, and stylish apparel that not only enhances performance
                  on the course but also reflects the unique lifestyle and passion of golf
                  enthusiasts. We strive to be a trusted companion to golfers worldwide, delivering
                  products that blend functionality with fashion, enabling every player to express
                  their individuality while enjoying the game they love.
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

export default Mission;
