import React, { useEffect, useState } from "react";
import "../App.css";
import Autoplay from "embla-carousel-autoplay";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Loading from "@/components/Loading";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import fetchProducts from "@/data/FetchProducts";
import fetchEvents from "@/data/FetchEvents";
import HeroBanner from "@/pages/landingpage/HeroBanner";
import { ProductSection } from "./landingpage/ProductSection";
import { FeatureSection } from "./landingpage/FeatureSection";

function Index() {
  const [events, setEvents] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    setLoading(true);
    setCounter(0);

    const getProducts = async () => {
      const result = await fetchProducts();
      if (result) {
        const accessoriesProducts = result.filter((product) => product.category === "accessories");
        const latestAccessories = accessoriesProducts.slice(0, 5);
        setProducts(latestAccessories);
      } else {
        setError("Failed to fetch product data");
      }
    };
    getProducts();

    const getEvents = async () => {
      const result = await fetchEvents();
      if (result) {
        const latestEvents = result.slice(-3);
        setEvents(latestEvents);
      } else {
        setError("Failed to fetch events data");
      }
    };

    getEvents();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    if (isLoading) {
      let start = Date.now(); // Start time
      let intervalId = setInterval(() => {
        let elapsed = Date.now() - start;
        let progress = Math.min(100, Math.floor((elapsed / 1000) * 100));
        setCounter(progress);
        if (progress === 100) {
          clearInterval(intervalId);
        }
      }, 10);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading counter={counter} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow flex-wrap mb-10">
        <HeroBanner />
        <ProductSection />
        <FeatureSection />
        <div className="container w-full p-10 flex flex-wrap">
          <div data-aos="zoom-in" className="text-center uppercase text-black w-full text-pretty">
            <h1 className="text-[30px] font-medium my-1 text-zinc-800">Accessories</h1>
            <span data-aos="zoom-in" className="text-sm text-zinc-600">
              Upgrade your game with golf time accessories
            </span>
          </div>
          <div data-aos="zoom-in" className="flex justify-center w-full p-5">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="p-10"
            >
              <CarouselContent className="p-0">
                {products.map((product, index) => (
                  <CarouselItem
                    key={index}
                    className="flex flex-wrap content-center justify-center md:basis-1/3 w-full"
                  >
                    <Link
                      to={`/products/${product.category}/${product.id}`}
                      className="md:m-1 md:p-3 border hover:shadow bg-slate-200"
                    >
                      <img
                        src={`/images/products/${product.images[0]}`}
                        alt={product.name}
                        className="w-full"
                      />
                      <span className="text-zinc-800 uppercase text-lg m-2">{product.name}</span>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="container w-full p-10 flex flex-wrap bg-slate-200 m-3 lg:m-auto"
        >
          <img className="w-full lg:w-1/2" src="/images/frontpage/Usage-1.jpg" alt="Usage photo" />
          <div className="flex flex-wrap flex-col justify-center py-10 lg:px-20 w-full lg:w-1/2 uppercase">
            <h1 className="text-lg font-semibold my-1">Travel in style</h1>
            <p className="text-sm my-1 leading-8">
              OUR BOSTON BAGS COMBINE FUNCTIONALITY WITH FASHION FOR THE MODERN GOLFER.
            </p>
            <Link
              to="/products/bags"
              className="text-xs underline underline-offset-2 font-bold my-1"
            >
              see more
            </Link>
          </div>
        </div>
        <div className="container w-full p-5 md:p-10 flex flex-wrap">
          <div data-aos="zoom-in" className="text-center uppercase text-black w-full text-pretty">
            <h1 className="text-[30px] font-medium my-1 text-zinc-800">News and Events</h1>
            <span className="text-sm text-zinc-600">
              Stay Updated with the Latest Happenings in Golf Time PH
            </span>
          </div>
          <div className="w-full flex flex-wrap">
            {events.map((event, index) => (
              <Card
                key={index}
                data-aos="zoom-in"
                className="md:basis-1/3 border-none shadow-none p-5"
              >
                <CardHeader className="border p-0 overflow-hidden hover:shadow-lg">
                  <Link to={`/events/${event.id}`}>
                    <img
                      src={`/images/events/${event.image}`}
                      alt={event.name}
                      className="w-full hover:scale-110 transition-all duration-500"
                    />
                  </Link>
                </CardHeader>
                <CardContent className="p-0 m-0">
                  <Link className="w-full justify-start px-0 my-3 flex flex-wrap flex-col">
                    <span className="text-sm text-zinc-500 my-1">{event.date}</span>
                    <span className="text-lg text-zinc-900 my-1">{event.name}</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
