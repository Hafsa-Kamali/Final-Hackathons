
import React from "react";
import { CartProvider } from "@/app/Cart/CartContext";
import ProductCards from "@/app/Products/page";

const App: React.FC = () => {
  return (
    <CartProvider>
      <div>
        <h1 className="text-center text-3xl font-bold my-6">Product Listing</h1>
        <ProductCards />
      </div>
    </CartProvider>
  );
};

export default App;
