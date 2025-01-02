import { useEffect, useState } from "react";
import fetchProducts from "@/data/FetchProducts";
import fetchEvents from "@/data/FetchEvents";

export const useProductsData = (category, search, setProducts, setEmptySearch, setEvents) => {
  useEffect(() => {
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
          setEmptySearch(filtered.length <= 0);
        }

        setProducts(filtered);
      }
    };

    getProducts();
  }, [category, search, setProducts, setEmptySearch]);

  useEffect(() => {
    const getEvents = async () => {
      const result = await fetchEvents();
      if (result) {
        const latestEvents = result.slice(-3);
        setEvents(latestEvents);
      }
    };

    getEvents();
  }, [setEvents]);
};

export const paginate = (setCurrentPage, AOS) => (pageNumber) => {
  setCurrentPage(pageNumber);
  AOS.refresh();
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
};
