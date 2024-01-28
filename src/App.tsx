import React, { useState, createElement as e, useEffect } from "react";

import Product from "./componets/Product";

import { products } from "./data/products";

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Product product={products[0]} />
      <Product product={products[1]} />
    </div>
  );
}

export default App;
