import React, { useState, createElement as e, useEffect } from "react";

import Product from "./componets/Product";

import { products } from "./data/product";

function App() {
  return (
    <section className="py-6 bg-slate-300">
      <div className="container mx-auto py-4 px-2 ">
        <Product products={products[0]} />
      </div>
    </section>
  );
}

export default App;
