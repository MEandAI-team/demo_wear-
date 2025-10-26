import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  onShopNow: () => void;
}

export const Hero = ({ onShopNow }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Refined Style.',
      subtitle: 'Redefined Confidence.',
      description: 'Discover premium menswear that elevates your everyday',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'New Season.',
      subtitle: 'New Standards.',
      description: 'Explore our latest collection of contemporary essentials',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'Timeless.',
      subtitle: 'Modern.',
      description: 'Where classic meets contemporary design',
      image: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 5000ms ease-out'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tighter">
              {slides[currentSlide].title}
              <br />
              <span className="text-white/80">{slides[currentSlide].subtitle}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-light">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onShopNow}
              className="group px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Shop New Arrivals
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Explore Collections
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};
