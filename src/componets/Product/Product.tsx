import React, { useState } from "react";
import { IProduct } from "../models/product";

interface productProps {
  product: IProduct;
}

const Product = ({ product }: productProps) => {
  const [showDetalis, setShowdetalis] = useState(false);
  const btnBgClassName = showDetalis
    ? "bg-blue-400 text-white "
    : "bg-yellow-400 text-black";
  const btnClasses = ["border py-2 px-4 rounded ", btnBgClassName];

  return (
    <div className="border rounded py-2 px-4 mb-2 flex flex-col items-center">
      <img className="w-1/6" src={product.image} alt={product.title} />
      <h2>{product.title}</h2>

      <p className="font-bold">{product.price}</p>
      <button
        onClick={() => setShowdetalis((prev) => !prev)}
        className={btnClasses.join(" ")}
      >
        {showDetalis ? "Hide Detalis" : "Show Detalis"}
      </button>
      {showDetalis && (
        <div>
          <p>{product.description}</p>
          <p>
            Rating: <span className="font-bold">{product.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Product;
