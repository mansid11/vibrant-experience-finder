
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import BottomNav from '@/components/layout/BottomNav';
import { Heading } from '@/components/ui/heading';
import { Grid, Tag, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import EventCard, { EventProps } from '@/components/home/EventCard';

interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
  color: string;
  eventCount: number;
}

const CategoriesPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  // Mock data for categories
  const categories: Category[] = [
    {
      id: 'music',
      name: 'Music',
      icon: '🎵',
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      color: 'from-purple-500/90 to-indigo-600/90',
      eventCount: 125
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: '⚽',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      color: 'from-blue-500/90 to-cyan-600/90',
      eventCount: 87
    },
    {
      id: 'theater',
      name: 'Theater',
      icon: '🎭',
      image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      color: 'from-red-500/90 to-rose-600/90',
      eventCount: 43
    },
    {
      id: 'comedy',
      name: 'Comedy',
      icon: '😂',
      image: 'https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      color: 'from-amber-500/90 to-yellow-600/90',
      eventCount: 56
    },
    {
      id: 'conferences',
      name: 'Conferences',
      icon: '🎤',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      color: 'from-emerald-500/90 to-teal-600/90',
      eventCount: 32
    },
    {
      id: 'exhibitions',
      name: 'Exhibitions',
      icon: '🖼️',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      color: 'from-pink-500/90 to-fuchsia-600/90',
      eventCount: 28
    },
    {
      id: 'workshops',
      name: 'Workshops',
      icon: '🛠️',
      image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      color: 'from-orange-500/90 to-red-600/90',
      eventCount: 41
    },
    {
      id: 'festivals',
      name: 'Festivals',
      icon: '🎪',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      color: 'from-violet-500/90 to-purple-600/90',
      eventCount: 52
    }
  ];

  // Mock data for events
  const events: EventProps[] = [
    {
      id: 'event1',
      title: 'EDM Night with DJ ALAN',
      date: 'Sat, 15 Oct 2025',
      time: '9:00 PM - 2:00 AM',
      location: 'Skyline Arena, New York',
      price: '$45',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Music',
      rating: 4.8,
    },
    {
      id: 'event2',
      title: 'Tech Conference 2025',
      date: 'Wed, 22 Oct 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Convention Center, Boston',
      price: '$120',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Conference',
      rating: 4.5
    },
    {
      id: 'event3',
      title: 'Basketball Finals 2025',
      date: 'Sat, 28 Oct 2025',
      time: '7:00 PM - 10:00 PM',
      location: 'Sports Arena, Miami',
      price: '$35',
      image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      category: 'Sports',
      rating: 4.7
    },
  ];

  const filteredCategories = categories.filter(
    category => category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-24">
        <Heading 
          title="Categories" 
          description="Explore events by your interests"
          icon={<Grid className="h-5 w-5 text-tufan-green" />}
          className="mb-8"
        />
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search categories..."
            className="pl-10 bg-tufan-dark border-tufan-gray"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {filteredCategories.map((category) => (
            <div 
              key={category.id}
              className={`relative h-44 rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 cursor-pointer ${selectedCategory === category.id ? 'ring-2 ring-tufan-purple ring-offset-2 ring-offset-tufan-dark' : ''}`}
              onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color}`}></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                <span className="text-3xl mb-2">{category.icon}</span>
                <h3 className="font-display font-bold text-xl">{category.name}</h3>
                <p className="text-sm mt-1 opacity-80">{category.eventCount} events</p>
              </div>
            </div>
          ))}
        </div>
        
        {selectedCategory && (
          <>
            <div className="flex items-center justify-between mb-6">
              <Heading 
                title={`${categories.find(c => c.id === selectedCategory)?.name} Events`}
                description="Popular events in this category"
                icon={<Tag className="h-5 w-5 text-tufan-pink" />}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map(event => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </>
        )}
      </main>
      <BottomNav />
    </div>
  );
};

export default CategoriesPage;
