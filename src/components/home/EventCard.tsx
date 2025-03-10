
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface EventProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  isFeatured?: boolean;
  isRecommended?: boolean;
}

const EventCard: React.FC<EventProps> = ({
  id,
  title,
  date,
  time,
  location,
  price,
  image,
  category,
  rating,
  isFeatured,
  isRecommended
}) => {
  const [isLiked, setIsLiked] = React.useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Link to={`/event/${id}`}>
      <div className="event-card h-[480px] mb-6 animate-fade-in">
        <div className="relative h-full w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          {/* Category Badge */}
          <Badge 
            className="absolute top-4 left-4 bg-tufan-purple/90 hover:bg-tufan-purple text-white border-none"
          >
            {category}
          </Badge>
          
          {/* Recommendation Badge */}
          {isRecommended && (
            <Badge 
              className="absolute top-4 right-14 bg-tufan-green/90 hover:bg-tufan-green text-black border-none flex items-center gap-1"
            >
              <Star className="h-3 w-3 fill-black" />
              Recommended
            </Badge>
          )}
          
          {/* Like Button */}
          <Button 
            size="icon" 
            variant="ghost" 
            className={`absolute top-3 right-3 rounded-full ${isLiked ? 'text-red-500' : 'text-white'}`}
            onClick={toggleLike}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500' : ''}`} />
          </Button>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-display font-bold text-white mb-2 line-clamp-2">
              {title}
            </h3>
            
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center text-gray-200">
                <Calendar className="h-4 w-4 mr-2 text-tufan-pink" />
                <span className="text-sm">{date}</span>
                
                <Clock className="h-4 w-4 ml-4 mr-2 text-tufan-pink" />
                <span className="text-sm">{time}</span>
              </div>
              
              <div className="flex items-center text-gray-200">
                <MapPin className="h-4 w-4 mr-2 text-tufan-pink" />
                <span className="text-sm">{location}</span>
              </div>
              
              <div className="flex items-center text-gray-200">
                <Star className="h-4 w-4 mr-2 text-yellow-400 fill-yellow-400" />
                <span className="text-sm">{rating.toFixed(1)}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-white font-bold">
                {price === 'Free' ? 'Free' : `From ${price}`}
              </span>
              
              <Button className="bg-tufan-purple hover:bg-tufan-purple/90 text-white font-medium">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
