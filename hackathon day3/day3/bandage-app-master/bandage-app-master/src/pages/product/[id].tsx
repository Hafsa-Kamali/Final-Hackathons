"use client";
import '@/app/globals.css';
import { GetServerSideProps } from "next";
import { createClient } from "@sanity/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import NavMobile from '@/app/Homepage/MobileNav';
import Link from 'next/link';

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
  description: string;
  imageUrl: string;
  reviews: number;
}

interface CartItem extends Product {
  quantity: number;
  size: string;
  color: string;
}

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('purple');
  const [showNav, setShowNav] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const sizes = ['XS', 'L', 'XL'];
  const colors = [
    { name: 'purple', class: 'bg-purple-500' },
    { name: 'black', class: 'bg-black' },
    { name: 'gold', class: 'bg-yellow-600' }
  ];

  useEffect(() => {
    // Load cart from localStorage on component mount
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const renderStars = () => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-4 h-4 text-gray-300"
            fill="currentColor"
          />
        ))}
      </div>
    );
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...product,
      quantity,
      size: selectedSize,
      color: selectedColor,
    };

    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItemIndex = prevCart.findIndex(
        (item) => 
          item._id === product._id && 
          item.size === selectedSize && 
          item.color === selectedColor
      );

      if (existingItemIndex !== -1) {
        // Update quantity of existing item
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      }

      // Add new item
      return [...prevCart, cartItem];
    });

    alert(`${product.title} added to cart`);
  };

  const handleRemoveFromCart = (itemIndex: number) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(itemIndex, 1);
      return newCart;
    });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Navigation */}
      <nav className="container mx-auto px-4 py-6 hidden md:block">
        <div className="flex justify-between items-start ml-3">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">Bandage</h1>
            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/About" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/Shop" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href="/Contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4 px-4 py-2 rounded-full text-[#23A6F0] font-bold text-[14px]">
            <FaRegUser className="mr-2" />
            <Link href="/Login">Login/Register</Link>
            <CiSearch className="text-lg" />
            <Link href="/Cart"><BsCart3 /></Link>
            <FaRegHeart />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <h1 className="text-2xl font-bold text-center py-6">Bandage</h1>
        <button 
          onClick={() => setShowNav(true)}
          className="p-4 text-gray-600 absolute right-0 top-0"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <NavMobile showNav={showNav} closeNav={() => setShowNav(false)} />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Image Gallery */}
          <div className="space-y-4">
            <div className="relative group">
              <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={600}
                height={600}
                className="w-full rounded-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-gray-400 transition-colors"
                >
                  <Image
                    src={product.imageUrl}
                    alt={`Preview ${index}`}
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold text-sky-500">{product.title}</h1>
            
            <div className="flex items-center gap-4">
              {renderStars()}
              <span className="text-gray-500">
                (150 reviews) | <span className="text-green-500">In Stock</span>
              </span>
            </div>

            <div className="text-2xl font-semibold">
              Rs {product.price.toFixed(2)}
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-gray-700 font-medium mb-2">Colours:</h3>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      className={`w-8 h-8 rounded-full ${color.class} ${
                        selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                      }`}
                      onClick={() => setSelectedColor(color.name)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-gray-700 font-medium mb-2">Size:</h3>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded-md ${
                        selectedSize === size
                          ? 'border-sky-600 bg-sky-500 text-white'
                          : 'border-gray-300 text-gray-600 hover:border-gray-400'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex border rounded-md">
                <button 
                  className="px-4 py-2 border-r hover:bg-gray-50"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  title="Quantity"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 text-center"
                  min="1"
                />
                <button 
                  className="px-4 py-2 border-l hover:bg-gray-50"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-sky-500 text-white rounded-md hover:bg-sky-400 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="bg-slate-100 shadow-md rounded-lg p-6 mt-8">
        <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
        {cart.length > 0 ? (
          <div className="space-y-4">
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center bg-white shadow-md rounded-lg p-4">
                  <div className="flex items-center space-x-7">
                    <Image 
                      src={item.imageUrl} 
                      alt={item.title} 
                      width={50} 
                      height={50} 
                      className="w-14 h-14 object-cover rounded-full" 
                    />
                    <div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="text-xs text-gray-500">
                        Size: {item.size} | Color: {item.color} | Qty: {item.quantity}
                      </p>
                      <p className="text-sm">Rs {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>Rs {calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty. Please add items.</p>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const query = `
    *[_type == "product" && _id == "${id}"] {
      _id,
      title,
      price,
      description,
      "imageUrl": productImage.asset->url,
      reviews
    }[0]
  `;

  const product = await sanity.fetch(query);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
  };
};

export default ProductPage;