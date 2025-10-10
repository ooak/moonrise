import React from 'react';
export const Footer = () => {
  return <footer className="bg-[#333333] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold text-lg">MOONRISE CLEAN</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
              <a href="#" className="hover:text-[#D4A574]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#D4A574]">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#D4A574]">
                Contact Us
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-white/60">
            © {new Date().getFullYear()} Moonrise Clean. All rights reserved.
          </div>
        </div>
      </div>
    </footer>;
};