import React from 'react';
export const ValueProposition = () => {
  return <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#333333]">
            Why Health-Conscious Families Trust Moonrise
          </h2>
          <p className="text-gray-700 mb-6">
            You shouldn't have to choose between a clean home and a healthy
            home. Most cleaners—even "natural" ones—either don't work well or
            trigger headaches and breathing problems. That's because they
            release chemicals into your air every time you clean.
          </p>
          <p className="text-gray-700 mb-6">
            Moonrise is different. It releases zero harmful fumes while cleaning
            just as powerfully as harsh chemicals. It tackles grease, mold, soap
            scum, and hard water stains without polluting the air you breathe.
          </p>
          <p className="text-gray-700 mb-6">
            Made in the US and tested by independent labs, Moonrise is truly
            safe for families with sensitivities, asthma, and young kids.
          </p>
          <div className="mt-10 mb-10 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src="/pic4.png" alt="Mother and child using Moonrise Natural Cleaning product in kitchen" className="rounded-lg shadow-md w-full max-w-md mx-auto" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4 text-[#2C5F2D]">
                Experience the Difference
              </h3>
              <p className="text-gray-700">
                Join the thousands of families who have discovered the joy of
                cleaning without compromise. With Moonrise, you'll finally have
                a product that delivers professional results while protecting
                your family's health.
              </p>
              <div className="mt-4 bg-white p-3 rounded border-l-4 border-[#D4A574]">
                <p className="italic text-gray-600">
                  "I can finally clean my entire house without opening all the
                  windows or worrying about my children's respiratory health. It
                  actually works better than my old toxic cleaners!"
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 bg-white rounded-lg shadow-md overflow-hidden p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <img src="/pic_1.png" alt="Moonrise Multi-Surface Cleaner Concentrate product details" className="rounded-lg w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-3 text-[#2C5F2D]">
                  One Bottle, Multiple Solutions
                </h3>
                <p className="text-gray-700 mb-4">
                  Our professional-strength formula replaces 15 single-use
                  bottles while leaving zero streaks and residue. Free from VOCs
                  and EDCs, Moonrise is the smart choice for health-conscious
                  families.
                </p>
                <p className="text-gray-700">
                  Each 32 fl oz bottle makes 3 gallons of powerful cleaning
                  solution that works on all surfaces in your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};