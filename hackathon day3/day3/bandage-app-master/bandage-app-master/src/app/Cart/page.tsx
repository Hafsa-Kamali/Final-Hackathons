"use client";
import '@/app/globals.css';
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
  size: string;
  color: string;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart from localStorage on component mount
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleRemoveFromCart = (itemIndex: number) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(itemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Navbar */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center bg-white shadow-md">
        <h1 className="text-xl font-bold">Bandage</h1>
        <Link href="/Cart" className="flex items-center gap-2 text-sky-500">
          <BsCart3 className="text-2xl" />
          <span className="text-lg font-semibold">{cart.length}</span>
        </Link>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {cart.length > 0 ? (
          <div className="space-y-6">
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center bg-white shadow-md rounded-lg p-4">
                  <div className="flex items-center space-x-7">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="w-14 h-14 object-cover rounded-lg"
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

            <div className="border-t pt-6">
              <div className="flex justify-between items-center text-lg font-semibold mb-4">
                <span>Total:</span>
                <span>Rs {calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/Shop"
                  className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                  Continue Shopping
                </Link>
                <button
                  onClick={() => alert("Proceeding to Checkout")}
                  className="flex-1 bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-400"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <p>Your cart is empty. Add items to your cart to see them here.</p>
            <Link href="/Shop" className="text-sky-500 hover:underline mt-4 inline-block">
              Go to Shop
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
