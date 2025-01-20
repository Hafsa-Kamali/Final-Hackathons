import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

const sanity = sanityClient({
  projectId: "gs2jqrlc", 
  dataset: "production", 
  apiVersion: "2023-01-01", 
  useCdn: true, 
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags
        }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
const handleAddToCart = (product: Product) => {
  setCart((prevCart) => [...prevCart, product]);
  alert(`${product.title} added to cart`);
}
  useEffect(() => {
    fetchProducts();
  }, []);

  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.substring(0, 100) + "..." : description;
  };

  const handleRemoveFromCart = (item: Product) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem._id !== item._id));
    alert(`${item.title} removed from cart`);
  }

  return (
    <main>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="mt-4">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{truncateDescription(product.description)}</p>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-gray-800 font-bold">${product.price}</p>
                {product.discountPercentage > 0 && (
                  <p className="text-sm text-green-600">
                    {product.discountPercentage}% Off
                  </p>
                )}
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-200 text-gray-800 rounded-full px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Cart Summary */}
    <div className="bg-slate-100 shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-lg font-semibold">Cart Summary</h2>
      {cart.length > 0 ? (
        <ul className="space-y-4">
 {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-white shadow-md rounded-lg p-4">
              <div className="flex items-center space-x-7">
              <Image src={item.imageUrl} alt={item.title} width={50} height={50} className="w-14 h-14 object-cover rounded-full" />
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
              </div>
            
              <div>
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center">Your cart is empty Please add items.</p>
      )}
    </div>
    </main>
  );
};

export default ProductCards;
