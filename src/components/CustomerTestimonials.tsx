import React from 'react';
import { Star } from 'lucide-react';
export const CustomerTestimonials = () => {
  const testimonials = [{
    quote: "My uncle's house hadn't been cleaned in 20 years—heavy smoking had left the walls covered in nicotine and grime. I tried three other cleaners with zero success, but within seconds of spraying this, I could see the nicotine literally pulling off the walls.",
    author: 'Sarah M.'
  }, {
    quote: "As someone with severe chemical sensitivity, I used to have to wear a mask just to clean my kitchen. With Moonrise, I don't need any protective equipment. It's been life-changing for our family.",
    author: 'Jennifer K.'
  }, {
    quote: "My husband works on cars and our garage floor had years of oil stains that nothing would touch. I diluted this 50/50 and those black stains came right up without scrubbing for an hour. I couldn't believe something this powerful is safe enough to get on your hands.",
    author: 'Rebecca S.'
  }];
  return <section className="py-12 bg-[#2C5F2D] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Customer Reactions
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4A574" color="#D4A574" />)}
              </div>
              <p className="italic mb-4">{testimonial.quote}</p>
              <p className="font-bold">— {testimonial.author}</p>
            </div>)}
        </div>
      </div>
    </section>;
};