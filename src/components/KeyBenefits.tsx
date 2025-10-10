import React from 'react';
import { FlaskConical, Wind, Dumbbell, Leaf } from 'lucide-react';
export const KeyBenefits = () => {
  const benefits = [{
    icon: <FlaskConical size={36} className="text-[#2C5F2D]" />,
    title: 'Cleans Surfaces, Not Your Air',
    description: 'Our formula works only where you spray it—on counters, tile, and grime. Unlike traditional cleaners that release chemicals into the air you breathe, ours stays put and gets to work on contact.'
  }, {
    icon: <Dumbbell size={36} className="text-[#2C5F2D]" />,
    title: 'Cuts Through Anything (Even in Hard Water)',
    description: 'Tough on grease, mold, soap scum, and stains. Our professional-strength formula works beautifully no matter how hard your water is—no residue, no streaks, just clean.'
  }, {
    icon: <Wind size={36} className="text-[#2C5F2D]" />,
    title: 'Breathe Easy While You Clean',
    description: "Lab-tested to release zero harmful fumes, while conventional cleaners emit over 800 times more air pollutants. Your home's air actually stays cleaner when you clean."
  }, {
    icon: <Leaf size={36} className="text-[#2C5F2D]" />,
    title: 'Safe for Your Family, Tough on Dirt',
    description: 'No fake fragrances, irritating essential oils, or hormone disruptors. Just powerful, biodegradable cleaning ingredients that are safe for humans and the planet.'
  }];
  return <section className="py-12 container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#333333]">
        Key Benefits
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">{benefit.icon}</div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#333333]">
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          </div>)}
      </div>
    </section>;
};