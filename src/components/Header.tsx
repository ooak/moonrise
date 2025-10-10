import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
export const Header = () => {
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-[#2C5F2D] text-white text-center py-1 text-sm">
        FREE SHIPPING ON ORDERS OVER $99!
      </div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/favicon.png" alt="Moonrise Natural logo" className="h-10 w-10" />
          <h1 className="text-xl font-bold">MOONRISE CLEAN</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-[#2C5F2D]">
            
          </button>
          <button className="hover:text-[#2C5F2D] relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-[#D4A574] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>;
};