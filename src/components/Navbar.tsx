import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#FEB90B]/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="w-8 h-8 text-[#FEB90B]" />
            <span className="text-xl font-bold gradient-text">Startup Sphere</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-[#FEB90B]' : ''}`}>
              Home
            </Link>
            <Link to="/team" className={`nav-link ${location.pathname === '/team' ? 'text-[#FEB90B]' : ''}`}>
              Team
            </Link>
            <Link to="/events" className={`nav-link ${location.pathname === '/events' ? 'text-[#FEB90B]' : ''}`}>
              Events
            </Link>
            <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'text-[#FEB90B]' : ''}`}>
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;