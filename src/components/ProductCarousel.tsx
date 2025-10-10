import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface ProductCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}
export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  images
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return <div className="relative w-full h-full">
      <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center overflow-hidden rounded-lg p-2">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="w-auto h-auto max-w-full max-h-full object-contain" />
        {/* Left Arrow */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 cursor-pointer shadow-md z-10" onClick={goToPrevious}>
          <ChevronLeft size={24} className="text-[#2C5F2D]" />
        </div>
        {/* Right Arrow */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 cursor-pointer shadow-md z-10" onClick={goToNext}>
          <ChevronRight size={24} className="text-[#2C5F2D]" />
        </div>
      </div>
      {/* Dots/Indicators */}
      <div className="flex justify-center mt-4">
        {images.map((_, slideIndex) => <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${slideIndex === currentIndex ? 'bg-[#2C5F2D]' : 'bg-gray-300'}`} />)}
      </div>
    </div>;
};