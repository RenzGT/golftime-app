import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { ChevronRightCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Events() {
  const [events, setEvents] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/data/events.json")
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort events by date
        setEvents(data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        const latestProducts = data.slice(-6);
        setProducts(latestProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const totalPages = Math.ceil(events.length / itemsPerPage);

  const indexOfLastEvent = currentPage * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber + " Current Page Number");
    console.log(totalPages + " Total Pages");
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full flex flex-wrap justify-center content-center bg-slate-200 py-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-black focus:outline-offset-4">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-black font-semibold focus:outline-offset-4">
                News and Events
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-grow flex-wrap container justify-center mb-10 p-10">
        {isLoading ? (
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <svg
              className="text-gray-300 animate-spin"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              ></path>
            </svg>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap w-full xl:w-1/4 lg:px-5 py-5 md:py-0 justify-center content-start">
              <div className="hidden xl:flex flex-wrap flex-col w-full my-4">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold">Latest Products</span>
                  <Link to="/products" className="text-xs">
                    <ChevronRightCircle className="w-4 h-4" />
                  </Link>
                </div>
                {products.map((product, index) => (
                  <div
                    className="flex w-full my-2 justify-start items center content-center border-b py-2 pe-2"
                    key={index}
                  >
                    <img
                      src={`/images/products/${product.images[0]}`}
                      alt={product.name}
                      className="w-32"
                    />
                    <div className="flex flex-wrap ms-2 text-sm text-justified text-pretty content-center">
                      <span className="font-semibold">{product.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full xl:w-3/4">
              <div className="flex flex-wrap w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {currentEvents.map((event, index) => (
                  <Link to={`/events/${event.id}`} key={index}>
                    <div className="flex flex-wrap flex-col w-full justify-start content-center rounded hover:shadow-lg p-3 my-0">
                      <img
                        src={`/images/events/${event.image}`}
                        alt="Product Picture"
                        className="w-full h-48 object-cover my-2 mx-auto"
                      />
                      <div className="w-full flex flex-col flex-wrap justify-start my-2 h-32">
                        <span className="text-[18px] my-1">{event.name}</span>
                        <span className="text-xs text-zinc-500">{event.date}</span>
                        <p className="text-xs text-zinc-900 text-justify line-clamp-2 my-2">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap w-full justify-center content-center my-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem className="cursor-pointer">
                      <PaginationPrevious
                        onClick={() => paginate(currentPage - 1)}
                        aria-disabled={currentPage === 1}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <PaginationItem className="cursor-pointer" key={index}>
                        <PaginationLink
                          onClick={() => paginate(index + 1)}
                          className={currentPage === index + 1 ? "font-bold bg-zinc-200" : ""}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem className="cursor-pointer">
                      <PaginationNext
                        onClick={() => paginate(currentPage + 1)}
                        aria-disabled={currentPage === totalPages}
                        className={
                          currentPage === totalPages ? "pointer-events-none opacity-50" : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Events;
