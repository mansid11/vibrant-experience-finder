
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const slides = [
    {
      title: "EDM Night with DJ ALAN",
      subtitle: "Experience the beats that move the world",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Music"
    },
    {
      title: "Basketball Finals 2025",
      subtitle: "Watch the champions battle it out",
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "Sports"
    },
    {
      title: "Broadway: Hamilton",
      subtitle: "The musical that changed theater forever",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      category: "Theater"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <div className="relative h-[80vh] md:h-[85vh] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tufan-dark via-tufan-dark/70 to-transparent"></div>
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative h-full flex flex-col justify-center items-start">
        <div className="w-full md:max-w-2xl">
          <span className="inline-block bg-tufan-purple text-white px-3 py-1 rounded-full text-sm font-bold mb-4 animate-fade-in">
            {slides[currentSlide].category}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-3 animate-slide-up">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 animate-slide-up">
            {slides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              className="bg-tufan-purple hover:bg-tufan-purple/90 text-white font-medium text-lg px-8 py-6"
              onClick={() => navigate('/event/featured')}
            >
              Book Now
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6"
              onClick={() => navigate('/events')}
            >
              Explore Events
            </Button>
          </div>
        </div>
        
        {/* Search Bar - Desktop */}
        <div className="hidden md:flex absolute bottom-12 left-0 right-0 mx-4 md:mx-auto md:max-w-2xl bg-tufan-card/90 backdrop-blur-md border border-tufan-gray rounded-full overflow-hidden animate-slide-up shadow-lg">
          <input 
            type="text" 
            placeholder="Search events, artists or venues..." 
            className="flex-1 bg-transparent py-4 px-6 text-white focus:outline-none"
          />
          <Button className="bg-tufan-purple hover:bg-tufan-purple/90 rounded-full px-6 m-1">
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>
        
        {/* Trending Tags */}
        <div className="hidden md:flex absolute bottom-32 left-0 right-0 mx-4 md:mx-auto md:max-w-2xl items-center gap-2 animate-fade-in">
          <span className="flex items-center text-tufan-pink font-medium">
            <TrendingUp className="h-4 w-4 mr-1" />
            Trending:
          </span>
          {['Music Festival', 'Comedy Night', 'Tech Conference', 'Art Exhibition'].map((tag, i) => (
            <span 
              key={i} 
              className="bg-tufan-gray/50 hover:bg-tufan-gray text-white px-3 py-1 rounded-full text-sm cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 right-8 md:bottom-16 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-tufan-purple w-8' 
                : 'bg-gray-500 hover:bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
