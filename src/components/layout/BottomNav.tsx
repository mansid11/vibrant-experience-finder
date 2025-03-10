
import { Link, useLocation } from 'react-router-dom';
import { Home, CalendarDays, Compass, User, Search } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-tufan-card/80 backdrop-blur-md border-t border-tufan-gray shadow-lg md:hidden">
      <div className="flex items-center justify-around p-3">
        <NavItem to="/" label="Home" icon={<Home />} isActive={path === '/'} />
        <NavItem to="/events" label="Events" icon={<CalendarDays />} isActive={path === '/events'} />
        <NavItem to="/search" label="Search" icon={<Search />} isActive={path === '/search'} />
        <NavItem to="/explore" label="Explore" icon={<Compass />} isActive={path === '/explore'} />
        <NavItem to="/profile" label="Profile" icon={<User />} isActive={path === '/profile'} />
      </div>
    </div>
  );
};

const NavItem = ({ 
  to, 
  label, 
  icon, 
  isActive 
}: { 
  to: string; 
  label: string; 
  icon: React.ReactNode; 
  isActive: boolean 
}) => {
  return (
    <Link to={to} className="flex flex-col items-center">
      <div 
        className={`p-1.5 rounded-full transition-all ${
          isActive 
            ? 'text-white bg-gradient-to-r from-tufan-purple to-tufan-pink' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <div className="w-5 h-5">{icon}</div>
      </div>
      <span className={`text-xs mt-1 ${isActive ? 'font-medium' : 'font-normal'}`}>
        {label}
      </span>
    </Link>
  );
};

export default BottomNav;
