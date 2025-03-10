
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Bell, Search, Menu, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-tufan-dark/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-display font-extrabold bg-gradient-to-r from-tufan-purple via-tufan-pink to-tufan-green bg-clip-text text-transparent">
            TufanTicket
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium hover:text-tufan-purple transition-colors">
            Discover
          </Link>
          <Link to="/events" className="font-medium hover:text-tufan-purple transition-colors">
            Events
          </Link>
          <Link to="/categories" className="font-medium hover:text-tufan-purple transition-colors">
            Categories
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <Link to="/profile">
            <Avatar className="h-9 w-9 border-2 border-tufan-purple hover:border-tufan-green transition-colors cursor-pointer">
              <AvatarImage src="https://i.pravatar.cc/300" />
              <AvatarFallback className="bg-tufan-purple text-white">US</AvatarFallback>
            </Avatar>
          </Link>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-tufan-dark border-tufan-gray">
              <div className="flex flex-col gap-6 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-tufan-purple transition-colors">
                  Discover
                </Link>
                <Link to="/events" className="text-lg font-medium hover:text-tufan-purple transition-colors">
                  Events
                </Link>
                <Link to="/categories" className="text-lg font-medium hover:text-tufan-purple transition-colors">
                  Categories
                </Link>
                <Link to="/search" className="text-lg font-medium hover:text-tufan-purple transition-colors">
                  Search
                </Link>
                <Link to="/notifications" className="text-lg font-medium hover:text-tufan-purple transition-colors">
                  Notifications
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
