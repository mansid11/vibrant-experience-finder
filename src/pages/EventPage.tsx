
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import BottomNav from '@/components/layout/BottomNav';
import EventDetail from '@/components/event/EventDetail';

const EventPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <EventDetail />
      <BottomNav />
    </div>
  );
};

export default EventPage;
