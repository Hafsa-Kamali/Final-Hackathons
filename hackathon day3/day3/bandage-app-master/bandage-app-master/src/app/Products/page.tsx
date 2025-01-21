import React, { useEffect, useState } from "react";
import createClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const sanity = createClient({
  projectId: "gs2jqrlc", 
  dataset: "production", 
  apiVersion: "2023-01-01", 
  useCdn: true, 
});

interface Product {
  _id: string;
  title: string;
  price: number;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          title,
          price,
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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/product/${product._id}`} legacyBehavior>
              <a className="block">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-4">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
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
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductCards;
