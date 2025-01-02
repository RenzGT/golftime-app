import { ProductCard } from "@/components/ProductCard";
import { TabButton } from "@/components/TabButton";
import fetchProducts from "@/data/FetchProducts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("men");
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const result = await fetchProducts();
      if (result) {
        let filteredProducts = result.filter(
          (product) => product.type === "shirt" && product.category === activeTab
        );
        const latestProducts = filteredProducts.slice(-6);
        setProducts(latestProducts);
      } else {
        setError("Failed to fetch product data");
      }
    };
    getProducts();
  }, [activeTab]);

  const activateTab = (tab) => {
    setActiveTab(tab);
    console.log(`Activating tab: ${tab}`);
  };
  return (
    <div className="container w-full p-10 flex flex-wrap text-center">
      <div data-aos="zoom-in" className="text-center uppercase text-black w-full text-pretty my-2">
        <h1 className="text-[30px] font-medium my-1 text-zinc-800">Golf Shirts</h1>
        <span data-aos="zoom-in" className="text-sm text-zinc-600">
          Elevate Your Style on the Course with our premium golf shirts
        </span>
      </div>
      <div data-aos="zoom-in" className="flex justify-center items-center w-full my-10">
        <TabButton label="Men" onClick={() => activateTab("men")} active={activeTab === "men"} />
        <TabButton
          label="Women"
          onClick={() => activateTab("women")}
          active={activeTab === "women"}
        />
        <TabButton label="Kids" onClick={() => activateTab("kids")} active={activeTab === "kids"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 w-full">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            aos={"zoom-in"}
            productName={product.name}
            productImage={product.images[0]} // Assuming you want the first image
            link={`/products/${product.category}/${product.id}`}
          />
        ))}
      </div>
    </div>
  );
};
