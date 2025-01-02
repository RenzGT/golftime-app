import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SideNav } from "@/components/SideNav";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Breadcrumbs home="home" current="about us" />
      <div className="flex flex-grow justify-center flex-wrap my-10">
        <div className="container flex flex-wrap">
          <SideNav currentPage="about us" />
          <div className="flex flex-col w-full lg:w-4/5">
            <div className="container w-full lg:mx-5 py-4 border shadow">
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold capitalize leading-8">company profile</h1>
                <p className="text-sm leading-8 text-justify text-pretty my-2">
                  Golf Time Corp. was established in the year 2015 as the Official Distributor of
                  K&G Golf Fashion in the Philippines. As one of the Top 3 leading high-class
                  fashion sports apparel and accessories for golf, we have been participating in the
                  big tournaments of the different major golf courses in the Philippines, for around
                  300+ events yearly. As we strive to be trusted golf wear, Golf Time Corp aims to
                  distribute and deliver our products nationwide and become the No. 1 golf wear
                  distributor in the coming years.
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

export default About;
