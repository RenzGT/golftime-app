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
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

function ProductDetail() {
  const { id, category } = useParams();
  const [product, setProduct] = useState({});
  const [productNotFound, setProductNotFound] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("/data/products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        const foundProduct = data.find((product) => product.id === parseInt(id));

        if (foundProduct && foundProduct.category === category) {
          setProduct(foundProduct);
        } else {
          console.error("Product not found");
          setProductNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
    setTimeout(() => {
      setIsLoading(false);
      setActiveIndex(0);
    }, 500);
  }, [id, category]);

  const productCategory = product.category;

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter((product) => product.category === productCategory);
        const updatedProducts = filteredProducts.filter((product) => product.id != id);
        setRelatedProducts(updatedProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id, productCategory]);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full flex flex-wrap justify-center content-center bg-slate-200 py-10">
        <Breadcrumb className="capitalize">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-black focus:outline-offset-4">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products" className="text-black focus:outline-offset-4">
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>
            {!productNotFound && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/products/${product.category}`}
                    className="text-black focus:outline-offset-4"
                  >
                    {product.category}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-black font-semibold focus:outline-offset-4">
                {productNotFound ? "Product not found" : product.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-grow justify-center flex-wrap">
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
            {productNotFound ? (
              <div className="my-10">
                <p>Not found</p>
              </div>
            ) : (
              <div className="flex flex-wrap content-start justify-center w-full md:container">
                <div className="flex flex-wrap w-full p-5 border-b shadow-sm mb-5">
                  <h1 className="text-lg uppercase font-semibold">K&G Products</h1>
                </div>
                <div className="flex flex-wrap w-full h-fit md:w-1/2 lg:w-1/3 my-5">
                  {product.images && product.images.length > 0 && (
                    <div className="w-full h-fit my2">
                      <img
                        src={`/images/products/${product.images[activeIndex]}`}
                        className="bg-slate-200"
                        alt={product.name}
                      />
                    </div>
                  )}
                  <Carousel
                    className="w-full px-2"
                    opts={{
                      loop: true,
                    }}
                  >
                    <CarouselContent className="p-2">
                      {product.images && product.images.length > 0 && (
                        <>
                          {product.images.map((image, index) => (
                            <CarouselItem
                              key={index}
                              className={
                                index == activeIndex
                                  ? "basis-1/3 gap-2 p-0"
                                  : "basis-1/3 opacity-60 gap-2 p-0"
                              }
                            >
                              <Card className="border-none shadow-none">
                                <CardContent
                                  onClick={() => handleThumbnailClick(index)}
                                  className="flex flex-wrap content-center items-center h-full w-full p-2 mx-1"
                                >
                                  <img
                                    className="w-full bg-slate-200 p-2"
                                    src={`/images/products/${image}`}
                                    alt={product.name}
                                  />
                                </CardContent>
                              </Card>
                            </CarouselItem>
                          ))}
                        </>
                      )}
                    </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious />
                  </Carousel>
                </div>
                <div className="flex flex-wrap content-start w-full md:w-1/2 lg:w-2/3 h-max container">
                  <h1 className="text-[24px] font-semibold my-1">{product.name}</h1>
                  <p className="text-[14px] text-justify leading-6 text-pretty my-1">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap w-full flex-col my-3 text-[13px]">
                    <p className="my-1 font-semibold">
                      Sizes:{" "}
                      <span className="font-normal">
                        {product.sizes && product.sizes.join(" ")}
                      </span>
                    </p>
                    <p className="my-1 font-semibold">
                      Colors:{" "}
                      <span className="font-normal capitalize">
                        {product.colors && product.colors.join(", ")}
                      </span>
                    </p>
                    <p className="my-1 font-semibold">
                      Materials:{" "}
                      <span className="font-normal capitalize">
                        {product.materials && product.materials.join(", ")}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap w-full container my-10">
                  <h1 className="text-xl font-bold">Related Products</h1>
                  <Carousel
                    className="w-full my-4"
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    plugins={[
                      Autoplay({
                        delay: 4000,
                      }),
                    ]}
                  >
                    <CarouselContent>
                      {relatedProducts.map((related, index) => (
                        <CarouselItem className="basis-1/2 md:basis-1/4" key={index}>
                          <Link to={`/products/${related.category}/${related.id}`}>
                            <div className="flex flex-wrap flex-col w-full border justify-center content-center rounded hover:shadow-lg bg-slate-50">
                              <img
                                src={`/images/products/${related.images[0]}`}
                                alt="Product Picture"
                                className="w-3/4 my-5"
                              />
                              <span className="text-start my-3">{related.name}</span>
                            </div>
                          </Link>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
