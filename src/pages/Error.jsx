import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MdArrowRight, MdOutlineSearchOff } from "react-icons/md";
import { Link } from "react-router-dom";

function Error() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
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
              <BreadcrumbPage className="text-black font-semibold focus:outline-offset-4">
                404 Not Found
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-grow justify-center flex-wrap my-10">
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
          <div className="flex flex-wrap justify-center w-full p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 border gap-1 w-fit rounded border-2 border-slate-200 shadow-lg">
              <div className="flex flex-wrap text-center items-center content-center justify-center text-pretty gap-2 w-full bg-slate-200 text-slate-900  p-6">
                <MdOutlineSearchOff className="text-9xl w-full" />
                <h2 className="text-4xl font-semibold uppercase">Error 404</h2>
              </div>
              <div className="flex flex-col justify-center text-start text-pretty gap-4 w-full p-6 text-slate-900 ">
                <h2 className="text-2xl font-semibold capitalize">Page not found</h2>
                <p className="text-base justify max-w-[400px]">
                  It seems the content, product, or event you're searching for has either been
                  moved, removed, or never existed. But don’t worry, we’ve got plenty of other
                  options for you to explore:
                </p>
                <div className="flex flex-col flex-wrap w-full gap-2">
                  <div className="flex flex-wrap items-center content-center gap-1">
                    <MdArrowRight className="text-xs" />
                    <Link
                      to={"/products"}
                      className="text-sm capitalize underline underline-offset-4"
                    >
                      Browse our latest products
                    </Link>
                  </div>
                  <div className="flex flex-wrap items-center content-center gap-1">
                    <MdArrowRight className="text-xs" />
                    <Link
                      to={"/events"}
                      className="text-sm capitalize underline underline-offset-4"
                    >
                      see latest events
                    </Link>
                  </div>
                  <div className="flex flex-wrap items-center content-center gap-1">
                    <MdArrowRight className="text-xs" />
                    <Link to={"/"} className="text-sm capitalize underline underline-offset-4">
                      return home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Error;
