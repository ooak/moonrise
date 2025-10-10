import React from 'react';
import { FlaskRound, Droplets, Sparkles } from 'lucide-react';
export const HowItWorks = () => {
  const steps = [{
    icon: <FlaskRound size={36} className="text-[#D4A574]" />,
    title: 'Measure',
    description: 'Add the recommended amount of Moonrise concentrate to your reusable spray bottle (dilution guide included).'
  }, {
    icon: <Droplets size={36} className="text-[#D4A574]" />,
    title: 'Mix',
    description: "Fill with water, shake gently, and you're ready to clean. Takes 30 seconds."
  }, {
    icon: <Sparkles size={36} className="text-[#D4A574]" />,
    title: 'Clean Without Worry',
    description: 'Spray, wipe, breathe normally. No need to evacuate your home, open windows, or worry about your children being in the room.'
  }];
  return <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center text-[#333333]">
          How It Works
        </h2>
        <p className="text-center mb-10 text-gray-600">
          Simple. Effective. Safe.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-[#333333]">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};