import React, { useEffect, useState } from 'react';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Popup } from '../components/Popup';
import { QuantitySelector } from '../components/QuantitySelector';
export const CheckoutPage = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // Set the document title
  useEffect(() => {
    document.title = 'Moonrise Natural';
  }, []);
  // Get quantity from location state or localStorage if available
  useEffect(() => {
    // First try to get from location state
    if (location.state && location.state.quantity) {
      setQuantity(location.state.quantity);
    } else {
      // Fall back to localStorage if location state is not available
      const savedQuantity = localStorage.getItem('moonriseQuantity');
      if (savedQuantity) {
        const parsedQuantity = parseInt(savedQuantity, 10);
        if (!isNaN(parsedQuantity) && parsedQuantity >= 1 && parsedQuantity <= 10) {
          setQuantity(parsedQuantity);
        }
      }
    }
  }, [location.state]);
  // Price calculations
  const unitPrice = 68.0;
  const shippingCost = 7.95;
  const subtotal = unitPrice * quantity;
  const isFreeShipping = subtotal >= 99;
  const actualShippingCost = isFreeShipping ? 0 : shippingCost;
  const total = subtotal + actualShippingCost;
  const increaseQuantity = () => {
    const newQuantity = Math.min(quantity + 1, 10);
    setQuantity(newQuantity);
    localStorage.setItem('moonriseQuantity', newQuantity.toString());
  };
  const decreaseQuantity = () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
    localStorage.setItem('moonriseQuantity', newQuantity.toString());
  };
  const handlePaymentClick = () => {
    setIsPopupOpen(true);
  };
  return <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center text-[#2C5F2D] font-medium">
            <ArrowLeft size={18} className="mr-2" />
            Back to Product
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-[#333333]">
            Complete Your Purchase
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-[#333333]">
                Order Summary
              </h2>
              <div className="flex items-start mb-6 pb-6 border-b border-gray-200">
                <div className="w-20 h-20 bg-[#f9f9f9] rounded flex items-center justify-center mr-4 flex-shrink-0">
                  <img src="/Gemini_Generated_Image_odhg8lodhg8lodhg.png" alt="Moonrise Natural Cleaning Concentrate" className="w-16" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">
                    Moonrise™ Natural Cleaning Concentrate
                  </h3>
                  <p className="text-sm text-gray-600">
                    Professional-Grade Natural Cleaning Concentrate
                  </p>
                  <div className="mt-2 flex items-center">
                    <span className="text-sm text-gray-700 mr-4">
                      Quantity:
                    </span>
                    <QuantitySelector quantity={quantity} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} />
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <div className="space-y-2 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  {isFreeShipping ? <span className="text-[#2C5F2D] font-medium">FREE</span> : <span>${shippingCost.toFixed(2)}</span>}
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>Calculated at next step</span>
                </div>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              {!isFreeShipping && <div className="mt-4 text-sm text-[#2C5F2D]">
                  Add ${(99 - subtotal).toFixed(2)} more to qualify for FREE
                  shipping!
                </div>}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-[#333333]">
                Payment Method
              </h2>
              <p className="text-gray-600 mb-6">
                Select a payment method to continue
              </p>
              <div className="space-y-4">
                <button onClick={handlePaymentClick} className="w-full border border-gray-300 rounded-md p-4 flex items-center justify-center hover:bg-gray-50 transition duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                </button>
                <button onClick={handlePaymentClick} className="w-full border border-gray-300 rounded-md p-4 flex items-center justify-center hover:bg-gray-50 transition duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify Payments" className="h-6" />
                </button>
                <button onClick={handlePaymentClick} className="w-full border border-gray-300 rounded-md p-4 flex items-center justify-center hover:bg-gray-50 transition duration-300">
                  <CreditCard size={20} className="mr-2" />
                  <span>Credit Card</span>
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-6 text-center">
                Your order is covered by our 60-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </main>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>;
};