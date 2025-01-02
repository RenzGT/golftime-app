import { Link } from "react-router-dom";

export const ProductCard = ({ productName, productImage, link, aos }) => {
  return (
    <div data-aos={aos} className="m-2 border bg-slate-50">
      <Link to={link} className="p-3">
        <img src={`/images/products/${productImage}`} alt={productName} className="w-full" />
        <span className="text-zinc-800 uppercase text-lg m-2">{productName}</span>
      </Link>
    </div>
  );
};
