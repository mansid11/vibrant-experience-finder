
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Calendar, MapPin, Clock, Users, ChevronDown, 
  Heart, Share, Star, ChevronRight, Calendar as CalendarIcon 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const EventDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  // Mock data - would come from API in real app
  const event = {
    id: id || 'featured',
    title: 'EDM Night with DJ ALAN',
    date: 'Sat, 15 Oct 2023',
    time: '9:00 PM - 2:00 AM',
    location: 'Skyline Arena, New York',
    price: '$45',
    description: 'Experience the ultimate electronic dance music night featuring the world-renowned DJ ALAN. Get ready for an unforgettable night filled with heart-pounding beats, incredible light shows, and an atmosphere of pure energy. DJ ALAN is known for his unique blend of house, trance, and techno music that creates an immersive experience like no other.\n\nThis event will feature state-of-the-art sound systems, stunning visual effects, and a dance floor designed for the ultimate clubbing experience. Whether you\'re a dedicated EDM fan or just looking for an exciting night out, this is the event you don\'t want to miss.\n\nFood and drinks will be available for purchase. Please note that this is an 18+ event, and valid ID will be required for entry.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Music',
    rating: 4.8,
    attendees: 1200,
    maxAttendees: 2000,
    organizer: {
      name: 'Skyline Events',
      image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      verified: true
    },
    ticketTiers: [
      { name: 'General Admission', price: '$45', available: true },
      { name: 'VIP Access', price: '$120', available: true },
      { name: 'Premium Experience', price: '$250', available: false }
    ],
    friends: [
      { name: 'Alex', image: 'https://i.pravatar.cc/150?img=1' },
      { name: 'Taylor', image: 'https://i.pravatar.cc/150?img=2' },
      { name: 'Jordan', image: 'https://i.pravatar.cc/150?img=3' }
    ],
    reviews: [
      { author: 'Jamie', rating: 5, text: 'Absolutely incredible event! The music was amazing and the crowd was so energetic!', image: 'https://i.pravatar.cc/150?img=4' },
      { author: 'Cameron', rating: 4, text: 'Really enjoyed the show. The light effects were spectacular.', image: 'https://i.pravatar.cc/150?img=5' }
    ]
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden parallax-container">
        <div 
          className="parallax-bg h-full w-full"
          style={{
            backgroundImage: `url(${event.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `scale(1.1) translateY(${scrollY * 0.4}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tufan-dark via-tufan-dark/60 to-transparent"></div>
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 z-10">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-black/40 backdrop-blur-md hover:bg-black/60 text-white rounded-full"
            onClick={() => window.history.back()}
          >
            <ChevronRight className="h-5 w-5 rotate-180" />
          </Button>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <Button 
            variant="ghost" 
            size="icon" 
            className={`bg-black/40 backdrop-blur-md hover:bg-black/60 text-white rounded-full ${isLiked ? 'text-red-500' : ''}`}
            onClick={toggleLike}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500' : ''}`} />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-black/40 backdrop-blur-md hover:bg-black/60 text-white rounded-full"
          >
            <Share className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Category */}
        <div className="absolute bottom-32 left-6 z-10">
          <Badge className="bg-tufan-purple/90 hover:bg-tufan-purple text-white border-none text-sm px-3 py-1">
            {event.category}
          </Badge>
        </div>
        
        {/* Title */}
        <div className="absolute bottom-6 left-0 right-0 px-6 z-10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 animate-slide-up">
            {event.title}
          </h1>
          
          <div className="flex items-center gap-2 text-white/90">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">{event.rating.toFixed(1)}</span>
            <span className="text-white/60">({event.reviews.length} reviews)</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Info Section */}
            <div className="bg-tufan-card rounded-2xl p-6 shadow-md animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-tufan-purple mr-3" />
                  <div>
                    <div className="text-sm text-white/60">Date</div>
                    <div className="font-medium">{event.date}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-tufan-purple mr-3" />
                  <div>
                    <div className="text-sm text-white/60">Time</div>
                    <div className="font-medium">{event.time}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-tufan-purple mr-3" />
                  <div>
                    <div className="text-sm text-white/60">Location</div>
                    <div className="font-medium">{event.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-tufan-purple mr-3" />
                  <div>
                    <div className="text-sm text-white/60">Attendees</div>
                    <div className="font-medium">{event.attendees} / {event.maxAttendees}</div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <Button variant="outline" className="gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  Add to Calendar
                </Button>
                
                <Button variant="outline" className="gap-2">
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </Button>
              </div>
            </div>
            
            {/* Description Section */}
            <div className="bg-tufan-card rounded-2xl p-6 shadow-md animate-fade-in">
              <h2 className="text-xl font-display font-bold mb-4">About this event</h2>
              
              <div className={`relative ${!showFullDescription && 'max-h-40 overflow-hidden'}`}>
                {event.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-white/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                
                {!showFullDescription && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-tufan-card to-transparent"></div>
                )}
              </div>
              
              <Button 
                variant="ghost" 
                className="mt-2 w-full text-tufan-purple"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? 'Show Less' : 'Read More'} 
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showFullDescription ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            
            {/* Organizer Section */}
            <div className="bg-tufan-card rounded-2xl p-6 shadow-md animate-fade-in">
              <h2 className="text-xl font-display font-bold mb-4">Event Organizer</h2>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={event.organizer.image} />
                  <AvatarFallback>{event.organizer.name[0]}</AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium">{event.organizer.name}</h3>
                    {event.organizer.verified && (
                      <Badge className="ml-2 bg-blue-500/90 text-white border-none">Verified</Badge>
                    )}
                  </div>
                  <p className="text-white/60 text-sm">Event Organizer</p>
                </div>
              </div>
            </div>
            
            {/* Reviews Section */}
            <div className="bg-tufan-card rounded-2xl p-6 shadow-md animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-display font-bold">Reviews</h2>
                <Button variant="ghost" className="text-tufan-purple text-sm">
                  View All ({event.reviews.length})
                </Button>
              </div>
              
              <div className="space-y-6">
                {event.reviews.map((review, index) => (
                  <div key={index} className="border-b border-tufan-gray pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={review.image} />
                          <AvatarFallback>{review.author[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{review.author}</div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/80">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Booking Information */}
          <div className="space-y-8">
            {/* Ticket Selection */}
            <div className="bg-tufan-card rounded-2xl p-6 shadow-md sticky top-24 animate-fade-in">
              <h2 className="text-xl font-display font-bold mb-4">Get Tickets</h2>
              
              <div className="space-y-4 mb-6">
                {event.ticketTiers.map((tier, index) => (
                  <div 
                    key={index} 
                    className={`border border-tufan-gray rounded-xl p-4 transition-all ${
                      tier.available 
                        ? 'hover:border-tufan-purple cursor-pointer' 
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{tier.name}</h3>
                        <p className="text-white/60 text-sm">{tier.available ? 'Available' : 'Sold Out'}</p>
                      </div>
                      <div className="font-bold text-lg">{tier.price}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-tufan-purple hover:bg-tufan-purple/90 text-white py-6 text-lg">
                Book Now
              </Button>
            </div>
            
            {/* Friends Attending */}
            <div className="bg-tufan-card rounded-2xl p-6 shadow-md animate-fade-in">
              <h2 className="text-xl font-display font-bold mb-4">Friends Attending</h2>
              
              <div className="flex flex-col gap-4">
                {event.friends.map((friend, index) => (
                  <div key={index} className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={friend.image} />
                      <AvatarFallback>{friend.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="font-medium">{friend.name}</div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-2">
                  Invite Friends
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
