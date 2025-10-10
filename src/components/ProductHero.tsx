import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuantitySelector } from './QuantitySelector';
import { ProductCarousel } from './ProductCarousel';
export const ProductHero = () => {
  const [quantity, setQuantity] = useState(1);
  // Store quantity in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('moonriseQuantity', quantity.toString());
  }, [quantity]);
  // Price calculations
  const unitPrice = 68.0;
  const originalPrice = 75.0;
  const totalPrice = unitPrice * quantity;
  const totalOriginalPrice = originalPrice * quantity;
  const savings = totalOriginalPrice - totalPrice;
  const savingsPercentage = Math.round(savings / totalOriginalPrice * 100);
  const increaseQuantity = () => setQuantity(prev => Math.min(prev + 1, 10));
  const decreaseQuantity = () => setQuantity(prev => Math.max(prev - 1, 1));
  // Product images for the carousel
  const productImages = [{
    src: "/pic2.png",
    alt: 'Moonrise Natural Cleaning Concentrate bottle close-up'
  }, {
    src: "/pic_1.png",
    alt: 'Moonrise product details and features'
  }, {
    src: "/pic4.png",
    alt: 'Mother and child using Moonrise cleaning product'
  }];
  return <section className="py-8 md:py-12 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-1 md:order-1 flex justify-center">
          <div className="bg-[#f9f9f9] rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-md flex items-center justify-center">
            <ProductCarousel images={productImages} />
          </div>
        </div>
        <div className="order-2 md:order-2">
          <div className="mb-2 text-sm text-[#2C5F2D] font-semibold">
            Professional-Grade Natural Cleaning Concentrate
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#333333]">
            Moonrise™ Natural Cleaning Concentrate
          </h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#D4A574" color="#D4A574" />)}
            <span className="ml-2 text-sm font-medium">
              Trusted by families who refused to compromise
            </span>
          </div>
          <h3 className="text-xl font-semibold text-[#D4A574] mb-3">
            Why Buy 15 Bottles When You Need Just One?
          </h3>
          <div className="mb-6">
            <div className="flex items-end mb-2">
              <span className="text-2xl font-bold text-[#2C5F2D] mr-2">
                ${totalPrice.toFixed(2)}
              </span>
              <span className="text-gray-500 line-through">
                ${totalOriginalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              You save: ${savings.toFixed(2)} ({savingsPercentage}% OFF)
            </p>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity:
            </label>
            <QuantitySelector quantity={quantity} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} />
          </div>
          <Link to="/checkout" className="inline-block w-full md:w-auto bg-[#2C5F2D] hover:bg-[#234a24] text-white font-bold py-3 px-8 rounded-md transition duration-300 mb-4 text-center" state={{
          quantity
        }}>
            {quantity === 1 ? 'RESERVE YOUR BOTTLE NOW' : `RESERVE ${quantity} BOTTLES NOW`}
          </Link>
          <p className="text-sm text-gray-600">
            Try Moonrise risk-free for 60 days. If you experience ANY headaches,
            respiratory issues, or chemical sensitivity reactions—or if it
            doesn't outperform your conventional cleaner on tough messes—return
            it for a full refund.
          </p>
        </div>
      </div>
    </section>;
};