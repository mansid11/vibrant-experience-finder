
import React, { useState } from 'react';
import { 
  Settings, Bookmark, Ticket, Wallet, CalendarCheck, 
  User, Award, Star, Heart, Bell, LogOut, ChevronRight,
  Calendar, MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Mock user data - would come from API/state in real app
  const user = {
    name: 'Alex Johnson',
    username: '@alexj',
    image: 'https://i.pravatar.cc/300',
    bio: 'Music lover, concert enthusiast, and adventure seeker 🎵✨',
    level: 'Gold Member',
    points: 2300,
    nextLevel: 3000,
    badges: [
      { name: 'Early Bird', icon: '🌅', description: 'Purchased 5 early bird tickets' },
      { name: 'VIP', icon: '👑', description: 'Attended 3 VIP events' },
      { name: 'Festival Pro', icon: '🎪', description: 'Attended 5 festivals' },
    ],
    upcomingEvents: [
      {
        id: 'e1',
        title: 'EDM Night with DJ ALAN',
        date: 'Sat, 15 Oct 2025',
        image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
        location: 'Skyline Arena, New York'
      },
      {
        id: 'e2',
        title: 'Tech Conference 2025',
        date: 'Wed, 22 Oct 2025',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
        location: 'Convention Center, Boston'
      }
    ],
    pastEvents: [
      {
        id: 'e3',
        title: 'Summer Music Festival',
        date: '12 Jul 2025',
        image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800',
        location: 'Central Park, New York'
      },
      {
        id: 'e4',
        title: 'Comedy Night Special',
        date: '30 Jun 2025',
        image: 'https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=800',
        location: 'The Comedy Club, Chicago'
      },
      {
        id: 'e5',
        title: 'Basketball Finals 2025',
        date: '15 May 2025',
        image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800',
        location: 'Sports Arena, Miami'
      }
    ],
    savedEvents: [
      {
        id: 'e6',
        title: 'Classical Music Night',
        date: '05 Nov 2025',
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800',
        location: 'Symphony Hall, Boston'
      },
      {
        id: 'e7',
        title: 'Street Art Festival',
        date: '19 Nov 2025',
        image: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=800',
        location: 'Downtown, Los Angeles'
      }
    ]
  };
  
  return (
    <div className="min-h-screen pb-20">
      {/* Profile Header */}
      <div className="bg-gradient-to-b from-tufan-purple/30 to-transparent pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col items-center md:flex-row md:items-center mb-6 md:mb-0">
              <Avatar className="h-24 w-24 border-4 border-tufan-purple shadow-xl">
                <AvatarImage src={user.image} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start">
                  <h1 className="text-2xl font-display font-bold">{user.name}</h1>
                  <Badge className="ml-2 bg-tufan-purple/90 text-white border-none">
                    {user.level}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{user.username}</p>
                <p className="mt-2 max-w-md">{user.bio}</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button className="bg-tufan-purple hover:bg-tufan-purple/90">
                Edit Profile
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Membership Progress */}
      <div className="container mx-auto px-4 py-6">
        <Card className="bg-tufan-card border-tufan-gray shadow-md">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium">Membership Progress</h3>
              <span className="text-sm text-muted-foreground">{user.points} / {user.nextLevel} points</span>
            </div>
            <Progress value={(user.points / user.nextLevel) * 100} className="h-2 bg-tufan-gray" />
            <div className="flex justify-between mt-2">
              <span className="text-sm">{user.level}</span>
              <span className="text-sm">Platinum</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Badges */}
      <div className="container mx-auto px-4 py-4">
        <h2 className="text-xl font-display font-bold mb-4 flex items-center">
          <Award className="h-5 w-5 mr-2 text-tufan-pink" />
          Your Badges
        </h2>
        
        <div className="grid grid-cols-3 gap-4">
          {user.badges.map((badge, index) => (
            <div 
              key={index} 
              className="bg-tufan-card border border-tufan-gray rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-2">{badge.icon}</div>
              <h3 className="font-medium">{badge.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Events Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="upcoming" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="upcoming" className="text-sm md:text-base">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="past" className="text-sm md:text-base">
              Past Events
            </TabsTrigger>
            <TabsTrigger value="saved" className="text-sm md:text-base">
              Saved
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="mt-0">
            <div className="space-y-4">
              {user.upcomingEvents.length > 0 ? (
                user.upcomingEvents.map((event) => (
                  <EventItem key={event.id} event={event} type="upcoming" />
                ))
              ) : (
                <EmptyState message="No upcoming events" />
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="past" className="mt-0">
            <div className="space-y-4">
              {user.pastEvents.length > 0 ? (
                user.pastEvents.map((event) => (
                  <EventItem key={event.id} event={event} type="past" />
                ))
              ) : (
                <EmptyState message="No past events" />
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="saved" className="mt-0">
            <div className="space-y-4">
              {user.savedEvents.length > 0 ? (
                user.savedEvents.map((event) => (
                  <EventItem key={event.id} event={event} type="saved" />
                ))
              ) : (
                <EmptyState message="No saved events" />
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Settings Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-display font-bold mb-4">Account Settings</h2>
        
        <Card className="bg-tufan-card border-tufan-gray shadow-md">
          <CardContent className="p-0">
            <SettingsItem icon={<User className="h-5 w-5" />} label="Edit Profile" />
            <SettingsItem icon={<Wallet className="h-5 w-5" />} label="Payment Methods" />
            <SettingsItem icon={<Bell className="h-5 w-5" />} label="Notifications" />
            <SettingsItem icon={<Heart className="h-5 w-5" />} label="Preferences" />
            <SettingsItem icon={<LogOut className="h-5 w-5" />} label="Logout" isLast />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

interface EventItemProps {
  event: {
    id: string;
    title: string;
    date: string;
    image: string;
    location: string;
  };
  type: 'upcoming' | 'past' | 'saved';
}

const EventItem: React.FC<EventItemProps> = ({ event, type }) => {
  return (
    <div className="bg-tufan-card border border-tufan-gray rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 h-40 md:h-auto">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        </div>
        
        <div className="p-4 md:w-3/4 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold text-lg">{event.title}</h3>
            <div className="flex items-center text-muted-foreground mt-1">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{event.date}</span>
            </div>
            <div className="flex items-center text-muted-foreground mt-1">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">{event.location}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            {type === 'upcoming' && (
              <>
                <Button variant="outline" size="sm">
                  View Ticket
                </Button>
                <Button className="bg-tufan-purple hover:bg-tufan-purple/90" size="sm">
                  Share
                </Button>
              </>
            )}
            
            {type === 'past' && (
              <>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button className="bg-tufan-purple hover:bg-tufan-purple/90" size="sm">
                  Rate Event
                </Button>
              </>
            )}
            
            {type === 'saved' && (
              <>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button className="bg-tufan-purple hover:bg-tufan-purple/90" size="sm">
                  Book Now
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const EmptyState = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <Ticket className="h-16 w-16 text-muted-foreground mb-4" />
      <h3 className="text-xl font-medium mb-2">{message}</h3>
      <p className="text-muted-foreground max-w-md">
        Explore events and add them to your collection!
      </p>
      <Button className="mt-6 bg-tufan-purple hover:bg-tufan-purple/90">
        Discover Events
      </Button>
    </div>
  );
};

interface SettingsItemProps {
  icon: React.ReactNode;
  label: string;
  isLast?: boolean;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ icon, label, isLast = false }) => {
  return (
    <>
      <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-tufan-gray/10 transition-colors">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-tufan-gray/20 flex items-center justify-center mr-4">
            {icon}
          </div>
          <span className="font-medium">{label}</span>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </div>
      {!isLast && <Separator className="bg-tufan-gray/20" />}
    </>
  );
};

export default UserProfile;
