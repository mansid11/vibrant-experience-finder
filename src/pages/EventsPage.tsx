
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import BottomNav from '@/components/layout/BottomNav';
import { Heading } from '@/components/ui/heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Sparkles, Clock, MapPin } from 'lucide-react';
import EventCard, { EventProps } from '@/components/home/EventCard';

const EventsPage = () => {
  // Mock data for events
  const allEvents: EventProps[] = [
    {
      id: 'event1',
      title: 'EDM Night with DJ ALAN',
      date: 'Sat, 15 Oct 2023',
      time: '9:00 PM - 2:00 AM',
      location: 'Skyline Arena, New York',
      price: '$45',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Music',
      rating: 4.8,
      isFeatured: true
    },
    {
      id: 'event2',
      title: 'Tech Conference 2023',
      date: 'Wed, 22 Oct 2023',
      time: '9:00 AM - 6:00 PM',
      location: 'Convention Center, Boston',
      price: '$120',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Conference',
      rating: 4.5
    },
    {
      id: 'event3',
      title: 'Basketball Finals 2023',
      date: 'Sat, 28 Oct 2023',
      time: '7:00 PM - 10:00 PM',
      location: 'Sports Arena, Miami',
      price: '$35',
      image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      category: 'Sports',
      rating: 4.7
    },
    {
      id: 'event4',
      title: 'Comedy Night Special',
      date: 'Fri, 20 Oct 2023',
      time: '8:00 PM - 11:00 PM',
      location: 'The Comedy Club, Chicago',
      price: '$25',
      image: 'https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      category: 'Comedy',
      rating: 4.6
    },
    {
      id: 'event5',
      title: 'Broadway: Hamilton',
      date: 'Sun, 29 Oct 2023',
      time: '3:00 PM - 6:00 PM',
      location: 'Theater District, New York',
      price: '$80',
      image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      category: 'Theater',
      rating: 4.9
    },
    {
      id: 'event6',
      title: 'Summer Music Festival',
      date: 'Sat, 4 Nov 2023',
      time: '12:00 PM - 10:00 PM',
      location: 'Central Park, New York',
      price: '$65',
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Music',
      rating: 4.5
    }
  ];

  const upcomingEvents = allEvents.slice(0, 3);
  const todayEvents = allEvents.slice(2, 5);
  const weekendEvents = allEvents.slice(3, 6);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-24">
        <Heading 
          title="Explore Events" 
          description="Discover amazing events happening around you"
          icon={<Calendar className="h-5 w-5 text-tufan-purple" />}
          className="mb-8"
        />

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6 w-full sm:w-auto bg-tufan-dark border border-tufan-gray">
            <TabsTrigger value="all" className="data-[state=active]:bg-tufan-purple data-[state=active]:text-white">
              All Events
            </TabsTrigger>
            <TabsTrigger value="today" className="data-[state=active]:bg-tufan-purple data-[state=active]:text-white">
              Today
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-tufan-purple data-[state=active]:text-white">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="weekend" className="data-[state=active]:bg-tufan-purple data-[state=active]:text-white">
              Weekend
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allEvents.map(event => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="today" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {todayEvents.map(event => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="weekend" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {weekendEvents.map(event => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <BottomNav />
    </div>
  );
};

export default EventsPage;
