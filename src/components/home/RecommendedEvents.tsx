
import React from 'react';
import EventCard, { EventProps } from './EventCard';
import { Heading } from '@/components/ui/heading';
import { Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RecommendedEventsProps {
  events: EventProps[];
}

const RecommendedEvents: React.FC<RecommendedEventsProps> = ({ events }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <Heading
            title="Recommended For You"
            description="Based on your preferences"
            icon={<Sparkles className="h-5 w-5 text-tufan-pink" />}
          />
          
          <Button variant="ghost" className="text-tufan-pink hover:text-tufan-pink/90 gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} isRecommended />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedEvents;
