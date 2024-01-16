import React from "react";

const Product = (props: any) => {
  console.log(props.products.title);
  return (
    <div className="border py-2 px-4 rounded flex flex-col  items-center mb-2">
      <h1 className="text-black">{props.products.title}</h1>
    </div>
  );
};

export default Product;
