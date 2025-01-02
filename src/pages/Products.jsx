import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronRightCircle } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CiFaceFrown } from "react-icons/ci";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useProductsData, paginate } from "../data/ProductsFunctions";
import PaginationComponent from "@/components/PaginationComponent";

function Products() {
  const validCategories = ["men", "women", "kids", "accessories", "bags"];
  const { category, search } = useParams();
  const [emptySearch, setEmptySearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [events, setEvents] = useState([]);
  const itemsPerPage = 9;
  const [isLoading, setIsLoading] = useState(true);
  const [redirectTo404, setRedirectTo404] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(1);
  }, [category, search]);

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    AOS.refresh();
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    setIsLoading(true);
    if (category && validCategories.includes(category)) {
      console.log("Category:", category);
      console.log("invalid");
      setRedirectTo404(true);
      return;
    }
    const getProducts = async () => {
      const result = await fetchProducts();
      if (result) {
        let filtered = result;

        if (category) {
          filtered = filtered.filter((product) => product.category === category);
        }

        if (search) {
          const searchQuery = search.toLowerCase();
          filtered = filtered.filter((product) => product.name.toLowerCase().includes(searchQuery));
          const countFiltered = filtered.length;
          if (countFiltered <= 0) {
            setEmptySearch(true);
          } else {
            setEmptySearch(false);
          }
        }
        setProducts(filtered);
      } else {
        setError("Failed to fetch product data");
      }
    };

    getProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

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
  }, [category, search]);

  useProductsData(category, search, setProducts, setEmptySearch, setEvents);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePaginate = paginate(setCurrentPage, AOS);

  if (redirectTo404) {
    navigate("/404");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Breadcrumbs current="products" home="home" category={category} />
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
            <div className="hidden lg:flex flex-wrap w-1/4 px-5 justify-center content-start">
              <div className="flex flex-wrap flex-col w-full my-2">
                <Link
                  to="/products/men"
                  onClick={() => changeLocation("/products/men")}
                  className="text-xs uppercase font-semibold my-2"
                >
                  Men
                </Link>
                <Link
                  to="/products/women"
                  onClick={() => changeLocation("/products/women")}
                  className="text-xs uppercase font-semibold my-2"
                >
                  Women
                </Link>
                <Link
                  to="/products/kids"
                  onClick={() => changeLocation("/products/kids")}
                  className="text-xs uppercase font-semibold my-2"
                >
                  Kids
                </Link>
                <Link
                  to="/products/bags"
                  onClick={() => changeLocation("/products/bags")}
                  className="text-xs uppercase font-semibold my-2"
                >
                  Bags
                </Link>
                <Link
                  to="/products/accessories"
                  onClick={() => changeLocation("/products/accessories")}
                  className="text-xs uppercase font-semibold my-2"
                >
                  Accessories
                </Link>
              </div>
              <div className="flex flex-wrap flex-col w-full my-4">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold">Recent Events</span>
                  <Link to="/events" className="text-xs">
                    <ChevronRightCircle className="w-4 h-4" />
                  </Link>
                </div>
                {events.map((event, index) => (
                  <Link
                    to={`/events/${event.id}`}
                    key={index}
                    className="flex w-full my-2 justify-center items center content-center border-b py-2 pe-2"
                  >
                    <img src={`/images/events/${event.image}`} alt="Event Image" className="w-24" />
                    <div className="flex flex-wrap flex-col ms-2 text-xs text-justified text-pretty justify-center w-full">
                      <span className="font-semibold">{event.name}</span>
                      <span className="text-zinc-600">{event.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {emptySearch ? (
              <div className="flex flex-col w-full md:w-3/4">
                <div className="flex flex-col flex-wrap content-center items-center justify-center w-full p-5">
                  <CiFaceFrown className="text-[200px]" />
                  <p className="text-xl capitalize font-bold">No products found</p>
                  <p className="text-sm">
                    Your search did not match any of our products. Please try again
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-full md:w-3/4">
                <div className="flex flex-wrap w-full border-b py-1 mt-5">
                  <h1 className="text-2xl font-semibold">K&G Products</h1>
                </div>
                {search ? (
                  <div className="flex flex-wrap w-full my-2">
                    <span className="text-sm text-zinc-600">search results for "{search}"</span>
                  </div>
                ) : (
                  <></>
                )}
                <div className="flex flex-wrap w-full my-2">
                  <span className="text-sm font-semibold">{products.length + " "}Products</span>
                </div>
                <div className="flex flex-wrap w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentProducts.map((product, index) => (
                    <Link
                      to={`/products/${product.category}/${product.id}`}
                      key={`${index}-${currentPage}`}
                      data-aos="fade-up"
                      data-aos-delay={`${index * 100}`}
                    >
                      <div className="flex flex-wrap flex-col w-full border justify-center content-center rounded hover:shadow-lg">
                        <LazyLoadImage
                          src={`/images/products/${product.images[0]}`}
                          alt="Product Picture"
                          className="w-3/4 my-5"
                        />
                        <span className="text-start my-3">{product.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <PaginationComponent
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePaginate}
                />
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Products;
